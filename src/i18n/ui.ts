export const defaultLang = 'en';

export const languages = {
  en: { label: 'English', dir: 'ltr' },
  ru: { label: 'Русский', dir: 'ltr' },
  he: { label: 'עברית', dir: 'rtl' },
} as const;

export type SupportedLang = keyof typeof languages;

export const SITE_CONTACTS = {
  phone: '+972546885244',
  whatsappRaw: '972546885244',
  email: 'dj@dimaminka.com',
  telegramUser: 'dimaminka',
  telegramUrl: 'https://t.me/dimaminka',
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
    audioBadgeTag: 'DESERT SUNSET',
    audioBadgeBpm: '105 BPM ORGANIC',
    audioTrackTitle: 'Desert Dusk Resonance',
    audioTrackSubtitle: 'Oriental Organic House • Warm desert winds & calm sunset horizons',
    audioPlayAria: 'Play Desert Dusk Resonance oriental soundscape preview',
    audio2BadgeTag: 'WINERY COCKTAIL',
    audio2BadgeBpm: '124 BPM MELODIC',
    audio2TrackTitle: 'Industrial Winery Groove',
    audio2TrackSubtitle: 'Upbeat Melodic House • Crisp driving rhythm & cocktail energy in concrete cellar arches',
    audio2PlayAria: 'Play Industrial Winery Groove upbeat melodic house preview',
    visualArchitectureTag: 'LIGHT ARCHITECTURE',
    visualArchitectureTitle: 'Light Woven into Space',
    videoReelLiveTag: 'STAGE SETUP',

    // Philosophy / Manifesto
    manifestoBadge: 'PHILOSOPHY & ACOUSTIC VISION',
    manifestoTitle: 'Sound as Invisible Architecture',
    manifestoP1: 'True sound does not overpower an evening — it becomes part of it. Music for boutique wineries, intimate villas, and northern retreats requires deep sensitivity to context. My approach blends bespoke organic electronic selections, finely tuned acoustics, and warm lighting that merge with the sunset to create an immersive atmosphere where you simply want to stay.',
    manifestoP2: 'A fleet of more than 10 architectural and dynamic lighting fixtures integrates seamlessly into the natural landscape. No messy cables underfoot — only pure visual magic from golden hour into deep night.',

    // Specifications & Rig
    specsBadge: 'FLAWLESS DETAILS',
    specsTitle: 'Pure Spatial Aesthetics',
    specsSubtitle: 'Zero tangled cables or bulky equipment cases in sight. Power lines and DMX routes are mapped to the centimeter and seamlessly disguised in the landscape — ensuring an immaculate, safe, and camera-ready setting from every angle.',

    specSoundTitle: 'Sound Architecture',
    specSoundDesc: 'Acoustic modeling for open terraces and stone winery courtyards: clean, gentle sound without harsh highs or intrusive loudness.',
    specSoundItem1: 'Acoustics for mountain terrain: sound evenly blankets terraces, hillsides, and courtyards without scattering in the wind.',
    specSoundItem2: 'Velvet bass without pressure: punchy low-end on the dance floor while dining guests converse effortlessly without shouting.',
    specSoundItem3: 'All-evening listening comfort: mellow frequencies free of harsh treble, keeping hearing fresh throughout long late-night sets.',

    specLightTitle: 'Architecture & Lighting Design',
    specLightDesc: 'Light choreography designed specifically around the venue geometry. We accentuate natural contours and stone architecture, producing deep volumetric visuals without blinding glare.',
    specLightItem1: 'Light woven into landscape: uplighting of ancient stone masonry, tree canopies, and vineyard rows from below.',
    specLightItem2: 'Immaculate visuals: all cabling and routing concealed within foliage — zero exposed wires across guest paths.',
    specLightItem3: 'Evening dramaturgy: smooth organic transition from warm sunset amber into immersive deep-night lighting scenes.',

    specsRiderToggle: 'View Technical Rider',
    specsRiderConsole: 'Performance Station',
    specsRiderConsoleVal: 'Denon DJ Prime standalone engine integrated into a mobile UDG flight case (zero laptops on stage).',
    specsRiderDmx: 'Lighting Synchronization',
    specsRiderDmxVal: 'Custom SoundSwitch DMX choreography dynamically adapted to set energy and musical phrasing.',
    specsRiderMoving: 'Dynamic Moving Heads',
    specsRiderMovingVal: 'Compact spot heads with custom graphic gobos plus 4 wash/beam fixtures for immersive 3D stage and landscape coverage.',
    specsRiderWash: 'Vintage & Architectural Light',
    specsRiderWashVal: 'Center vintage disc fixture, warm honeycomb retro-hexagons, mirror ball, and concealed LED bars for subtle wall & tree uplighting.',

    // Scope Packages
    packagesBadge: 'EVENT FORMATS',
    packagesTitle: 'Packages & Formats',
    packagesSubtitle: 'Curated sound and lighting configurations calibrated precisely to your venue scale and guest count.',
    pkgBadgeRecommended: 'RECOMMENDED • GUEST FAVORITE',
    pkgBtnSelect: 'Select Format',
    pkgBtnInquire: 'Discuss Project',

    pkg1Title: 'Sunset & Wine (Intimate Gathering)',
    pkg1Scale: 'Up to 50 guests',
    pkg1Desc: 'Boutique winery tastings, garden dinners, and intimate open-air terrace gatherings.',
    pkg1Feat1: '4–6 warm amber uplighting fixtures highlighting stone walls and organic landscape textures',
    pkg1Feat2: 'Organic House journey flowing seamlessly from sunset chill into an evening groove',
    pkg1Feat3: 'Concealed cable routing with zero cords visible or underfoot',

    pkg2Title: 'Private Villa & Retreat',
    pkg2Scale: 'Up to 100 guests',
    pkg2Desc: 'Turnkey audiovisual evening narrative for private countryside villas, wine weekends, and terrace celebrations.',
    pkg2Feat1: 'Vintage honeycomb warm backlight behind the booth, landscape wash, and dynamic scene choreography',
    pkg2Feat2: 'Deep, enveloping sunset soundtrack transitioning smoothly into a rolling Melodic & Afro House groove',
    pkg2Feat3: 'Live lighting choreography adapting in real time to track changes and dusk-to-night transitions',

    pkg3Title: 'Wild Nature Open-Air',
    pkg3Scale: 'Mountain venues & hillsides',
    pkg3Desc: 'Bespoke sound and light engineering for secluded natural terrains: vineyards, scenic viewpoints, and Golan slopes.',
    pkg3Feat1: 'Multi-zone acoustic coverage engineered for open landscapes and undulating terrain',
    pkg3Feat2: 'Clean and silent off-grid power synchronization without network interruptions',
    pkg3Feat3: 'Harmonious light integration into rocky outcrops, ancient tree canopies, and wild surroundings',

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
    faq4A: 'Every set is handcrafted individually: progressing from warm organic chill and downtempo at sunset to deep, hypnotic Melodic House as night falls, seamlessly attuned to the crowd dynamic and setting.',

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
    formResetBtn: 'Submit Another Inquiry',
    formError: 'Transmission issue. Please connect directly via WhatsApp or email.',

    // Sticky Action Bar
    stickyPlayPreview: '432 Hz Sample',
    stickyPausePreview: 'Pause',
    stickyWhatsApp: 'WhatsApp',

    // About Footer Menu
    footerNavTitle: 'Exploration',
    footerGlobalTitle: 'Experience',
    footerConnectTitle: 'Connect & Listen',
    footerOverview: 'Overview',
    footerPhilosophy: 'Acoustic Philosophy',
    footerSoundscapes: 'Soundscapes & Sets',
    footerSpecs: 'Rig & Specifications',
    footerPackages: 'Formats & Packages',
    footerFaq: 'FAQ',
    footerBooking: 'Date Reservation',
    footerHome: 'Gateway Portal',
    footerVibes: 'Sound Worlds',
    footerBackToTop: 'Back to top',
    footerRights: 'All rights reserved.',
    footerCrafted: 'Sound and light in harmony with the northern landscape.',
    footerBadgeSound: 'ORGANIC SOUND',
    footerBadgeLight: 'WARM LIGHT',
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
    audioBadgeTag: 'DESERT SUNSET',
    audioBadgeBpm: '105 BPM ORGANIC',
    audioTrackTitle: 'Desert Dusk Resonance',
    audioTrackSubtitle: 'Oriental Organic House • Восточные мотивы, тепло пустынного ветра и спокойный закат',
    audioPlayAria: 'Слушать превью сета: Desert Dusk Resonance (105 BPM)',
    audio2BadgeTag: 'WINERY COCKTAIL',
    audio2BadgeBpm: '124 BPM MELODIC',
    audio2TrackTitle: 'Industrial Winery Groove',
    audio2TrackSubtitle: 'Upbeat Melodic House • Бодрый танцевальный грув и коктейльная атмосфера в индустриальной винодельне',
    audio2PlayAria: 'Слушать превью сета: Industrial Winery Groove (124 BPM)',
    visualArchitectureTag: 'АРХИТЕКТУРА СВЕТА',
    visualArchitectureTitle: 'Свет, вписанный в пространство',
    videoReelLiveTag: 'СЦЕНИЧЕСКИЙ СЕТАП',

    // Philosophy / Manifesto
    manifestoBadge: 'ФИЛОСОФИЯ И АКУСТИЧЕСКОЕ ВИДЕНИЕ',
    manifestoTitle: 'Звук как невидимая архитектура',
    manifestoP1: 'Настоящий звук не заглушает вечер, а становится его частью. Музыка для виноделен, камерных вилл и ретритов севера требует чуткости к контексту. Мой подход — это авторская селекция органичной электроники, выверенная акустика и теплый свет, которые соединяются с закатом и создают глубокую атмосферу, в которой хочется раствориться.',
    manifestoP2: 'Парк из более чем 10 приборов архитектурного и динамического света полностью интегрируется в ландшафт. Никаких проводов под ногами — только чистая визуальная магия от заката до глубокой ночи.',

    // Specifications & Rig
    specsBadge: 'БЕЗУПРЕЧНОСТЬ В ДЕТАЛЯХ',
    specsTitle: 'Чистая эстетика пространства',
    specsSubtitle: 'Никаких спутанных проводов и громоздких коробок на виду. Силовые трассы и DMX-линии рассчитываются до сантиметра и незаметно маскируются в рельефе локации — площадка остается визуально чистой, безопасной и готовой к фотосъемке с любого ракурса.',

    specSoundTitle: 'Архитектура звука',
    specSoundDesc: 'Акустический расчет под открытые террасы и каменные дворики виноделен: чистый, мягкий саунд без резких частот и навязчивой громкости.',
    specSoundItem1: 'Акустика под горный рельеф: звук равномерно заполняет открытые террасы, склоны и дворики, не рассеиваясь на ветру.',
    specSoundItem2: 'Бархатный бас без давления: плотный низкий диапазон на танцполе, при котором за столом можно свободно общаться без крика.',
    specSoundItem3: 'Комфорт на весь вечер: мягкое звучание без резких верхов, сохраняющее свежесть восприятия даже во время долгих ночных сетов.',

    specLightTitle: 'Архитектура и световой дизайн',
    specLightDesc: 'Световой сценарий, спроектированный строго под геометрию площадки. Мы подчеркиваем рельеф природы и архитектуру места, создавая объемную живую картинку без слепящих лучей.',
    specLightItem1: 'Свет, вписанный в ландшафт: направленная подсветка старинной каменной кладки, крон деревьев и виноградных лоз снизу вверх.',
    specLightItem2: 'Чистота в кадре: вся кабельная разводка и коммуникации маскируются в зелени — под ногами гостей нет ни одного лишнего провода.',
    specLightItem3: 'Драматургия вечера: плавный переход от теплого янтарного сияния на закате к глубокой объемной динамике ночного сета.',

    specsRiderToggle: 'Посмотреть технический райдер',
    specsRiderConsole: 'Диджейская станция',
    specsRiderConsoleVal: 'Автономная консоль Denon DJ Prime на базе мобильного сотового кейса UDG (работает без сторонних ноутбуков на сцене).',
    specsRiderDmx: 'Световая синхронизация',
    specsRiderDmxVal: 'Индивидуальная DMX-хореография SoundSwitch с плавной адаптацией под динамику и ритм сета.',
    specsRiderMoving: 'Динамический свет',
    specsRiderMovingVal: 'Компактные Spot-головы с графичными гобо-акцентами и 4 головы Wash/Beam для объемной заливки сцены и ландшафта.',
    specsRiderWash: 'Винтажный и архитектурный свет',
    specsRiderWashVal: 'Центральный ретро-диск, теплые шестиугольные соты, зеркальный шар и скрытые линейные LED-панели для мягкого аплайтинга стен и деревьев.',

    // Scope Packages
    packagesBadge: 'ФОРМАТЫ СОБЫТИЙ',
    packagesTitle: 'Пакеты и форматы',
    packagesSubtitle: 'Готовые конфигурации звука и света, точно рассчитанные под масштаб вашей площадки и количество гостей.',
    pkgBadgeRecommended: 'RECOMMENDED • ВЫБОР ГОСТЕЙ',
    pkgBtnSelect: 'Выбрать формат',
    pkgBtnInquire: 'Обсудить проект',

    pkg1Title: 'Винный закат (Sunset & Wine)',
    pkg1Scale: 'До 50 гостей',
    pkg1Desc: 'Для дегустаций на винодельнях, ужинов в саду и камерных встреч на открытых террасах.',
    pkg1Feat1: '4–6 приборов теплого янтарного аплайтинга для подсветки каменных стен и фактур природы',
    pkg1Feat2: 'Organic House с плавным переходом от фонового заката к живому вечернему ритму',
    pkg1Feat3: 'Скрытая прокладка кабелей без проводов на виду и под ногами гостей',

    pkg2Title: 'Частная вилла и ретрит',
    pkg2Scale: 'До 100 гостей',
    pkg2Desc: 'Полноценный аудиовизуальный сценарий вечера для загородных вилл, винных уикендов и террасных вечеринок.',
    pkg2Feat1: 'Винтажные ретро-соты за диджеем, заливка ландшафта и динамические сцены под ключ',
    pkg2Feat2: 'Комфортный саундтрек заката, плавно переходящий в плотный грув Melodic & Afro House',
    pkg2Feat3: 'Световой сценарий в реальном времени подстраивается под смену треков и наступление ночи',

    pkg3Title: 'Природный опен-эйр',
    pkg3Scale: 'Горные локации и склоны',
    pkg3Desc: 'Индивидуальное проектирование звука и света для труднодоступных мест: виноградники, смотровые площадки и склоны Голан.',
    pkg3Feat1: 'Расчет звукового поля с учетом открытого пространства и горного рельефа',
    pkg3Feat2: 'Чистое и бесшумное питание сетапа в полевых условиях без перебоев сети',
    pkg3Feat3: 'Интеграция света в дикую природу, скалы и кроны старых деревьев',

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
    faq4A: 'Каждый сет выстраивается индивидуально: от теплого органического чилла и даунтемпо на закате к глубокому гипнотическому Melodic House в ночные часы, тонко синхронизируясь с динамикой гостей и атмосферой локации.',

    // Booking & Contact Engine
    bookingBadge: 'СВЯЗЬ И БРОНИРОВАНИЕ',
    bookingTitle: 'Забронировать дату или задать вопрос',
    bookingSubtitle: 'Прямая связь через WhatsApp или экспресс-бриф ниже.',

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
    formSubmitBtn: 'Отправить бриф',
    formSubmitting: 'Отправка брифа...',
    formSuccessTitle: 'Бриф успешно получен ✨',
    formSuccessDesc: 'Спасибо! Дима изучит детали вашего события и свяжется с вами в течение 24 часов удобным для вас способом.',
    formResetBtn: 'Отправить ещё один запрос',
    formError: 'Ошибка отправки. Пожалуйста, напишите напрямую в WhatsApp или на почту.',

    // Sticky Action Bar
    stickyPlayPreview: '432 Гц Семпл',
    stickyPausePreview: 'Пауза',
    stickyWhatsApp: 'WhatsApp',

    // About Footer Menu
    footerNavTitle: 'Навигация',
    footerGlobalTitle: 'Пространство',
    footerConnectTitle: 'Связь и музыка',
    footerOverview: 'В начало',
    footerPhilosophy: 'Философия звука',
    footerSoundscapes: 'Сеты и звучание',
    footerSpecs: 'Оборудование и свет',
    footerPackages: 'Форматы и пакеты',
    footerFaq: 'Частые вопросы',
    footerBooking: 'Бронирование даты',
    footerHome: 'Главный портал',
    footerVibes: 'Вайбы и миксы',
    footerBackToTop: 'Наверх',
    footerRights: 'Все права защищены.',
    footerCrafted: 'Звук и свет в гармонии с ландшафтом севера',
    footerBadgeSound: 'ОРГАНИЧНЫЙ САУНД',
    footerBadgeLight: 'ТЁПЛЫЙ СВЕТ',
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
    audioBadgeTag: 'DESERT SUNSET',
    audioBadgeBpm: '105 BPM ORGANIC',
    audioTrackTitle: 'Desert Dusk Resonance',
    audioTrackSubtitle: 'Oriental Organic House • צלילים מזרחיים, נגיעות מדבר ושקיעה רגועה',
    audioPlayAria: 'שמיעת קטע סאונד: Desert Dusk Resonance (105 BPM)',
    audio2BadgeTag: 'WINERY COCKTAIL',
    audio2BadgeBpm: '124 BPM MELODIC',
    audio2TrackTitle: 'Industrial Winery Groove',
    audio2TrackSubtitle: 'Upbeat Melodic House • גרוב דאנס קצבי ואנרגיית קוקטייל תוססת ביקב אורבני ותעשייתי',
    audio2PlayAria: 'שמיעת קטע סאונד: Industrial Winery Groove (124 BPM)',
    visualArchitectureTag: 'ארכיטקטורת תאורה',
    visualArchitectureTitle: 'תאורה שמשתלבת במרחב',
    videoReelLiveTag: 'הקמת במה',

    // Philosophy / Manifesto
    manifestoBadge: 'פילוסופיה וחזון אקוסטי',
    manifestoTitle: 'סאונד כאדריכלות בלתי נראית',
    manifestoP1: 'סאונד איכותי אינו משתלט על הערב — הוא הופך לחלק ממנו. מוזיקה ליקבי בוטיק, וילות אינטימיות וריטריטים בצפון דורשת רגישות עמוקה לקונטקסט. הגישה שלי משלבת בחירה מוזיקלית ייחודית של אלקטרוניקה אורגנית, אקוסטיקה מדויקת ותאורה חמה שמתמזגות עם השקיעה ויוצרות אווירה עמוקה וסוחפת.',
    manifestoP2: 'מערך של מעל 10 גופי תאורה ארכיטקטוניים ודינמיים משתלב בצורה חלקה בתוואי הנוף הטבעי. ללא כבלים מיותרים במעברי האורחים — רק קסם ויזואלי טהור משעת הזהב ועד עומק הלילה.',

    // Specifications & Rig
    specsBadge: 'שלמות בכל פרט',
    specsTitle: 'אסתטיקה מרחבית נקייה',
    specsSubtitle: 'ללא כבלים סבוכים או ארגזים מגושמים בטווח הראייה. קווי החשמל וניתוב ה-DMX מתוכננים ומותאמים בדיוק לתוואי השטח — המרחב נשאר נקי, בטוח ומושלם לצילום מכל זווית.',

    specSoundTitle: 'אדריכלות סאונד',
    specSoundDesc: 'תכנון אקוסטי מותאם לטרסות פתוחות ולחצרות אבן של יקבים: סאונד צלול, רך וללא עוצמה מעיקה או תדרים צורמים.',
    specSoundItem1: 'אקוסטיקה מותאמת לתוואי שטח הררי: הסאונד עוטף ברכות טרסות ומדרונות פתוחים מבלי להתפזר ברוח.',
    specSoundItem2: 'בס קטיפתי ללא לחץ מוגזם: תדרים נמוכים ועשירים ברחבת הריקודים, המאפשרים שיחה חופשית ונעימה ליד השולחנות.',
    specSoundItem3: 'חוויית האזנה נעימה לאורך כל הערב: צליל רך ללא תדרים גבוהים חדים, השומר על רעננות השמיעה גם בסטים ארוכים אל תוך הלילה.',

    specLightTitle: 'ארכיטקטורה ועיצוב תאורה',
    specLightDesc: 'תרחיש תאורה המתוכנן במדויק על פי המבנה והגאומטריה של המקום. אנו מדגישים את תוואי הטבע ואת קירות האבן, ליצירת תמונה תלת-ממדית עשירה ללא אלומות מסנוורות.',
    specLightItem1: 'תאורה שמשתלבת בנוף: הארה ממוקדת מלמטה למעלה של קירות אבן עתיקים, צמרות עצים וגפני יין.',
    specLightItem2: 'אסתטיקה נקייה בעין: כל החיווט והתשתיות מוסתרים בתוך הצמחייה — ללא כבלים מיותרים במעברי האורחים.',
    specLightItem3: 'דרמטורגיה של ערב: מעבר הדרגתי מהילת שקיעה חמה וענברית אל דינמיקה עמוקה ועוטפת בסט הלילה.',

    specsRiderToggle: 'צפייה בריידר הטכני',
    specsRiderConsole: 'עמדת DJ עצמאית',
    specsRiderConsoleVal: 'קונסולת Denon DJ Prime עצמאית במארז UDG מקצועי (עבודה חלקה ללא מחשבים ניידים על הבמה).',
    specsRiderDmx: 'סנכרון תאורה',
    specsRiderDmxVal: 'כוריאוגרפיית DMX ייעודית של SoundSwitch המותאמת בזמן אמת לדינמיקה ולקצב המוזיקלי.',
    specsRiderMoving: 'תאורה דינמית',
    specsRiderMovingVal: 'ראשי Spot קומפקטיים עם גובו גרפי ו-4 ראשי Wash/Beam לשטיפה תלת-ממדית של הבמה והסביבה.',
    specsRiderWash: 'תאורת וינטג׳ ואדריכלות',
    specsRiderWashVal: 'דיסק רטרו מרכזי, תאורת חלת דבש ענברית, כדור מראות ופסי LED מוסתרים להארת קירות ועצים.',

    // Scope Packages
    packagesBadge: 'פורמטים של אירועים',
    packagesTitle: 'חבילות ופורמטים',
    packagesSubtitle: 'תצורות סאונד ותאורה מוכנות, המחושבות ומותאמות במדויק להיקף המקום ומספר האורחים.',
    pkgBadgeRecommended: 'RECOMMENDED • בחירת האורחים',
    pkgBtnSelect: 'לבחירת הפורמט',
    pkgBtnInquire: 'לתיאום והתייעצות',

    pkg1Title: 'שקיעה ויין (Sunset & Wine)',
    pkg1Scale: 'עד 50 אורחים',
    pkg1Desc: 'לטעימות יין ביקבים, ארוחות שף בגינה ומפגשים אינטימיים במרפסות פתוחות.',
    pkg1Feat1: '4–6 גופי תאורת אפלייט בגוון ענבר חם להדגשת קירות אבן ומרקמי טבע',
    pkg1Feat2: 'Organic House עם מעבר הרמוני ממוזיקת רקע בשקיעה לקצב ערב חי וסוחף',
    pkg1Feat3: 'חיווט נסתר ומאובטח ללא חוטים גלויים לעין או תחת רגלי האורחים',

    pkg2Title: 'וילה פרטית וריטריט',
    pkg2Scale: 'עד 100 אורחים',
    pkg2Desc: 'חוויה אורקולית מלאה לווילות יוקרה מחוץ לעיר, סופי שבוע ביקבים ומסיבות טרסה.',
    pkg2Feat1: 'חלת דבש רטרו חמה מאחורי העמדה, תאורת שטיפה לנוף וסצנות דינמיות מושלמות',
    pkg2Feat2: 'פסקול שקיעה עוטף ועמוק העובר בצורה חלקה לגרוב מקפיץ של Melodic & Afro House',
    pkg2Feat3: 'תרחישי תאורה בזמן אמת המתאימים עצמם לשינויי המקצב ולמעבר מהשקיעה ללילה',

    pkg3Title: 'אופן-אייר בטבע פתוח',
    pkg3Scale: 'אתרי הרים ומורדות פתוחים',
    pkg3Desc: 'תכנון אישי של סאונד ותאורה לאתרים מורכבים: כרמים, נקודות תצפית ומורדות הגולן.',
    pkg3Feat1: 'חישוב פיזור שדה השמע תוך התחשבות במרחב הפתוח ובתוואי השטח ההררי',
    pkg3Feat2: 'הזנת חשמל נקייה ושקטה לחלוטין בתנאי שטח ללא נפילות מתח או רעשים',
    pkg3Feat3: 'הטמעת תאורה הרמונית בטבע הפראי, במצוקים ובצמרות עצים עתיקים',

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
    faq4A: 'כל סט נבנה באופן אישי ומדויק: תנועה מצ\'יל אורגני חם ודאונטמפו בשקיעה למלודיק האוס עמוק והיפנוטי אל תוך הלילה, בהתאמה מושלמת לדינמיקה של האורחים ולאווירת המקום.',

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
    formResetBtn: 'שליחת פנייה נוספת',
    formError: 'חלה שגיאה בשליחה. ניתן ליצור קשר ישירות ב-WhatsApp או באימייל.',

    // Sticky Action Bar
    stickyPlayPreview: '432 הרץ',
    stickyPausePreview: 'השהייה',
    stickyWhatsApp: 'WhatsApp',

    // About Footer Menu
    footerNavTitle: 'ניווט בעמוד',
    footerGlobalTitle: 'מרחבי האתר',
    footerConnectTitle: 'האזנה ויצירת קשר',
    footerOverview: 'לתחילת העמוד',
    footerPhilosophy: 'פילוסופיית סאונד',
    footerSoundscapes: 'סטים והדגמות',
    footerSpecs: 'מפרט טכני ותאורה',
    footerPackages: 'חבילות ופורמטים',
    footerFaq: 'שאלות ותשובות',
    footerBooking: 'בדיקת זמינות ותאריכים',
    footerHome: 'פורטל ראשי',
    footerVibes: 'עולמות צליל',
    footerBackToTop: 'חזרה למעלה',
    footerRights: 'כל הזכויות שמורות.',
    footerCrafted: 'סאונד ותאורה בהרמוניה מושלמת עם נופי הצפון',
    footerBadgeSound: 'סאונד אורגני',
    footerBadgeLight: 'תאורה חמה',
  },
} as const;

export function useTranslations(lang: SupportedLang = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang]?.[key] || ui[defaultLang][key];
  };
}
