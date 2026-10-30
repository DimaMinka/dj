import { describe, it, expect, vi } from 'vitest';
import { calculateQuote, formatCurrency } from './quoteCalculator';
import {
  encodeQuoteToHash,
  decodeQuoteFromHash,
  generateQuoteWhatsAppUrl,
  generateQuoteShortId,
  getShortQuoteUrl,
  getCanonicalQuoteString,
  loadQuoteFromKv,
} from './quoteEncoder';
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

  it('generates a WhatsApp URL with custom short URL appended when provided', () => {
    const quote = calculateQuote({
      client: {
        name: 'Dima',
        venueName: 'Dalton Winery',
        locationZone: 'upper_galilee',
        eventDate: '2026-10-30',
      },
      language: 'ru',
      items: [],
      daysCount: 1,
      djPerformanceHours: 2,
      djRatePerHour: 400,
      preprodHours: 0,
      preprodRatePerHour: 150,
      setupTeardownFee: 0,
      logisticsFee: 0,
      discount: { type: 'fixed', value: 0 },
      applyVat: false,
    });
    const waUrl = generateQuoteWhatsAppUrl(quote, 'ru', 'https://dj.dimaminka.com/ru/q/7xK9p2');
    const decoded = decodeURIComponent(waUrl);
    expect(decoded).toContain('https://dj.dimaminka.com/ru/q/7xK9p2');
  });

  it('generates deterministic 7-character Base62 short IDs', async () => {
    const input: CalculationInput = {
      client: {
        name: 'Aviv & Noa',
        eventDate: '2026-11-15',
        venueName: 'Kinneret Terraces Villa',
        locationZone: 'kinneret',
      },
      language: 'he',
      items: EQUIPMENT_CATALOG.slice(0, 3).map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        unitPrice: item.dailyRentalPrice,
        quantity: item.defaultQty,
      })),
      daysCount: 1,
      djPerformanceHours: 4.0,
      djRatePerHour: 400,
      preprodHours: 2.0,
      preprodRatePerHour: 150,
      setupTeardownFee: 300,
      logisticsFee: 150,
      discount: { type: 'fixed', value: 100 },
      applyVat: true,
    };

    const quoteA = calculateQuote({ ...input, id: 'temp-id-1', createdAt: '2026-10-01T10:00:00Z' });
    const quoteB = calculateQuote({ ...input, id: 'temp-id-2', createdAt: '2026-10-30T19:45:00Z' });

    const shortIdA = await generateQuoteShortId(quoteA);
    const shortIdB = await generateQuoteShortId(quoteB);

    // 1. Length and charset
    expect(shortIdA).toMatch(/^[0-9a-zA-Z]{7}$/);
    expect(shortIdA.length).toBe(7);

    // 2. Determinism across different temporary IDs and creation timestamps
    expect(shortIdA).toBe(shortIdB);

    // 3. Order independence in items
    const reorderedQuote = {
      ...quoteA,
      equipment: {
        ...quoteA.equipment,
        items: [...quoteA.equipment.items].reverse(),
      },
    };
    const shortIdReordered = await generateQuoteShortId(reorderedQuote);
    expect(shortIdReordered).toBe(shortIdA);

    // 4. Mutation sensitivity: different venue produces different ID
    const quoteDifferentVenue = calculateQuote({
      ...input,
      client: { ...input.client, venueName: 'Another Venue' },
    });
    const shortIdDifferent = await generateQuoteShortId(quoteDifferentVenue);
    expect(shortIdDifferent).not.toBe(shortIdA);
  });

  it('generates correct short URLs per language', () => {
    expect(getShortQuoteUrl('7xK9p2', 'en')).toBe('https://dj.dimaminka.com/q/7xK9p2');
    expect(getShortQuoteUrl('7xK9p2', 'ru')).toBe('https://dj.dimaminka.com/ru/q/7xK9p2');
    expect(getShortQuoteUrl('7xK9p2', 'he')).toBe('https://dj.dimaminka.com/he/q/7xK9p2');
  });

  it('handles edge case inputs cleanly in generateQuoteShortId (empty items, missing client fields)', async () => {
    const minimalQuote = calculateQuote({
      client: {
        name: '',
        eventDate: '',
        venueName: '',
        locationZone: 'upper_galilee',
      },
      language: 'en',
      items: [],
      daysCount: 1,
      djPerformanceHours: 0,
      djRatePerHour: 0,
      preprodHours: 0,
      preprodRatePerHour: 0,
      setupTeardownFee: 0,
      logisticsFee: 0,
      discount: { type: 'fixed', value: 0 },
      applyVat: false,
    });

    const shortId = await generateQuoteShortId(minimalQuote);
    expect(shortId).toMatch(/^[0-9a-zA-Z]{7}$/);
    expect(shortId.length).toBe(7);

    // Language difference must yield a distinct short ID for correct canonical routing
    const minimalQuoteRu = { ...minimalQuote, language: 'ru' as const };
    const shortIdRu = await generateQuoteShortId(minimalQuoteRu);
    expect(shortIdRu).not.toBe(shortId);
  });

  it('formats WhatsApp messages for English and Russian with custom short URL', () => {
    const quote = calculateQuote({
      client: {
        name: 'Alex',
        venueName: 'Golan Heights Villa',
        locationZone: 'golan',
        eventDate: '2026-12-05',
      },
      language: 'en',
      items: [],
      daysCount: 1,
      djPerformanceHours: 4,
      djRatePerHour: 400,
      preprodHours: 0,
      preprodRatePerHour: 150,
      setupTeardownFee: 0,
      logisticsFee: 0,
      discount: { type: 'fixed', value: 0 },
      applyVat: false,
    });

    const enWaUrl = generateQuoteWhatsAppUrl(quote, 'en', 'https://dj.dimaminka.com/q/aB3x9Z1');
    expect(decodeURIComponent(enWaUrl)).toContain('Hi Dima!');
    expect(decodeURIComponent(enWaUrl)).toContain('Golan Heights Villa');
    expect(decodeURIComponent(enWaUrl)).toContain('https://dj.dimaminka.com/q/aB3x9Z1');

    const ruWaUrl = generateQuoteWhatsAppUrl(quote, 'ru', 'https://dj.dimaminka.com/ru/q/aB3x9Z1');
    expect(decodeURIComponent(ruWaUrl)).toContain('Привет, Дима!');
    expect(decodeURIComponent(ruWaUrl)).toContain('Golan Heights Villa');
    expect(decodeURIComponent(ruWaUrl)).toContain('https://dj.dimaminka.com/ru/q/aB3x9Z1');
  });

  it('generates canonical representation correctly, excluding volatile fields and trimming strings', () => {
    const quote = calculateQuote({
      client: {
        name: '  Sarah   ',
        venueName: '  Villa Galilee  ',
        locationZone: 'upper_galilee',
        eventDate: '2026-11-20',
      },
      language: 'ru',
      items: [
        {
          id: 'b_item',
          name: { en: 'B', ru: 'Б', he: 'ב' },
          category: 'sound',
          unitPrice: 200,
          quantity: 2,
        },
        {
          id: 'zero_item',
          name: { en: 'Zero', ru: 'Ноль', he: 'אפס' },
          category: 'sound',
          unitPrice: 500,
          quantity: 0,
        },
        {
          id: 'a_item',
          name: { en: 'A', ru: 'А', he: 'א' },
          category: 'sound',
          unitPrice: 100,
          quantity: 1,
        },
      ],
      daysCount: 1,
      djPerformanceHours: 3,
      djRatePerHour: 400,
      preprodHours: 1,
      preprodRatePerHour: 150,
      setupTeardownFee: 200,
      logisticsFee: 100,
      discount: { type: 'fixed', value: 50, reason: '  Early Bird  ' },
      applyVat: true,
      notes: '  Need wireless mic  ',
    });

    const canonicalJson = getCanonicalQuoteString(quote);
    const parsed = JSON.parse(canonicalJson);

    // Volatile properties must not be present
    expect(parsed.id).toBeUndefined();
    expect(parsed.createdAt).toBeUndefined();
    expect(parsed.validUntil).toBeUndefined();

    // Strings must be trimmed
    expect(parsed.client.name).toBe('Sarah');
    expect(parsed.client.venueName).toBe('Villa Galilee');
    expect(parsed.financials.discount.reason).toBe('Early Bird');
    expect(parsed.notes).toBe('Need wireless mic');

    // 0-quantity items filtered out and remaining sorted by id
    expect(parsed.equipment.items.length).toBe(2);
    expect(parsed.equipment.items[0].id).toBe('a_item');
    expect(parsed.equipment.items[1].id).toBe('b_item');
  });
});

