import type { SupportedLang } from '../i18n/ui';

export type LocalizedString = Record<SupportedLang, string>;
export type LocalizedList = Record<SupportedLang, string[]>;

export interface ManifestoData {
  paragraphs: LocalizedString[];
}

export interface AudioPreviewItem {
  id: string;
  trackId: string;
  audioSrc: string;
  baseFreq: number;
  subFreq: number;
  badgeTag: LocalizedString;
  badgeBpm: LocalizedString;
  trackTitle: LocalizedString;
  trackSubtitle: LocalizedString;
  ariaLabel: LocalizedString;
}

export interface ReelFrame {
  src: string;
  title: LocalizedString;
  caption: LocalizedString;
}

export interface SpecCard {
  id: 'sound' | 'light';
  icon: string;
  title: LocalizedString;
  desc: LocalizedString;
  items: LocalizedList;
}

export interface RiderItem {
  id: string;
  label: LocalizedString;
  val: LocalizedString;
}

export interface PackageItem {
  id: string;
  scale: LocalizedString;
  title: LocalizedString;
  desc: LocalizedString;
  features: LocalizedList;
  featured?: boolean;
  ctaText?: LocalizedString;
}

export interface FaqItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
}

// 1. Manifesto
export const manifestoParagraphs: LocalizedString[] = [
  {
    en: 'Music at a private event is not background noise and not an aggressive club assault. It is an invisible architecture that gently gathers people together, removes tension, and fills the space with calm, confident warmth.',
    ru: 'Музыка на частном событии — это не фоновый шум и не агрессивный клубный напор. Это невидимая архитектура, которая мягко собирает людей вместе, снимает напряжение и наполняет пространство спокойным, уверенным теплом.',
    he: 'מוזיקה באירוע פרטי אינה רעש רקע ואינה מסיבת מועדונים אגרסיבית. זוהי ארכיטקטורה בלתי נראית שאוספת ברגישות את האנשים יחד, מפיגה מתחים וממלאת את המרחב בחום רגוע ובטוח.',
  },
  {
    en: 'Every venue — whether a stone wine cellar in the Upper Galilee, an open deck above the Sea of Galilee, or a villa in Rosh Pina — dictates its own acoustic rhythm. I craft sets and light scenarios specifically for the surrounding terroir.',
    ru: 'Каждая площадка — будь то каменный погреб винодельни в Верхней Галилее, открытая терраса над озером Кинерет или вилла в Рош-Пине — диктует свой акустический ритм. Я выстраиваю сет и световой сценарий строго под окружающий терруар.',
    he: 'כל חלל — בין אם מדובר במרתף יין מאבן בגליל העליון, טרסה פתוחה מעל הכנרת או וילה בראש פינה — מכתיב מקצב אקוסטי משלו. אני מתאים את הסט ואת תרחישי התאורה במדויק לטרואר ולטבע הסובב.',
  },
];

