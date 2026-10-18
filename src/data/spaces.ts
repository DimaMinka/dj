export interface SpaceSetup {
  id: string;
  name: { en: string; ru: string; he: string };
  lightsCount: string | { en: string; ru: string; he: string };
  soundType: { en: string; ru: string; he: string };
  idealFor: { en: string; ru: string; he: string };
  image: string;
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
      ru: 'Twilight Vineyard',
      he: 'כרם בין השמשות',
    },
    supertitle: {
      en: '— TERROIR SOUND ATELIER —',
      ru: '— TERROIR SOUND ATELIER —',
      he: '— TERROIR SOUND ATELIER —',
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
    trackTitle: 'Twilight Vineyard Resonance',
    trackSubtitle: 'Live at Oak Barrel Rig • Melodic Session',
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
        en: 'Craft Oak Barrel Console & Candles',
        ru: 'Консоль из натурального дуба & Свечи',
        he: 'עמדת חבית עץ אלון טבעית ונרות',
      },
      lightsCount: 'CRAFT EDITION • WARM CANDLELIGHT',
      soundType: {
        en: 'Seamless integration: French oak wine barrel console with ambient warm candle lanterns',
        ru: 'Бесшовное растворение аппаратуры: дубовая бочка, живой огонь свечей и природная архитектура террасы',
        he: 'הטמעה מושלמת: עמדת חבית אלון צרפתית, עששיות נרות חמות וסאונד עוטף',
      },
      idealFor: {
        en: 'Boutique wineries, private tastings, sunset estate dinners',
        ru: 'Бутиковые винодельни, дегустации, ужины на закате',
        he: 'יקבי בוטיק, טעימות יין יוקרתיות, ארוחות שקיעה באחוזה',
      },
      image: '/assets/spaces/twilight-setup.jpg',
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
      ru: 'Sunset Villa',
      he: 'וילת שקיעה',
    },
    supertitle: {
      en: '— PRIVATE VILLA ATELIER —',
      ru: '— PRIVATE VILLA ATELIER —',
      he: '— PRIVATE VILLA ATELIER —',
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
    trackTitle: 'Sunset Horizon Deep',
    trackSubtitle: 'Live at Sunset Villa • Organic Session',
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
        en: 'Chamber Sunset Rig',
        ru: 'Теплый аналоговый свет & Сетап',
        he: 'מערך תאורת רטרו וסאונд אינטימי',
      },
      lightsCount: '2200K • WARM RETRO BLINDERS',
      soundType: {
        en: 'Point-source warm wooden column array for limestone patios',
        ru: 'Винтажные соты блайндеров с бархатным угасанием нити накала и точечный массив колонок',
        he: 'כוורות תאורה חמימות 2200K ומערך רמקולים בעץ טבעי',
      },
      idealFor: {
        en: 'Private villa patios, poolsides, up to 60 guests',
        ru: 'Патио частных вилл, зона бассейна, до 60 гостей',
        he: 'פטיו בוילה פרטית, שפת הבריכה, עד 60 אורחים',
      },
      image: '/assets/spaces/sunset-setup.jpg',
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
      ru: 'Sunset Beach Lounge',
      he: 'לאונג חוף השקיעה',
    },
    supertitle: {
      en: '— SUNSET BEACH ATELIER —',
      ru: '— SUNSET BEACH ATELIER —',
      he: '— SUNSET BEACH ATELIER —',
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
    trackTitle: 'Golden Sands Chill',
    trackSubtitle: 'Sunset Beach Live • Organic Ambient',
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
        en: 'Boho Beach Canopy Rig & Lanterns',
        ru: 'Lounge-вайб & Восточные фонари',
        he: 'מערך חוף בוהו ועששיות אוריינטליות',
      },
      lightsCount: 'BOHEMIAN CANOPY • AMBER LANTERNS',
      soundType: {
        en: 'Seamless integration with coastal sunset horizon: rattan swing seats, oriental lanterns and organic sound',
        ru: 'Бесшовное слияние с закатным горизонтом побережья: плетеные кресла-качели, восточные фонари и органический саунд',
        he: 'השתלבות מושלמת עם אופק החוף: כורסאות ראטן תלויות, עששיות חמות וסאונד אורגני',
      },
      idealFor: {
        en: 'Beachfront resorts, private coves, sunset beach ceremonies, up to 80 guests',
        ru: 'Прибрежные лаунжи, закрытые бухты, закатные коктейли у воды, до 80 гостей',
        he: 'מתחמי חוף יוקרתיים, מפרצים פרטיים, אירועי שקיעה על קו המים, עד 80 אורחים',
      },
      image: '/assets/spaces/beach-setup.jpg',
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
      en: '— BOTANICAL SOUND ATELIER —',
      ru: '— BOTANICAL SOUND ATELIER —',
      he: '— BOTANICAL SOUND ATELIER —',
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
    trackTitle: 'Botanical Canopy Dusk',
    trackSubtitle: 'Live at Garden Sanctuary • Deep Session',
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
        en: 'Secret Garden Sound Sanctuary',
        ru: 'Архитектурный свет крон & Саунд-ателье',
        he: 'תאורת צמרות אדריכלית ואטלייה בוטני',
      },
      lightsCount: '12x IP65 WIRELESS LED CANOPY WASH',
      soundType: {
        en: '360° distributed acoustic field for natural dispersion without echo',
        ru: 'Беспроводные приборы заливки крон (изумруд, янтарь) и распределенное 360° звуковое поле',
        he: 'שטיפת צמרות אלחוטית ופיזור סאונד 360 מעלות ללא הד',
      },
      idealFor: {
        en: 'Botanical gardens, forest retreats, estate lawns, up to 120 guests',
        ru: 'Ботанические сады, усадьбы, лесные поляны, до 120 гостей',
        he: 'גנים בוטניים, אחוזות טבע, מדשאות יער, עד 120 אורחים',
      },
      image: '/assets/spaces/garden-setup.jpg',
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
      ru: 'Villa Estate',
      he: 'אחוזת וילה יוקרתית',
    },
    supertitle: {
      en: '— PRIVATE VILLA ATELIER —',
      ru: '— PRIVATE VILLA ATELIER —',
      he: '— PRIVATE VILLA ATELIER —',
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
    trackTitle: 'Villa Nocturne & Torchlight',
    trackSubtitle: 'Garden Live • Deep House Session',
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
        en: 'Villa Soirée Torch Rig & Lounge',
        ru: 'Садовая терраса & Живые факелы',
        he: 'טרסת גן ולפידי אש חיים',
      },
      lightsCount: 'LIVE FIRE TORCHES & PASTEL ARCHITECTURAL WASH',
      soundType: {
        en: 'Mediterranean villa atmosphere: plush lounge seating, flickering firelight, and deep immersive acoustics',
        ru: 'Атмосфера средиземноморской виллы: мягкие лаунж-диваны, танец пламени в сумерках и глубокий иммерсивный саунд',
        he: 'אווירת וילה ים-תיכונית: ספות לאונג מפנקות, משחקי להבות בין ערביים וסאונד אימרסיבי עמוק',
      },
      idealFor: {
        en: 'Private villa gardens, luxury weddings, estate twilight cocktail parties',
        ru: 'Сады частных вилл, закрытые приемы, вечерние коктейли у бассейна',
        he: 'גני וילות פרטיות, חתונות יוקרה, קוקטיילים אלגנטיים לעת ערב',
      },
      image: '/assets/spaces/estate-setup.jpg',
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
      ru: 'Desert Nomad',
      he: 'נווד מדבר',
    },
    supertitle: {
      en: '— DUNE NOMAD SANCTUARY —',
      ru: '— DUNE NOMAD SANCTUARY —',
      he: '— DUNE NOMAD SANCTUARY —',
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
    trackTitle: 'Dune Resonance & Firelight',
    trackSubtitle: 'Desert Live • Afro Deep Session',
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
        en: 'Nomad Fire Sanctuary Rig',
        ru: 'Огни кочевников & Автономный звук',
        he: 'אורות נוודים וסאונד עצמאי שקט',
      },
      lightsCount: 'FLAME TORCHES & LOW AMBER PODS',
      soundType: {
        en: 'Ultra-low distortion battery-driven acoustic system with zero generator noise',
        ru: 'Полностью автономная высокоточная акустика без гула генераторов в гармонии с огнем',
        he: 'מערכת סאונד אוטונומית שקטה ללא גנרטורים המשתלבת עם להבות האש',
      },
      idealFor: {
        en: 'Remote desert escapes, glamping retreats, stargazing sound journeys',
        ru: 'Глэмпинги, выезды в пустыню, звуковые путешествия под звездами',
        he: 'מתחמי גלמפינג יוקרתיים, מסעות סאונד במדבר תחת הכוכבים',
      },
      image: '/assets/spaces/desert-setup.jpg',
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
      ru: 'Nordic Peaks',
      he: 'פסגות נורדיות',
    },
    supertitle: {
      en: '— ALPINE CLIFF SHELTER —',
      ru: '— ALPINE CLIFF SHELTER —',
      he: '— ALPINE CLIFF SHELTER —',
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
    trackTitle: 'Nordic Mist & Amber Warmth',
    trackSubtitle: 'Glacial Live • Organic Peak Unit',
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
        en: 'Grand Alpine Moving Lights & Fire',
        ru: 'Мощный Grand сетап & Пирамиды огня',
        he: 'מערך Grand אלפיני ותנורי להבה',
      },
      lightsCount: 'COLD-PROOF MOVING HEADS & WARM FLAME HEATERS',
      soundType: {
        en: 'High-power sub-bass array cutting through wind and open mountain valleys',
        ru: 'Мощный сабвуферный массив, прорезающий ветер открытых долин, в сочетании с огнем',
        he: 'מערך סאונד עוצמתי החודר את הרוח והמרחבים הפתוחים בשילוב להבות חמות',
      },
      idealFor: {
        en: 'Mountain chalets, cliffside panoramic terraces, luxury winter retreats',
        ru: 'Горные шале, панорамные террасы у обрыва, зимние ретриты',
        he: 'שאלה הררי, טרסות צוק פנורמיות, אירועי חורף יוקרתיים',
      },
      image: '/assets/spaces/nordic-setup.jpg',
    },
  },
];
