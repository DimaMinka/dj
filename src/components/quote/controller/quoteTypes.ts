import type {
  EquipmentItemConfig,
  EquipmentCategory,
  LocationZoneConfig,
  QuotePreset,
  QuoteLang,
} from '../../../types/quote';
import type { LABOR_RATES } from '../../../data/quoteConfig';

export interface ClientQuoteConfig {
  lang: QuoteLang;
  catalog: EquipmentItemConfig[];
  categories: Record<EquipmentCategory, { en: string; ru: string; he: string }>;
  zones: LocationZoneConfig[];
  presets: QuotePreset[];
  rates: typeof LABOR_RATES;
  vatRate: number;
  whatsappNumber: string;
  labels: {
    copiedLink: string;
    copiedJson: string;
    included: string;
    addBtn: string;
    removeBtn: string;
    subtotalBeforeVat: string;
    vat18: string;
    grandTotal: string;
    icebergTooltipTemplate: string;
    minTripsWarning: string;
    badgeProducer: string;
    badgeClientView: string;
    badgeEstimate: string;
    defaultHeading: string;
    defaultEventName: string;
    defaultVenue: string;
    serviceDjSet: string;
    servicePreprod: string;
    serviceSetup: string;
    serviceLogistics: string;
    tripsUnit: string;
    presetLoadedToast: string;
  };
}

export interface QuoteInternalState {
  eventName: string;
  clientName: string;
  eventDate: string;
  locationZone: string;
  tripsCount: number;
  minTripsCount: number;
  djHours: number;
  preprodHours: number;
  setupHours: number;
  setupFee: number;
  daysCount: number;
  itemsQty: Record<string, number>;
  discountType: 'none' | 'percentage' | 'fixed';
  discountVal: number;
  discountReason: string;
  applyVat: boolean;
  viewMode: 'builder' | 'client';
}
