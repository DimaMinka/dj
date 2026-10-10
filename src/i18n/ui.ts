export const defaultLang = 'en';

export const languages = {
  en: { label: 'English', dir: 'ltr' },
  ru: { label: 'Русский', dir: 'ltr' },
  he: { label: 'עברית', dir: 'rtl' },
} as const;

export type SupportedLang = keyof typeof languages;

export const ui = {
  en: {
    // Header
    artistName: 'DJ DIMA MINKA',
    coordinates: "33°05'N 35°30'E",
    nightResonance: 'Night Resonance',
    dayResonance: 'Day Resonance',
    dayModeBtn: 'Day',
    nightModeBtn: 'Night',
    
    // Sonic Portal / Hero
    preludeTag: 'Official Artist Experience • Intro',
    heroTitlePrefix: 'ATMOSPHERIC',
    heroTitleAccent: 'SOUND & LIGHT ARCHITECTURE',
    heroManifesto: 'Welcome to the official sanctuary of DJ Dima Minka. Explore bespoke melodic house sets, 12+ custom wireless light installations, and site-specific soundscapes crafted for private villas, vineyards, and mountain retreats.',
    frequencyBadge: '432 Hz',
    
    // Gateway Button
    gatewayTouch: 'ENTER THE EXPERIENCE',
    gatewayHoldInstruction: 'Hold to Explore Sets, Light Rig & Booking',
    gatewayHint: 'Headphones recommended • Live audio preview & visual portfolio inside',
    footerMeta: 'SOUND CURATION • BESPOKE 12+ LIGHT RIG • PRIVATE RETREATS & BOUTIQUE EVENTS',
  },
  ru: {
    artistName: 'DJ DIMA MINKA',
    coordinates: "33°05'N 35°30'E",
    nightResonance: 'Ночной резонанс',
    dayResonance: 'Дневной резонанс',
    dayModeBtn: 'День',
    nightModeBtn: 'Ночь',
    
    preludeTag: 'Официальный сайт артиста • Интро',
    heroTitlePrefix: 'АРХИТЕКТУРА',
    heroTitleAccent: 'ЗВУКА И СВЕТА',
    heroManifesto: 'Добро пожаловать в официальное пространство DJ Dima Minka. Авторские сеты Melodic House & Techno, комплект из 12+ беспроводных световых приборов и сайт-специфичный звук для частных вилл, виноградников и уединённых ретритов.',
    frequencyBadge: '432 Гц',
    
    gatewayTouch: 'ВОЙТИ В ПРОСТРАНСТВО',
    gatewayHoldInstruction: 'Удерживайте для перехода к сетам, свету и букингу',
    gatewayHint: 'Рекомендуется в наушниках • Внутри аудио-превью и портфолио сетапов',
    footerMeta: 'КУРАТОРСТВО ЗВУКА • 12+ СВЕТОВЫХ ПРИБОРОВ • ЗАКРЫТЫЕ МЕРОПРИЯТИЯ И ВИЛЛЫ',
  },
  he: {
    artistName: 'DJ DIMA MINKA',
    coordinates: "33°05'N 35°30'E",
    nightResonance: 'תהודת לילה',
    dayResonance: 'תהודת יום',
    dayModeBtn: 'יום',
    nightModeBtn: 'לילה',
    
    preludeTag: 'האתר הרשמי של האמן • פתיח',
    heroTitlePrefix: 'אדריכלות של',
    heroTitleAccent: 'סאונד ותאורה',
    heroManifesto: 'ברוכים הבאים למרחב הרשמי של דיג׳יי דימה מינקה. סטים ייחודיים של מלודיק האוס, מערך של 12+ גופי תאורה אלחוטיים והתאמה אקוסטית לווילות פרטיות, כרמים ואירועי בוטיק.',
    frequencyBadge: '432 Hz',
    
    gatewayTouch: 'כניסה למרחב',
    gatewayHoldInstruction: 'החזק כדי לגלות סטים, תאורה והזמנות',
    gatewayHint: 'מומלץ באוזניות • בפנים הדגמות סאונד ותיק עבודות',
    footerMeta: 'אוצרות סאונד • מערך 12+ גופי תאורה • אירועי יוקרה ונופש פרטי',
  },
} as const;

export function useTranslations(lang: SupportedLang = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}
