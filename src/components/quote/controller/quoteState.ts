import type { QuoteSnapshot, QuotePreset } from '../../../types/quote';
import type { ClientQuoteConfig, QuoteInternalState } from './quoteTypes';

/**
 * Creates initial reactive state synchronized with the featured default preset.
 */
export function createInitialState(config: ClientQuoteConfig): QuoteInternalState {
  const defaultPreset = config.presets.find((p) => p.featured) || config.presets[0];

  const state: QuoteInternalState = {
    eventName: '',
    clientName: '',
    eventDate: new Date().toISOString().split('T')[0],
    locationZone: defaultPreset?.locationZone || 'upper_galilee',
    tripsCount: defaultPreset?.tripsCount || 1,
    minTripsCount: defaultPreset?.minTripsCount || 1,
    djHours: defaultPreset?.djHours ?? 2.0,
    preprodHours: defaultPreset?.preprodHours ?? 1.0,
    setupHours: defaultPreset
      ? Math.round(defaultPreset.setupFee / (config.rates.setupPerHour || 120))
      : 4.0,
    setupFee: defaultPreset?.setupFee ?? 480,
    daysCount: defaultPreset?.daysCount ?? 1,
    itemsQty: {},
    discountType: 'none',
    discountVal: 0,
    discountReason: '',
    applyVat: true,
    viewMode: 'builder',
  };

  // 1. Initialize all catalog items with 0
  config.catalog.forEach((item) => {
    state.itemsQty[item.id] = 0;
  });

  // 2. Activate items specified in the default preset
  if (defaultPreset?.equipmentItemIds) {
    defaultPreset.equipmentItemIds.forEach((spec) => {
      state.itemsQty[spec.id] = spec.qty ?? 1;
    });
  }

  return state;
}

/**
 * Applies a selected preset to the current state.
 */
export function applyPresetToState(
  state: QuoteInternalState,
  preset: QuotePreset,
  config: ClientQuoteConfig
): void {
  state.djHours = preset.djHours;
  state.preprodHours = preset.preprodHours;
  state.setupHours = Math.round(preset.setupFee / (config.rates.setupPerHour || 120));
  state.setupFee = preset.setupFee;
  state.daysCount = preset.daysCount;
  state.locationZone = preset.locationZone;

  const minTrips = preset.minTripsCount || 1;
  state.minTripsCount = minTrips;
  state.tripsCount = Math.max(minTrips, preset.tripsCount || minTrips);

  // Reset all catalog quantities, then apply preset items
  config.catalog.forEach((item) => {
    state.itemsQty[item.id] = 0;
  });
  preset.equipmentItemIds.forEach((spec) => {
    state.itemsQty[spec.id] = spec.qty ?? 1;
  });
}

/**
 * Losslessly restores state from a decoded QuoteSnapshot.
 */
export function applyDecodedQuoteToState(
  state: QuoteInternalState,
  decoded: QuoteSnapshot,
  config: ClientQuoteConfig
): void {
  state.eventName = decoded.client.venueName || '';
  state.clientName = decoded.client.name || '';
  state.eventDate = decoded.client.eventDate || state.eventDate;
  state.locationZone = decoded.client.locationZone || 'upper_galilee';
  state.djHours = decoded.services.djPerformanceHours;
  state.preprodHours = decoded.services.preprodHours || 0;
  state.setupFee = decoded.services.setupTeardownFee;
  state.setupHours = Math.round(decoded.services.setupTeardownFee / (config.rates.setupPerHour || 120));

  // Determine trips count based on zone rate
  const matchedZone = config.zones.find((z) => z.id === state.locationZone) || config.zones[0];
  const zoneFee = matchedZone?.defaultFee || 100;
  state.tripsCount = Math.max(1, Math.round((decoded.services.logisticsFee || zoneFee) / zoneFee));
  state.minTripsCount = 1;

  state.daysCount = decoded.equipment.daysCount || 1;
  state.applyVat = decoded.financials.applyVat;

  // Restore discount only if active
  if (decoded.financials.discount && decoded.financials.discount.amount > 0) {
    state.discountType = decoded.financials.discount.type || 'percentage';
    state.discountVal = decoded.financials.discount.value || 0;
    state.discountReason = decoded.financials.discount.reason || '';
  } else {
    state.discountType = 'none';
    state.discountVal = 0;
    state.discountReason = '';
  }

  // Reset all items first, then populate from snapshot
  config.catalog.forEach((item) => {
    state.itemsQty[item.id] = 0;
  });
  decoded.equipment.items.forEach((item) => {
    state.itemsQty[item.id] = item.quantity;
  });

  // Switch to client presentation mode
  state.viewMode = 'client';
}
