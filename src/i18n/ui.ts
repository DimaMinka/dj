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
    artistDescriptor: 'Galilee • Sound & Light',
    coordinates: "33°05'N 35°30'E",
    navAbout: 'About',
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

    // Vibe Space / Spaces Carousel
    vibeTitle: 'SOUND WORLDS',
    vibeSubtitle: 'Immersive Sonic Spaces',
    vibeBackToIntro: 'Gateway',
    swipeHint: 'Swipe to journey through spaces',
    experienceSetupBtn: 'View Stage & Light Setup',
    listenVibeBtn: 'Feel the Resonance',
    setupDrawerTitle: 'Atmospheric Architecture & Rig',
    setupDrawerSubtitle: 'Site-specific acoustics and wireless light choreography',
    setupLights: 'Lighting Rig',
    setupSound: 'Acoustic Curation',
    setupAudience: 'Ideal Setting & Scale',
    setupCloseBtn: 'Close Specification',
    dockPlaying: 'Resonating Live',
    dockBpm: 'BPM',
  },
  ru: {
    artistName: 'DJ DIMA MINKA',
    artistDescriptor: 'Галилея • Звук и свет',
    coordinates: "33°05'N 35°30'E",
    navAbout: 'Обо мне',
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

    // Vibe Space / Spaces Carousel
    vibeTitle: 'МИРЫ ЗВУКА',
    vibeSubtitle: 'Иммерсивные пространства вайба',
    vibeBackToIntro: 'К Вратам',
    swipeHint: 'Свайпайте для перехода между мирами',
    experienceSetupBtn: 'Сетап и световая инсталляция',
    listenVibeBtn: 'Ощутить резонанс',
    setupDrawerTitle: 'Архитектура света и звука',
    setupDrawerSubtitle: 'Сайт-специфичная акустика и беспроводная хореография света',
    setupLights: 'Световой сетап',
    setupSound: 'Кураторство звука',
    setupAudience: 'Локация и масштаб',
    setupCloseBtn: 'Закрыть спецификацию',
    dockPlaying: 'В эфире пространства',
    dockBpm: 'BPM',
  },
  he: {
    artistName: 'DJ DIMA MINKA',
    artistDescriptor: 'הגליל • סאונד ותאורה',
    coordinates: "33°05'N 35°30'E",
    navAbout: 'אודות',
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

    // Vibe Space / Spaces Carousel
    vibeTitle: 'עולמות סאונד',
    vibeSubtitle: 'מרחבי תהודה אימרסיביים',
    vibeBackToIntro: 'לשער',
    swipeHint: 'החלק למעבר בין מרחבים',
    experienceSetupBtn: 'מערך במה ותאורה',
    listenVibeBtn: 'להרגיש את התהודה',
    setupDrawerTitle: 'אדריכלות סאונד ותאורה',
    setupDrawerSubtitle: 'אקוסטיקה מותאמת אישית וכוריאוגרפיית אור אלחוטית',
    setupLights: 'מערך תאורה',
    setupSound: 'אוצרות סאונד',
    setupAudience: 'סביבה וקנה מידה',
    setupCloseBtn: 'סגור מפרט',
    dockPlaying: 'מתנגן במרחב',
    dockBpm: 'BPM',
  },
} as const;

export function useTranslations(lang: SupportedLang = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}