describe('loadQuoteFromKv', () => {
  it('safely loads and validates a well-formed quote from KV', async () => {
    const validQuote = calculateQuote({
      client: { name: 'Dan', venueName: 'Venue', locationZone: 'golan', eventDate: '2026-11-01' },
      language: 'en',
      items: [],
      daysCount: 1,
      djPerformanceHours: 2,
      djRatePerHour: 400,
      preprodHours: 0,
      preprodRatePerHour: 0,
      setupTeardownFee: 0,
      logisticsFee: 0,
      discount: { type: 'fixed', value: 0 },
      applyVat: false,
    });

    const mockKv = {
      get: vi.fn().mockResolvedValue(JSON.stringify(validQuote)),
    };

    const loaded = await loadQuoteFromKv(mockKv, 'validId');
    expect(loaded).not.toBeNull();
    expect(loaded?.client.name).toBe('Dan');
    expect(loaded?.financials.grandTotal).toBe(validQuote.financials.grandTotal);
  });

  it('returns null on missing key, null KV, or corrupted payload', async () => {
    expect(await loadQuoteFromKv(null, 'id')).toBeNull();
    expect(await loadQuoteFromKv({}, 'id')).toBeNull();

    const notFoundKv = { get: vi.fn().mockResolvedValue(null) };
    expect(await loadQuoteFromKv(notFoundKv, 'missingId')).toBeNull();

    const corruptedKv = { get: vi.fn().mockResolvedValue('not-valid-json{{{') };
    expect(await loadQuoteFromKv(corruptedKv, 'badId')).toBeNull();

    const errorKv = { get: vi.fn().mockRejectedValue(new Error('KV connection error')) };
    expect(await loadQuoteFromKv(errorKv, 'errorId')).toBeNull();
  });

  it('rejects payloads missing essential sub-trees or schema versions', async () => {
    const missingEquip = { v: 1, client: {}, financials: {}, services: {} };
    const mockKv1 = { get: vi.fn().mockResolvedValue(JSON.stringify(missingEquip)) };
    expect(await loadQuoteFromKv(mockKv1, 'test')).toBeNull();

    const wrongVersion = { v: 2, client: {}, financials: {}, equipment: { items: [] }, services: {} };
    const mockKv2 = { get: vi.fn().mockResolvedValue(JSON.stringify(wrongVersion)) };
    expect(await loadQuoteFromKv(mockKv2, 'test')).toBeNull();
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
