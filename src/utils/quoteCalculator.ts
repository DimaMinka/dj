import type {
  QuoteItemSnapshot,
  QuoteSnapshot,
  QuoteClientData,
  QuoteDiscountState,
  QuoteEquipmentState,
  QuoteServicesState,
  QuoteFinancialsState,
  QuoteLang,
} from '../types/quote';
import { VAT_RATE, getDaysMultiplier } from '../data/quoteConfig';

export interface CalculationInput {
  client: QuoteClientData;
  language: QuoteLang;
  items: Array<{
    id: string;
    name: { en: string; ru: string; he: string };
    category: QuoteItemSnapshot['category'];
    unitPrice: number;
    quantity: number;
  }>;
  daysCount: number;
  djPerformanceHours: number;
  djRatePerHour: number;
  preprodHours: number;
  preprodRatePerHour: number;
  setupTeardownFee: number;
  logisticsFee: number;
  discount: {
    type: 'fixed' | 'percentage';
    value: number;
    reason?: string;
  };
  applyVat: boolean;
  notes?: string;
  id?: string;
  createdAt?: string;
  validUntil?: string;
}

/**
 * Pure calculation function for quotes.
 * Guarantees zero negative numbers, proper order of operations,
 * discount applied strictly before VAT, integer shekel rounding,
 * and immutable snapshots.
 */
export function calculateQuote(input: CalculationInput): QuoteSnapshot {
  const now = new Date();
  const createdAt = input.createdAt || now.toISOString();
  const validUntil =
    input.validUntil ||
    new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString();
  const id = input.id || `quote-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  // 1. Equipment calculation with days rental multiplier
  const daysCount = Math.max(1, Math.round(input.daysCount || 1));
  const daysMultiplier = getDaysMultiplier(daysCount);

  const calculatedItems: QuoteItemSnapshot[] = (input.items || [])
    .filter((item) => item.quantity > 0)
    .map((item) => {
      const quantity = Math.max(0, Math.round(item.quantity));
      const unitPrice = Math.max(0, Math.round(item.unitPrice));
      return {
        id: item.id,
        name: item.name,
        category: item.category,
        unitPrice,
        quantity,
        totalPrice: unitPrice * quantity,
      };
    });

  const rawEquipmentSum = calculatedItems.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );
  const equipSubtotal = Math.round(rawEquipmentSum * daysMultiplier);

  const equipmentState: QuoteEquipmentState = {
    items: calculatedItems,
    daysCount,
    daysMultiplier,
    subtotal: equipSubtotal,
  };

  // 2. Services & Logistics calculation
  const djPerformanceHours = Math.max(0, Number(input.djPerformanceHours || 0));
  const djRatePerHour = Math.max(0, Math.round(input.djRatePerHour || 0));
  const preprodHours = Math.max(0, Number(input.preprodHours || 0));
  const preprodRatePerHour = Math.max(0, Math.round(input.preprodRatePerHour || 0));
  const setupTeardownFee = Math.max(0, Math.round(input.setupTeardownFee || 0));
  const logisticsFee = Math.max(0, Math.round(input.logisticsFee || 0));

  const djLaborCost = Math.round(djPerformanceHours * djRatePerHour);
  const preprodCost = Math.round(preprodHours * preprodRatePerHour);
  const servicesSubtotal =
    djLaborCost + preprodCost + setupTeardownFee + logisticsFee;

  const servicesState: QuoteServicesState = {
    djPerformanceHours,
    djRatePerHour,
    preprodHours,
    preprodRatePerHour,
    setupTeardownFee,
    logisticsFee,
    subtotal: servicesSubtotal,
  };

  // 3. Gross Total (Equipment + Services)
  const grossTotal = equipSubtotal + servicesSubtotal;

  // 4. Discount calculation (strictly before VAT, clamped between 0 and grossTotal)
  const rawDiscountValue = Math.max(0, Number(input.discount?.value || 0));
  let discountAmount = 0;

  if (input.discount?.type === 'percentage') {
    const clampedPercent = Math.min(100, rawDiscountValue);
    discountAmount = Math.round((grossTotal * clampedPercent) / 100);
  } else {
    discountAmount = Math.round(rawDiscountValue);
  }
  discountAmount = Math.min(grossTotal, Math.max(0, discountAmount));

  const discountState: QuoteDiscountState = {
    type: input.discount?.type || 'fixed',
    value: rawDiscountValue,
    amount: discountAmount,
    reason: input.discount?.reason?.trim() || undefined,
  };

  // 5. Net Subtotal before VAT (לפני מע"מ)
  const netTotal = grossTotal - discountAmount;

  // 6. VAT Calculation (18% for Israel, only if applyVat is true)
  const applyVat = Boolean(input.applyVat);
  const vatRate = VAT_RATE;
  const vatAmount = applyVat ? Math.round(netTotal * vatRate) : 0;

  // 7. Grand Total (כולל מע"מ)
  const grandTotal = netTotal + vatAmount;

  const financialsState: QuoteFinancialsState = {
    grossTotal,
    discount: discountState,
    netTotal,
    applyVat,
    vatRate,
    vatAmount,
    grandTotal,
  };

  return {
    v: 1,
    id,
    createdAt,
    validUntil,
    language: input.language || 'en',
    client: {
      name: input.client?.name?.trim() || '',
      phone: input.client?.phone?.trim() || undefined,
      eventDate: input.client?.eventDate || '',
      venueName: input.client?.venueName?.trim() || '',
      locationZone: input.client?.locationZone || 'upper_galilee',
    },
    equipment: equipmentState,
    services: servicesState,
    financials: financialsState,
    notes: input.notes?.trim() || undefined,
  };
}

/**
 * Formats a number with thousands separators, e.g. 2950 -> "2,950"
 */
export function formatCurrency(amount: number): string {
  return Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