// 2. Audio Previews (Media Proof)
export const audioPreviews: AudioPreviewItem[] = [
  {
    id: 'aboutAudioPreview',
    trackId: 'sunset',
    audioSrc: '/assets/audio/desert-sunset-resonance.mp3',
    baseFreq: 432,
    subFreq: 216,
    badgeTag: {
      en: 'DESERT SUNSET',
      ru: 'ЗАКАТ В ПУСТЫНЕ',
      he: 'שקיעה מדברית',
    },
    badgeBpm: {
      en: '105 BPM ORGANIC',
      ru: '105 BPM ОРГАНИК',
      he: '105 BPM אורגניק',
    },
    trackTitle: {
      en: 'Desert Dusk Resonance',
      ru: 'Desert Dusk Resonance',
      he: 'Desert Dusk Resonance',
    },
    trackSubtitle: {
      en: 'Oriental Organic House • Warm desert winds & calm sunset horizons',
      ru: 'Восточный Organic House • Тёплый ветер пустыни и спокойный закатный горизонт',
      he: 'אורגניק האוס אוריינטלי • רוחות מדבר חמימות ואופק שקיעה רגוע',
    },
    ariaLabel: {
      en: 'Play Desert Dusk Resonance oriental soundscape preview',
      ru: 'Включить превью Desert Dusk Resonance восточный саундскейп',
      he: 'הפעל תצוגה מקדימה של Desert Dusk Resonance',
    },
  },
  {
    id: 'aboutAudioPreviewNight',
    trackId: 'night',
    audioSrc: '/assets/audio/winery-cocktail-groove.mp3',
    baseFreq: 440,
    subFreq: 220,
    badgeTag: {
      en: 'WINERY COCKTAIL',
      ru: 'ВИНОДЕЛЬНЯ / КОКТЕЙЛЬ',
      he: 'קוקטייל ביקב',
    },
    badgeBpm: {
      en: '124 BPM MELODIC',
      ru: '124 BPM МЕЛОДИК',
      he: '124 BPM מלודיק',
    },
    trackTitle: {
      en: 'Industrial Winery Groove',
      ru: 'Industrial Winery Groove',
      he: 'Industrial Winery Groove',
    },
    trackSubtitle: {
      en: 'Upbeat Melodic House • Crisp driving rhythm & cocktail energy in concrete cellar arches',
      ru: 'Мелодик-хаус в динамике • Чёткий плотный грув и вечерняя коктейльная энергия в сводах винного погреба',
      he: 'מלודיק האוס אנרגטי • מקצב נהיגה מדויק ואנרגיית קוקטייל מקפיצה בין קשתות היקב',
    },
    ariaLabel: {
      en: 'Play Industrial Winery Groove upbeat melodic house preview',
      ru: 'Включить превью Industrial Winery Groove мелодик-хаус',
      he: 'הפעל תצוגה מקדימה של Industrial Winery Groove',
    },
  },
];

// 3. Video / Photo Reel Frames
export const reelFrames: ReelFrame[] = [
  {
    src: '/assets/spaces/sunset-setup.jpg',
    title: {
      en: 'Villa Twilight Ambience',
      ru: 'Сумерки на вилле',
      he: 'שעת בין ערביים בווילה',
    },
    caption: {
      en: 'Seamless progression from sunset chill to late-night energy',
      ru: 'Плавный переход от закатного чилла к ночному настроению',
      he: 'מעבר הדרגתי מרוגע שקיעה לאנרגיית לילה',
    },
  },
  {
    src: '/assets/spaces/signature-rig-setup.jpg',
    title: {
      en: 'Signature Stage Rig',
      ru: 'Авторский сетап',
      he: 'עמדת DJ ייחודית',
    },
    caption: {
      en: 'Warm amber vintage honeycomb glow & clean geometry',
      ru: 'Тёплое янтарное свечение ретро-сот и чистая геометрия',
      he: 'תאורת חלת דבש ענברית חמה וגאומטריה נקייה',
    },
  },
  {
    src: '/assets/spaces/day-session-nature.jpg',
    title: {
      en: 'Daylight Sessions Aesthetics',
      ru: 'Эстетика дневных сессий',
      he: 'אסתטיקה של סטים ביום',
    },
    caption: {
      en: 'Deep Organic House set against raw natural landscapes',
      ru: 'Глубокий Organic House в естественном природном окружении',
      he: 'אורגניק האוס עמוק בחיבור מושלם לטבע',
    },
  },
  {
    src: '/assets/spaces/twilight-setup.jpg',
    title: {
      en: 'Winery Afro-Groove Session',
      ru: 'Афро-грув на винодельне',
      he: 'אפרו-גרוב ביקב בוטיק',
    },
    caption: {
      en: 'Rich sunset rhythm & warm flickering candlelight',
      ru: 'Плотный закатный ритм и тёплое мерцание свечей',
      he: 'מקצב שקיעה עשיר ואור נרות חם',
    },
  },
  {
    src: '/assets/spaces/winery-courtyard-setup.jpg',
    title: {
      en: 'Open Terrace Acoustics',
      ru: 'Акустика открытой террасы',
      he: 'אקוסטיקה בטרסה פתוחה',
    },
    caption: {
      en: 'Pristine sound blended into a stone winery courtyard',
      ru: 'Чистый звук, аккуратно вписанный в каменный дворик винодельни',
      he: 'סאונד צלול המשתלב ברגישות בחצר האבן של היקב',
    },
  },
  {
    src: '/assets/spaces/picnic-open-air-setup.jpg',
    title: {
      en: 'Summer Daytime Open-Air',
      ru: 'Летний дневной опен-эйр',
      he: 'אופן-אייר קייצי ביום',
    },
    caption: {
      en: 'Breezy daytime groove beneath canopies for picnics & gatherings',
      ru: 'Лёгкий грув под кронами для пикников и загородных праздников',
      he: 'גרוב קליל תחת צמרות העצים לפיקניקים ולאירועי טבע',
    },
  },
];

