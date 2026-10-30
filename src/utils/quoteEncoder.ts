import LZString from 'lz-string';
import type { QuoteSnapshot, QuoteLang } from '../types/quote';
import { SITE_CONTACTS } from '../data/contacts';
import { formatCurrency } from './quoteCalculator';

/**
 * Encodes a QuoteSnapshot into a compact, URI-safe hash string for the URL.
 * Example return: "q=N4Igxg9g..."
 */
export function encodeQuoteToHash(quote: QuoteSnapshot): string {
  const json = JSON.stringify(quote);
  const compressed = LZString.compressToEncodedURIComponent(json);
  return `q=${compressed}`;
}

/**
 * Decodes a URI hash string back into a QuoteSnapshot.
 * Returns null if the hash is missing, invalid, or corrupted.
 */
export function decodeQuoteFromHash(hash: string): QuoteSnapshot | null {
  if (!hash) return null;

  // Clean leading '#' or '?'
  const clean = hash.replace(/^[#?]/, '');
  const match = clean.match(/(?:^|&)q=([^&]+)/);
  if (!match || !match[1]) return null;

  try {
    const rawCompressed = match[1];
    const decompressed = LZString.decompressFromEncodedURIComponent(rawCompressed);
    if (!decompressed) return null;

    const parsed = JSON.parse(decompressed);
    if (!parsed || parsed.v !== 1 || !parsed.client || !parsed.financials) {
      return null;
    }
    return parsed as QuoteSnapshot;
  } catch (err) {
    console.error('Failed to decode quote from hash:', err);
    return null;
  }
}

/**
 * Generates an instant WhatsApp confirmation link for the client with pre-filled message.
 */
export function generateQuoteWhatsAppUrl(
  quote: QuoteSnapshot,
  lang: QuoteLang,
  customSiteUrl?: string
): string {
  const phone = SITE_CONTACTS.whatsappRaw;
  const venue = quote.client.venueName || (lang === 'he' ? 'האירוע שלנו' : lang === 'ru' ? 'нашего события' : 'our event');
  const total = formatCurrency(quote.financials.grandTotal);
  const dateStr = quote.client.eventDate ? ` (${quote.client.eventDate})` : '';

  let message = '';
  if (lang === 'he') {
    message = `שלום דימה, קיבלתי את הצעת המחיר לאירוע ב-${venue}${dateStr} (סה״כ לתשלום: ${total} ₪). אני מאשר/ת את הפרטים!`;
  } else if (lang === 'ru') {
    message = `Привет, Дима! Получил(а) смету для события в ${venue}${dateStr} (Итого к оплате: ${total} ₪). Подтверждаю детали!`;
  } else {
    message = `Hi Dima! I received the production quote for the event at ${venue}${dateStr} (Total Due: ${total} ₪). I confirm the details!`;
  }

  if (customSiteUrl) {
    message += `\n${customSiteUrl}`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a full shareable URL containing the encoded quote hash.
 */
export function getShareableQuoteUrl(
  quote: QuoteSnapshot,
  baseUrl: string = 'https://dj.dimaminka.com'
): string {
  const langPrefix = quote.language === 'en' ? '' : `/${quote.language}`;
  const hash = encodeQuoteToHash(quote);
  return `${baseUrl}${langPrefix}/quote#${hash}`;
}

const BASE62_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Returns canonical representation of a quote for hashing.
 * Excludes transient runtime properties (temporary id, createdAt, validUntil)
 * and sorts equipment items by id to ensure deterministic hash generation.
 */
export function getCanonicalQuoteString(quote: QuoteSnapshot): string {
  const canonical = {
    v: 1,
    language: quote.language || 'en',
    client: {
      name: quote.client?.name?.trim() || '',
      phone: quote.client?.phone?.trim() || '',
      eventDate: quote.client?.eventDate || '',
      venueName: quote.client?.venueName?.trim() || '',
      locationZone: quote.client?.locationZone || 'upper_galilee',
    },
    equipment: {
      daysCount: quote.equipment?.daysCount || 1,
      items: (quote.equipment?.items || [])
        .filter((it) => it.quantity > 0)
        .map((it) => ({
          id: it.id,
          quantity: it.quantity,
          unitPrice: it.unitPrice,
        }))
        .sort((a, b) => a.id.localeCompare(b.id)),
    },
    services: {
      djPerformanceHours: quote.services?.djPerformanceHours || 0,
      djRatePerHour: quote.services?.djRatePerHour || 0,
      preprodHours: quote.services?.preprodHours || 0,
      preprodRatePerHour: quote.services?.preprodRatePerHour || 0,
      setupTeardownFee: quote.services?.setupTeardownFee || 0,
      logisticsFee: quote.services?.logisticsFee || 0,
    },
    financials: {
      grossTotal: quote.financials?.grossTotal || 0,
      discount: {
        type: quote.financials?.discount?.type || 'fixed',
        value: quote.financials?.discount?.value || 0,
        amount: quote.financials?.discount?.amount || 0,
        reason: quote.financials?.discount?.reason?.trim() || '',
      },
      netTotal: quote.financials?.netTotal || 0,
      applyVat: Boolean(quote.financials?.applyVat),
      grandTotal: quote.financials?.grandTotal || 0,
    },
    notes: quote.notes?.trim() || '',
  };

  return JSON.stringify(canonical);
}

/**
 * Generates a deterministic 7-character Base62 ID from the canonical SHA-256 hash.
 */
export async function generateQuoteShortId(quote: QuoteSnapshot): Promise<string> {
  const canonical = getCanonicalQuoteString(quote);
  const data = new TextEncoder().encode(canonical);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashBytes = new Uint8Array(hashBuffer);

  // Use the first 8 bytes (64-bit integer) to derive 7 Base62 characters
  let num = 0n;
  for (let i = 0; i < 8; i++) {
    num = (num << 8n) | BigInt(hashBytes[i]);
  }

  let shortId = '';
  for (let i = 0; i < 7; i++) {
    shortId += BASE62_CHARS[Number(num % 62n)];
    num /= 62n;
  }

  return shortId;
}

/**
 * Generates a clean short URL for the quote (e.g. /q/7xK9p2 or /ru/q/7xK9p2).
 */
export function getShortQuoteUrl(
  shortId: string,
  lang: QuoteLang,
  baseUrl: string = 'https://dj.dimaminka.com'
): string {
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  return `${baseUrl}${langPrefix}/q/${shortId}`;
}

/**
 * Safely fetches and validates a QuoteSnapshot from Cloudflare KV.
 * Returns null if the key is missing, corrupted, or does not conform to the schema.
 */
export async function loadQuoteFromKv(
  kv: any,
  id: string
): Promise<QuoteSnapshot | null> {
  if (!kv || typeof kv.get !== 'function' || !id) {
    return null;
  }
  try {
    const raw = await kv.get(id);
    if (!raw) return null;
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (
      parsed &&
      parsed.v === 1 &&
      parsed.client &&
      parsed.financials &&
      parsed.equipment &&
      Array.isArray(parsed.equipment.items) &&
      parsed.services
    ) {
      return parsed as QuoteSnapshot;
    }
    return null;
  } catch (err) {
    console.error(`[loadQuoteFromKv] Error fetching quote "${id}":`, err);
    return null;
  }
}

