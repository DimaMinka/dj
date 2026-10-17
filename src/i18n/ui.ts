export const defaultLang = 'en';

export const languages = {
  en: { label: 'English', dir: 'ltr' },
  ru: { label: 'Русский', dir: 'ltr' },
  he: { label: 'עברית', dir: 'rtl' },
} as const;

export type SupportedLang = keyof typeof languages;

export const SITE_CONTACTS = {
  phone: '+972500000000',
  whatsappRaw: '972500000000',
  email: 'dima@minka.mk',
  telegramUser: 'minkamk',
  telegramUrl: 'https://t.me/minkamk',
  instagramUser: 'dima.minka',
  instagramUrl: 'https://instagram.com/dima.minka',
  soundcloudUrl: 'https://soundcloud.com',
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

export const ui = {
  en: {
    // Header
    artistName: 'DJ DIMA MINKA',
    artistDescriptor: 'Galilee • Sound & Light',
    coordinates: "33°05'N 35°30'E",
    navAbout: 'About',
    navVibes: 'Vibes',
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
    listenVibeBtn: 'Stay in the Vibe',
    stayInVibe: 'Stay in the Vibe',
    vibeSubmit: 'Send',
    vibeSending: 'Connecting...',
    vibeSuccess: 'In the vibe ✨',
    vibeEmailPlaceholder: 'your@email.com',
    vibeEmailError: 'Enter a valid email',
    setupDrawerTitle: 'Atmospheric Architecture & Rig',
    setupDrawerSubtitle: 'Site-specific acoustics and wireless light choreography',
    setupLights: 'Lighting Rig',
    setupSound: 'Acoustic Curation',
    setupAudience: 'Ideal Setting & Scale',
    setupCloseBtn: 'Close Specification',
    dockPlaying: 'Resonating Live',
    dockBpm: 'BPM',

    // --- About Page Translations ---
    aboutPageTitle: 'The Architecture of Frequency',
    aboutHeroBadgeGeo: 'Galilee & Golan Heights',
    aboutHeroBadgeFreq: '432 Hz Resonance',
    aboutHeroSubtitle: 'Bespoke Sound & Autonomous Light Installations for Private Events, Boutique Wineries & Retreats in Galilee & Golan Heights.',
    aboutCtaWhatsApp: 'WhatsApp Inquiry',
    aboutCtaSpecs: 'Sound & Light Rig',
    aboutCtaAudio: 'Sample Frequency',
    aboutCtaBrief: 'Send Event Brief',

    // Philosophy / Manifesto
    manifestoBadge: 'PHILOSOPHY & ACOUSTIC VISION',
    manifestoTitle: 'Sound as Invisible Architecture',
    manifestoP1: 'True sound does not overwhelm space — it reveals it. In the open landscapes of Upper Galilee, stone courtyards, and sunset vineyard terraces, acoustics must breathe with nature. My curations are calibrated to 432 Hz natural resonance, crafting an effortless emotional field free of acoustic fatigue.',
    manifestoP2: 'Together with a completely cable-free, battery-powered ambient lighting rig, every session transforms into a living, site-specific art installation that transitions organically from daylight warmth into deep night magic.',

    // Specifications & Rig
    specsBadge: 'TECHNICAL SPECIFICATIONS',
    specsTitle: 'Engineered Precision & Complete Autonomy',
    specsSubtitle: 'Designed for immaculate aesthetic beauty and zero cables in guest zones.',
    
    specSoundTitle: 'Sound Architecture',
    specSoundDesc: '432 Hz harmonic tuning, acoustic pressure modeled for stone halls and open hillsides without harsh frequencies.',
    specSoundItem1: 'Harmonic 432 Hz master calibration',
    specSoundItem2: 'Acoustic pressure modeling for open terraces',
    specSoundItem3: 'Zero ear fatigue during multi-hour sets',

    specLightTitle: '12+ Autonomous Light Rig',
    specLightDesc: 'IP65 waterproof wireless battery-powered fixtures. 8–12 hours uninterrupted runtime with zero cables on lawns.',
    specLightItem1: '12+ wireless IP65 fixtures (8–12h battery)',
    specLightItem2: 'Zero cables or trip hazards in guest areas',
    specLightItem3: 'Dynamic scene transitions: Sunset → Twilight → Night',

    specsRiderToggle: 'View Complete Hardware & DJ Rider',
    specsRiderConsole: 'Performance Console',
    specsRiderConsoleVal: 'Denon DJ Prime Standalone Engine (zero laptop reliance)',
    specsRiderDmx: 'DMX Choreography',
    specsRiderDmxVal: 'SoundSwitch Wireless DMX synced to key & frequency harmonics',
    specsRiderMoving: 'Moving Heads',
    specsRiderMovingVal: 'Compact 30W LED moving spot fixtures with custom organic gobos',
    specsRiderWash: 'Ambient Wash',
    specsRiderWashVal: 'Retro warm amber wash bars and wireless floor uplights',

    // Scope Packages
    packagesBadge: 'CURATED FORMATS',
    packagesTitle: 'Tailored Event Scopes',
    packagesSubtitle: 'Clear production tiers adapted to your setting, guest count, and timeline.',

    pkg1Title: 'Sunset & Wine Gathering',
    pkg1Scale: 'Up to 50 guests',
    pkg1Desc: 'Intimate boutique winery gatherings, garden dinners, and sunset tasting sessions.',
    pkg1Feat1: '4–6 wireless ambient warm amber spots',
    pkg1Feat2: 'Warm background-to-evolving Organic House',
    pkg1Feat3: 'Zero visual cable footprint',

    pkg2Title: 'Private Villa & Retreat',
    pkg2Scale: 'Up to 100 guests',
    pkg2Desc: 'Complete evening journey for private villa celebrations, wellness retreats, and terrace parties.',
    pkg2Feat1: 'Full 12+ wireless light rig with DMX scenes',
    pkg2Feat2: 'Dynamic acoustic curation (Sunset → Deep Melodic)',
    pkg2Feat3: 'Full turnkey sound and light choreography',

    pkg3Title: 'Custom Production',
    pkg3Scale: 'Mountain estates & remote nature',
    pkg3Desc: 'Bespoke production for remote natural locations requiring complete power autonomy.',
    pkg3Feat1: 'Multi-zone acoustic and architectural light design',
    pkg3Feat2: 'Independent clean power / silent generator sync',
    pkg3Feat3: 'Site-specific acoustic calibration for extreme terrain',

    // Visible FAQ
    faqBadge: 'PRACTICAL CLARITY',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Essential logistics, power requirements, and musical customization.',

    faq1Q: 'Is electrical grid power required on remote outdoor locations?',
    faq1A: 'The 12+ lighting rig is 100% wireless and battery-powered with 8–12 hours of runtime, requiring zero cables in guest zones. Sound equipment requires either a single standard 220V circuit or a compact silent inverter generator which can be coordinated.',

    faq2Q: 'How long does installation and acoustic tuning take?',
    faq2A: 'Because our lighting setup is fully wireless DMX, complete load-in, positioning, and acoustic frequency sweep takes only 45–60 minutes, without dragging bulky cable trenches across guest pathways.',

    faq3Q: 'Which geographical regions do you cover for private bookings?',
    faq3A: 'Our home base and primary focus is Northern Israel: Upper Galilee, Golan Heights, Sea of Galilee, and the Jezreel Valley. Selected destination boutique retreats and villa events nationwide are accommodated by request.',

    faq4Q: 'How is the musical curation adapted to our event format?',
    faq4A: 'Every set is handcrafted for your unique gathering: starting with warm, organic downtempo and ethnic house as the sun sets, gradually elevating into sophisticated Melodic House & Techno as darkness falls — all tuned to 432 Hz natural frequency.',

    // Booking & Contact Engine
    bookingBadge: 'CONNECT & INQUIRE',
    bookingTitle: 'Reserve a Date or Inquire',
    bookingSubtitle: 'Direct contact via WhatsApp or submit a quick event brief below.',

    contactDirectHeading: 'Direct Artist Channels',
    contactDirectTelegram: 'Telegram Channel & Direct',
    contactDirectWhatsApp: 'Direct WhatsApp Chat',
    contactDirectEmail: 'Direct Booking Email',
    contactDirectInstagram: 'Atmosphere on Instagram',

    formHeading: 'Event Brief Specification',
    formNameLabel: 'Your Name / Host',
    formNamePlaceholder: 'e.g. Daniel Levin',
    formContactLabel: 'Phone, WhatsApp, or Email',
    formContactPlaceholder: '+972... or your@email.com',
    formDateLabel: 'Target Event Date',
    formDatePlaceholder: 'e.g. Autumn 2026 / Oct 24',
    formLocationLabel: 'Format & Location',
    formLocationPlaceholder: 'e.g. Villa in Rosh Pina / Winery Sunset',
    formGuestsLabel: 'Estimated Guest Count',
    formGuestsPlaceholder: 'e.g. 40–60 guests',
    formNotesLabel: 'Event Details & Vision',
    formNotesPlaceholder: 'Describe your space, timeline, and aesthetic preferences...',
    formSubmitBtn: 'Send Booking Brief',
    formSubmitting: 'Transmitting Brief...',
    formSuccessTitle: 'Brief Received ✨',
    formSuccessDesc: 'Thank you. Dima will review your event details and respond via your preferred contact channel within 24 hours.',
    formError: 'Transmission issue. Please connect directly via WhatsApp or email.',

    // Sticky Action Bar
    stickyPlayPreview: 'Sample 432 Hz',
    stickyPausePreview: 'Pause Sample',
    stickyWhatsApp: 'WhatsApp Booking',
  },
  ru: {
    artistName: 'DJ DIMA MINKA',
    artistDescriptor: 'Галилея • Звук и свет',
    coordinates: "33°05'N 35°30'E",
    navAbout: 'Обо мне',
    navVibes: 'Вайбы',
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
    listenVibeBtn: 'Stay в вайбе',
    stayInVibe: 'Stay в вайбе',
    vibeSubmit: 'Отправить',
    vibeSending: 'Связь...',
    vibeSuccess: 'Вы в вайбе ✨',
    vibeEmailPlaceholder: 'your@email.com',
    vibeEmailError: 'Введите корректный email',
    setupDrawerTitle: 'Архитектура света и звука',
    setupDrawerSubtitle: 'Сайт-специфичная акустика и беспроводная хореография света',
    setupLights: 'Световой сетап',
    setupSound: 'Кураторство звука',
    setupAudience: 'Локация и масштаб',
    setupCloseBtn: 'Закрыть спецификацию',
    dockPlaying: 'В эфире пространства',
    dockBpm: 'BPM',

    // --- About Page Translations ---
    aboutPageTitle: 'Архитектура частоты',
    aboutHeroBadgeGeo: 'Галилея и Голанские высоты',
    aboutHeroBadgeFreq: 'Резонанс 432 Гц',
    aboutHeroSubtitle: 'Инженерный звук и автономный свет для частных событий, виноделен и ретритов в Галилее и на Голанах.',
    aboutCtaWhatsApp: 'Запрос в WhatsApp',
    aboutCtaSpecs: 'Сетап звука и света',
    aboutCtaAudio: 'Слушать 432 Гц',
    aboutCtaBrief: 'Отправить бриф',

    // Philosophy / Manifesto
    manifestoBadge: 'ФИЛОСОФИЯ И АКУСТИЧЕСКОЕ ВИДЕНИЕ',
    manifestoTitle: 'Звук как невидимая архитектура',
    manifestoP1: 'Настоящий звук не подавляет пространство — он его раскрывает. На холмах Верхней Галилеи, в старинных каменных двориках и на террасах виноделен акустика обязана дышать в гармонии с природой. Мои сеты калибруются в природный строй 432 Гц, создавая глубокое эмоциональное поле без слуховой усталости.',
    manifestoP2: 'В сочетании с беспроводным световым комплексом на батареях каждое выступление превращается в живую световую инсталляцию, органично переходящую от золотого заката к ночной магии.',

    // Specifications & Rig
    specsBadge: 'ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ',
    specsTitle: 'Инженерная точность и полная автономия',
    specsSubtitle: 'Чистая эстетика без проводов и кабельных трасс под ногами гостей.',

    specSoundTitle: 'Архитектура звука',
    specSoundDesc: 'Гармонический строй 432 Гц, расчет звукового давления под каменные залы и открытые склоны без резких частот.',
    specSoundItem1: 'Гармоническая калибровка в 432 Гц',
    specSoundItem2: 'Расчет акустики для открытых террас и холмов',
    specSoundItem3: 'Отсутствие слуховой усталости при долгих сетах',

    specLightTitle: '12+ автономных световых приборов',
    specLightDesc: 'Влагозащищенные приборы IP65 на аккумуляторах (8–12 часов работы). Полное отсутствие проводов на газонах.',
    specLightItem1: '12+ беспроводных приборов IP65 (8–12 ч батареи)',
    specLightItem2: 'Ноль кабелей и препятствий в зоне гостей',
    specLightItem3: 'Плавная смена сцен: Закат → Сумерки → Ночной сет',

    specsRiderToggle: 'Посмотреть полный технический райдер',
    specsRiderConsole: 'Диджейская консоль',
    specsRiderConsoleVal: 'Denon DJ Prime Standalone Engine (автономность без ноутбука)',
    specsRiderDmx: 'DMX-хореография',
    specsRiderDmxVal: 'SoundSwitch Wireless DMX с синхронизацией по тональностям и частотам',
    specsRiderMoving: 'Вращающиеся головы',
    specsRiderMovingVal: 'Компактные 30W LED Spot с индивидуальными органическими гобо',
    specsRiderWash: 'Заливающий свет',
    specsRiderWashVal: 'Ретро-панели теплого янтаря и беспроводные аплайты',

    // Scope Packages
    packagesBadge: 'ФОРМАТЫ МЕРОПРИЯТИЙ',
    packagesTitle: 'Пакеты и форматы',
    packagesSubtitle: 'Прозрачные форматы производства, адаптированные под масштаб и локацию.',

    pkg1Title: 'Закат и дегустация (Sunset & Wine)',
    pkg1Scale: 'До 50 гостей',
    pkg1Desc: 'Камерные вечера на винодельнях, ужины в саду и дегустационные закатные сеты.',
    pkg1Feat1: '4–6 беспроводных теплых янтарных приборов',
    pkg1Feat2: 'Фоновый Organic House с плавным ростом динамики',
    pkg1Feat3: 'Полное отсутствие проводов в поле зрения',

    pkg2Title: 'Частная вилла и ретрит',
    pkg2Scale: 'До 100 гостей',
    pkg2Desc: 'Целостный сценарий вечера для уединенных вилл, ретритов и террасных праздников.',
    pkg2Feat1: 'Полный комплект 12+ беспроводных приборов с DMX-сценами',
    pkg2Feat2: 'Динамичный звук (от теплого заката до глубокого Melodic House)',
    pkg2Feat3: 'Хореография света под ключ',

    pkg3Title: 'Сложный природный продакшн',
    pkg3Scale: 'Горные поместья и удаленные локации',
    pkg3Desc: 'Индивидуальное производство для труднодоступных природных мест с полной энергоавтономией.',
    pkg3Feat1: 'Многозонный акустический и световой расчет',
    pkg3Feat2: 'Синхронизация с автономным тихим инверторным питанием',
    pkg3Feat3: 'Сайт-специфичная калибровка под сложный рельеф',

    // Visible FAQ
    faqBadge: 'ПРАКТИЧЕСКИЕ ДЕТАЛИ',
    faqTitle: 'Часто задаваемые вопросы',
    faqSubtitle: 'Логистика, подключение к сети и формирование музыкальной программы.',

    faq1Q: 'Требуется ли подключение к электросети на открытой локации?',
    faq1A: 'Световой сетап из 12+ приборов полностью автономен на батареях (8–12 часов работы без проводов). Для звукового комплекса требуется стандартная розетка 220V либо мобильный тихий инверторный генератор.',

    faq2Q: 'Сколько времени занимает монтаж и акустическая настройка?',
    faq2A: 'Благодаря беспроводной DMX-архитектуре монтаж занимает всего 45–60 минут без прокладки кабельных трасс под ногами гостей.',

    faq3Q: 'В каких регионах доступно бронирование?',
    faq3A: 'Основной фокус — Север Израиля: Верхняя Галилея, Голанские высоты, долина Хула, а также выездные частные ретриты по всей стране.',

    faq4Q: 'Как формируется музыкальная селекция под формат события?',
    faq4A: 'Каждый сет создается индивидуально: переход от теплого медитативного Organic House во время заката к глубокому ритмичному Melodic House & Techno в ночные часы, всегда в гармоническом строе 432 Гц.',

    // Booking & Contact Engine
    bookingBadge: 'СВЯЗЬ И БРОНИРОВАНИЕ',
    bookingTitle: 'Забронировать дату или задать вопрос',
    bookingSubtitle: 'Прямая связь через WhatsApp или экспресс-бриф события ниже.',

    contactDirectHeading: 'Прямые контакты артиста',
    contactDirectTelegram: 'Канал и личные сообщения в Telegram',
    contactDirectWhatsApp: 'Чат в WhatsApp',
    contactDirectEmail: 'Прямая почта для букинга',
    contactDirectInstagram: 'Атмосфера в Instagram',

    formHeading: 'Экспресс-бриф события',
    formNameLabel: 'Ваше имя',
    formNamePlaceholder: 'Например, Дмитрий',
    formContactLabel: 'Телефон, WhatsApp или Email',
    formContactPlaceholder: '+972... или email@domain.com',
    formDateLabel: 'Планируемая дата',
    formDatePlaceholder: 'Например, 24 октября 2026',
    formLocationLabel: 'Формат и локация',
    formLocationPlaceholder: 'Например, Вилла в Рош-Пине / Закат на винодельне',
    formGuestsLabel: 'Количество гостей',
    formGuestsPlaceholder: 'Например, 40–50 гостей',
    formNotesLabel: 'Пожелания и атмосфера',
    formNotesPlaceholder: 'Расскажите о тайминге, площадке и пожеланиях к звуку...',
    formSubmitBtn: 'Отправить бриф события',
    formSubmitting: 'Отправка брифа...',
    formSuccessTitle: 'Бриф успешно получен ✨',
    formSuccessDesc: 'Спасибо! Дима изучит детали вашего события и свяжется с вами в течение 24 часов удобным для вас способом.',
    formError: 'Ошибка отправки. Пожалуйста, напишите напрямую в WhatsApp или на почту.',

    // Sticky Action Bar
    stickyPlayPreview: 'Слушать 432 Гц',
    stickyPausePreview: 'Пауза',
    stickyWhatsApp: 'Букинг в WhatsApp',
  },
  he: {
    artistName: 'DJ DIMA MINKA',
    artistDescriptor: 'הגליל • סאונד ותאורה',
    coordinates: "33°05'N 35°30'E",
    navAbout: 'אודות',
    navVibes: 'וייבים',
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
    listenVibeBtn: 'Stay in Vibe',
    stayInVibe: 'Stay in Vibe',
    vibeSubmit: 'שלח',
    vibeSending: 'מתחבר...',
    vibeSuccess: 'בוויב ✨',
    vibeEmailPlaceholder: 'your@email.com',
    vibeEmailError: 'נא להזין אימייל תקין',
    setupDrawerTitle: 'אדריכלות סאונד ותאורה',
    setupDrawerSubtitle: 'אקוסטיקה מותאמת אישית וכוריאוגרפיית אור אלחוטית',
    setupLights: 'מערך תאורה',
    setupSound: 'אוצרות סאונד',
    setupAudience: 'סביבה וקנה מידה',
    setupCloseBtn: 'סגור מפרט',
    dockPlaying: 'מתנגן במרחב',
    dockBpm: 'BPM',

    // --- About Page Translations ---
    aboutPageTitle: 'אדריכלות התדר',
    aboutHeroBadgeGeo: 'הגליל ורמת הגולן',
    aboutHeroBadgeFreq: 'תהודה 432 הרץ',
    aboutHeroSubtitle: 'הגברה ותאורה אלחוטית לאירועי בוטיק, יקבים ווילות בגליל וברמת הגולן.',
    aboutCtaWhatsApp: 'בירור ב-WhatsApp',
    aboutCtaSpecs: 'מפרט סאונד ותאורה',
    aboutCtaAudio: 'שמיעת תדר 432',
    aboutCtaBrief: 'שליחת בריף',

    // Philosophy / Manifesto
    manifestoBadge: 'פילוסופיה וחזון אקוסטי',
    manifestoTitle: 'סאונד כאדריכלות בלתי נראית',
    manifestoP1: 'סאונד איכותי אינו משתלט על המרחב — הוא חושף אותו. במרחבים הפתוחים של הגליל העליון, בחצרות אבן עתיקות ובטרסות יקבים בשקיעה, האקוסטיקה חייבת לנשום עם הטבע. המוזיקה מכוילת לתדר 432 הרץ ויוצרת שדה רגשי נעים ללא עייפות שמיעה.',
    manifestoP2: 'בשילוב עם מערך תאורה אלחוטי הפועל על סוללות, כל אירוע הופך למיצב אמנותי המשתנה בטבעיות מאור יום חם אל עומק הלילה.',

    // Specifications & Rig
    specsBadge: 'מפרט טכני והנדסי',
    specsTitle: 'דיוק הנדסי ועצמאות מלאה בשטח',
    specsSubtitle: 'אסתטיקה נקייה ללא כבלים כלל באזור האורחים.',

    specSoundTitle: 'אדריכלות סאונד',
    specSoundDesc: 'כיול הרמוני 432 הרץ, מידול לחץ אקוסטי לחללי אבן ולמדרונות פתוחים ללא תדרים צורמים.',
    specSoundItem1: 'כיול הרמוני מדויק לתדר 432 הרץ',
    specSoundItem2: 'מידול אקוסטי מותאם לטרסות פתוחות',
    specSoundItem3: 'ללא עייפות שמיעה גם באירועים ממושכים',

    specLightTitle: 'מערך 12+ גופי תאורה אלחוטיים',
    specLightDesc: 'גופים עמידי מים בתקן IP65 על סוללות (8–12 שעות עבודה). אפס כבלים על מדשאות ושבילים.',
    specLightItem1: '12+ גופים אלחוטיים IP65 (סוללה 8–12 שעות)',
    specLightItem2: 'ללא כבלי חשמל כלל באזור האורחים',
    specLightItem3: 'מעבר תרחישים הדרגתי: שקיעה ← דמדומים ← לילה',

    specsRiderToggle: 'צפייה בריידר הטכני המלא',
    specsRiderConsole: 'עמדת DJ מקצועית',
    specsRiderConsoleVal: 'Denon DJ Prime Standalone Engine (ללא תלות במחשב נייד)',
    specsRiderDmx: 'כוריאוגרפיית DMX',
    specsRiderDmxVal: 'SoundSwitch Wireless DMX מסונכרן להרמוניות הסאונד',
    specsRiderMoving: 'ראשים נעים (Moving Heads)',
    specsRiderMovingVal: 'גופי 30W LED חכמים עם גובו אורגני מותאם אישית',
    specsRiderWash: 'תאורת שטיפה ואווירה',
    specsRiderWashVal: 'פסי לד חמים בגוון ענבר וגופי הארה אלחוטיים לאבן ולצמחייה',

    // Scope Packages
    packagesBadge: 'מסגרות אירוע מותאמות',
    packagesTitle: 'פורמטים נבחרים',
    packagesSubtitle: 'התאמה מדויקת לפי היקף האורחים, אופי המקום ולוח הזמנים.',

    pkg1Title: 'מפגש שקיעה ויין (Sunset & Wine)',
    pkg1Scale: 'עד 50 אורחים',
    pkg1Desc: 'אירועי בוטיק אינטימיים ביקבים, ארוחות שף בגינה ומפגשי טעימות בשקיעה.',
    pkg1Feat1: '4–6 גופי תאורה אלחוטיים בגוון ענבר חם',
    pkg1Feat2: 'אורגניק האוס מעודן המתפתח עם האווירה',
    pkg1Feat3: 'מרחב נקי לחלוטין מכבלים וציוד מיותר',

    pkg2Title: 'וילה פרטית ואירועי ריטריט',
    pkg2Scale: 'עד 100 אורחים',
    pkg2Desc: 'חוויית ערב מלאה לווילות יוקרה, סופי שבוע של ריטריט ומסיבות שקיעה עד הלילה.',
    pkg2Feat1: 'מערך מלא של 12+ גופי תאורה עם תרחישי DMX',
    pkg2Feat2: 'סאונד דינמי ומתפתח משקיעה למלודיק האוס מרקיד',
    pkg2Feat3: 'ניהול תאורה וסאונד מקיף לאורך כל הערב',

    pkg3Title: 'הפקה ייעודית בטבע',
    pkg3Scale: 'אחוזות מבודדות ושטחים פתוחים',
    pkg3Desc: 'התאמה אישית לאתרים מרוחקים הדורשים אספקת חשמל שקטה ועצמאית.',
    pkg3Feat1: 'מידול אקוסטי ועיצוב תאורה מרובה אזורים',
    pkg3Feat2: 'סנכרון מלא לגנרטור מושתק ואספקת כוח נקייה',
    pkg3Feat3: 'כיול סאונד מותאם לשטח פתוח ותוואי הררי',

    // Visible FAQ
    faqBadge: 'שאלות ותשובות',
    faqTitle: 'שאלות נפוצות ולוגיסטיקה',
    faqSubtitle: 'דרישות חשמל, זמני הקמה והתאמת המוזיקה לאירוע שלכם.',

    faq1Q: 'האם נדרש חיבור לרשת החשמל במיקום פתוח בטבע?',
    faq1A: 'מערך התאורה (12+ גופים) פועל באופן אלחוטי מלא על סוללות למשך 8–12 שעות ללא כבלים. עבור מערכת הסאונד נדרש שקע 220V רגיל או גנרטור מושתק נייד.',

    faq2Q: 'כמה זמן אורך שלב ההקמה והכיול האקוסטי?',
    faq2A: 'בזכות ארכיטקטורת DMX אלחוטית מלאה, ההקמה והכיול אורכים כ-45–60 דקות בלבד ללא פריסת כבלים באזור האורחים.',

    faq3Q: 'באילו אזורים זמינה הזמנת הופעות?',
    faq3A: 'המוקד העיקרי הוא צפון הארץ: הגליל העליון, רמת הגולן, עמק החולה, ואירועי בוטיק וריטריטים ייעודיים בכל רחבי הארץ.',

    faq4Q: 'כיצד נבחרת המוזיקה בהתאם לאופי האירוע?',
    faq4A: 'כל סט מותאם אישית לחלוטין: תנועה מאורגניק האוס עדין ומדיטטיבי בשקיעה למלודיק האוס וטכנו סוחף אל תוך הלילה, תמיד בתדר הרמוני 432 הרץ.',

    // Booking & Contact Engine
    bookingBadge: 'יצירת קשר והזמנות',
    bookingTitle: 'בדיקת זמינות וסגירת תאריך',
    bookingSubtitle: 'קשר ישיר ב-WhatsApp או מילוי בריף קצר לאירוע שלכם.',

    contactDirectHeading: 'ערוצי קשר ישירים עם האמן',
    contactDirectTelegram: 'ערוץ והודעות ב-Telegram',
    contactDirectWhatsApp: 'צ׳אט ישיר ב-WhatsApp',
    contactDirectEmail: 'אימייל להזמנות ובירורים',
    contactDirectInstagram: 'אווירה ועדכונים ב-Instagram',

    formHeading: 'בריף קצר לאירוע',
    formNameLabel: 'שם מלא / מארח',
    formNamePlaceholder: 'למשל, דניאל לוין',
    formContactLabel: 'טלפון, WhatsApp או אימייל',
    formContactPlaceholder: '050... או your@email.com',
    formDateLabel: 'תאריך מבוקש',
    formDatePlaceholder: 'למשל, 24 באוקטובר 2026',
    formLocationLabel: 'אופי האירוע ומיקום',
    formLocationPlaceholder: 'למשל, וילה בראש פינה / שקיעה ביקב',
    formGuestsLabel: 'מספר אורחים משוער',
    formGuestsPlaceholder: 'למשל, 40–60 אורחים',
    formNotesLabel: 'פרטים נוספים וחזון לאירוע',
    formNotesPlaceholder: 'ספרו על המקום, השעות המתוכננות והאווירה המבוקשת...',
    formSubmitBtn: 'שליחת בריף לאירוע',
    formSubmitting: 'שולח פרטים...',
    formSuccessTitle: 'הבריף התקבל בהצלחה ✨',
    formSuccessDesc: 'תודה רבה. דימה יעבור על פרטי האירוע ויחזור אליכם תוך 24 שעות בערוץ המועדף עליכם.',
    formError: 'חלה שגיאה בשליחה. ניתן ליצור קשר ישירות ב-WhatsApp או באימייל.',

    // Sticky Action Bar
    stickyPlayPreview: 'דגימת 432 הרץ',
    stickyPausePreview: 'השהיית דגימה',
    stickyWhatsApp: 'סגירת תאריך ב-WhatsApp',
  },
} as const;

export function useTranslations(lang: SupportedLang = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}