// 4. Technical Specs Cards
export const specCards: SpecCard[] = [
  {
    id: 'sound',
    icon: 'graphic_eq',
    title: {
      en: 'Audiophile Sound Architecture',
      ru: 'Аудиофильская архитектура звука',
      he: 'ארכיטקטורת סאונד אודיופילית',
    },
    desc: {
      en: 'Crystal clear acoustic presence with warm organic low-end, calibrated to preserve easy guest conversations.',
      ru: 'Кристальная детализация и тёплый бархатный бас, откалиброванные так, чтобы гости могли свободно общаться.',
      he: 'סאונד צלול ברמת פירוט גבוהה ובס חם ומלטף, המכוילים במיוחד כדי לאפשר שיחה נעימה בין האורחים.',
    },
    items: {
      en: [
        'Boutique wooden acoustic console and custom wooden stands',
        '432 Hz harmonic mastering resonance & warm analog tube stage',
        'Full acoustic field coverage with 0% intrusive speaker bulk',
      ],
      ru: [
        'Бутиковая деревянная DJ-консоль и кастомные стойки из массива',
        'Гармоническая калибровка 432 Гц и тёплый аналоговый тракт',
        'Равномерное покрытие площадки без визуально громоздких колонок',
      ],
      he: [
        'עמדת DJ בעיצוב עץ יוקרתי ומעמדים תואמים בהתאמה אישית',
        'כיול הרמוני בתדר 432Hz בשילוב שלב שפופרות חם ועשיר',
        'פיזור אקוסטי אחיד ומלא בכל המתחם ללא רמקולים מאסיביים',
      ],
    },
  },
  {
    id: 'light',
    icon: 'wb_incandescent',
    title: {
      en: 'Site-Specific Light Rig',
      ru: 'Авторский световой риг',
      he: 'מערך תאורה ייחודי מותאם אישית',
    },
    desc: {
      en: 'Warm amber glow, vintage honeycomb fixtures, and architectural accent lighting with concealed cable runs.',
      ru: 'Тёплое янтарное свечение, ретро-приборы с сотами и архитектурный свет со скрытой прокладкой кабелей.',
      he: 'תאורת ענבר חמימה, גופי רטרו מובחרים ותאורה ארכיטקטונית עם ניתוב כבלים מוסתר לחלוטין.',
    },
    items: {
      en: [
        '12+ custom architectural light heads & retro stage blinders',
        'Seamless cable routing with 0% visible floor clutter',
        'Dynamic DMX dimming synced to sunset and evening tempo',
      ],
      ru: [
        '12+ световых точек: заливной свет и ретро-соты сцены',
        'Аккуратная скрытая кабельная трассировка: 0% визуального шума',
        'Плавное DMX-управление яркостью синхронно с закатом и темпом вечера',
      ],
      he: [
        'מעל 12 גופי תאורה ארכיטקטוניים וגופי רטרו חמים במתחם',
        'הסתרת כבלים מדוקדקת ואסתטית ללא עומס ויזואלי ברצפה',
        'שליטת עמעום DMX דינמית המשתנה בהתאם לשקיעה ולקצב הערב',
      ],
    },
  },
];

