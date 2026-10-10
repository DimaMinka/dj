export interface SpaceSetup {
  id: string;
  name: { en: string; ru: string; he: string };
  lightsCount: string;
  soundType: { en: string; ru: string; he: string };
  idealFor: { en: string; ru: string; he: string };
  image: string;
}

export interface Space {
  id: number;
  slug: 'sunset' | 'garden' | 'twilight' | 'desert' | 'nordic';
  numberLabel: string;
  title: { en: string; ru: string; he: string };
  subtitle: { en: string; ru: string; he: string };
  category: { en: string; ru: string; he: string };
  poetry: { en: string; ru: string; he: string };
  description: { en: string; ru: string; he: string };
  tags: { en: string[]; ru: string[]; he: string[] };
  bpm: number;
  frequency: number;
  keySignature: string;
  glowColor: string;
  glowRgb: string;
  bgWatercolor: string;
  setup: SpaceSetup;
}

export const spaces: Space[] = [
  {
    id: 1,
    slug: 'sunset',
    numberLabel: '01 / 05',
    title: {
      en: 'Sunset Villa',
      ru: 'Sunset Villa',
      he: 'וילת שקיעה',
    },
    subtitle: {
      en: 'Aegean Terraces • Warm Amber Sea Vista',
      ru: 'Террасы Эгеиды • Янтарный закат над морем',
      he: 'טרסות אגאיות • אופק ענברי חם מעל הים',
    },
    category: {
      en: 'Coastal Sanctuary',
      ru: 'Прибрежное святилище',
      he: 'מקדש חוף',
    },
    poetry: {
      en: 'When the golden sun dissolves into the tide, organic house warms the limestone.',
      ru: 'Когда закатное солнце растворяется в приливе, органик-хаус согревает известняк.',
      he: 'כשהשמש השוקעת נמסה אל תוך הגלים, האוס אורגני מחמם את אבני הגיר.',
    },
    description: {
      en: 'Minimalist Mediterranean villa patio, infinity pool reflecting dusk, ancient olive trees and 2200K warm honeycomb blinders softly illuminating the shoreline breeze.',
      ru: 'Минималистичное патио средиземноморской виллы, инфинити-бассейн с отражением заката, оливы и теплые соты блайндеров 2200K в такт морскому бризу.',
      he: 'פטיו ים-תיכוני מינימליסטי, בריכת אינפיניטי המשקפת שקיעה, עצי זית עתיקים ותאורת חלת-דבש חמימה 2200K לקצב רוח הים.',
    },
    tags: {
      en: ['Organic House', 'Deep Melodic', 'Sunset Vibe', 'Acoustic Clarity'],
      ru: ['Organic House', 'Deep Melodic', 'Закатный вайб', 'Акустика камня'],
      he: ['אורגניק האוס', 'דיפ מלודיק', 'אווירת שקיעה', 'אקוסטיקה פתוחה'],
    },
    bpm: 120,
    frequency: 432,
    keySignature: 'A minor',
    glowColor: '#f5a623',
    glowRgb: '245, 166, 35',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1XvLRf7UsfEKTgdHLvUoyLPS7zZgyZe3CJMW5nfPgDrATtNAOoE5ZIi1q6f1DVdZqotNEHjDmLvIRZx8fF5mZFREhK008wFuRkCmZownBihQYd5DwlFr-u6uoVX12rUGCrCDudwfhpMPYvISwClriKFYOPIUnucYOfpeMET4VrBSmQJ9_lTvLCcwOYiP2KC_7MdN_gglojaXi-gyBuobJ_EkpcZR4I82Td-O5BY9XYD_9wyqD7vg4m-ovlI',
    setup: {
      id: 'setup-sunset',
      name: {
        en: 'Chamber Sunset Rig',
        ru: 'Камерный сет Sunset Rig',
        he: 'מערך אינטימי Sunset Rig',
      },
      lightsCount: '6x Wireless Warm Blinders (2200K)',
      soundType: {
        en: 'Point-source warm wooden column array',
        ru: 'Точечный массив теплых деревянных колонок',
        he: 'מערך רמקולים בגימור עץ טבעי',
      },
      idealFor: {
        en: 'Private villa patios, poolsides, up to 60 guests',
        ru: 'Патио частных вилл, зона бассейна, до 60 гостей',
        he: 'פטיו בוילה פרטית, שפת הבריכה, עד 60 אורחים',
      },
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1W5dOEbj96zDaIz1aPVtYFcyqkuL9Zsw8fxLZGaHek93MJyqxY-SHG6IOzjpct1ViS7--YKMwzv-Jzq8xyQCNVZNd_PYUhd7hkBPyGqwr1330E8Wwim6xswITZT5RTTgzriyK1zyWxRXvg0iE2p2Xo7Zl1LvFZM4Um0pMEAo75BfyfNWP47aAfWED2OoNtXSoEmDVGYMQhAwyYlTA5-4DCkHDnikSUQ8FYH1qn3KEQMK4HH3icCz2enrk6K',
    },
  },
  {
    id: 2,
    slug: 'garden',
    numberLabel: '02 / 05',
    title: {
      en: 'Garden Sanctuary',
      ru: 'Лесной сад',
      he: 'גן יער מקודש',
    },
    subtitle: {
      en: 'Botanical Oasis • Twilight Tree Crown Wash',
      ru: 'Ботанический оазис • Подсветка крон в сумерках',
      he: 'נווה מדבר בוטני • תאורת צמרות בין הערביים',
    },
    category: {
      en: 'Forest Pavilion',
      ru: 'Лесной павильон',
      he: 'ביתן יער',
    },
    poetry: {
      en: 'Emerald canopies breathe in sync with sub-bass, moss softly dampens every chime.',
      ru: 'Изумрудные кроны дышат в унисон с саб-басом, мох мягко поглощает эхо перезвона.',
      he: 'צמרות האזמרגד נושמות בסנכרון עם הבס, טחב רך בולע כל צלצול.',
    },
    description: {
      en: 'Ancient cypress and pine grove, ground LED uplighting washing the foliage in emerald and amber, creating a sacred secluded forest atelier under the stars.',
      ru: 'Роща кипарисов и реликтовых сосен, грунтовые заливные LED приборы окрашивают кроны изумрудным и янтарем, создавая уединенное лесное ателье звука.',
      he: 'חורשת ברושים עתיקה, תאורת קרקע שוטפת את העלווה בירוק אמרלד וענבר, ויוצרת סטודיו סאונד קסום תחת הכוכבים.',
    },
    tags: {
      en: ['Botanical Deep', 'Forest Acoustics', 'LED Canopy Wash', '122 BPM'],
      ru: ['Botanical Deep', 'Акустика леса', 'Подсветка крон', '122 BPM'],
      he: ['בוטניקל דיפ', 'אקוסטיקת יער', 'שטיפת צמרות', '122 BPM'],
    },
    bpm: 122,
    frequency: 432,
    keySignature: 'F# minor',
    glowColor: '#4ade80',
    glowRgb: '74, 222, 128',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1VjsLz6bx5cS1-9MRUkv6xaGHuh7SRMVkQQmqT4GxtuhWHX5DJTXT73xLSEKUY40n7RXyJfJKEZWkN5IT1oAUioymECTOzM-8MRTws1EWMGhuIq5AIcM10-110fe8tRwMh8bmNJKk_4jHyAJ5GLkWDc1U6GelQ2iIzeo8Q5fhgzZaiyvI8Dy51XJrW0ww77soHkRscOrRoTf1PTN9bQrD-NPBwxaUbJzHZgFtQCP3vzTUQexvxduZZ688L4',
    setup: {
      id: 'setup-garden',
      name: {
        en: 'Standard Botanical Atelier',
        ru: 'Стандартный Botanical Atelier',
        he: 'סטנדרט בוטניקל Atelier',
      },
      lightsCount: '12x Architectural IP65 Wireless Fixtures',
      soundType: {
        en: 'Distributed 360° sound field for natural dispersion',
        ru: 'Распределенное 360° звуковое поле без эха',
        he: 'פיזור סאונד היקפי 360 מעלות ללא הד',
      },
      idealFor: {
        en: 'Botanical gardens, forest retreats, estate lawns, up to 120 guests',
        ru: 'Ботанические сады, усадьбы, лесные поляны, до 120 гостей',
        he: 'גנים בוטניים, אחוזות טבע, מדשאות יער, עד 120 אורחים',
      },
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1Uh5ueb0i5bruIgABNYOa3V3eIKBLwlSrtnYUu_VIiBSMjPx5RWbmf2B0WmD0fk4ZBWoLcrGYw0w-aSdztakmXMrXpb1iJ072Aov538a2uf2GUkl8vJdEHXyjoqCiqjWxw7LV1_vT80CvRNAF2qlOEz7_0eXZ_JRExD0TFrmGhFHVvEy-IkDMBV7344STptFrEg5Cwvy2qcrQ_n63peoa2m63jA6p9Mo2wH95Jgwzz2RXTk2cEqV14rYOdp',
    },
  },
  {
    id: 3,
    slug: 'twilight',
    numberLabel: '03 / 05',
    title: {
      en: 'Twilight Vineyard',
      ru: 'Twilight Vineyard',
      he: 'כרם בין השמשות',
    },
    subtitle: {
      en: 'Wine Country Hills • Oak Barrel Console & Candle Lanterns',
      ru: 'Холмы виноградников • Консоль из дубовой бочки и свечи',
      he: 'גבעות הכרמים • עמדת חבית עץ אלון ונרות חמים',
    },
    category: {
      en: 'Terroir Melodic',
      ru: 'Мелодика терруара',
      he: 'מלודיקת טרואר',
    },
    poetry: {
      en: 'Aged oak barrel, delicate violet sky, and deep hypnotic chords between the vines.',
      ru: 'Дубовая бочка, фиолетовый купол сумерек и глубокие аккорды среди виноградных лоз.',
      he: 'חבית עץ אלון עתיקה, כיפת שמיים סגולה ואקורדים עמוקים בין הגפנים.',
    },
    description: {
      en: 'Signature handcrafted vintage French oak barrel DJ console, surrounded by copper candle lanterns, olive branches, and panoramic views of rolling vineyard terraces.',
      ru: 'Фирменная диджей-консоль из винной дубовой бочки, окруженная медными фонарями со свечами, ветвями оливы и панорамой террасных виноградников.',
      he: 'עמדת DJ ייחודית מחבית עץ אלון צרפתית, מוקפת עששיות נרות מפליז, ענפי זית ונוף פנורמי של כרמים מתגלגלים.',
    },
    tags: {
      en: ['Bespoke Oak Barrel', 'Melodic Techno', 'Candle Ambiance', '123 BPM'],
      ru: ['Дубовая бочка', 'Melodic Techno', 'Свечной свет', '123 BPM'],
      he: ['עמדת חבית אלון', 'מלודיק טכנו', 'אור נרות חם', '123 BPM'],
    },
    bpm: 123,
    frequency: 432,
    keySignature: 'D minor',
    glowColor: '#a855f7',
    glowRgb: '168, 85, 247',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1Uuo9DGCJ_Xjde8SrnoMZ4fDJbQHyGKvBH2cwDiuAPmQPUO5PrH3SpysXZFyNFuYjqK2fTtwp8FsJSrugB_-2wooPITCUNQ7ToOxJAbZVt_NOe57R7Is1uwqMjkNvTjsVGBrSWNxOiA55OT1FnJrrv6RqxM59eyK2b6nIfNN4YIKddCjYaZ7NctTPtoFOkI4qrftyhj1ohrZyE59Zk4DJwDQnfEpVvl3uDZL_VtmNBUFZsrdxKrkl9OuOJ3',
    setup: {
      id: 'setup-twilight',
      name: {
        en: 'Terroir Signature Oak Console',
        ru: 'Авторский Terroir Oak Console',
        he: 'עמדת Terroir ייחודית מחבית אלון',
      },
      lightsCount: 'Vintage Warm Filament Lamps + Candle Glass Shrouds',
      soundType: {
        en: 'Acoustic warm bass tuning for open hillside reflections',
        ru: 'Теплая басовая калибровка под холмистый рельеф',
        he: 'כיול בס חם מותאם להחזרי גבעות פתוחות',
      },
      idealFor: {
        en: 'Boutique wineries, private tastings, sunset estate dinners',
        ru: 'Бутиковые винодельни, дегустации, ужины на закате',
        he: 'יקבי בוטיק, טעימות יין יוקרתיות, ארוחות שקיעה באחוזה',
      },
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1Uuo9DGCJ_Xjde8SrnoMZ4fDJbQHyGKvBH2cwDiuAPmQPUO5PrH3SpysXZFyNFuYjqK2fTtwp8FsJSrugB_-2wooPITCUNQ7ToOxJAbZVt_NOe57R7Is1uwqMjkNvTjsVGBrSWNxOiA55OT1FnJrrv6RqxM59eyK2b6nIfNN4YIKddCjYaZ7NctTPtoFOkI4qrftyhj1ohrZyE59Zk4DJwDQnfEpVvl3uDZL_VtmNBUFZsrdxKrkl9OuOJ3',
    },
  },
  {
    id: 4,
    slug: 'desert',
    numberLabel: '04 / 05',
    title: {
      en: 'Desert Nomad',
      ru: 'Desert Nomad',
      he: 'נווד מדבר',
    },
    subtitle: {
      en: 'Rolling Sand Dunes • Fire Pit & Fremen Sartorial Resonance',
      ru: 'Золотые барханы • Живой огонь и эстетика кочевников',
      he: 'דיונות זהב • מדורת אבן פתוחה ואסתטיקה מדברית',
    },
    category: {
      en: 'Dune Sanctuary',
      ru: 'Святилище дюн',
      he: 'מקדש דיונות',
    },
    poetry: {
      en: 'Whispering sands and flickering flames carry ancestral percussions under the galaxy.',
      ru: 'Шепчущие пески и живое пламя несут древнюю перкуссию под куполом галактики.',
      he: 'חולות לוחשים ולהבות מרצדות נושאים מקצב קדמוני תחת שביל החלב.',
    },
    description: {
      en: 'Intimate nomadic lounge among wind-sculpted golden dunes, woven Moroccan kilim rugs, natural stone fire pit, and hypnotic desert deep grooves.',
      ru: 'Интимный лаунж среди золотых барханов, ковры килим, кострище из дикого камня и гипнотический ориентальный дип-грув.',
      he: 'לאונג׳ נוודים אינטימי בין דיונות מוזהבות, שטיחי קילים מרוקאיים, מדורת אבן ומקצבים מדבריים מהפנטים.',
    },
    tags: {
      en: ['Afro & Oriental Deep', 'Live Percussion', 'Fire Pit Warmth', '121 BPM'],
      ru: ['Afro & Oriental Deep', 'Живая перкуссия', 'Тепло костра', '121 BPM'],
      he: ['אפרו ואוריינטל דיפ', 'כלי הקשה חיים', 'חמימות האש', '121 BPM'],
    },
    bpm: 121,
    frequency: 432,
    keySignature: 'E minor',
    glowColor: '#d4a96a',
    glowRgb: '212, 169, 106',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1WLbJZgRuFIhgwckVwar6G93ef2X-CPwE_Y8abKf9vp6vcdzhJWidTQr7bBYy70mGEqgdoNlrSGfcYQF17IQyCfSqiBP6wE2UeIkq-jVkN_bvHENKtNjNbjgabVXzQOSHdqy_qWH36j46eR_M7pHszxi_P8-yr3g60SBwUbSolr8p1sk-wfvByOJILjX8EH2nnFLe5bBJBItFT_8wWjyUxLeaxkiAUissFe-lmqBGxa2lm1gBMO2hNBs7M',
    setup: {
      id: 'setup-desert',
      name: {
        en: 'Nomad Fire Sanctuary',
        ru: 'Кочевой сетап Nomad Fire',
        he: 'מערך נוודים Nomad Fire',
      },
      lightsCount: 'Flame-torch lanterns & low brass amber floor pods',
      soundType: {
        en: 'Ultra-low distortion battery-capable high fidelity speakers',
        ru: 'Высокоточная автономная акустика без шума генераторов',
        he: 'סאונד עוצמתי אוטונומי ללא רעש גנרטורים',
      },
      idealFor: {
        en: 'Remote desert escapes, glamping retreats, stargazing sound journeys',
        ru: 'Глэмпинги, выезды в пустыню, звуковые путешествия под звездами',
        he: 'מתחמי גלמפינג יוקרתיים, מסעות סאונד במדבר תחת הכוכבים',
      },
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1WLbJZgRuFIhgwckVwar6G93ef2X-CPwE_Y8abKf9vp6vcdzhJWidTQr7bBYy70mGEqgdoNlrSGfcYQF17IQyCfSqiBP6wE2UeIkq-jVkN_bvHENKtNjNbjgabVXzQOSHdqy_qWH36j46eR_M7pHszxi_P8-yr3g60SBwUbSolr8p1sk-wfvByOJILjX8EH2nnFLe5bBJBItFT_8wWjyUxLeaxkiAUissFe-lmqBGxa2lm1gBMO2hNBs7M',
    },
  },
  {
    id: 5,
    slug: 'nordic',
    numberLabel: '05 / 05',
    title: {
      en: 'Nordic Peaks',
      ru: 'Nordic Peaks',
      he: 'פסגות נורדיות',
    },
    subtitle: {
      en: 'Mountain Cliff Shelter • Misty Volcanic Horizons & Warm Fire',
      ru: 'Горный шелтер • Туманные пики и тепло живого огня',
      he: 'מחסה צוקים הררי • אופק געשי ערפילי ואש חמה',
    },
    category: {
      en: 'Alpine Sanctuary',
      ru: 'Альпийское святилище',
      he: 'מקדש אלפיני',
    },
    poetry: {
      en: 'Crisp glacial air, drifting drizzle, and deep driving rhythms warming the mountain ledge.',
      ru: 'Чистый воздух ледников, моросящий дождь и мощный теплый ритм на краю обрыва.',
      he: 'אוויר פסגות צלול, ערפל דק ומקצב חם וסוחף על שפת המצוק.',
    },
    description: {
      en: 'Exclusive cliffside lounge terrace under a timber-and-glass canopy, pyramid patio flame heaters radiating amber warmth against moody Nordic slate blues and drifting clouds.',
      ru: 'Эксклюзивная терраса на краю скалы под стеклянным навесом, пирамиды огня согревают янтарем на фоне северного сланца и плывущих облаков.',
      he: 'טרסת לאונג׳ אקסקלוסיבית על קצה צוק, תנורי להבה חמימים על רקע סלעי בזלת נורדיים ועננים חולפים.',
    },
    tags: {
      en: ['Progressive House', 'Peak Energy', 'Nordic Mist', '124 BPM'],
      ru: ['Progressive House', 'Пиковая энергия', 'Северный туман', '124 BPM'],
      he: ['פרוגרסיב האוס', 'אנרגיית שיא', 'ערפל נורדי', '124 BPM'],
    },
    bpm: 124,
    frequency: 432,
    keySignature: 'B minor',
    glowColor: '#7dd3fc',
    glowRgb: '125, 211, 252',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1U2PTqMBjtkK_ITtpLPBYxr6vxbbc5mePrpuaOSzqY14m2pymob0Xj5_ueCaUcRu2oO3zHbmn0FdC_XcRB8Y9ttQv99jZM7oaomtA_ddsYUaBAN4y2bl5WXdEgDKp0dYG0DW3pKxxgxWH_t642VoEH1XxegYkiImUjxBy2wHMblJwRAtnlkap6MEvfALfmhG8RlciR9cKge8UzDZRAc-rTgJb5r-vPtvU6tAVUrjw6byHRfzDxRlR3B46Mq',
    setup: {
      id: 'setup-nordic',
      name: {
        en: 'Grand Alpine Horizon',
        ru: 'Иммерсивный Grand Alpine',
        he: 'מערך Grand אלפיני עוצמתי',
      },
      lightsCount: 'Cold-resistant Architectural Moving Heads + Warm Flame Blinders',
      soundType: {
        en: 'High-power sub-bass array cutting through wind and open valleys',
        ru: 'Мощный сабвуферный массив, прорезающий ветер открытых долин',
        he: 'מערך בס עוצמתי החודר את הרוח והמרחבים הפתוחים',
      },
      idealFor: {
        en: 'Mountain chalets, cliffside panoramic terraces, luxury winter retreats',
        ru: 'Горные шале, панорамные террасы у обрыва, зимние ретриты',
        he: 'שאלה הררי, טרסות צוק פנורמיות, אירועי חורף יוקרתיים',
      },
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1VIivjJSmmGqro2F_JeWmsZLrE6I0T7U1wASP_Bt3FhjrqR024gHTijb13XeNPnMc0AtYg811n4yEWZ5WO6Ut9Y3k-ubqvndGQqSUCUUMis0zjRol0YgMnAGASgZerVUvq_WKkNyFwRNd_ItnmSKTDLTKXYDPUWCRVXRBCJEsTs5y1uEAcsRt97vxhftel4pqjNpolczJg7XUxOuvuQW0bykX4lIsrjfI4RIuQrfNDlmnJ3YcXdZNsbWnbT',
    },
  },
];
