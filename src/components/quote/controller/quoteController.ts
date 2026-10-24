import { decodeQuoteFromHash, getShareableQuoteUrl } from '../../../utils/quoteEncoder';
import type { ClientQuoteConfig } from './quoteTypes';
import { cacheDomElements } from './quoteDom';
import {
  createInitialState,
  applyPresetToState,
  applyDecodedQuoteToState,
} from './quoteState';
import { computeQuote, syncControlsToDom, renderApp } from './quoteRenderer';

export function initQuoteApp(): void {
  const appEl = document.getElementById('quoteApp');
  if (!appEl) return;

  const rawConfig = appEl.getAttribute('data-config');
  if (!rawConfig) return;

  const config: ClientQuoteConfig = JSON.parse(rawConfig);
  const dom = cacheDomElements();
  const state = createInitialState(config);

  let toastTimer: number | null = null;
  function showToast(msg: string): void {
    if (!dom.toastMessage || !dom.toastText) return;
    dom.toastText.textContent = msg;
    dom.toastMessage.classList.remove('hidden');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      dom.toastMessage?.classList.add('hidden');
    }, 2500);
  }

  // 1. Process URL Hash (Saved Quote)
  function processUrlHash(): void {
    const hash = window.location.hash;
    if (hash && hash.includes('q=')) {
      const decoded = decodeQuoteFromHash(hash);
      if (decoded) {
        applyDecodedQuoteToState(state, decoded, config);
        syncControlsToDom(state, dom, config);
        renderApp(state, dom, config);
        return;
      }
    }
  }

  // 2. Setup Accordions
  function setupAccordion(btnId: string, contentId: string): void {
    const btn = document.getElementById(btnId);
    const content = document.getElementById(contentId);
    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isExpanded));
      content.classList.toggle('hidden', isExpanded);
      const arrow = btn.querySelector('.accordion-arrow');
      if (arrow) {
        arrow.textContent = isExpanded ? 'expand_more' : 'expand_less';
      }
    });
  }

  // 3. Attach Event Listeners
  dom.inputEventName?.addEventListener('input', (e) => {
    state.eventName = (e.target as HTMLInputElement).value;
    renderApp(state, dom, config);
  });

  dom.inputClientName?.addEventListener('input', (e) => {
    state.clientName = (e.target as HTMLInputElement).value;
    renderApp(state, dom, config);
  });

  dom.inputEventDate?.addEventListener('change', (e) => {
    state.eventDate = (e.target as HTMLInputElement).value;
    renderApp(state, dom, config);
  });

  dom.selectLocationZone?.addEventListener('change', (e) => {
    state.locationZone = (e.target as HTMLSelectElement).value;
    renderApp(state, dom, config);
  });

  dom.sliderDjHours?.addEventListener('input', (e) => {
    state.djHours = Number((e.target as HTMLInputElement).value);
    renderApp(state, dom, config);
  });

  dom.sliderPreprodHours?.addEventListener('input', (e) => {
    state.preprodHours = Number((e.target as HTMLInputElement).value);
    renderApp(state, dom, config);
  });

  // Trips Selector
  document.querySelectorAll<HTMLButtonElement>('.trip-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled-preset')) {
        showToast(config.labels.minTripsWarning || 'Requires minimum 2 vehicle trips');
        return;
      }
      const trips = Number(btn.getAttribute('data-trips') || 1);
      state.tripsCount = trips;

      document.querySelectorAll('.trip-toggle-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderApp(state, dom, config);
    });
  });

  // Rental Days Selector
  document.querySelectorAll<HTMLButtonElement>('.day-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const days = Number(btn.getAttribute('data-days') || 1);
      state.daysCount = days;

      document.querySelectorAll('.day-toggle-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderApp(state, dom, config);
    });
  });

  // Equipment Catalog Toggle Buttons
  document.querySelectorAll<HTMLButtonElement>('.toggle-equip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-id');
      if (!itemId) return;
      const defaultQty = Number(btn.getAttribute('data-qty') || 1);
      const current = state.itemsQty[itemId] || 0;

      if (current > 0) {
        state.itemsQty[itemId] = 0;
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        const icon = btn.querySelector('.toggle-icon');
        const text = btn.querySelector('.toggle-text');
        if (icon) icon.textContent = 'add';
        if (text) text.textContent = config.labels.addBtn;
      } else {
        state.itemsQty[itemId] = defaultQty;
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        const icon = btn.querySelector('.toggle-icon');
        const text = btn.querySelector('.toggle-text');
        if (icon) icon.textContent = 'check';
        if (text) text.textContent = config.labels.removeBtn;
      }

      renderApp(state, dom, config);
    });
  });

  // Presets Selector
  document.querySelectorAll<HTMLButtonElement>('.preset-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      const presetId = btn.getAttribute('data-preset-id');
      const matched = config.presets.find((p) => p.id === presetId);
      if (!matched) return;

      document.querySelectorAll('.preset-pill').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');

      applyPresetToState(state, matched, config);
      syncControlsToDom(state, dom, config);
      renderApp(state, dom, config);

      showToast(`${config.labels.presetLoadedToast || 'Preset loaded'}: ${matched.name[config.lang]}`);
    });
  });

  // Discount Tabs
  document.querySelectorAll<HTMLButtonElement>('.discount-type-tabs .tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = (btn.getAttribute('data-type') || 'percentage') as 'percentage' | 'fixed';
      const wasActive = btn.classList.contains('active');

      if (wasActive) {
        btn.classList.remove('active');
        state.discountType = 'none';
        state.discountVal = 0;
        dom.discountInputsRow?.classList.add('hidden');
      } else {
        document.querySelectorAll('.discount-type-tabs .tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.discountType = type;
        dom.discountInputsRow?.classList.remove('hidden');
        if (!state.discountVal) {
          state.discountVal = type === 'percentage' ? 10 : 200;
          if (dom.inputDiscountVal) dom.inputDiscountVal.value = String(state.discountVal);
        }
      }
      renderApp(state, dom, config);
    });
  });

  dom.inputDiscountVal?.addEventListener('input', (e) => {
    state.discountVal = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    renderApp(state, dom, config);
  });

  dom.inputDiscountReason?.addEventListener('input', (e) => {
    state.discountReason = (e.target as HTMLInputElement).value;
    renderApp(state, dom, config);
  });

  // Copy Shareable Link Action
  async function copyShareableLink(): Promise<void> {
    const quote = computeQuote(state, config);
    const fullUrl = getShareableQuoteUrl(quote, window.location.origin);
    try {
      await navigator.clipboard.writeText(fullUrl);
      showToast(config.labels.copiedLink);
    } catch {
      prompt('Copy link:', fullUrl);
    }
  }

  document.getElementById('btnShareClientLink')?.addEventListener('click', copyShareableLink);
  document.getElementById('propShareLinkBtn')?.addEventListener('click', copyShareableLink);

  // Copy JSON Snapshot Action
  async function copyJsonSnapshot(): Promise<void> {
    const quote = computeQuote(state, config);
    const jsonStr = JSON.stringify(quote, null, 2);
    try {
      await navigator.clipboard.writeText(jsonStr);
      showToast(config.labels.copiedJson);
    } catch {
      prompt('Copy JSON:', jsonStr);
    }
  }

  document.getElementById('btnCopyJsonSnapshot')?.addEventListener('click', copyJsonSnapshot);

  // View Mode Switchers
  document.getElementById('btnPreviewProposal')?.addEventListener('click', () => {
    state.viewMode = 'client';
    renderApp(state, dom, config);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('btnEditQuote')?.addEventListener('click', () => {
    state.viewMode = 'builder';
    syncControlsToDom(state, dom, config);
    renderApp(state, dom, config);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Accordion Initializations
  setupAccordion('togglePropEquip', 'propEquipContent');
  setupAccordion('togglePropServices', 'propServicesContent');

  // Boot: hashcheck or initial preset render
  processUrlHash();
  syncControlsToDom(state, dom, config);
  renderApp(state, dom, config);

  // Listen to popstate/hashchange
  window.addEventListener('hashchange', () => {
    processUrlHash();
  });
}
