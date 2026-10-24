import { calculateQuote, formatCurrency } from '../../../utils/quoteCalculator';
import { generateQuoteWhatsAppUrl } from '../../../utils/quoteEncoder';
import type { QuoteSnapshot } from '../../../types/quote';
import type { ClientQuoteConfig, QuoteInternalState } from './quoteTypes';
import type { QuoteDomElements } from './quoteDom';

/**
 * Pure calculation wrapper using the centralized calculator engine.
 */
export function computeQuote(
  state: QuoteInternalState,
  config: ClientQuoteConfig
): QuoteSnapshot {
  const items = config.catalog.map((catItem) => ({
    id: catItem.id,
    name: catItem.name,
    category: catItem.category,
    unitPrice: catItem.dailyRentalPrice,
    quantity: state.itemsQty[catItem.id] || 0,
  }));

  const matchedZone =
    config.zones.find((z) => z.id === state.locationZone) || config.zones[0];
  const computedLogisticsFee = (matchedZone.defaultFee || 100) * (state.tripsCount || 1);

  const discountVal =
    state.discountType === 'none' ? 0 : Number(state.discountVal) || 0;

  return calculateQuote({
    client: {
      name: state.clientName,
      eventDate: state.eventDate,
      venueName: state.eventName,
      locationZone: state.locationZone as any,
    },
    language: config.lang,
    items,
    daysCount: state.daysCount,
    djPerformanceHours: state.djHours,
    djRatePerHour: config.rates.djPerHour,
    preprodHours: state.preprodHours,
    preprodRatePerHour: config.rates.preprodPerHour,
    setupTeardownFee: state.setupFee,
    logisticsFee: computedLogisticsFee,
    discount: {
      type: state.discountType === 'percentage' ? 'percentage' : 'fixed',
      value: discountVal,
      reason: state.discountReason,
    },
    applyVat: state.applyVat,
  });
}

/**
 * Synchronizes HTML form inputs, sliders, and toggle buttons with current reactive state.
 * Solves the desync problem when loading a preset or restoring from URL hash.
 */
