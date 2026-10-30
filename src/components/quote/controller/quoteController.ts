import { decodeQuoteFromHash, getShareableQuoteUrl, generateQuoteWhatsAppUrl } from '../../../utils/quoteEncoder';
import { actions } from 'astro:actions';
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

  let cachedShortUrl: string | null = null;
  let shortUrlPromise: Promise<string> | null = null;

  function invalidateShortUrl(): void {
    cachedShortUrl = null;
    shortUrlPromise = null;
  }

  function syncLanguageLinks(): void {
    const btnEn = document.getElementById('headerLangBtnEn') as HTMLAnchorElement | null;
    const btnRu = document.getElementById('headerLangBtnRu') as HTMLAnchorElement | null;
    const btnHe = document.getElementById('headerLangBtnHe') as HTMLAnchorElement | null;
    if (!btnEn && !btnRu && !btnHe) return;

    if (cachedShortUrl) {
      const match = cachedShortUrl.match(/\/q\/([0-9a-zA-Z_-]+)/);
      if (match) {
        const sid = match[1];
        if (btnEn) { btnEn.pathname = `/q/${sid}`; btnEn.hash = ''; }
        if (btnRu) { btnRu.pathname = `/ru/q/${sid}`; btnRu.hash = ''; }
        if (btnHe) { btnHe.pathname = `/he/q/${sid}`; btnHe.hash = ''; }
        return;
      }
    }

    // In builder mode with uncommitted edits: preserve live edits across language switch via hash
    const quote = computeQuote(state, config);
    const hash = '#' + encodeQuoteToHash(quote);
    if (btnEn) { btnEn.pathname = '/quote'; btnEn.hash = hash; }
    if (btnRu) { btnRu.pathname = '/ru/quote'; btnRu.hash = hash; }
    if (btnHe) { btnHe.pathname = '/he/quote'; btnHe.hash = hash; }
  }

  function triggerRender(): void {
    renderApp(state, dom, config, cachedShortUrl);
    syncLanguageLinks();
  }

  // Hydrate from SSR props if loaded on /q/:id route
  const shortIdAttr = appEl.getAttribute('data-short-id');
  if (shortIdAttr) {
    const langPrefix = config.lang === 'en' ? '' : `/${config.lang}`;
    cachedShortUrl = `${window.location.origin}${langPrefix}/q/${shortIdAttr}`;
  }

  const initialQuoteAttr = appEl.getAttribute('data-initial-quote');
  if (initialQuoteAttr) {
    try {
      const parsedQuote = JSON.parse(initialQuoteAttr);
      if (parsedQuote && parsedQuote.v === 1) {
        applyDecodedQuoteToState(state, parsedQuote, config);
        state.viewMode = 'client';
      }
    } catch (err) {
      console.error('Failed to parse data-initial-quote:', err);
    }
  }

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

  // 1. Process URL Hash (Legacy Saved Quote via #q=...)
  function processUrlHash(): void {
    const hash = window.location.hash;
    if (hash && hash.includes('q=')) {
      const decoded = decodeQuoteFromHash(hash);
      if (decoded) {
        applyDecodedQuoteToState(state, decoded, config);
        invalidateShortUrl();
        syncControlsToDom(state, dom, config);
        triggerRender();
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
    invalidateShortUrl();
    triggerRender();
  });

  dom.inputClientName?.addEventListener('input', (e) => {
    state.clientName = (e.target as HTMLInputElement).value;
    invalidateShortUrl();
    triggerRender();
  });

  dom.inputEventDate?.addEventListener('change', (e) => {
    state.eventDate = (e.target as HTMLInputElement).value;
    invalidateShortUrl();
    triggerRender();
  });

  dom.selectLocationZone?.addEventListener('change', (e) => {
    state.locationZone = (e.target as HTMLSelectElement).value;
    invalidateShortUrl();
    triggerRender();
  });

  dom.sliderDjHours?.addEventListener('input', (e) => {
    state.djHours = Number((e.target as HTMLInputElement).value);
    invalidateShortUrl();
    triggerRender();
  });

  dom.sliderPreprodHours?.addEventListener('input', (e) => {
    state.preprodHours = Number((e.target as HTMLInputElement).value);
    invalidateShortUrl();
    triggerRender();
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
      invalidateShortUrl();
      triggerRender();
    });
  });

  // Rental Days Selector
  document.querySelectorAll<HTMLButtonElement>('.day-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const days = Number(btn.getAttribute('data-days') || 1);
      state.daysCount = days;

      document.querySelectorAll('.day-toggle-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      invalidateShortUrl();
      triggerRender();
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
        btn.setAttribute('aria-label', config.labels.addBtn);
        btn.setAttribute('title', config.labels.addBtn);
        const icon = btn.querySelector('.toggle-icon');
        const text = btn.querySelector('.toggle-text');
        if (icon) icon.textContent = 'add';
        if (text) text.textContent = config.labels.addBtn;
      } else {
        state.itemsQty[itemId] = defaultQty;
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('aria-label', config.labels.removeBtn);
        btn.setAttribute('title', config.labels.removeBtn);
        const icon = btn.querySelector('.toggle-icon');
        const text = btn.querySelector('.toggle-text');
        if (icon) icon.textContent = 'close';
        if (text) text.textContent = config.labels.removeBtn;
      }

      invalidateShortUrl();
      triggerRender();
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
      invalidateShortUrl();
      syncControlsToDom(state, dom, config);
      triggerRender();

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
      invalidateShortUrl();
      triggerRender();
    });
  });

  dom.inputDiscountVal?.addEventListener('input', (e) => {
    state.discountVal = Math.max(0, Number((e.target as HTMLInputElement).value) || 0);
    invalidateShortUrl();
    triggerRender();
  });

  dom.inputDiscountReason?.addEventListener('input', (e) => {
    state.discountReason = (e.target as HTMLInputElement).value;
    invalidateShortUrl();
    triggerRender();
  });

  // Asynchronous Short URL generator with KV storage and fallback
  async function getOrFetchShortUrl(): Promise<string> {
    if (cachedShortUrl) {
      return cachedShortUrl;
    }
    if (shortUrlPromise) {
      return shortUrlPromise;
    }

    const quote = computeQuote(state, config);
    const fallbackUrl = getShareableQuoteUrl(quote, window.location.origin);

    shortUrlPromise = (async () => {
      try {
        const result = await actions.createShortQuote({ quote: quote as any });
        if (result.data?.path) {
          cachedShortUrl = `${window.location.origin}${result.data.path}`;
          if (typeof window !== 'undefined' && window.history?.replaceState) {
            window.history.replaceState(null, '', result.data.path);
            window.dispatchEvent(
              new CustomEvent('dj:quote-url-change', {
                detail: { shortId: result.data.id, path: result.data.path },
              })
            );
          }
          triggerRender();
          return cachedShortUrl;
        }
        console.warn('[copyShareableLink] Short quote creation returned error:', result.error);
        return fallbackUrl;
      } catch (err) {
        console.warn('[copyShareableLink] Failed to call createShortQuote, falling back to hash:', err);
        return fallbackUrl;
      } finally {
        shortUrlPromise = null;
      }
    })();

    return shortUrlPromise;
  }

  // Copy Shareable Link Action (Safari-safe async ClipboardItem)
  async function copyShareableLink(): Promise<void> {
    const quote = computeQuote(state, config);
    const fallbackUrl = getShareableQuoteUrl(quote, window.location.origin);

    // Modern Safari / Chromium: ClipboardItem with Promise<Blob> maintains user activation
    if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
      try {
        const urlPromise = getOrFetchShortUrl();
        const item = new ClipboardItem({
          'text/plain': urlPromise
            .catch(() => fallbackUrl)
            .then((url) => new Blob([url], { type: 'text/plain' })),
        });
        await navigator.clipboard.write([item]);
        showToast(config.labels.copiedLink);
        return;
      } catch (err) {
        console.warn('ClipboardItem write failed, trying writeText fallback:', err);
      }
    }

    // Classic writeText fallback
    try {
      const url = await getOrFetchShortUrl().catch(() => fallbackUrl);
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        showToast(config.labels.copiedLink);
      } else {
        prompt('Copy link:', url);
      }
    } catch {
      prompt('Copy link:', fallbackUrl);
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
  const switchToClientView = () => {
    state.viewMode = 'client';
    triggerRender();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Background prefetch short URL for instant WhatsApp confirmation and link copying
    if (!cachedShortUrl) {
      getOrFetchShortUrl().catch(() => {});
    }
  };

  document.getElementById('btnPreviewProposal')?.addEventListener('click', switchToClientView);
  dom.mobilePreviewBtn?.addEventListener('click', switchToClientView);

  document.getElementById('btnEditQuote')?.addEventListener('click', () => {
    state.viewMode = 'builder';
    syncControlsToDom(state, dom, config);
    triggerRender();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Accordion Initializations
  setupAccordion('togglePropEquip', 'propEquipContent');
  setupAccordion('togglePropServices', 'propServicesContent');

  // Boot: if loaded without SSR short ID, check URL hash; otherwise ignore stale hash
  if (!shortIdAttr) {
    processUrlHash();
  }
  syncControlsToDom(state, dom, config);
  triggerRender();

  // If booted into client view without a short URL (e.g. from #q=...), prefetch short link
  if (state.viewMode === 'client' && !cachedShortUrl) {
    getOrFetchShortUrl().catch(() => {});
  }

  // Listen to popstate/hashchange
  window.addEventListener('hashchange', () => {
    if (!shortIdAttr) {
      processUrlHash();
    }
  });
}
