import { describe, it, expect } from 'vitest';
import { calculateQuote, formatCurrency } from './quoteCalculator';
import { encodeQuoteToHash, decodeQuoteFromHash, generateQuoteWhatsAppUrl } from './quoteEncoder';
import { EQUIPMENT_CATALOG, LABOR_RATES, DEFAULT_PRESET, PRESETS } from '../data/quoteConfig';
import type { CalculationInput } from './quoteCalculator';

describe('calculateQuote engine', () => {
  const baseInput: CalculationInput = {
    client: {
      name: 'Michael & Sarah',
      eventDate: '2026-10-24',
      venueName: 'Dalton Estate Winery',
      locationZone: 'upper_galilee',
    },
    language: 'ru',
    items: EQUIPMENT_CATALOG.map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      unitPrice: item.dailyRentalPrice,
      quantity: item.defaultQty,
    })),
    daysCount: 1,
    djPerformanceHours: 3.5,
    djRatePerHour: LABOR_RATES.djPerHour, // 400
    preprodHours: 5.0,
    preprodRatePerHour: LABOR_RATES.preprodPerHour, // 150
    setupTeardownFee: 500,
    logisticsFee: 150,
    discount: {
      type: 'fixed',
      value: 0,
    },
    applyVat: false,
  };

  it('calculates the exact equipment catalog total of 2,200 ₪ for 1 day (core console & stand included at 0 ₪)', () => {
    const quote = calculateQuote(baseInput);
    // Total catalog rental excluding denon_prime (0) and udg_stand (0) is 2,200 ₪
    expect(quote.equipment.subtotal).toBe(2200);
    expect(quote.equipment.items.length).toBe(16);
  });

  it('applies the 1.6x weekend multiplier for 2 days rental', () => {
    const weekendInput: CalculationInput = {
      ...baseInput,
      daysCount: 2,
    };
    const quote = calculateQuote(weekendInput);
    // 2200 * 1.6 = 3520
    expect(quote.equipment.daysMultiplier).toBe(1.6);
    expect(quote.equipment.subtotal).toBe(3520);
  });

  it('calculates labor and services accurately', () => {
    const quote = calculateQuote(baseInput);
    // DJ: 3.5 * 400 = 1400
    // Preprod: 5.0 * 150 = 750
    // Setup: 500
    // Logistics: 150
    // Total services = 2800
    expect(quote.services.subtotal).toBe(2800);
    // Gross = 2200 + 2800 = 5000
    expect(quote.financials.grossTotal).toBe(5000);
    expect(quote.financials.netTotal).toBe(5000);
    expect(quote.financials.grandTotal).toBe(5000);
  });

  it('applies percentage discount strictly before VAT', () => {
    const inputWithDiscount: CalculationInput = {
      ...baseInput,
      discount: {
        type: 'percentage',
        value: 10,
        reason: 'Early bird',
      },
      applyVat: true,
    };
    const quote = calculateQuote(inputWithDiscount);
    // Gross: 5000
    // Discount 10%: 500
    // Net: 4500
    // VAT 18%: 4500 * 0.18 = 810
    // Grand Total: 4500 + 810 = 5310
    expect(quote.financials.discount.amount).toBe(500);
    expect(quote.financials.netTotal).toBe(4500);
    expect(quote.financials.vatAmount).toBe(810);
    expect(quote.financials.grandTotal).toBe(5310);
  });

  it('applies fixed discount with proper clamping', () => {
    // Discount exceeding gross total should clamp to gross total
    const inputHighDiscount: CalculationInput = {
      ...baseInput,
      discount: {
        type: 'fixed',
        value: 999999,
      },
    };
    const quote = calculateQuote(inputHighDiscount);
    expect(quote.financials.discount.amount).toBe(5000);
    expect(quote.financials.netTotal).toBe(0);
    expect(quote.financials.grandTotal).toBe(0);

    // Negative discount should clamp to 0
    const inputNegDiscount: CalculationInput = {
      ...baseInput,
      discount: {
        type: 'fixed',
        value: -200,
      },
    };
    const quoteNeg = calculateQuote(inputNegDiscount);
    expect(quoteNeg.financials.discount.amount).toBe(0);
    expect(quoteNeg.financials.grandTotal).toBe(5000);
  });

  it('correctly toggles VAT 18%', () => {
    const inputWithoutVat: CalculationInput = { ...baseInput, applyVat: false };
    const quoteNoVat = calculateQuote(inputWithoutVat);
    expect(quoteNoVat.financials.vatAmount).toBe(0);
    expect(quoteNoVat.financials.grandTotal).toBe(quoteNoVat.financials.netTotal);

    const inputWithVat: CalculationInput = { ...baseInput, applyVat: true };
    const quoteVat = calculateQuote(inputWithVat);
    // 5000 * 0.18 = 900
    expect(quoteVat.financials.vatAmount).toBe(900);
    expect(quoteVat.financials.grandTotal).toBe(5000 + 900);
  });

  it('calculates the default "Sunset & Cocktail" preset with exact expected financials', () => {
    expect(DEFAULT_PRESET.id).toBe('sunset_cocktail');

    const items = DEFAULT_PRESET.equipmentItemIds.map((spec) => {
      const catItem = EQUIPMENT_CATALOG.find((c) => c.id === spec.id)!;
      return {
        id: catItem.id,
        name: catItem.name,
        category: catItem.category,
        unitPrice: catItem.dailyRentalPrice,
        quantity: spec.qty,
      };
    });

    const quote = calculateQuote({
      client: {
        name: 'Sunset Guest',
        eventDate: '2026-10-24',
        venueName: 'Dalton Estate Winery',
        locationZone: DEFAULT_PRESET.locationZone,
      },
      language: 'ru',
      items,
      daysCount: DEFAULT_PRESET.daysCount,
      djPerformanceHours: DEFAULT_PRESET.djHours,
      djRatePerHour: LABOR_RATES.djPerHour,
      preprodHours: DEFAULT_PRESET.preprodHours,
      preprodRatePerHour: LABOR_RATES.preprodPerHour,
      setupTeardownFee: DEFAULT_PRESET.setupFee,
      logisticsFee: 100, // 1 trip to upper_galilee @ 100 ₪
      discount: { type: 'fixed', value: 0 },
      applyVat: true,
    });

    // denon_prime (0) + udg_stand (0) + sound_column (650) + retro_center (180) + retro_side_round (2*80=160) = 990 ₪
    expect(quote.equipment.subtotal).toBe(990);
    // DJ: 2h * 400 = 800; Preprod: 1h * 150 = 150; Setup: 1h * 120 = 120; Logistics: 100 => 1,170 ₪
    expect(quote.services.subtotal).toBe(1170);
    // Gross: 990 + 1170 = 2,160 ₪
    expect(quote.financials.grossTotal).toBe(2160);
    expect(quote.financials.netTotal).toBe(2160);
    // VAT 18%: 2160 * 0.18 = 388.8 => Math.round = 389 ₪
    expect(quote.financials.vatAmount).toBe(389);
    // Grand total: 2160 + 389 = 2,549 ₪
    expect(quote.financials.grandTotal).toBe(2549);
  });
});

