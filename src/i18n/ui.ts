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
    aboutPageTitle: 'Sound. Light. Atmosphere.',
    aboutHeroBadgeGeo: 'Galilee & Golan Heights',
    aboutHeroBadgeFreq: '432 Hz Resonance',
    aboutHeroSubtitle: 'Curated soundscapes and warm architectural lighting for private evenings, boutique wineries & retreats in Galilee & Golan Heights.',
    aboutCtaWhatsApp: 'WhatsApp Inquiry',
    aboutCtaSpecs: 'Sound & Light Rig',
    aboutCtaAudio: 'Listen to Set',
    aboutCtaBrief: 'Send Event Brief',

    // Media & Soundscape Preview
    audioPreviewTag: 'LIVE DJ SET',
    audioPreviewTitle: 'Sunset Sessions & Melodic Drift',
    audioBadgeTag: 'SUNSET SESSION',
    audioBadgeBpm: '122 BPM MELODIC',
    audioTrackTitle: 'Galilee Sunset Resonance',
    audioTrackSubtitle: 'Organic House • Live recorded for hillside terraces & wine evenings',
    audioPlayAria: 'Play Sunset & Organic House soundscape preview',
    visualArchitectureTag: 'LIGHT ARCHITECTURE',
    visualArchitectureTitle: 'Light Woven into Space',
    videoReelLiveTag: 'STAGE SETUP',

    // Philosophy / Manifesto
    manifestoBadge: 'PHILOSOPHY & ACOUSTIC VISION',
    manifestoTitle: 'Sound as Invisible Architecture',
    manifestoP1: 'True sound does not overpower an evening — it becomes part of it. Music for boutique wineries, intimate villas, and northern retreats requires deep sensitivity to context. My approach blends bespoke organic electronic selections, finely tuned acoustics, and warm lighting that merge with the sunset to create an immersive atmosphere where you simply want to stay.',
    manifestoP2: 'A fleet of more than 10 architectural and dynamic lighting fixtures integrates seamlessly into the natural landscape. No messy cables underfoot — only pure visual magic from golden hour into deep night.',

    // Specifications & Rig
    specsBadge: 'TECHNICAL SPECIFICATIONS',
    specsTitle: 'Engineered Precision & Seamless Aesthetics',
    specsSubtitle: 'Designed for immaculate aesthetic beauty with clean, discreet cable management outside guest pathways.',

    specSoundTitle: 'Sound Architecture',
    specSoundDesc: '432 Hz harmonic tuning, acoustic pressure modeled for stone halls and open hillsides without harsh frequencies.',
    specSoundItem1: 'Harmonic 432 Hz master calibration',
    specSoundItem2: 'Acoustic pressure modeling for open terraces',
    specSoundItem3: 'Zero ear fatigue during multi-hour sets',

    specLightTitle: '12+ Architectural Light Rig',
    specLightDesc: 'Professional IP65 waterproof fixtures with clean cable routing. Rich ambient coverage from warm sunset glow to deep night.',
    specLightItem1: '12+ professional IP65 architectural fixtures',
    specLightItem2: 'Discreet, safe cable routing outside guest paths',
    specLightItem3: 'Dynamic scene transitions: Sunset → Twilight → Night',

    specsRiderToggle: 'View Complete Hardware & DJ Rider',
    specsRiderConsole: 'Performance Console',
    specsRiderConsoleVal: 'Denon DJ Prime Standalone Engine (zero laptop reliance)',
    specsRiderDmx: 'DMX Choreography',
    specsRiderDmxVal: 'SoundSwitch DMX synced to musical key and frequency harmonics',
    specsRiderMoving: 'Moving Heads',
    specsRiderMovingVal: 'Compact 30W LED moving spot fixtures with custom organic gobos',
    specsRiderWash: 'Ambient Wash',
    specsRiderWashVal: 'Retro warm amber wash bars and architectural uplights',

    // Scope Packages
    packagesBadge: 'CURATED FORMATS',
    packagesTitle: 'Tailored Event Scopes',
    packagesSubtitle: 'Clear production tiers adapted to your setting, guest count, and timeline.',

    pkg1Title: 'Sunset & Wine Gathering',
    pkg1Scale: 'Up to 50 guests',
    pkg1Desc: 'Intimate boutique winery gatherings, garden dinners, and sunset tasting sessions.',
    pkg1Feat1: '4–6 architectural warm amber spots',
    pkg1Feat2: 'Warm background-to-evolving Organic House',
    pkg1Feat3: 'Clean, discreet cable management',

    pkg2Title: 'Private Villa & Retreat',
    pkg2Scale: 'Up to 100 guests',
    pkg2Desc: 'Complete evening journey for private villa celebrations, wellness retreats, and terrace parties.',
    pkg2Feat1: 'Full 12+ architectural light rig with DMX scenes',
    pkg2Feat2: 'Dynamic acoustic curation (Sunset → Deep Melodic)',
    pkg2Feat3: 'Full turnkey sound and light choreography',

    pkg3Title: 'Custom Production',
    pkg3Scale: 'Mountain estates & remote nature',
    pkg3Desc: 'Bespoke production for remote natural locations with tailored sound & power solutions.',
    pkg3Feat1: 'Multi-zone acoustic and architectural light design',
    pkg3Feat2: 'Clean power / silent generator synchronization',
    pkg3Feat3: 'Site-specific acoustic calibration for extreme terrain',

    // Visible FAQ
    faqBadge: 'PRACTICAL CLARITY',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Essential logistics, power requirements, and musical customization.',

    faq1Q: 'Is electrical grid power required on remote outdoor locations?',
    faq1A: 'Yes, the sound system and 12+ lighting rig run on standard 220V power. On remote outdoor locations without grid access, we seamlessly integrate with a compact silent inverter generator with clean power distribution.',

    faq2Q: 'How long does installation and acoustic tuning take?',
    faq2A: 'Complete load-in, discreet cable routing along perimeter walls/hedges, and acoustic frequency sweeps take approximately 45–60 minutes, ensuring zero messy cable crossings in guest areas.',

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
    stickyPlayPreview: '432 Hz Sample',
    stickyPausePreview: 'Pause',
    stickyWhatsApp: 'WhatsApp',
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
    aboutPageTitle: 'Звук. Свет. Атмосфера.',
    aboutHeroBadgeGeo: 'Галилея и Голанские высоты',
    aboutHeroBadgeFreq: 'Резонанс 432 Гц',
    aboutHeroSubtitle: 'Выверенный звук и теплое световое оформление для приватных вечеров, виноделен и ретритов в Галилее и на Голанах.',
    aboutCtaWhatsApp: 'Запрос в WhatsApp',
    aboutCtaSpecs: 'Сетап звука и света',
    aboutCtaAudio: 'Слушать сет',
    aboutCtaBrief: 'Отправить бриф',

    // Media & Soundscape Preview
    audioPreviewTag: 'ЖИВОЙ DJ-СЕТ',
    audioPreviewTitle: 'Музыкальная селекция под закат и ландшафт',
    audioBadgeTag: 'SUNSET SESSION',
    audioBadgeBpm: '122 BPM MELODIC',
    audioTrackTitle: 'Galilee Sunset Resonance',
    audioTrackSubtitle: 'Organic House • Записано вживую для террас и винных вечеров севера',
    audioPlayAria: 'Слушать превью сета: Sunset & Organic House',
    visualArchitectureTag: 'АРХИТЕКТУРА СВЕТА',
    visualArchitectureTitle: 'Свет, вписанный в пространство',
    videoReelLiveTag: 'СЦЕНИЧЕСКИЙ СЕТАП',

    // Philosophy / Manifesto
    manifestoBadge: 'ФИЛОСОФИЯ И АКУСТИЧЕСКОЕ ВИДЕНИЕ',
    manifestoTitle: 'Звук как невидимая архитектура',
    manifestoP1: 'Настоящий звук не заглушает вечер, а становится его частью. Музыка для виноделен, камерных вилл и ретритов севера требует чуткости к контексту. Мой подход — это авторская селекция органичной электроники, выверенная акустика и теплый свет, которые соединяются с закатом и создают глубокую атмосферу, в которой хочется раствориться.',
    manifestoP2: 'Парк из более чем 10 приборов архитектурного и динамического света полностью интегрируется в ландшафт. Никаких проводов под ногами — только чистая визуальная магия от заката до глубокой ночи.',

    // Specifications & Rig
    specsBadge: 'ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ',
    specsTitle: 'Инженерная точность и чистая эстетика',
    specsSubtitle: 'Чистая эстетика пространства с аккуратной и безопасной прокладкой кабелей вне гостевых зон.',

    specSoundTitle: 'Архитектура звука',
    specSoundDesc: 'Гармонический строй 432 Гц, расчет звукового давления под каменные залы и открытые склоны без резких частот.',
    specSoundItem1: 'Гармоническая калибровка в 432 Гц',
    specSoundItem2: 'Расчет акустики для открытых террас и холмов',
    specSoundItem3: 'Отсутствие слуховой усталости при долгих сетах',

    specLightTitle: '12+ архитектурных световых приборов',
    specLightDesc: 'Профессиональные влагозащищенные приборы IP65 с аккуратной скрытой коммутацией. Плотное световое покрытие от заката до ночи.',
    specLightItem1: '12+ профессиональных приборов IP65',
    specLightItem2: 'Безопасная скрытая прокладка кабелей вне зоны гостей',
    specLightItem3: 'Плавная смена сцен: Закат → Сумерки → Ночной сет',

    specsRiderToggle: 'Посмотреть полный технический райдер',
    specsRiderConsole: 'Диджейская консоль',
    specsRiderConsoleVal: 'Denon DJ Prime Standalone Engine (автономность без ноутбука)',
    specsRiderDmx: 'DMX-хореография',
    specsRiderDmxVal: 'SoundSwitch DMX с синхронизацией по тональностям и частотам',
    specsRiderMoving: 'Вращающиеся головы',
    specsRiderMovingVal: 'Компактные 30W LED Spot с индивидуальными органическими гобо',
    specsRiderWash: 'Заливающий свет',
    specsRiderWashVal: 'Ретро-панели теплого янтаря и архитектурные аплайты',

    // Scope Packages
    packagesBadge: 'ФОРМАТЫ МЕРОПРИЯТИЙ',
    packagesTitle: 'Пакеты и форматы',
    packagesSubtitle: 'Прозрачные форматы производства, адаптированные под масштаб и локацию.',

    pkg1Title: 'Закат и дегустация (Sunset & Wine)',
    pkg1Scale: 'До 50 гостей',
    pkg1Desc: 'Камерные вечера на винодельнях, ужины в саду и дегустационные закатные сеты.',
    pkg1Feat1: '4–6 архитектурных теплых янтарных приборов',
    pkg1Feat2: 'Фоновый Organic House с плавным ростом динамики',
    pkg1Feat3: 'Чистая скрытая кабельная коммутация',

    pkg2Title: 'Частная вилла и ретрит',
    pkg2Scale: 'До 100 гостей',
    pkg2Desc: 'Целостный сценарий вечера для уединенных вилл, ретритов и террасных праздников.',
    pkg2Feat1: 'Полный комплект 12+ архитектурных приборов с DMX-сценами',
    pkg2Feat2: 'Динамичный звук (от теплого заката до глубокого Melodic House)',
    pkg2Feat3: 'Хореография света под ключ',

    pkg3Title: 'Сложный природный продакшн',
    pkg3Scale: 'Горные поместья и удаленные локации',
    pkg3Desc: 'Индивидуальное производство для труднодоступных природных мест с надежным электропитанием.',
    pkg3Feat1: 'Многозонный акустический и световой расчет',
    pkg3Feat2: 'Подключение к сети или синхронизация с тихим инверторным питанием',
    pkg3Feat3: 'Сайт-специфичная калибровка под сложный рельеф',

    // Visible FAQ
    faqBadge: 'ПРАКТИЧЕСКИЕ ДЕТАЛИ',
    faqTitle: 'Часто задаваемые вопросы',
    faqSubtitle: 'Логистика, подключение к сети и формирование музыкальной программы.',

    faq1Q: 'Требуется ли подключение к электросети на открытой локации?',
    faq1A: 'Да, звуковой комплекс и комплект из 12+ световых приборов питаются от стандартной сети 220V. На удаленных природных локациях без стационарной сети мы организуем подключение через компактный тихий инверторный генератор.',

    faq2Q: 'Сколько времени занимает монтаж и акустическая настройка?',
    faq2A: 'Монтаж, скрытая прокладка кабелей по периметру и частотная калибровка занимают 45–60 минут, гарантируя полное отсутствие кабельных трасс под ногами гостей.',

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
    stickyPlayPreview: '432 Гц Семпл',
    stickyPausePreview: 'Пауза',
    stickyWhatsApp: 'WhatsApp',
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
    heroManifesto: 'ברוכים הבאים למרחב הרשמי של דיג׳יי דימה מינקה. סטים ייחודיים של מלודיק האוס, מערך של 12+ גופי תאורה ארכיטקטוניים והתאמה אקוסטית לווילות פרטיות, כרמים ואירועי בוטיק.',
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
    setupDrawerSubtitle: 'אקוסטיקה מותאמת אישית וכוריאוגרפיית תאורה ייעודית',
    setupLights: 'מערך תאורה',
    setupSound: 'אוצרות סאונד',
    setupAudience: 'סביבה וקנה מידה',
    setupCloseBtn: 'סגור מפרט',
    dockPlaying: 'מתנגן במרחב',
    dockBpm: 'BPM',

    // --- About Page Translations ---
    aboutPageTitle: 'סאונד. תאורה. אווירה.',
    aboutHeroBadgeGeo: 'הגליל ורמת הגולן',
    aboutHeroBadgeFreq: 'תהודה 432 הרץ',
    aboutHeroSubtitle: 'סאונד מדויק ותאורה חמה המותאמים אישית לערבים פרטיים, יקבי בוטיק וריטריטים בגליל וברמת הגולן.',
    aboutCtaWhatsApp: 'בירור ב-WhatsApp',
    aboutCtaSpecs: 'מפרט סאונד ותאורה',
    aboutCtaAudio: 'שמיעת סט',
    aboutCtaBrief: 'שליחת בריף',

    // Media & Soundscape Preview
    audioPreviewTag: 'סט DJ חי',
    audioPreviewTitle: 'מוזיקה מותאמת לשקיעה ולנוף',
    audioBadgeTag: 'SUNSET SESSION',
    audioBadgeBpm: '122 BPM MELODIC',
    audioTrackTitle: 'Galilee Sunset Resonance',
    audioTrackSubtitle: 'Organic House • הוקלט חי לטרסות שקיעה וערבי יין בצפון',
    audioPlayAria: 'שמיעת קטע סאונד: Sunset & Organic House',
    visualArchitectureTag: 'ארכיטקטורת תאורה',
    visualArchitectureTitle: 'תאורה שמשתלבת במרחב',
    videoReelLiveTag: 'הקמת במה',

    // Philosophy / Manifesto
    manifestoBadge: 'פילוסופיה וחזון אקוסטי',
    manifestoTitle: 'סאונד כאדריכלות בלתי נראית',
    manifestoP1: 'סאונד איכותי אינו משתלט על הערב — הוא הופך לחלק ממנו. מוזיקה ליקבי בוטיק, וילות אינטימיות וריטריטים בצפון דורשת רגישות עמוקה לקונטקסט. הגישה שלי משלבת בחירה מוזיקלית ייחודית של אלקטרוניקה אורגנית, אקוסטיקה מדויקת ותאורה חמה שמתמזגות עם השקיעה ויוצרות אווירה עמוקה וסוחפת.',
    manifestoP2: 'מערך של מעל 10 גופי תאורה ארכיטקטוניים ודינמיים משתלב בצורה חלקה בתוואי הנוף הטבעי. ללא כבלים מיותרים במעברי האורחים — רק קסם ויזואלי טהור משעת הזהב ועד עומק הלילה.',

    // Specifications & Rig
    specsBadge: 'מפרט טכני והנדסי',
    specsTitle: 'דיוק הנדסי ואסתטיקה מוקפדת',
    specsSubtitle: 'אסתטיקה נקייה עם פריסת כבלים מוסתרת ובטיחותית מחוץ לשבילי האורחים.',

    specSoundTitle: 'אדריכלות סאונד',
    specSoundDesc: 'כיול הרמוני 432 הרץ, מידול לחץ אקוסטי לחללי אבן ולמדרונות פתוחים ללא תדרים צורמים.',
    specSoundItem1: 'כיול הרמוני מדויק לתדר 432 הרץ',
    specSoundItem2: 'מידול אקוסטי מותאם לטרסות פתוחות',
    specSoundItem3: 'ללא עייפות שמיעה גם באירועים ממושכים',

    specLightTitle: 'מערך 12+ גופי תאורה ארכיטקטוניים',
    specLightDesc: 'גופי תאורה מקצועיים ועמידי מים בתקן IP65 עם ניתוב כבלים נקי ובטוח. כיסוי אווירה עשיר משקיעה ועד לילה.',
    specLightItem1: '12+ גופים מקצועיים בתקן IP65',
    specLightItem2: 'ניתוב כבלים מוסתר ובטוח מחוץ לאזור האורחים',
    specLightItem3: 'מעבר תרחישים הדרגתי: שקיעה ← דמדומים ← לילה',

    specsRiderToggle: 'צפייה בריידר הטכני המלא',
    specsRiderConsole: 'עמדת DJ מקצועית',
    specsRiderConsoleVal: 'Denon DJ Prime Standalone Engine (עצמאות מלאה ללא תלות במחשב)',
    specsRiderDmx: 'כוריאוגרפיית DMX',
    specsRiderDmxVal: 'SoundSwitch DMX מסונכרן לסולם המוזיקלי ולהרמוניות הסאונד',
    specsRiderMoving: 'ראשים נעים (Moving Heads)',
    specsRiderMovingVal: 'גופי 30W LED חכמים עם גובו אורגני מותאם אישית',
    specsRiderWash: 'תאורת שטיפה ואווירה',
    specsRiderWashVal: 'פסי לד חמים בגוון ענבר וגופי הארה אדריכליים לאבן ולצמחייה',

    // Scope Packages
    packagesBadge: 'מסגרות אירוע מותאמות',
    packagesTitle: 'פורמטים נבחרים',
    packagesSubtitle: 'התאמה מדויקת לפי היקף האורחים, אופי המקום ולוח הזמנים.',

    pkg1Title: 'מפגש שקיעה ויין (Sunset & Wine)',
    pkg1Scale: 'עד 50 אורחים',
    pkg1Desc: 'אירועי בוטיק אינטימיים ביקבים, ארוחות שף בגינה ומפגשי טעימות בשקיעה.',
    pkg1Feat1: '4–6 גופי תאורה בגוון ענבר חם עם ניתוב נקי',
    pkg1Feat2: 'אורגניק האוס מעודן המתפתח עם האווירה',
    pkg1Feat3: 'מרחב נקי ובטוח ללא כבלים חשופים בשבילים',

    pkg2Title: 'וילה פרטית ואירועי ריטריט',
    pkg2Scale: 'עד 100 אורחים',
    pkg2Desc: 'חוויית ערב מלאה לווילות יוקרה, סופי שבוע של ריטריט ומסיבות שקיעה עד הלילה.',
    pkg2Feat1: 'מערך מלא של 12+ גופי תאורה עם תרחישי DMX',
    pkg2Feat2: 'סאונד דינמי ומתפתח משקיעה למלודיק האוס מרקיד',
    pkg2Feat3: 'ניהול תאורה וסאונד מקיף לאורך כל הערב',

    pkg3Title: 'הפקה ייעודית בטבע',
    pkg3Scale: 'אחוזות מבודדות ושטחים פתוחים',
    pkg3Desc: 'התאמה אישית לאתרים מרוחקים עם פתרונות כוח וסאונד עצמאיים.',
    pkg3Feat1: 'מידול אקוסטי ועיצוב תאורה מרובה אזורים',
    pkg3Feat2: 'חיבור לרשת או סנכרון לגנרטור מושתק ואספקת חשמל נקייה',
    pkg3Feat3: 'כיול סאונד מותאם לשטח פתוח ותוואי הררי',

    // Visible FAQ
    faqBadge: 'שאלות ותשובות',
    faqTitle: 'שאלות נפוצות ולוגיסטיקה',
    faqSubtitle: 'דרישות חשמל, זמני הקמה והתאמת המוזיקה לאירוע שלכם.',

    faq1Q: 'האם נדרש חיבור לרשת החשמל במיקום פתוח בטבע?',
    faq1A: 'כן, מערכת הסאונד ומערך 12+ גופי התאורה פועלים בחיבור רגיל לרשת 220V. במיקומים פתוחים בטבע ללא נקודת חשמל, אנו משתלבים באופן מושלם עם גנרטור מושתק נייד בעל אספקת כוח נקייה.',

    faq2Q: 'כמה זמן אורך שלב ההקמה והכיול האקוסטי?',
    faq2A: 'שלב הפריקה, ניתוב הכבלים המוסתר לאורך קירות וצמחייה והכיול האקוסטי אורכים כ-45–60 דקות בלבד, תוך הקפדה על אפס מעברי כבלים בשבילי האורחים.',

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
    stickyPlayPreview: '432 הרץ',
    stickyPausePreview: 'השהייה',
    stickyWhatsApp: 'WhatsApp',
  },
} as const;

export function useTranslations(lang: SupportedLang = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}
