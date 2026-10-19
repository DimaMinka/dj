export interface SpaceSetupGallery {
  lights: string;
  lightsTitle: { en: string; ru: string; he: string };
  sound: string;
  soundTitle: { en: string; ru: string; he: string };
  location: string;
  locationTitle: { en: string; ru: string; he: string };
}

export interface SpaceSetup {
  id: string;
  name: { en: string; ru: string; he: string };
  lightsCount: string | { en: string; ru: string; he: string };
  soundType: { en: string; ru: string; he: string };
  idealFor: { en: string; ru: string; he: string };
  image: string;
  gallery?: SpaceSetupGallery;
}

export interface Space {
  id: number;
  slug: 'aegean' | 'twilight' | 'sunset' | 'beach' | 'garden' | 'estate' | 'desert' | 'nordic';
  numberLabel: string;
  headerBadge: string;
  title: { en: string; ru: string; he: string };
  supertitle: { en: string; ru: string; he: string };
  headlinePrefix: { en: string; ru: string; he: string };
  headlineAccent: { en: string; ru: string; he: string };
  poetry: { en: string; ru: string; he: string };
  tags?: { en: string[]; ru: string[]; he: string[] };
  trackTitle: string | { en: string; ru: string; he: string };
  trackSubtitle: string | { en: string; ru: string; he: string };
  bpm: number;
  frequency: number;
  keySignature: string;
  glowColor: string; // Day / Light mode accent
  glowRgb: string;
  glowColorDark: string; // Night / Dark mode luminous accent
  glowRgbDark: string;
  bgWatercolor: string;
  bgWatercolorDesktop?: string;
  setup: SpaceSetup;
}

