import { defaultLang, type SupportedLang } from '../i18n/ui';

export const SITE_CONTACTS = {
  phone: '+972546885244',
  whatsappRaw: '972546885244',
  email: 'dj@dimaminka.com',
  telegramUser: 'dimaminka',
  telegramUrl: 'https://t.me/dimaminka',
  telegramChannelUser: 'djdimaminka',
  telegramChannelUrl: 'https://t.me/djdimaminka',
  instagramUser: 'dimaminka',
  instagramUrl: 'https://instagram.com/dimaminka',
  youtubeUser: 'dimaminka',
  youtubeUrl: 'https://www.youtube.com/@dimaminka',
  soundcloudUser: 'dimaminka',
  soundcloudUrl: 'https://soundcloud.com/dimaminka',
  spotifyUrl: 'https://spotify.com',
  whatsappPrefills: {
    en: 'Hi, I would like to inquire about booking a date for an event',
    ru: 'Привет, я хочу узнать про бронирование даты для события',
    he: 'היי, אני רוצה לברר פרטים על סגירת תאריך לאירוע',
  },
} as const;

export function getWhatsAppLink(lang: SupportedLang = defaultLang): string {
  const text = SITE_CONTACTS.whatsappPrefills[lang] || SITE_CONTACTS.whatsappPrefills.en;
  return `https://wa.me/${SITE_CONTACTS.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppContextualLink(spaceName: string, lang: SupportedLang = defaultLang): string {
  let text = '';
  if (lang === 'ru') {
    text = `Привет, Dima! Понравился сетап пространства "${spaceName}". Хочу обсудить детали и свободные даты для нашего вечера.`;
  } else if (lang === 'he') {
    text = `היי דימה, אהבתי מאוד את המערך של "${spaceName}". אשמח לבדוק תאריכים פנויים ופרטים לאירוע שלנו.`;
  } else {
    text = `Hi Dima! I really loved the "${spaceName}" setup. I'd like to check available dates and discuss details for our event.`;
  }
  return `https://wa.me/${SITE_CONTACTS.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