export function syncControlsToDom(
  state: QuoteInternalState,
  dom: QuoteDomElements,
  config: ClientQuoteConfig
): void {
  if (dom.inputEventName) dom.inputEventName.value = state.eventName;
  if (dom.inputClientName) dom.inputClientName.value = state.clientName;
  if (dom.inputEventDate) dom.inputEventDate.value = state.eventDate;
  if (dom.selectLocationZone) dom.selectLocationZone.value = state.locationZone;
  if (dom.sliderDjHours) dom.sliderDjHours.value = String(state.djHours);
  if (dom.sliderPreprodHours) dom.sliderPreprodHours.value = String(state.preprodHours);

  // 1. Sync Trips Buttons and lock badge
  if (dom.tripBtn1) {
    const lockBadge = dom.tripBtn1.querySelector('.trip-lock-badge');
    if (state.minTripsCount >= 2) {
      dom.tripBtn1.classList.add('disabled-preset');
      lockBadge?.classList.remove('hidden');
    } else {
      dom.tripBtn1.classList.remove('disabled-preset');
      lockBadge?.classList.add('hidden');
    }
  }

  document.querySelectorAll<HTMLButtonElement>('.trip-toggle-btn').forEach((btn) => {
    const trips = Number(btn.getAttribute('data-trips') || 1);
    if (trips === state.tripsCount) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 2. Sync Rental Days Buttons
  document.querySelectorAll<HTMLButtonElement>('.day-toggle-btn').forEach((btn) => {
    const days = Number(btn.getAttribute('data-days') || 1);
    if (days === state.daysCount) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 3. Sync Discount Tabs and Inputs
  document.querySelectorAll<HTMLButtonElement>('.discount-type-tabs .tab-btn').forEach((btn) => {
    const type = btn.getAttribute('data-type');
    if (type === state.discountType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (dom.discountInputsRow) {
    if (state.discountType === 'none') {
      dom.discountInputsRow.classList.add('hidden');
    } else {
      dom.discountInputsRow.classList.remove('hidden');
      if (dom.inputDiscountVal) dom.inputDiscountVal.value = String(state.discountVal);
      if (dom.inputDiscountReason) dom.inputDiscountReason.value = state.discountReason;
    }
  }

  // 4. Sync Equipment Catalog Toggle Buttons
  document.querySelectorAll<HTMLButtonElement>('.toggle-equip-btn').forEach((btn) => {
    const itemId = btn.getAttribute('data-id');
    if (!itemId) return;
    const hasItem = (state.itemsQty[itemId] || 0) > 0;
    const icon = btn.querySelector('.toggle-icon');
    const text = btn.querySelector('.toggle-text');

    if (hasItem) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      btn.setAttribute('aria-label', config.labels.removeBtn);
      btn.setAttribute('title', config.labels.removeBtn);
      if (icon) icon.textContent = 'close';
      if (text) text.textContent = config.labels.removeBtn;
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('aria-label', config.labels.addBtn);
      btn.setAttribute('title', config.labels.addBtn);
      if (icon) icon.textContent = 'add';
      if (text) text.textContent = config.labels.addBtn;
    }
  });
}

/**
 * Main render function: re-calculates quote and updates all DOM nodes.
 * Guarantees <bdi> isolation for BiDi/RTL protection and localized service strings.
 */
export function renderApp(
  state: QuoteInternalState,
  dom: QuoteDomElements,
  config: ClientQuoteConfig
): void {
  const quote = computeQuote(state, config);

  // 1. Time & Iceberg Metric Calculation
  const stageH = quote.services.djPerformanceHours;
  const behindH = quote.services.preprodHours + (state.setupHours || 4.0);
  const totalH = stageH + behindH;
  const stagePct = Math.round((stageH / Math.max(1, totalH)) * 100);
  const behindPct = 100 - stagePct;
  const ratioMultiplier = stageH > 0 ? (behindH / stageH).toFixed(1) : '0.0';
  const dynamicTooltip = (config.labels.icebergTooltipTemplate || '').replace('{ratio}', ratioMultiplier);

  // 2. Render Builder Sliders & Live Costs
  if (dom.djHoursVal) dom.djHoursVal.textContent = `${stageH.toFixed(1)}h`;
  if (dom.djCostVal) {
    dom.djCostVal.innerHTML = `<bdi>${formatCurrency(stageH * config.rates.djPerHour)} ₪</bdi>`;
  }

  if (dom.preprodHoursVal) dom.preprodHoursVal.textContent = `${quote.services.preprodHours.toFixed(1)}h`;
  if (dom.preprodCostVal) {
    dom.preprodCostVal.innerHTML = `<bdi>${formatCurrency(quote.services.preprodHours * config.rates.preprodPerHour)} ₪</bdi>`;
  }

  // 3. Render Computed Setup & Logistics
  if (dom.computedSetupVal) {
    dom.computedSetupVal.innerHTML = `<bdi>${formatCurrency(quote.services.setupTeardownFee)} ₪</bdi>`;
  }
  if (dom.computedSetupHint) {
    dom.computedSetupHint.textContent = `${(state.setupHours || 4.0).toFixed(1)}h × ${config.rates.setupPerHour || 120} ₪/h`;
  }

  if (dom.computedLogisticsVal) {
    dom.computedLogisticsVal.innerHTML = `<bdi>${formatCurrency(quote.services.logisticsFee)} ₪</bdi>`;
  }
  if (dom.computedLogisticsHint) {
    const matchedZone =
      config.zones.find((z) => z.id === state.locationZone) || config.zones[0];
    dom.computedLogisticsHint.textContent = `${state.tripsCount || 1} × ${matchedZone.defaultFee} ₪ (${matchedZone.defaultDurationMin} min)`;
  }

  // 4. Render Live Receipt (with strict <bdi> isolation)
  if (dom.recTotalHours) dom.recTotalHours.textContent = `${totalH.toFixed(1)}h`;
  if (dom.recStageHours) dom.recStageHours.textContent = `${stageH.toFixed(1)}h`;
  if (dom.recBehindHours) dom.recBehindHours.textContent = `${behindH.toFixed(1)}h`;
  if (dom.recStageBar) dom.recStageBar.style.width = `${stagePct}%`;
  if (dom.recBehindBar) dom.recBehindBar.style.width = `${behindPct}%`;
  if (dom.recIcebergRatioVal) dom.recIcebergRatioVal.textContent = ratioMultiplier;
  if (dom.recIcebergTooltip) dom.recIcebergTooltip.textContent = dynamicTooltip;

  if (dom.recEquipSubtotal) {
    dom.recEquipSubtotal.innerHTML = `<bdi>${formatCurrency(quote.equipment.subtotal)} ₪</bdi>`;
  }
  if (dom.recServicesSubtotal) {
    dom.recServicesSubtotal.innerHTML = `<bdi>${formatCurrency(quote.services.subtotal)} ₪</bdi>`;
  }
  if (dom.recGrossTotal) {
    dom.recGrossTotal.innerHTML = `<bdi>${formatCurrency(quote.financials.grossTotal)} ₪</bdi>`;
  }

  if (dom.recDiscountLine) {
    if (quote.financials.discount.amount > 0) {
      dom.recDiscountLine.classList.remove('hidden');
      if (dom.recDiscountAmount) {
        dom.recDiscountAmount.innerHTML = `<bdi>${formatCurrency(quote.financials.discount.amount)} ₪</bdi>`;
      }
    } else {
      dom.recDiscountLine.classList.add('hidden');
    }
  }

  if (dom.recNetTotal) {
    dom.recNetTotal.innerHTML = `<bdi>${formatCurrency(quote.financials.netTotal)} ₪</bdi>`;
  }
  if (dom.recVatAmount) {
    dom.recVatAmount.innerHTML = `<bdi>${formatCurrency(quote.financials.vatAmount)} ₪</bdi>`;
  }
  if (dom.recTotalLabel) dom.recTotalLabel.textContent = config.labels.grandTotal;
  if (dom.recGrandTotal) {
    dom.recGrandTotal.innerHTML = `<bdi>${formatCurrency(quote.financials.grandTotal)} ₪</bdi>`;
  }

  if (dom.btnWhatsAppDirect) {
    dom.btnWhatsAppDirect.href = generateQuoteWhatsAppUrl(quote, config.lang);
  }
  if (dom.mobileWhatsAppBtn) {
    dom.mobileWhatsAppBtn.href = generateQuoteWhatsAppUrl(quote, config.lang);
  }
  if (dom.mobileGrandTotal) {
    dom.mobileGrandTotal.innerHTML = `<bdi>${formatCurrency(quote.financials.grandTotal)} ₪</bdi>`;
  }
  if (dom.mobileTotalHours) {
    dom.mobileTotalHours.textContent = `${totalH.toFixed(1)}h`;
  }

  // 5. Render Proposal View Elements
  if (dom.propEventName) {
    dom.propEventName.textContent =
      quote.client.venueName || config.labels.defaultEventName || 'Bespoke Event Production';
  }
  if (dom.propVenue) {
    dom.propVenue.textContent =
      quote.client.venueName || config.labels.defaultVenue || 'Venue';
  }
  if (dom.propDate) {
    dom.propDate.textContent =
      quote.client.eventDate || new Date().toISOString().split('T')[0];
  }
  if (dom.propZone) {
    const matchedZone = config.zones.find((z) => z.id === quote.client.locationZone);
    dom.propZone.textContent = matchedZone
      ? matchedZone.name[config.lang]
      : quote.client.locationZone;
  }

  if (dom.propTotalHoursVal) dom.propTotalHoursVal.textContent = `${totalH.toFixed(1)}h`;
  if (dom.propStageHoursVal) dom.propStageHoursVal.textContent = `${stageH.toFixed(1)}h`;
  if (dom.propBehindHoursVal) dom.propBehindHoursVal.textContent = `${behindH.toFixed(1)}h`;
  if (dom.propStageSegment) dom.propStageSegment.style.width = `${stagePct}%`;
  if (dom.propBehindSegment) dom.propBehindSegment.style.width = `${behindPct}%`;
  if (dom.propIcebergRatioVal) dom.propIcebergRatioVal.textContent = ratioMultiplier;
  if (dom.propIcebergTooltip) dom.propIcebergTooltip.textContent = dynamicTooltip;

  // Header Subtotals in Proposal
  if (dom.propEquipTotalVal) {
    dom.propEquipTotalVal.innerHTML = `<bdi>${formatCurrency(quote.equipment.subtotal)} ₪</bdi>`;
  }
  if (dom.propServicesTotalVal) {
    dom.propServicesTotalVal.innerHTML = `<bdi>${formatCurrency(quote.services.subtotal)} ₪</bdi>`;
  }

  // 6. Dynamic Modern Equipment Cards in Proposal
  if (dom.propEquipmentList) {
    const activeItems = quote.equipment.items.filter((i) => i.quantity > 0);
    dom.propEquipmentList.innerHTML = activeItems
      .map((item) => {
        const isItemIncluded = item.id === 'denon_prime' || item.id === 'udg_stand';
        const priceDisplay = isItemIncluded
          ? `<span class="rate-included">${config.labels.included || 'INCLUDED'}</span>`
          : `<bdi>${formatCurrency(item.totalPrice)} ₪</bdi>`;
        return `
          <div class="prop-card-row">
            <div class="prop-card-main">
              <span class="prop-card-name">${item.name[config.lang] || item.name.en}</span>
            </div>
            <div class="prop-card-aside">
              <span class="prop-qty-pill">${item.quantity}</span>
              <span class="prop-card-price">${priceDisplay}</span>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // 7. Dynamic Modern Services Cards in Proposal (Full i18n localization!)
  if (dom.propServicesList) {
    const matchedZone =
      config.zones.find((z) => z.id === quote.client.locationZone) || config.zones[0];
    const zoneName = matchedZone ? matchedZone.name[config.lang] : quote.client.locationZone;

    dom.propServicesList.innerHTML = `
      <div class="prop-card-row">
        <div class="prop-card-main">
          <span class="prop-card-name">${config.labels.serviceDjSet}</span>
          <span class="prop-card-sub">${stageH.toFixed(1)}h @ ${config.rates.djPerHour} ₪/h</span>
        </div>
        <div class="prop-card-aside">
          <span class="prop-card-price"><bdi>${formatCurrency(stageH * config.rates.djPerHour)} ₪</bdi></span>
        </div>
      </div>
      ${
        quote.services.preprodHours > 0
          ? `
        <div class="prop-card-row">
          <div class="prop-card-main">
            <span class="prop-card-name">${config.labels.servicePreprod}</span>
            <span class="prop-card-sub">${quote.services.preprodHours.toFixed(1)}h @ ${config.rates.preprodPerHour} ₪/h</span>
          </div>
          <div class="prop-card-aside">
            <span class="prop-card-price"><bdi>${formatCurrency(quote.services.preprodHours * config.rates.preprodPerHour)} ₪</bdi></span>
          </div>
        </div>
      `
          : ''
      }
      <div class="prop-card-row">
        <div class="prop-card-main">
          <span class="prop-card-name">${config.labels.serviceSetup}</span>
          <span class="prop-card-sub">${(state.setupHours || 4.0).toFixed(1)}h @ ${config.rates.setupPerHour || 120} ₪/h</span>
        </div>
        <div class="prop-card-aside">
          <span class="prop-card-price"><bdi>${formatCurrency(quote.services.setupTeardownFee)} ₪</bdi></span>
        </div>
      </div>
      <div class="prop-card-row">
        <div class="prop-card-main">
          <span class="prop-card-name">${config.labels.serviceLogistics}</span>
          <span class="prop-card-sub">${state.tripsCount || 1} ${config.labels.tripsUnit} • ${zoneName}</span>
        </div>
        <div class="prop-card-aside">
          <span class="prop-card-price"><bdi>${formatCurrency(quote.services.logisticsFee)} ₪</bdi></span>
        </div>
      </div>
    `;
  }

  // 8. Proposal Financial Summary
  if (dom.propSubtotalVal) {
    dom.propSubtotalVal.innerHTML = `<bdi>${formatCurrency(quote.financials.grossTotal)} ₪</bdi>`;
  }

  if (dom.propDiscountRow) {
    if (quote.financials.discount.amount > 0) {
      dom.propDiscountRow.classList.remove('hidden');
      if (dom.propDiscountVal) {
        dom.propDiscountVal.innerHTML = `<bdi>${formatCurrency(quote.financials.discount.amount)} ₪</bdi>`;
      }
      if (dom.propDiscountLabel && quote.financials.discount.reason) {
        dom.propDiscountLabel.textContent = `${config.labels.grandTotal ? 'Discount' : 'Скидка'} (${quote.financials.discount.reason})`;
      }
    } else {
      dom.propDiscountRow.classList.add('hidden');
    }
  }

  if (dom.propVatVal) {
    dom.propVatVal.innerHTML = `<bdi>${formatCurrency(quote.financials.vatAmount)} ₪</bdi>`;
  }
  if (dom.propTotalLabel) dom.propTotalLabel.textContent = config.labels.grandTotal;
  if (dom.propGrandTotalVal) {
    dom.propGrandTotalVal.innerHTML = `<bdi>${formatCurrency(quote.financials.grandTotal)} ₪</bdi>`;
  }

  if (dom.propWhatsAppConfirmBtn) {
    dom.propWhatsAppConfirmBtn.href = generateQuoteWhatsAppUrl(quote, config.lang);
  }

  // 9. View Mode Toggle
  if (state.viewMode === 'client') {
    dom.builderSection?.classList.add('hidden');
    dom.clientProposalSection?.classList.remove('hidden');
    dom.mobileStickyBar?.classList.add('hidden');
    if (dom.viewModeIndicator) dom.viewModeIndicator.textContent = config.labels.badgeClientView;
    if (dom.quoteStatusBadge) dom.quoteStatusBadge.textContent = config.labels.grandTotal;
    if (dom.pageMainHeading) {
      dom.pageMainHeading.textContent =
        quote.client.venueName || config.labels.defaultHeading || 'Production Quote';
    }
  } else {
    dom.clientProposalSection?.classList.add('hidden');
    dom.builderSection?.classList.remove('hidden');
    dom.mobileStickyBar?.classList.remove('hidden');
    if (dom.viewModeIndicator) dom.viewModeIndicator.textContent = config.labels.badgeProducer;
    if (dom.quoteStatusBadge) dom.quoteStatusBadge.textContent = config.labels.badgeEstimate;
    if (dom.pageMainHeading) {
      dom.pageMainHeading.textContent = config.labels.defaultHeading || 'Production Quote & Cost Calculator';
    }
  }
}
