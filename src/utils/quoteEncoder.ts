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