describe('quoteEncoder & URL hash compression', () => {
  it('losslessly encodes and decodes a QuoteSnapshot via LZ-String', () => {
    const input: CalculationInput = {
      client: {
        name: 'Aviv & Noa',
        eventDate: '2026-11-15',
        venueName: 'Kinneret Terraces Villa',
        locationZone: 'kinneret',
      },
      language: 'he',
      items: EQUIPMENT_CATALOG.slice(0, 5).map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        unitPrice: item.dailyRentalPrice,
        quantity: item.defaultQty,
      })),
      daysCount: 1,
      djPerformanceHours: 4.0,
      djRatePerHour: 400,
      preprodHours: 3.0,
      preprodRatePerHour: 150,
      setupTeardownFee: 400,
      logisticsFee: 180,
      discount: {
        type: 'fixed',
        value: 200,
        reason: 'חברים',
      },
      applyVat: true,
      notes: 'Sound check at 17:00, sunset ambient set',
    };

    const originalQuote = calculateQuote(input);
    const hash = encodeQuoteToHash(originalQuote);

    expect(hash.startsWith('q=')).toBe(true);
    // Compressed hash should be relatively compact
    expect(hash.length).toBeGreaterThan(20);

    const decoded = decodeQuoteFromHash(hash);
    expect(decoded).not.toBeNull();
    expect(decoded?.client.venueName).toBe('Kinneret Terraces Villa');
    expect(decoded?.financials.grandTotal).toBe(originalQuote.financials.grandTotal);
    expect(decoded?.financials.discount.reason).toBe('חברים');
    expect(decoded?.equipment.items.length).toBe(5);
  });

  it('returns null on corrupted or invalid hash', () => {
    expect(decodeQuoteFromHash('')).toBeNull();
    expect(decodeQuoteFromHash('q=invalid_random_string_12345')).toBeNull();
    expect(decodeQuoteFromHash('#invalid')).toBeNull();
  });

  it('generates a valid WhatsApp URL with encoded message', () => {
    const input: CalculationInput = {
      client: {
        name: 'Dima',
        venueName: 'Dalton Winery',
        locationZone: 'upper_galilee',
        eventDate: '2026-10-30',
      },
      language: 'he',
      items: [],
      daysCount: 1,
      djPerformanceHours: 3,
      djRatePerHour: 400,
      preprodHours: 0,
      preprodRatePerHour: 150,
      setupTeardownFee: 0,
      logisticsFee: 0,
      discount: { type: 'fixed', value: 0 },
      applyVat: false,
    };
    const quote = calculateQuote(input);
    const waUrl = generateQuoteWhatsAppUrl(quote, 'he');

    expect(waUrl.startsWith('https://wa.me/972546885244?text=')).toBe(true);
    // Text should contain venue and amount encoded
    expect(decodeURIComponent(waUrl)).toContain('Dalton Winery');
    expect(decodeURIComponent(waUrl)).toContain('1,200 ₪');
  });
});

describe('formatCurrency', () => {
  it('formats numbers with comma separators', () => {
    expect(formatCurrency(2950)).toBe('2,950');
    expect(formatCurrency(12000)).toBe('12,000');
    expect(formatCurrency(0)).toBe('0');
    expect(formatCurrency(450.4)).toBe('450');
  });
});