// 5. Hardware & DJ Rider Items
export const hardwareRider: RiderItem[] = [
  {
    id: 'console',
    label: {
      en: 'DJ Equipment',
      ru: 'DJ-оборудование',
      he: 'ציוד DJ',
    },
    val: {
      en: 'Standalone Pioneer XDJ / AlphaTheta Pro System in Walnut Wooden Housing',
      ru: 'Автономная флагманская система Pioneer / AlphaTheta в массиве ореха',
      he: 'מערכת פרימיום עצמאית Pioneer / AlphaTheta במארז עץ אגוז יוקרתי',
    },
  },
  {
    id: 'dmx',
    label: {
      en: 'Light Protocol',
      ru: 'Управление светом',
      he: 'פרוטוקול תאורה',
    },
    val: {
      en: 'Wireless DMX & concealed master controller with smooth scene fading',
      ru: 'DMX-контроллер со скрытой прокладкой и бесшовным диммированием',
      he: 'בקר DMX ייעודי עם ניתוב מוסתר ומעברי סצנות רכים',
    },
  },
  {
    id: 'moving',
    label: {
      en: 'Stage Ambient Fixtures',
      ru: 'Сценический свет',
      he: 'תאורת במה חמה',
    },
    val: {
      en: 'Vintage tungsten honeycomb blinders with soft golden amber filigree',
      ru: 'Винтажные сотовые блайндеры тёплого янтарного спектра',
      he: 'גופי רטרו חלת דבש עם נימה ענברית רכה ומזמינה',
    },
  },
  {
    id: 'wash',
    label: {
      en: 'Architectural Wash',
      ru: 'Архитектурная заливка',
      he: 'הארת חלל ארכיטקטונית',
    },
    val: {
      en: 'IP65 warm-white flood units for stone walls, wine barrels & garden trees',
      ru: 'IP65 приборы теплой заливки для подсветки каменных стен, бочек и крон деревьев',
      he: 'גופי הצפה IP65 מוגני מים להארת קירות אבן, חביות יין ועצים',
    },
  },
];

