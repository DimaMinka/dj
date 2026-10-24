export type QuoteLang = 'en' | 'ru' | 'he';

export type EquipmentCategory =
  | 'sound'
  | 'retro'
  | 'moving_heads'
  | 'wash_fx'
  | 'stands';

export interface LocalizedText {
  en: string;
  ru: string;
  he: string;
}

export interface EquipmentItemConfig {
  id: string;
  name: LocalizedText;
  category: EquipmentCategory;
  defaultQty: number;
  maxQty: number;
  purchasePrice: number;     // ₪ purchase price
  dailyRentalPrice: number;  // ₪ rental per unit per day
}

export interface QuoteItemSnapshot {
  id: string;
  name: LocalizedText;
  category: EquipmentCategory;
  unitPrice: number;         // ₪ Fixed daily rental at creation
  quantity: number;          // Selected units
  totalPrice: number;        // unitPrice * quantity
}

export type LocationZoneId = 'upper_galilee' | 'golan' | 'kinneret' | 'custom';

export interface LocationZoneConfig {
  id: LocationZoneId;
  name: LocalizedText;
  defaultDurationMin: number; // One-way drive in minutes
  defaultFee: number;         // ₪
}

export interface QuoteClientData {
  name: string;
  phone?: string;
  eventDate: string;          // YYYY-MM-DD
  venueName: string;          // Name of venue / villa / winery
  locationZone: LocationZoneId;
}

export interface QuoteEquipmentState {
  items: QuoteItemSnapshot[];
  daysCount: number;          // 1, 2 (weekend), etc.
  daysMultiplier: number;     // 1 day = 1.0, 2 days = 1.6
  subtotal: number;           // sum(totalPrice) * daysMultiplier
}

export interface QuoteServicesState {
  djPerformanceHours: number;    // Hours on stage (step 0.5)
  djRatePerHour: number;         // 400 ₪
  preprodHours: number;          // Preparation & SoundSwitch programming (150 ₪)
  preprodRatePerHour: number;    // 150 ₪
  setupTeardownFee: number;      // Setup, discreet cable management, teardown
  logisticsFee: number;          // Travel & transport fee
  subtotal: number;
}

export interface QuoteDiscountState {
  type: 'fixed' | 'percentage';
  value: number;                 // e.g. 10 (%) or 500 (₪)
  amount: number;                // Actual discount amount in ₪
  reason?: string;               // e.g. "Early booking", "Neighboring venue"
}

export interface QuoteFinancialsState {
  grossTotal: number;            // Equipment + Services before discount
  discount: QuoteDiscountState;
  netTotal: number;              // Subtotal before VAT (לפני מע"מ)
  applyVat: boolean;             // Whether VAT is applied
  vatRate: number;               // 0.18
  vatAmount: number;             // VAT amount in ₪
  grandTotal: number;            // Final total due (כולל מע"מ)
}

export interface QuoteSnapshot {
  v: 1;                          // Schema version
  id: string;                    // Unique token / slug
  createdAt: string;             // ISO date
  validUntil: string;            // ISO date (e.g. +14 days)
  language: QuoteLang;
  client: QuoteClientData;
  equipment: QuoteEquipmentState;
  services: QuoteServicesState;
  financials: QuoteFinancialsState;
  notes?: string;
}

export interface QuotePreset {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  djHours: number;
  preprodHours: number;
  setupFee: number;
  daysCount: number;
  tripsCount?: number;
  minTripsCount?: number;
  equipmentItemIds: { id: string; qty?: number }[];
  locationZone: LocationZoneId;
  featured?: boolean;
}
