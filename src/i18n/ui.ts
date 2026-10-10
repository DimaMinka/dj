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
    coordinates: "46°29'N 09°50'E",
    nightResonance: 'Night Resonance',
    dayResonance: 'Day Resonance',
    dayModeBtn: 'Day',
    nightModeBtn: 'Night',
    
    // Sonic Portal / Hero
    preludeTag: 'Sensory Prelude',
    heroTitlePrefix: 'IMMERSION',
    heroTitleAccent: 'INTO FREQUENCY',
    heroManifesto: 'Every set is a dialogue with space. Light, landscape architecture, and sound, handcrafted for a single unrepeatable moment.',
    frequencyBadge: '432 Hz',
    
    // Gateway Button
    gatewayTouch: 'TOUCH THE REALM',
    gatewayHoldInstruction: 'Hold to Enter Sanctuary',
    gatewayHint: 'Recommended with headphones • Custom tuned sound & light',
    footerMeta: 'SITE-SPECIFIC ACOUSTIC CURATION • BESPOKE LIGHT RIG • CURATED IN HARMONY',
  },
  ru: {
    artistName: 'DJ DIMA MINKA',
    coordinates: "46°29'N 09°50'E",
    nightResonance: 'Ночной резонанс',
    dayResonance: 'Дневной резонанс',
    dayModeBtn: 'День',
    nightModeBtn: 'Ночь',
    
    preludeTag: 'Сенсорный пролог',
    heroTitlePrefix: 'ПОГРУЖЕНИЕ',
    heroTitleAccent: 'В ЧАСТОТУ',
    heroManifesto: 'Каждый сет — это диалог с пространством. Свет, архитектура ландшафта и звук, созданные вручную для одного неповторимого момента.',
    frequencyBadge: '432 Гц',
    
    gatewayTouch: 'ПРИКОСНУТЬСЯ К МИРУ',
    gatewayHoldInstruction: 'Удерживайте для входа в святилище',
    gatewayHint: 'Рекомендуется в наушниках • Звук и свет настроены вручную',
    footerMeta: 'САЙТ-СПЕЦИФИЧНЫЙ САУНД-ДИЗАЙН • АВТОРСКИЙ СВЕТ • ГАРМОНИЯ ПРОСТРАНСТВА',
  },
  he: {
    artistName: 'DJ DIMA MINKA',
    coordinates: "46°29'N 09°50'E",
    nightResonance: 'תהודת לילה',
    dayResonance: 'תהודת יום',
    dayModeBtn: 'יום',
    nightModeBtn: 'לילה',
    
    preludeTag: 'פרלוד תחושתי',
    heroTitlePrefix: 'טבילה',
    heroTitleAccent: 'לתוך התדר',
    heroManifesto: 'כל סט הוא דיאלוג עם המרחב. תאורה, אדריכלות נוף וצליל, מותאמים בעבודת יד לרגע יחיד שאינו חוזר.',
    frequencyBadge: '432 Hz',
    
    gatewayTouch: 'לגעת במרחב',
    gatewayHoldInstruction: 'החזק כדי להיכנס למקדש הצליל',
    gatewayHint: 'מומלץ באוזניות • סאונד ותאורה מכוילים אישית',
    footerMeta: 'אוצרות אקוסטית מותאמת אתר • מערך תאורה ייעודי • בהרמוניה מוחלטת',
  },
} as const;

export function useTranslations(lang: SupportedLang = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}