// 6. Packages
export const packages: PackageItem[] = [
  {
    id: 'sunset-wine',
    scale: {
      en: 'UP TO 50 GUESTS • 4 HOURS',
      ru: 'ДО 50 ГОСТЕЙ • 4 ЧАСА',
      he: 'עד 50 אורחים • 4 שעות',
    },
    title: {
      en: 'Sunset & Wine Session',
      ru: 'Sunset & Wine Session',
      he: 'סשן שקיעה ויין',
    },
    desc: {
      en: 'Ideal for boutique winery dinners, intimate rooftop gatherings, and calm sunset cocktail receptions.',
      ru: 'Идеально для закрытых ужинов на винодельнях, камерных встреч на крышах и закатных коктейлей.',
      he: 'מושלם לארוחות בוטיק ביקב, מפגשי גג אינטימיים ואירועי קוקטייל של שעת שקיעה.',
    },
    features: {
      en: [
        'Harmonic 432 Hz Organic House & Downtempo acoustic set',
        'Compact wooden DJ console setup with discreet cable management',
        '6 warm architectural amber lights highlighting key location textures',
      ],
      ru: [
        'Гармоничный 432 Гц Organic House & Downtempo музыкальный сет',
        'Компактная деревянная DJ-консоль и скрытая проводка',
        '6 тёплых приборов архитектурного света для акцента на текстурах локации',
      ],
      he: [
        'סט אקוסטי של אורגניק האוס ודאונטמפו בתדר 432Hz',
        'עמדת עץ קומפקטית עם ניתוב כבלים מוסתר ואסתטי',
        '6 גופי תאורה ארכיטקטונית חמה להדגשת האלמנטים המיוחדים במקום',
      ],
    },
  },
  {
    id: 'boutique-villa',
    scale: {
      en: 'UP TO 120 GUESTS • 6 HOURS',
      ru: 'ДО 120 ГОСТЕЙ • 6 ЧАСОВ',
      he: 'עד 120 אורחים • 6 שעות',
    },
    title: {
      en: 'Private Villa & Retreat',
      ru: 'Private Villa & Retreat',
      he: 'וילה פרטית וריטריט',
    },
    desc: {
      en: 'Our flagship format for private birthday gatherings, villa celebrations, and weekend retreats in the Galilee & Golan.',
      ru: 'Флагманский формат для частных дней рождения, вилл и ретритов в Галилее и на Голанах.',
      he: 'הפורמט המרכזי והמבוקש ביותר לימי הולדת יוקרתיים, אירועי וילה וסופי שבוע בגליל ובגולן.',
    },
    featured: true,
    features: {
      en: [
        'Multi-stage musical progression: Ambient → Organic House → Melodic Groove',
        'Flagship bespoke wooden DJ console + audiophile column sound system',
        'Full 12+ light installation: stage honeycomb blinders & architectural wash',
      ],
      ru: [
        'Многоступенчатая драматургия: Ambient → Organic House → Melodic Groove',
        'Флагманская деревянная DJ-консоль + аудиофильский колонный звук',
        'Полная световая инсталляция из 12+ приборов: ретро-соты и заливка терруара',
      ],
      he: [
        'התפתחות מוזיקלית רב-שלבית: אמביינט → אורגניק האוס → גרוב מלודי',
        'עמדת DJ יוקרתית מעץ מלא ומערכת סאונד אודיופילית מלאה',
        'מערך תאורה עשיר של 12+ גופים: רטרו במה ותאורת אווירה פנורמית',
      ],
    },
  },
  {
    id: 'custom-production',
    scale: {
      en: 'BESPOKE SCALE & DURATION',
      ru: 'ИНДИВИДУАЛЬНЫЙ МАСШТАБ',
      he: 'הפקה בהתאמה אישית מלאה',
    },
    title: {
      en: 'Custom Terroir Production',
      ru: 'Custom Terroir Production',
      he: 'הפקת טרואר אישית',
    },
    desc: {
      en: 'For boutique weddings, open-air nature retreats, multi-day gatherings, and unique architectural sites.',
      ru: 'Для камерных свадеб, выездных опен-эйров в дикой природе и многодневных загородных событий.',
      he: 'לחתונות בוטיק ייחודיות, אירועי טבע תחת כיפת השמיים ומפגשים מרובי ימים.',
    },
    ctaText: {
      en: 'Inquire Format',
      ru: 'Обсудить формат',
      he: 'בירור פרטים',
    },
    features: {
      en: [
        'Complete site inspection & custom acoustic planning for complex landscapes',
        'Multi-zone sound (dinner area, cocktail terrace, afterparty dance space)',
        'Expanded architectural lighting for vast gardens, facades, or desert terrain',
      ],
      ru: [
        'Предварительный выезд и аудит акустики сложных природных ландшафтов',
        'Многозонный звук (зона ужина, коктейльная терраса, ночной танцпол)',
        'Расширенный световой сетап для больших садов, фасадов или пустыни',
      ],
      he: [
        'סיור שטח מוקדם ותכנון אקוסטי מותאם אישית למבנה השטח',
        'סאונד מפוצל אזורים (אזור ארוחה, טרסת קוקטייל ורחבת ריקודים)',
        'תאורה מורחבת לשטחים פתוחים, גנים רחבי ידיים או שטח מדברי',
      ],
    },
  },
];