export const spaces: Space[] = [
  // 1. Botanical Sound Atelier (Aegean Terraces) - Olive / Aegean Bronze
  {
    id: 1,
    slug: 'aegean',
    numberLabel: '01 / 08',
    headerBadge: 'AEGEAN TERRACES • BOTANICAL',
    title: {
      en: 'Aegean Terraces',
      ru: 'Террасы Кинерета',
      he: 'טרסות הים האגאי',
    },
    supertitle: {
      en: '— BOTANICAL SOUND ATELIER —',
      ru: '— ЗАКАТ • КИНЕРЕТ И ХОЛМЫ —',
      he: '— סשני שקיעה • כנרת והגבעות —',
    },
    headlinePrefix: {
      en: 'Sound shaped by ',
      ru: 'Звук, рожденный ',
      he: 'צליל שנולד מ',
    },
    headlineAccent: {
      en: 'the landscape.',
      ru: 'ландшафтом.',
      he: 'הנוף.',
    },
    poetry: {
      en: 'Subtle balance of warm limestone, evening Kinneret breeze, and chamber acoustics in pure natural harmony.',
      ru: 'Тонкий баланс теплого камня, вечернего бриза Кинерета и камерной акустики в естественной природной гармонии.',
      he: 'איזון מעודן של אבן חמה, בריזת ערב מהכנרת ואקוסטיקה אינטימית בהרמוניה טבעית.',
    },
    tags: {
      en: ['🌅 ORGANIC HOUSE', '⏱ 120 BPM', '🍷 SUNSET VIBE'],
      ru: ['🌅 ОРГАНИК-ХАУС', '⏱ 120 УД/МИН', '🍷 ЗАКАТНЫЙ ВАЙБ'],
      he: ['🌅 אורגניק האוס', '⏱ 120 פעימות/דקה', '🍷 וייב שקיעה'],
    },
    trackTitle: {
      en: 'Sunset Resonance',
      ru: 'Закатный резонанс',
      he: 'תהודת שקיעה',
    },
    trackSubtitle: {
      en: 'Live Session • Signature Sunset Mix',
      ru: 'Живая сессия • Авторский закатный микс',
      he: 'סשן חי • מיקס שקיעה מקורי',
    },
    bpm: 120,
    frequency: 432,
    keySignature: 'G major',
    glowColor: '#4d7c0f',
    glowRgb: '77, 124, 15',
    glowColorDark: '#84cc16',
    glowRgbDark: '132, 204, 22',
    bgWatercolor: '/assets/spaces/aegean-bg.jpg',
    bgWatercolorDesktop: '/assets/spaces/aegean-bg-desktop.jpg',
    setup: {
      id: 'setup-aegean',
      name: {
        en: 'RETRO HONEYCOMB & CANOPY WASH',
        ru: 'РЕТРО-СОТЫ & ПОДСВЕТКА КРОН',
        he: 'כוורות רטרו ותאורת צמרות',
      },
      lightsCount: {
        en: 'Vintage honeycomb blinds with amber glow and concealed canopy wash in harmony with twilight.',
        ru: 'Винтажные ретро-соты с мягким янтарным теплом и скрытая подсветка крон деревьев в гармонии с вечерними сумерками.',
        he: 'כוורות רטרו חמות עם זוהר ענברי ותאורת צמרות נסתרת בהרמוניה מושלמת עם שעת בין השמשות.',
      },
      soundType: {
        en: 'Live musical journey: from meditative waterfront sunset chill to deep night rhythm without listening fatigue.',
        ru: 'Живая драматургия: от медитативного закатного чилла у воды до глубокого ночного ритма без слуховой усталости.',
        he: 'דרמטורגיה חיה: מצ\'יל שקיעה מדיטטיבי על קו המים ועד לקצב לילה עמוק ללא עייפות שמיעתית.',
      },
      idealFor: {
        en: 'Terraces overlooking the Sea of Galilee, boutique wineries, olive groves, and private Galilee villas — boutique events up to 100 guests.',
        ru: 'Террасы с видом на Кинерет, винодельни, оливковые сады и частные виллы Галилеи — камерные события до 100 гостей.',
        he: 'טרסות עם נוף לכנרת, יקבי בוטיק, מטעי זיתים וילות פרטיות בגליל — אירועים אינטימיים עד 100 אורחים.',
      },
      image: '/assets/spaces/aegean-setup.jpg',
      gallery: {
        lights: '/assets/spaces/signature-rig-setup.jpg',
        lightsTitle: {
          en: 'RETRO HONEYCOMB & CANOPY WASH',
          ru: 'РЕТРО-СОТЫ & ПОДСВЕТКА КРОН',
          he: 'כוורות רטרו ותאורת צמרות',
        },
        sound: '/assets/spaces/winery-courtyard-setup.jpg',
        soundTitle: {
          en: 'ACOUSTIC ARCHITECTURE & CONSOLE',
          ru: 'АКУСТИЧЕСКАЯ АРХИТЕКТУРА & КОНСОЛЬ',
          he: 'ארכיטקטורה אקוסטית ועמדה',
        },
        location: '/assets/spaces/aegean-bg-desktop.jpg',
        locationTitle: {
          en: 'TERRACE & GALILEE PANORAMA',
          ru: 'ТЕРРАСЫ & ПАНОРАМА КИНЕРЕТА',
          he: 'טרסות ופנורמת הכנרת',
        },
      },
    },
  },

  // 2. Twilight Vineyard (Истинный эталон) - Mystic Violet Twilight
  {
    id: 2,
    slug: 'twilight',
    numberLabel: '02 / 08',
    headerBadge: 'TWILIGHT VINEYARD • TERROIR',
    title: {
      en: 'Twilight Vineyard',
      ru: 'Сумерки в винограднике',
      he: 'כרם בין השמשות',
    },
    supertitle: {
      en: '— TERROIR • GALILEE WINERIES —',
      ru: '— ТЕРРУАР • ВИНОДЕЛЬНИ ГАЛИЛЕИ —',
      he: '— טרואר • יקבי הגליל —',
    },
    headlinePrefix: {
      en: 'Twilight vines & ',
      ru: 'Лозы заката и ',
      he: 'גפני בין השמשות ו',
    },
    headlineAccent: {
      en: 'whispering leaves.',
      ru: 'шелест крон.',
      he: 'רשרוש העלים.',
    },
    poetry: {
      en: 'Private acoustic session beneath ancient oak trees among rolling vineyard hills. Gentle candle shimmer and evening terroir resonance.',
      ru: 'Приватная акустическая сессия под вековым дубом среди винных холмов. Мягкое мерцание свечей, барные бочки и вечерний резонанс.',
      he: 'סשן אקוסטי אינטימי תחת אלון עתיק בין גבעות הכרמים. נצנוץ נרות עדין, חביות עץ אלון ותהודת ערב עמוקה.',
    },
    tags: {
      en: ['🍷 MELODIC HOUSE', '⏱ 123 BPM', '🕯 TERROIR VIBE'],
      ru: ['🍷 МЕЛОДИК-ХАУС', '⏱ 123 УД/МИН', '🕯 ВИННЫЙ ТЕРРУАР'],
      he: ['🍷 מלודיק האוס', '⏱ 123 פעימות/דקה', '🕯 וייב טרואר'],
    },
    trackTitle: {
      en: 'Terroir Hills Resonance',
      ru: 'Резонанс винных холмов',
      he: 'תהודת גבעות הטרואר',
    },
    trackSubtitle: {
      en: 'Live Session • Melodic Sunset Mix',
      ru: 'Живая сессия • Мелодик-сет среди лоз',
      he: 'סשן חי • מיקס מלודי בין הגפנים',
    },
    bpm: 123,
    frequency: 432,
    keySignature: 'D minor',
    glowColor: '#6d28d9',
    glowRgb: '109, 40, 217',
    glowColorDark: '#a855f7',
    glowRgbDark: '168, 85, 247',
    bgWatercolor: '/assets/spaces/twilight-bg.jpg',
    bgWatercolorDesktop: '/assets/spaces/twilight-bg-desktop.jpg',
    setup: {
      id: 'setup-twilight',
      name: {
        en: 'CRAFT OAK BARREL & CANDLELIGHT',
        ru: 'ДУБОВЫЕ БОЧКИ & ЖИВОЙ СВЕТ СВЕЧЕЙ',
        he: 'עמדת חבית אלון ונרות חמים',
      },
      lightsCount: {
        en: 'Warm candlelight lanterns, amber floor uplighting of ancient oak barrels, and natural evening courtyard glow.',
        ru: 'Мягкое янтарное свечение фонарей, живые свечи и деликатная подсветка старых дубовых бочек и каменных сводов.',
        he: 'עששיות נרות חמות, תאורת רצפה ענברית לחביות אלון עתיקות וזוהר ערב טבעי בחצר היין.',
      },
      soundType: {
        en: 'Deep immersive Melodic & Organic House creating an intimate wine-tasting narrative and seamless groove.',
        ru: 'Глубокий обволакивающий Melodic & Organic House, создающий атмосферу винной дегустации и плавный переход в вечерний грув.',
        he: 'מלודיק ואורגניק האוס עמוק ועוטף, היוצר נרטיב אינטימי של טעימות ייין ומעבר חלק לגרוב ערב קסום.',
      },
      idealFor: {
        en: 'Upper Galilee boutique wineries, stone cellars, and vineyard terraces — intimate gatherings up to 80 guests.',
        ru: 'Бутиковые винодельни Верхней Галилеи и Голан, винные погреба и террасы среди виноградников — до 80 гостей.',
        he: 'יקבי בוטיק בגליל העליון ובגולן, מרתפי יין מאבן וטרסות כרמים — אירועים אינטימיים עד 80 אורחים.',
      },
      image: '/assets/spaces/twilight-setup.jpg',
      gallery: {
        lights: '/assets/spaces/twilight-setup.jpg',
        lightsTitle: {
          en: 'CANDLELIGHT & BARREL AMBIENCE',
          ru: 'СВЕЧИ & АТМОСФЕРА ДУБОВЫХ БОЧЕК',
          he: 'נרות ואווירת חביות אלון',
        },
        sound: '/assets/spaces/winery-courtyard-setup.jpg',
        soundTitle: {
          en: 'WINERY COURTYARD CONSOLE',
          ru: 'КОНСОЛЬ ВИННОГО ДВОРИКА',
          he: 'עמדת חצר היקב',
        },
        location: '/assets/spaces/twilight-bg-desktop.jpg',
        locationTitle: {
          en: 'VINEYARDS & TERROIR HILLS',
          ru: 'ВИНОГРАДНИКИ & ТЕРРУАРНЫЕ ХОЛМЫ',
          he: 'כרמים וגבעות הטרואר',
        },
      },
    },
  },

  // 3. Sunset Villa - Radiant Pure Gold (Золотистый закат)
  {
    id: 3,
    slug: 'sunset',
    numberLabel: '03 / 08',
    headerBadge: 'SUNSET VILLA • ACOUSTIC ATELIER',
    title: {
      en: 'Sunset Villa',
      ru: 'Вилла на закате',
      he: 'וילת שקיעה',
    },
    supertitle: {
      en: '— SUNSET • PRIVATE VILLA —',
      ru: '— ЗАКАТ • ПРИВАТНАЯ ВИЛЛА —',
      he: '— שקיעה • וילה פרטית —',
    },
    headlinePrefix: {
      en: 'Golden horizon and ',
      ru: 'Золотой горизонт и ',
      he: 'אופק מוזהב ו',
    },
    headlineAccent: {
      en: 'whispering tide.',
      ru: 'шепот воды.',
      he: 'לחישת המים.',
    },
    poetry: {
      en: 'Resonance of evening quietude, sunset breeze and open water acoustics in natural organic harmony.',
      ru: 'Резонанс вечерней тишины, закатного бриза и акустики открытой воды в естественной гармонии природы.',
      he: 'תהודה של דממת ערב, בריזת שקיעה ואקוסטיקת מים פתוחים בהרמוניה טבעית.',
    },
    tags: {
      en: ['🌅 DEEP ORGANIC', '⏱ 120 BPM', '✨ GOLDEN HOUR'],
      ru: ['🌅 ДИП-ОРГАНИК', '⏱ 120 УД/МИН', '✨ ЗОЛОТОЙ ЧАС'],
      he: ['🌅 דיפ אורגניק', '⏱ 120 פעימות/דקה', '✨ שעת הזהב'],
    },
    trackTitle: {
      en: 'Golden Horizon Resonance',
      ru: 'Золотой горизонт',
      he: 'תהודת אופק הזהב',
    },
    trackSubtitle: {
      en: 'Live Session • Waterside Sunset Mix',
      ru: 'Живая сессия • Закатный сет у воды',
      he: 'סשן חי • מיקס שקיעה על המים',
    },
    bpm: 120,
    frequency: 432,
    keySignature: 'A minor',
    glowColor: '#b45309',
    glowRgb: '180, 83, 9',
    glowColorDark: '#f59e0b',
    glowRgbDark: '245, 158, 11',
    bgWatercolor: '/assets/spaces/sunset-bg.jpg',
    bgWatercolorDesktop: '/assets/spaces/sunset-bg-desktop.jpg',
    setup: {
      id: 'setup-sunset',
      name: {
        en: 'ANALOG BLINDERS & PATIO RIG',
        ru: 'ТЕПЛЫЙ АНАЛОГОВЫЙ СВЕТ & ПАТИО',
        he: 'בליינדרים אנלוגיים וחצר פטיו',
      },
      lightsCount: {
        en: 'Warm 2200K analog blinder wash with soft filament decay, reflecting in limestone patio and pool water.',
        ru: 'Теплый аналоговый свет 2200K с бархатным угасанием нити накала, отражающийся в глади бассейна и патио.',
        he: 'תאורת בליינדרים אנלוגית חמה 2200K עם דעיכת נימה רכה, המשתקפת במי הבריכה ובאבן החצר.',
      },
      soundType: {
        en: 'Spacious sunset soundtrack from golden-hour lounge to hypnotic evening dance dynamic under the stars.',
        ru: 'Воздушный закатный саундтрек: от солнечного лаунжа в золотой час до гипнотического ритма под звездами.',
        he: 'פסקול שקיעה אוורירי: מלאונג רגוע בשעת הזהב ועד לקצב היפנוטי סוחף תחת כיפת השמיים.',
      },
      idealFor: {
        en: 'Private villa patios, Rosh Pina estates, infinity poolsides, and panoramic terraces up to 60 guests.',
        ru: 'Патио частных вилл в Рош-Пине и Галилее, зоны у инфинити-бассейна и террасы — до 60 гостей.',
        he: 'חצרות פטיו בווילות פרטיות בראש פינה ובגליל, שפת בריכות אינפיניטי וטרסות — עד 60 אורחים.',
      },
      image: '/assets/spaces/sunset-setup.jpg',
      gallery: {
        lights: '/assets/spaces/sunset-setup.jpg',
        lightsTitle: {
          en: 'ANALOG RETRO BLINDERS',
          ru: 'ВИНТАЖНЫЕ СОТЫ БЛАЙНДЕРОВ',
          he: 'כוורות בליינדרים רטרו',
        },
        sound: '/assets/spaces/day-session-nature.jpg',
        soundTitle: {
          en: 'CHAMBER VILLA CONSOLE',
          ru: 'КАМЕРНАЯ КОНСОЛЬ ВИЛЛЫ',
          he: 'עמדת וילה אינטימית',
        },
        location: '/assets/spaces/sunset-bg-desktop.jpg',
        locationTitle: {
          en: 'INFINITY POOL & SUNSET HORIZON',
          ru: 'БАССЕЙН & ЗАКАТНЫЙ ГОРИЗОНТ',
          he: 'בריכת אינפיניטי ואופק שקיעה',
        },
      },
    },
  },

  // 4. Sunset Beach Lounge - Aqua Marine / Морская волна
  {
    id: 4,
    slug: 'beach',
    numberLabel: '04 / 08',
    headerBadge: 'SUNSET BEACH • CHILLOUT ATELIER',
    title: {
      en: 'Sunset Beach Lounge',
      ru: 'Пляжный лаунж на закате',
      he: 'לאונג׳ חוף השקיעה',
    },
    supertitle: {
      en: '— COASTAL • BREEZE & SOUND —',
      ru: '— ПОБЕРЕЖЬЕ • БРИЗ И ЛАУНЖ —',
      he: '— חוף • בריזה וסאונד —',
    },
    headlinePrefix: {
      en: 'Golden sands & ',
      ru: 'Золотые пески и ',
      he: 'חולות זהב ו',
    },
    headlineAccent: {
      en: 'whispering waves.',
      ru: 'шепот волн.',
      he: 'לחישת הגלים.',
    },
    poetry: {
      en: 'Private sunset chillout on the sandy shore. Gentle sway of woven swing chairs, warm sea breeze and pure sound vibration.',
      ru: 'Приватный закатный чиллаут на песчаном побережье. Мягкие покачивания плетеных кресел, шелест теплого бриза и вибрация чистого звука.',
      he: 'צילאאוט שקיעה אינטימי על חוף הים. נדנוד עדין של כורסאות תלויות, בריזת ים חמימה ותנודת סאונד טהור.',
    },
    tags: {
      en: ['🌊 CHILLOUT GROOVE', '⏱ 118 BPM', '🐚 COASTAL VIBE'],
      ru: ['🌊 ЧИЛЛАУТ-ГРУВ', '⏱ 118 УД/МИН', '🐚 МОРСКОЙ БРИЗ'],
      he: ['🌊 צילאאוט גרוב', '⏱ 118 פעימות/דקה', '🐚 בריזת חוף'],
    },
    trackTitle: {
      en: 'Whispering Sands Resonance',
      ru: 'Шепот золотых песков',
      he: 'לחישת חולות הזהב',
    },
    trackSubtitle: {
      en: 'Live Session • Coastal Organic Chill',
      ru: 'Живая сессия • Прибрежный органик-сет',
      he: 'סשן חי • צילאאוט אורגני על קו המים',
    },
    bpm: 118,
    frequency: 432,
    keySignature: 'C major',
    glowColor: '#0f766e',
    glowRgb: '15, 118, 110',
    glowColorDark: '#14b8a6',
    glowRgbDark: '20, 184, 166',
    bgWatercolor: '/assets/spaces/beach-bg.jpg',
    bgWatercolorDesktop: '/assets/spaces/beach-bg-desktop.jpg',
    setup: {
      id: 'setup-beach',
      name: {
        en: 'BOHO CANOPY & AMBER LANTERNS',
        ru: 'БОХО-НАВЕС & ВОСТОЧНЫЕ ФОНАРИ',
        he: 'סוכת בוהו ועששיות ענבריות',
      },
      lightsCount: {
        en: 'Warm amber oriental lanterns, rattan hanging pendants, and gentle perimeter canopy wash without glare.',
        ru: 'Бохо-фонари с теплым янтарным светом и мягкая заливка бамбуковых навесов без ослепляющих бликов.',
        he: 'עששיות אוריינטליות בגוון ענבר, גופי תאורה תלויים מראטן ושטיפת סוכה רכה ללא סנוור.',
      },
      soundType: {
        en: 'Relaxed coastal chillout flowing into warm Balearic and Organic House, harmonizing with rolling waves.',
        ru: 'Расслабленный прибрежный чиллаут и мягкий Balearic / Organic грув, растворяющийся в шуме волн и бриза.',
        he: 'צילאאוט חוף רגוע הזורם למקצב בלארי ואורגניק האוס חמים, המשתלב עם קול הגלים.',
      },
      idealFor: {
        en: 'Secluded Kinneret coves, Mediterranean beachfront retreats, and sunset waterfront ceremonies up to 80 guests.',
        ru: 'Приватные бухты Кинерета, средиземноморские лаунжи и закатные коктейли у воды — до 80 гостей.',
        he: 'מפרצים פרטיים בכנרת, מתחמי חוף יוקרתיים וטקסי שקיעה על קו המים — עד 80 אורחים.',
      },
      image: '/assets/spaces/beach-setup.jpg',
      gallery: {
        lights: '/assets/spaces/beach-setup.jpg',
        lightsTitle: {
          en: 'BOHO CANOPY & ORIENTAL LANTERNS',
          ru: 'БОХО-СВЕТ & ВОСТОЧНЫЕ ФОНАРИ',
          he: 'תאורת בוהו ועששיות חמות',
        },
        sound: '/assets/spaces/picnic-open-air-setup.jpg',
        soundTitle: {
          en: 'COASTAL BEACH CONSOLE',
          ru: 'ПЛЯЖНАЯ ЛАУНЖ-КОНСОЛЬ',
          he: 'עמדת חוף אינטימית',
        },
        location: '/assets/spaces/beach-bg-desktop.jpg',
        locationTitle: {
          en: 'WATERFRONT & SUNSET HORIZON',
          ru: 'БЕРЕГ & ЗАКАТНЫЙ ГОРИЗОНТ',
          he: 'קו החוף ואופק השקיעה',
        },
      },
    },
  },

  // 5. Garden Sanctuary - Lush Emerald Green
  {
    id: 5,
    slug: 'garden',
    numberLabel: '05 / 08',
    headerBadge: 'GARDEN SANCTUARY • BOTANICAL',
    title: {
      en: 'Garden Sanctuary',
      ru: 'Лесной сад',
      he: 'גן יער מקודש',
    },
    supertitle: {
      en: '— FOREST • CANOPY SANCTUARY —',
      ru: '— ЛЕСНОЙ САД • СВЕТ В КРОНАХ —',
      he: '— יער • תאורת צמרות —',
    },
    headlinePrefix: {
      en: 'Canopy dusk & ',
      ru: 'Кроны деревьев и ',
      he: 'חופת עצים ו',
    },
    headlineAccent: {
      en: 'emerald glow.',
      ru: 'изумрудный свет.',
      he: 'אור אזמרגד.',
    },
    poetry: {
      en: 'Intimate evening sanctuary set beneath ancient leafy trees. Subtle architectural illumination and acoustic wooden elements blending into nature.',
      ru: 'Камерный вечерний лаунж под сенью величественных деревьев. Мягкая архитектурная подсветка крон и бесшовный природный звук.',
      he: 'לאונג ערב אינטימי תחת צמרות עצים עתיקים. תאורת אווירה אדריכלית עדינה וסאונד טבעי עוטף.',
    },
    tags: {
      en: ['🌿 FOREST DEEP', '⏱ 122 BPM', '🌲 360° SOUND'],
      ru: ['🌿 ЛЕСНОЙ ДИП', '⏱ 122 УД/МИН', '🌲 360° ЗВУК'],
      he: ['🌿 דיפ יער', '⏱ 122 פעימות/דקה', '🌲 סאונד 360°'],
    },
    trackTitle: {
      en: 'Emerald Canopy Resonance',
      ru: 'Изумрудные сумерки в саду',
      he: 'תהודת צמרות האזמרגד',
    },
    trackSubtitle: {
      en: 'Live Session • Botanical Deep Organic',
      ru: 'Живая сессия • Ботанический дип-микс',
      he: 'סשן חי • דיפ אורגני בוטני',
    },
    bpm: 122,
    frequency: 432,
    keySignature: 'F# minor',
    glowColor: '#047857',
    glowRgb: '4, 120, 87',
    glowColorDark: '#10b981',
    glowRgbDark: '16, 185, 129',
    bgWatercolor: '/assets/spaces/garden-bg.jpg',
    bgWatercolorDesktop: '/assets/spaces/garden-bg-desktop.jpg',
    setup: {
      id: 'setup-garden',
      name: {
        en: 'CANOPY LIGHT & ACOUSTIC ATELIER',
        ru: 'СВЕТ В КРОНАХ & АКУСТИЧЕСКОЕ АТЕЛЬЕ',
        he: 'תאורת צמרות ואטלייה אקוסטי',
      },
      lightsCount: {
        en: 'Architectural landscape fixtures with fully concealed cable routing, painting ancient branches in rich emerald, moss, and warm amber tones.',
        ru: 'Архитектурные приборы со скрытой в ландшафте коммутацией заливают кроны вековых деревьев глубокими изумрудными и теплыми янтарными тонами.',
        he: 'גופי תאורה אדריכליים עם ניתוב כבלים נסתר בטבע, המאירים צמרות עצים עתיקים בגווני אזמרגד עשירים וענבר חם.',
      },
      soundType: {
        en: 'Enveloping 360° distributed acoustic field without harsh echo — music breathes as if born from the forest itself.',
        ru: 'Объемная 360° звуковая сцена без эха и резких частот — музыка звучит так, словно рождается внутри самого сада.',
        he: 'שדה אקוסטי 360 מעלות עוטף ללא הדהוד צורם — המוזיקה נושמת כאילו נולדה מתוך היער עצמו.',
      },
      idealFor: {
        en: 'Botanical gardens, secluded woodland estates, shaded olive groves, and open forest clearings up to 120 guests.',
        ru: 'Ботанические сады, лесные усадьбы севера, тенистые рощи и уединенные поляны — до 120 гостей.',
        he: 'גנים בוטניים, אחוזות יער בצפון, מטעי זיתים מוצלים וקרחות יער מבודדות — עד 120 אורחים.',
      },
      image: '/assets/spaces/signature-rig-setup.jpg',
      gallery: {
        lights: '/assets/spaces/signature-rig-setup.jpg',
        lightsTitle: {
          en: 'CANOPY LIGHT & RETRO BLINDERS',
          ru: 'СВЕТ В КРОНАХ & РЕТРО-ПРИБОРЫ',
          he: 'תאורת צמרות וגופי רטרו חמים',
        },
        sound: '/assets/spaces/picnic-open-air-setup.jpg',
        soundTitle: {
          en: 'ACOUSTIC 360° WOODEN CONSOLE',
          ru: '360° АКУСТИЧЕСКАЯ КОНСОЛЬ ИЗ ДЕРЕВА',
          he: 'עמדת עץ אקוסטית 360°',
        },
        location: '/assets/spaces/garden-bg-desktop.jpg',
        locationTitle: {
          en: 'FOREST GLADE & BOTANIC SANCTUARY',
          ru: 'ЛЕСНАЯ ПОЛЯНА & БОТАНИЧЕСКИЙ САД',
          he: 'קרחת יער וגן בוטני',
        },
      },
    },
  },

  // 6. Villa Estate - Rose Violet Soirée / Розово-фиолетовый
  {
    id: 6,
    slug: 'estate',
    numberLabel: '06 / 08',
    headerBadge: 'VILLA ESTATE • SOIREE ATELIER',
    title: {
      en: 'Villa Estate',
      ru: 'Вечернее поместье',
      he: 'אחוזת וילה יוקרתית',
    },
    supertitle: {
      en: '— ESTATE • EVENING SOIRÉE —',
      ru: '— ПОМЕСТЬЕ • ВЕЧЕРНИЙ ПРИЕМ —',
      he: '— אחוזה • ערב גאלה —',
    },
    headlinePrefix: {
      en: 'Flickering flames & ',
      ru: 'Мерцание огней и ',
      he: 'ריצוד להבות ו',
    },
    headlineAccent: {
      en: 'evening garden.',
      ru: 'вечерний сад.',
      he: 'גן הערב.',
    },
    poetry: {
      en: 'Private evening in the garden of a luxury villa. Warmth of dancing fire torches, scent of lavender, and refined deep melodic sound.',
      ru: 'Приватный вечер в саду роскошной виллы. Тепло живых факелов, шелест лаванды и утонченный глубокий саунд в гармонии природы.',
      he: 'ערב אקסקלוסיבי בגן וילה יוקרתית. חמימות לפידי אש חיים, ניחוח לבנדר וסאונד מלודי עמוק ומוקפד.',
    },
    tags: {
      en: ['🔥 MELODIC SOIRÉE', '⏱ 122 BPM', '🥂 BOUTIQUE EVENT'],
      ru: ['🔥 МЕЛОДИК-СУАРЕ', '⏱ 122 УД/МИН', '🥂 БУТИК-ИВЕНТ'],
      he: ['🔥 מלודיק סוארה', '⏱ 122 פעימות/דקה', '🥂 אירוע בוטיק'],
    },
    trackTitle: {
      en: 'Torchlight Nocturne & Lavender',
      ru: 'Ноктюрн в свете факелов',
      he: 'נוקטורן באור לפידים ולבנדר',
    },
    trackSubtitle: {
      en: 'Garden Live • Deep Melodic Session',
      ru: 'Живая сессия • Вечерний Deep House',
      he: 'סשן חי בגינה • דיפ מלודי אינטימי',
    },
    bpm: 122,
    frequency: 432,
    keySignature: 'F minor',
    glowColor: '#a21caf',
    glowRgb: '162, 28, 175',
    glowColorDark: '#e879f9',
    glowRgbDark: '232, 121, 249',
    bgWatercolor: '/assets/spaces/estate-bg.jpg',
    bgWatercolorDesktop: '/assets/spaces/estate-bg-desktop.jpg',
    setup: {
      id: 'setup-estate',
      name: {
        en: 'ESTATE SOIRÉE & LIVE TORCHLIGHT',
        ru: 'САДОВОЕ ПОМЕСТЬЕ & ЖИВЫЕ ФАКЕЛЫ',
        he: 'אחוזת ערב ולפידי אש חיים',
      },
      lightsCount: {
        en: 'Dancing garden torches, authentic fire bowls, and soft pastel architectural illumination along stone arches and lavender paths.',
        ru: 'Живое пламя садовых факелов в сочетании с пастельной архитектурной подсветкой каменных фасадов и лавандовых аллей.',
        he: 'לפידי אש חיים בגן, קערות אש אותנטיות ושטיפת תאורה אדריכלית פסטלית לאורך קשתות אבן ושבילי לבנדר.',
      },
      soundType: {
        en: 'Refined evening selection: transitioning smoothly from atmospheric pre-party lounge to magnetic, hypnotic Melodic House.',
        ru: 'Элегантная вечерняя селекция: от утонченного коктейльного пре-пати до глубокого магнетического Melodic House.',
        he: 'סלקציה מוזיקלית מוקפדת: ממעבר אלגנטי מקוקטייל פרה-פארטי ועד למלודיק האוס מהפנט ומלא עומק.',
      },
      idealFor: {
        en: 'Historic stone estates, private villa gardens, boutique weddings, and intimate twilight cocktail receptions up to 100 guests.',
        ru: 'Исторические усадьбы, сады приватных вилл, камерные свадьбы и закрытые вечерние приемы — до 100 гостей.',
        he: 'אחוזות אבן היסטוריות, גני וילות פרטיות, חתונות בוטיק ואירועי קוקטייל אקסקלוסיביים — עד 100 אורחים.',
      },
      image: '/assets/spaces/winery-courtyard-setup.jpg',
      gallery: {
        lights: '/assets/spaces/winery-courtyard-setup.jpg',
        lightsTitle: {
          en: 'FIRE TORCHES & ARCHITECTURAL WASH',
          ru: 'ЖИВЫЕ ФАКЕЛЫ & АРХИТЕКТУРНЫЙ СВЕТ',
          he: 'לפידי אש חיים ותאורת אבן',
        },
        sound: '/assets/spaces/signature-rig-setup.jpg',
        soundTitle: {
          en: 'BOUTIQUE ESTATE DJ CONSOLE',
          ru: 'БУТИКОВАЯ DJ-КОНСОЛЬ ПОМЕСТЬЯ',
          he: 'עמדת דיג׳יי מעוצבת לאחוזה',
        },
        location: '/assets/spaces/estate-bg-desktop.jpg',
        locationTitle: {
          en: 'VILLA TERRACE & NIGHT COURTYARD',
          ru: 'ТЕРРАСА ВИЛЛЫ & ВЕЧЕРНИЙ ДВОР',
          he: 'טרסת הוילה וחצר הערב',
        },
      },
    },
  },

  // 7. Desert Nomad - Starlight Indigo Blue & Dune Amber / Сине-оранжевое ночное небо
  {
    id: 7,
    slug: 'desert',
    numberLabel: '07 / 08',
    headerBadge: 'DESERT NOMAD • DUNE SANCTUARY',
    title: {
      en: 'Desert Nomad',
      ru: 'Кочевники пустыни',
      he: 'נווד מדבר',
    },
    supertitle: {
      en: '— DESERT • STARLIGHT & DUNES —',
      ru: '— ПУСТЫНЯ • ЗВЕЗДЫ И ДЮНЫ —',
      he: '— מדבר • כוכבים ודיונות —',
    },
    headlinePrefix: {
      en: 'Golden dunes & ',
      ru: 'Золотые дюны и ',
      he: 'דיונות זהב ו',
    },
    headlineAccent: {
      en: 'breath of night.',
      ru: 'дыхание ночи.',
      he: 'נשימת הלילה.',
    },
    poetry: {
      en: 'Private acoustic session among rolling velvet dunes. Warmth of open campfire, Berber lanterns and hypnotic nomadic rhythms under starlight.',
      ru: 'Приватная акустическая сессия среди бархатных дюн. Тепло живого костра, мерцание берберских фонарей и номадический саунд под звездами.',
      he: 'סשן אקוסטי פרטי בין דיונות הקטיפה. חמימות מדורה בוערת, עששיות ברבריות ומקצבי נוודים מהפנטים תחת כיפת השמיים.',
    },
    tags: {
      en: ['🔥 AFRO & ORIENTAL', '⏱ 121 BPM', '🌌 STARLIGHT VIBE'],
      ru: ['🔥 АФРО & ВОСТОК', '⏱ 121 УД/МИН', '🌌 ЗВЕЗДНЫЙ ВАЙБ'],
      he: ['🔥 אפרו ואוריינטל', '⏱ 121 פעימות/דקה', '🌌 אווירת כוכבים'],
    },
    trackTitle: {
      en: 'Dune Resonance & Firelight',
      ru: 'Дыхание дюн и костра',
      he: 'תהודת דיונות ואור מדורה',
    },
    trackSubtitle: {
      en: 'Desert Live • Nomadic Afro-Deep',
      ru: 'Живая сессия • Номадический Afro-Deep',
      he: 'סשן חי במדבר • אפרו-דיפ נוודים',
    },
    bpm: 121,
    frequency: 432,
    keySignature: 'E minor',
    glowColor: '#c2410c',
    glowRgb: '194, 65, 12',
    glowColorDark: '#fb923c',
    glowRgbDark: '251, 146, 60',
    bgWatercolor: '/assets/spaces/desert-bg.jpg',
    bgWatercolorDesktop: '/assets/spaces/desert-bg-desktop.jpg',
    setup: {
      id: 'setup-desert',
      name: {
        en: 'NOMAD FIRE SANCTUARY & SILENT RIG',
        ru: 'ОГНИ ПУСТЫНИ & БЕСШУМНЫЙ ЗВУК',
        he: 'אורות נוודים וסאונד שקט ועצמאי',
      },
      lightsCount: {
        en: 'Low-ground amber lanterns, flickering campfire illumination, and soft floor-level glow preserving the majesty of starlit skies.',
        ru: 'Низкие янтарные фонари, живой огонь костра и деликатное свечение, не нарушающее магию звездного неба.',
        he: 'עששיות ענבר נמוכות, תאורת מדורה מרצדת ואלומות אור עדינות בגובה הקרקע שאינן מסנוורות את שמי הכוכבים.',
      },
      soundType: {
        en: 'Pure battery-driven audiophile sound system running completely silent without generators, carrying hypnotic desert grooves.',
        ru: 'Гипнотические восточные мотивы и племенной Afro-Organic грув с чистейшим автономным звуком без гула генераторов.',
        he: 'מקצבי אפרו-אורגניק מהפנטים ומוטיבים מדבריים עם מערכת סאונד אוטונומית שקטה ללא גנרטורים.',
      },
      idealFor: {
        en: 'Desert glamping sites, nomadic wellness escapes, panoramic plateau gatherings, and stargazing sessions up to 100 guests.',
        ru: 'Уединенные глэмпинги, пустынные ретриты, смотровые плато и ночные стоянки под звездами — до 100 гостей.',
        he: 'מתחמי גלמפינג מבודדים, ריטריטים במדבר, תצפיות מצוקים ומפגשי כוכבים ליליים — עד 100 אורחים.',
      },
      image: '/assets/spaces/day-session-nature.jpg',
      gallery: {
        lights: '/assets/spaces/picnic-open-air-setup.jpg',
        lightsTitle: {
          en: 'CAMPFIRE & LOW AMBER PODS',
          ru: 'ОГОНЬ КОСТРА & ЯНТАРНЫЕ ФОНАРИ',
          he: 'אש מדורה ועששיות ענבר נמוכות',
        },
        sound: '/assets/spaces/day-session-nature.jpg',
        soundTitle: {
          en: 'OFF-GRID AUTONOMOUS CONSOLE',
          ru: 'АВТОНОМНАЯ DJ-КОНСОЛЬ БЕЗ ГУЛА',
          he: 'עמדה עצמאית שקטה בטבע',
        },
        location: '/assets/spaces/desert-bg-desktop.jpg',
        locationTitle: {
          en: 'ENDLESS DUNES & STARRY NIGHT',
          ru: 'БАРХАТНЫЕ ДЮНЫ & ЗВЕЗДНАЯ НОЧЬ',
          he: 'דיונות אינסופיות ושמי לילה',
        },
      },
    },
  },

  // 8. Nordic Peaks - Deep Moody Glacier Navy / Темно-синий
  {
    id: 8,
    slug: 'nordic',
    numberLabel: '08 / 08',
    headerBadge: 'NORDIC PEAKS • ALPINE CLIFF',
    title: {
      en: 'Nordic Peaks',
      ru: 'Горные вершины',
      he: 'פסגות ההרים',
    },
    supertitle: {
      en: '— HIGHLANDS • CLIFF & MIST —',
      ru: '— ВЕРШИНЫ • СКАЛЫ И ТУМАН —',
      he: '— פסגות • מצוק וערפל —',
    },
    headlinePrefix: {
      en: 'Nordic cliffs & ',
      ru: 'Северные скалы и ',
      he: 'צוקים נורדיים ו',
    },
    headlineAccent: {
      en: 'whispering mist.',
      ru: 'шепот тумана.',
      he: 'לחישת הערפל.',
    },
    poetry: {
      en: 'Private acoustic session perched on a rocky cliff ledge. Steam of mulled wine, radiant pyramid flames and intimate driving sound in glacial air.',
      ru: 'Приватная акустическая сессия на краю горного уступа. Пар глинтвейна, тепло живого огня и камерный глубокий саунд в прохладном горном воздухе.',
      he: 'סשן אקוסטי אינטימי על שפת מצוק סלעי. אדי יין חם, תנורי להבה קורנים ומקצב עוטף באוויר הרים צלול.',
    },
    tags: {
      en: ['🏔 PEAK MELODIC', '⏱ 124 BPM', '🔥 FIRE & MIST'],
      ru: ['🏔 ГОРНЫЙ МЕЛОДИК', '⏱ 124 УД/МИН', '🔥 ОГОНЬ И ТУМАН'],
      he: ['🏔 מלודיק פסגות', '⏱ 124 פעימות/דקה', '🔥 אש וערפל'],
    },
    trackTitle: {
      en: 'Nordic Mist & Amber Warmth',
      ru: 'Горный туман и янтарное тепло',
      he: 'ערפל הרים וחום ענברי',
    },
    trackSubtitle: {
      en: 'Glacial Live • High Altitude Melodic',
      ru: 'Живая сессия • Высокогорный сет',
      he: 'סשן חי בצוק • מלודיק בגובה פסגות',
    },
    bpm: 124,
    frequency: 432,
    keySignature: 'B minor',
    glowColor: '#0e7490',
    glowRgb: '14, 116, 144',
    glowColorDark: '#22d3ee',
    glowRgbDark: '34, 211, 238',
    bgWatercolor: '/assets/spaces/nordic-bg.jpg',
    bgWatercolorDesktop: '/assets/spaces/nordic-bg-desktop.jpg',
    setup: {
      id: 'setup-nordic',
      name: {
        en: 'ALPINE MOVING LIGHTS & FIRE PYRAMIDS',
        ru: 'ГОРНЫЙ GRAND СВЕТ & ПИРАМИДЫ ОГНЯ',
        he: 'תאורת שטיפה אלפינית ותנורי להבה',
      },
      lightsCount: {
        en: 'High-power dynamic beams cutting through mountain mist, complemented by radiant pyramid fire heaters providing tactile warmth.',
        ru: 'Динамические лучи сквозь горный туман в контрасте с живым теплом огненных пирамид на каменном уступе.',
        he: 'אלומות תאורה דינמיות החודרות את ערפל ההרים בשילוב תנורי להבה בצורת פירמידה המעניקים חום פיזי מוחשי.',
      },
      soundType: {
        en: 'Tightly controlled, high-power sub-bass array engineered to cut cleanly through alpine wind without losing warmth or detail.',
        ru: 'Плотный, согревающий саунд с бархатным басом, который уверенно держит акустику на открытом горном ветру.',
        he: 'מערך סאב-בס עוצמתי ומדויק החודר דרך רוחות ההרים הפתוחות תוך שמירה על עומק חם ופרטים צלולים.',
      },
      idealFor: {
        en: 'Highland chalets across the Golan and Hermon, cliffside panoramic terraces, and winter vineyard lodges up to 100 guests.',
        ru: 'Высокогорные шале Голан и Хермона, панорамные террасы над ущельем и зимние винные ретриты — до 100 гостей.',
        he: 'בקתות שאלה ברמת הגולן והחרמון, טרסות מצוק פנורמיות מעל ואדיות ואירועי חורף יוקרתיים — עד 100 אורחים.',
      },
      image: '/assets/spaces/signature-rig-setup.jpg',
      gallery: {
        lights: '/assets/spaces/signature-rig-setup.jpg',
        lightsTitle: {
          en: 'MIST BEAMS & FLAME PYRAMIDS',
          ru: 'ЛУЧИ В ТУМАНЕ & ПИРАМИДЫ ОГНЯ',
          he: 'אלומות בערפל ותנורי להבה',
        },
        sound: '/assets/spaces/day-session-nature.jpg',
        soundTitle: {
          en: 'WEATHERPROOF ALPINE CONSOLE',
          ru: 'ВСЕПОГОДНАЯ АЛЬПИЙСКАЯ DJ-КОНСОЛЬ',
          he: 'עמדת דיג׳יי חסינת מזג אוויר',
        },
        location: '/assets/spaces/nordic-bg-desktop.jpg',
        locationTitle: {
          en: 'CLIFFTOP VISTA & MOUNTAIN RIDGE',
          ru: 'ПАНОРАМА ОБРЫВА & ГОРНЫЙ ХРЕБЕТ',
          he: 'מצוק פנורמי ורכס הרים',
        },
      },
    },
  },
];

export function getSpaceGallery(space: Space): SpaceSetupGallery {
  if (space.setup.gallery) {
    return space.setup.gallery;
  }
  return {
    lights: space.setup.image || '/assets/spaces/signature-rig-setup.jpg',
    lightsTitle: space.setup.name,
    sound: '/assets/spaces/winery-courtyard-setup.jpg',
    soundTitle: {
      en: 'ACOUSTIC ARCHITECTURE & CONSOLE',
      ru: 'АКУСТИЧЕСКАЯ АРХИТЕКТУРА & КОНСОЛЬ',
      he: 'ארכיטקטורה אקוסטית ועמדה',
    },
    location: space.bgWatercolorDesktop || space.bgWatercolor,
    locationTitle: {
      en: 'ATMOSPHERE & PANORAMA',
      ru: 'АТМОСФЕРА & ПАНОРАМА ЛОКАЦИИ',
      he: 'אווירה ופנורמת המקום',
    },
  };
}

