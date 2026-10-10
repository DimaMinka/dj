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
  headerBadge: string;
  title: { en: string; ru: string; he: string };
  supertitle: { en: string; ru: string; he: string };
  headlinePrefix: { en: string; ru: string; he: string };
  headlineAccent: { en: string; ru: string; he: string };
  poetry: { en: string; ru: string; he: string };
  trackTitle: string;
  trackSubtitle: string;
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
    headerBadge: 'SUNSET VILLA • 432 HZ',
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
      en: 'Resonance of evening quietude, sunset breeze and open water acoustics in natural 432 Hz harmony.',
      ru: 'Резонанс вечерней тишины, закатного бриза и акустики открытой воды в естественной гармонии 432 Гц.',
      he: 'תהודה של דממת ערב, בריזת שקיעה ואקוסטיקת מים פתוחים בהרמוניה טבעית של 432 הרץ.',
    },
    trackTitle: 'Sunset Horizon Deep',
    trackSubtitle: 'Live at Sunset Villa • 432 Hz Organic',
    bpm: 120,
    frequency: 432,
    keySignature: 'A minor',
    glowColor: '#d97706',
    glowRgb: '217, 119, 6',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf_Ki5CRPeg5xjJZsjX2F7GUXUAF9_CKzZUCGw4w_Rjp9L4zCcPxi3SlYKQB2HRsf5E_vwm0Dij8QvvTCIsEHZ6eQ5gsysTtwnxsWLLb59euLV4KPujpk4bnXRfHGPoOoZgpb_BNG54hB3YwHLx3eSi_-HmrviXJJfcd1RtQZdledkdd0SEYc0pSHCJhx8J2XSRdfG5wIMwsx_ADgtCf9AXNgbOQWE5-dXnNH8A-L7htCbCq0Jrx_TQA',
    setup: {
      id: 'setup-sunset',
      name: {
        en: 'Chamber Sunset Rig',
        ru: 'Теплый аналоговый свет & Сетап',
        he: 'מערך תאורת רטרו וסאונד אינטימי',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-zOCQV34RgCCD6wVCoG793KJ-EACkFxrz7rMCxcKZeNQicNCu9sB7MCl8EoRQ6HEM6zoLCcjVclPjhQuxtTqt3Cp9yN-6WZjjVkYOd1Im78pw4DAXX-Apab05IPwvi6g9kAEzCv7cw6hqK7QOR0kyL8zwn-HJdISo2Mm5vkW24DPqtOpi9Py7sqhcpPAsZAEzzxo3TtDOSEVtSb7JrBW2tJNbASqm6uiCj3TvFr5_MlyyCKgmk-ErjnjC2ULXCgp9le4',
    },
  },
  {
    id: 2,
    slug: 'garden',
    numberLabel: '02 / 05',
    headerBadge: 'GARDEN SANCTUARY • 432 HZ',
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
      en: 'Subtle resonance of warm stone, garden foliage and intimate acoustics in 432 Hz organic harmony.',
      ru: 'Тонкий резонанс теплого известняка, морского бриза и камерной акустики в естественной гармонии 432 Гц.',
      he: 'תהודה מעודנת של אבן חמה, עלוות הגן ואקוסטיקה אינטימית בהרמוניה טבעית של 432 הרץ.',
    },
    trackTitle: 'Botanical Canopy Dusk',
    trackSubtitle: 'Live at Garden Sanctuary • 432 Hz Deep',
    bpm: 122,
    frequency: 432,
    keySignature: 'F# minor',
    glowColor: '#16a34a',
    glowRgb: '22, 163, 74',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1VjsLz6bx5cS1-9MRUkv6xaGHuh7SRMVkQQmqT4GxtuhWHX5DJTXT73xLSEKUY40n7RXyJfJKEZWkN5IT1oAUioymECTOzM-8MRTws1EWMGhuIq5AIcM10-110fe8tRwMh8bmNJKk_4jHyAJ5GLkWDc1U6GelQ2iIzeo8Q5fhgzZaiyvI8Dy51XJrW0ww77soHkRscOrRoTf1PTN9bQrD-NPBwxaUbJzHZgFtQCP3vzTUQexvxduZZ688L4',
    setup: {
      id: 'setup-garden',
      name: {
        en: 'Standard Botanical Atelier',
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
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1Uh5ueb0i5bruIgABNYOa3V3eIKBLwlSrtnYUu_VIiBSMjPx5RWbmf2B0WmD0fk4ZBWoLcrGYw0w-aSdztakmXMrXpb1iJ072Aov538a2uf2GUkl8vJdEHXyjoqCiqjWxw7LV1_vT80CvRNAF2qlOEz7_0eXZ_JRExD0TFrmGhFHVvEy-IkDMBV7344STptFrEg5Cwvy2qcrQ_n63peoa2m63jA6p9Mo2wH95Jgwzz2RXTk2cEqV14rYOdp',
    },
  },
  {
    id: 3,
    slug: 'twilight',
    numberLabel: '03 / 05',
    headerBadge: 'TWILIGHT VINEYARD • 432 HZ',
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
      en: 'Vines, aged oak & ',
      ru: 'Лозы, дуб и ',
      he: 'גפנים, עץ אלון ו',
    },
    headlineAccent: {
      en: 'twilight mist.',
      ru: 'магия сумерек.',
      he: 'קסם הדמדומים.',
    },
    poetry: {
      en: 'Velvet acoustics rolling across vineyard hills, candle lanterns, and authentic craft oak barrel console.',
      ru: 'Бархатный звук над холмами виноградников, винная бочка со свечами и глубокий гипнотический бас.',
      he: 'סאונד קטיפתי מעל גבעות הכרמים, חבית אלון עם נרות ובס מהפנט.',
    },
    trackTitle: 'Twilight Vineyard Resonance',
    trackSubtitle: 'Live at Oak Barrel Rig • 432 Hz Melodic',
    bpm: 123,
    frequency: 432,
    keySignature: 'D minor',
    glowColor: '#9333ea',
    glowRgb: '147, 51, 234',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1Uuo9DGCJ_Xjde8SrnoMZ4fDJbQHyGKvBH2cwDiuAPmQPUO5PrH3SpysXZFyNFuYjqK2fTtwp8FsJSrugB_-2wooPITCUNQ7ToOxJAbZVt_NOe57R7Is1uwqMjkNvTjsVGBrSWNxOiA55OT1FnJrrv6RqxM59eyK2b6nIfNN4YIKddCjYaZ7NctTPtoFOkI4qrftyhj1ohrZyE59Zk4DJwDQnfEpVvl3uDZL_VtmNBUFZsrdxKrkl9OuOJ3',
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxjdQVOov066MNEkNgDnMRv-Am2s2xmdLeFZ0sAKv-pL28FbgYldSVHxLYH5a3v41raPc7xlkf2vPvdW6vYkGALy2lyOspkmpSQkQwjAVEFkP0T7d8ptnQAnXyIahOH6gKRgdZE_Y71VdUXDie3RXjdLMIKjAuCqjBwJveyZ8-uN_OJ42ZARZ_YNi1IjR2TbsM3aGAjJN44MmY7v1XmD2FPx2a3F1oKRBzsNl8_7h0l77am3nozrEbGEotJIJ0qhgkSnI',
    },
  },
  {
    id: 4,
    slug: 'desert',
    numberLabel: '04 / 05',
    headerBadge: 'DESERT NOMAD • 432 HZ',
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
      en: 'Whispering dunes & ',
      ru: 'Шепот барханов и ',
      he: 'לחישת הדיונות ו',
    },
    headlineAccent: {
      en: 'living fire.',
      ru: 'живое пламя.',
      he: 'אש חיה.',
    },
    poetry: {
      en: 'Ancient desert percussion, warmth of natural stone fire pit and hypnotic organic grooves under the galaxy.',
      ru: 'Древние ритмы песков, тепло дикого костра и парящий саундтрек кочевников под куполом звезд.',
      he: 'מקצבים מדבריים קדמוניים, חמימות מדורת אבן ופסקול נוודים מהפנט תחת הכוכבים.',
    },
    trackTitle: 'Desert Dunes Starlight',
    trackSubtitle: 'Live at Nomad Camp • 432 Hz Afro Deep',
    bpm: 121,
    frequency: 432,
    keySignature: 'E minor',
    glowColor: '#d97706',
    glowRgb: '217, 119, 6',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1WLbJZgRuFIhgwckVwar6G93ef2X-CPwE_Y8abKf9vp6vcdzhJWidTQr7bBYy70mGEqgdoNlrSGfcYQF17IQyCfSqiBP6wE2UeIkq-jVkN_bvHENKtNjNbjgabVXzQOSHdqy_qWH36j46eR_M7pHszxi_P8-yr3g60SBwUbSolr8p1sk-wfvByOJILjX8EH2nnFLe5bBJBItFT_8wWjyUxLeaxkiAUissFe-lmqBGxa2lm1gBMO2hNBs7M',
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
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1WLbJZgRuFIhgwckVwar6G93ef2X-CPwE_Y8abKf9vp6vcdzhJWidTQr7bBYy70mGEqgdoNlrSGfcYQF17IQyCfSqiBP6wE2UeIkq-jVkN_bvHENKtNjNbjgabVXzQOSHdqy_qWH36j46eR_M7pHszxi_P8-yr3g60SBwUbSolr8p1sk-wfvByOJILjX8EH2nnFLe5bBJBItFT_8wWjyUxLeaxkiAUissFe-lmqBGxa2lm1gBMO2hNBs7M',
    },
  },
  {
    id: 5,
    slug: 'nordic',
    numberLabel: '05 / 05',
    headerBadge: 'NORDIC PEAKS • 432 HZ',
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
      en: 'Glacial crags & ',
      ru: 'Пики скал и ',
      he: 'פסגות סלע ו',
    },
    headlineAccent: {
      en: 'pyramid flame.',
      ru: 'тепло огня.',
      he: 'להבות חמות.',
    },
    poetry: {
      en: 'Crisp mountain air, radiant pyramid flame heaters on the cliff ledge and deep driving rhythmic warmth.',
      ru: 'Прохладный горный воздух, пирамиды живого огня на краю обрыва и согревающий мощный ритм.',
      he: 'אוויר פסגות צלול, תנורי להבה על שפת המצוק ומקצב חם וסוחף.',
    },
    trackTitle: 'Nordic Peaks Glacial Drive',
    trackSubtitle: 'Live at Cliff Terrace • 432 Hz Peak',
    bpm: 124,
    frequency: 432,
    keySignature: 'B minor',
    glowColor: '#0284c7',
    glowRgb: '2, 132, 199',
    bgWatercolor: 'https://lh3.googleusercontent.com/aida/AEtjO1U2PTqMBjtkK_ITtpLPBYxr6vxbbc5mePrpuaOSzqY14m2pymob0Xj5_ueCaUcRu2oO3zHbmn0FdC_XcRB8Y9ttQv99jZM7oaomtA_ddsYUaBAN4y2bl5WXdEgDKp0dYG0DW3pKxxgxWH_t642VoEH1XxegYkiImUjxBy2wHMblJwRAtnlkap6MEvfALfmhG8RlciR9cKge8UzDZRAc-rTgJb5r-vPtvU6tAVUrjw6byHRfzDxRlR3B46Mq',
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
      image: 'https://lh3.googleusercontent.com/aida/AEtjO1VIivjJSmmGqro2F_JeWmsZLrE6I0T7U1wASP_Bt3FhjrqR024gHTijb13XeNPnMc0AtYg811n4yEWZ5WO6Ut9Y3k-ubqvndGQqSUCUUMis0zjRol0YgMnAGASgZerVUvq_WKkNyFwRNd_ItnmSKTDLTKXYDPUWCRVXRBCJEsTs5y1uEAcsRt97vxhftel4pqjNpolczJg7XUxOuvuQW0bykX4lIsrjfI4RIuQrfNDlmnJ3YcXdZNsbWnbT',
    },
  },
];