// 7. FAQs (Used in UI & JSON-LD Schema)
export const faqs: FaqItem[] = [
  {
    id: 'faq-loudness',
    question: {
      en: 'Will the music be too loud for dinner or conversation?',
      ru: 'Не будет ли музыка слишком громкой для ужина и общения?',
      he: 'האם המוזיקה לא תהיה רועשת מדי לארוחה או לשיחה?',
    },
    answer: {
      en: 'Never. The primary focus of my audio calibration is tonal warmth and clarity rather than overwhelming volume. Guests sitting near the speakers can converse comfortably without shouting, while the overall space feels rich, full, and immersed in music.',
      ru: 'Ни в коем случае. Основа моей настройки — бархатная глубина и прозрачность, а не давящая громкость. Гости за столом рядом с колонками могут спокойно разговаривать не повышая голоса, при этом звук заполняет всю площадку.',
      he: 'בשום אופן לא. הדגש המרכזי בכיול הסאונד שלי הוא צליל חם, עוטף וצלול — ולא ווליום אגרסיבי ומעיק. האורחים יכולים לשוחח בנינוחות סביב השולחן, בעוד שהמרחב כולו מתמלא בתדר נעים ומזמין.',
    },
  },
  {
    id: 'faq-power',
    question: {
      en: 'What are the technical power requirements for your sound & light setup?',
      ru: 'Какие требования к электричеству нужны для звука и света?',
      he: 'מה דרישות החשמל להפעלת עמדת הסאונד והתאורה?',
    },
    answer: {
      en: 'The entire sound console and 12+ architectural light fixtures use energy-efficient modern engineering and draw under 2.5 kW. A single standard household 16A outlet (220V) on a reliable circuit is completely sufficient.',
      ru: 'Вся звуковая система и 12+ световых приборов потребляют суммарно менее 2.5 кВт благодаря современным энергоэффективным модулям. Достаточно одной стандартной розетки 16А (220В) со стабильным питанием.',
      he: 'מערכת הסאונד כולה ומערך 12 גופי התאורה הינם חסכוניים באנרגיה ודורשים יחד פחות מ-2.5 קילוואט. שקע ביתי רגיל של 16A (220V) מספק לחלוטין לצורך הפעילות.',
    },
  },
  {
    id: 'faq-genres',
    question: {
      en: 'Can we request specific genres or songs for our event?',
      ru: 'Можно ли скорректировать музыкальный стиль или добавить любимые треки?',
      he: 'האם ניתן לבקש סגנונות ספציפיים או שירים אהובים?',
    },
    answer: {
      en: 'Yes. Before every event, we conduct a detailed briefing to discuss your musical preferences, key artists, and any specific moments or taboos. I curate a live cohesive journey blending your personal taste with my signature melodic and organic sound aesthetic.',
      ru: 'Да, обязательно. Перед событием мы подробно обсуждаем ваши музыкальные вкусы, ключевых исполнителей и стоп-листы. Я вплетаю ваши предпочтения в живой гармоничный сет, сохраняя эстетику глубокого и теплого звучания.',
      he: 'כן, בהחלט. לפני האירוע נערוך תיאום ציפיות מעמיק על הטעם המוזיקלי שלכם, שירים שחייבים להישמע וקווים אדומים. אני שוזר את הטעם האישי שלכם לתוך סט חי והרמוני ששומר על אסתטיקה גבוהה.',
    },
  },
  {
    id: 'faq-timing',
    question: {
      en: 'How early do you arrive to set up the equipment?',
      ru: 'За сколько времени до начала вы приезжаете на площадку?',
      he: 'כמה זמן מראש אתם מגיעים למקום להקמת הציוד?',
    },
    answer: {
      en: 'I arrive 2 to 3 hours before the first guest walks in. This allows ample time for acoustic room tuning, invisible cable routing, and dialing in ambient lighting scenes so that when guests arrive, the venue is already pristine and atmospheric.',
      ru: 'Я приезжаю за 2–3 часа до появления первых гостей. Это позволяет спокойно провести акустическую калибровку под геометрию площадки, спрятать все кабели и настроить световые сцены к моменту встречи гостей.',
      he: 'אני מגיע בין שעתיים לשלוש שעות לפני הגעת האורח הראשון. הדבר מאפשר כיול אקוסטי יסודי לחלל, פריסת כבלים מוסתרת לחלוטין וכוונון תרחישי התאורה כך שהכל יהיה מוכן ומושלם עם כניסת האורחים.',
    },
  },
];
