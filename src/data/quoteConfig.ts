import type {
  EquipmentItemConfig,
  EquipmentCategory,
  LocationZoneConfig,
  QuotePreset,
} from '../types/quote';

export const VAT_RATE = 0.18; // 18% Israel VAT (applicable 2025+)

export const LABOR_RATES = {
  djPerHour: 400,        // ₪ 400 / hour for live performance
  preprodPerHour: 150,   // ₪ 150 / hour for music prep & SoundSwitch
  setupPerHour: 120,     // ₪ 120 / hour for engineering / cable management / teardown
  travelPerHour: 120,    // ₪ 120 / hour travel time rate
} as const;

export const RENTAL_MULTIPLIERS = {
  oneDay: 1.0,           // Standard single evening / night
  weekend: 1.6,          // Fri + Sat weekend session
} as const;

export function getDaysMultiplier(days: number): number {
  if (days <= 1) return 1.0;
  if (days === 2) return 1.6;
  return Number((1.0 + (days - 1) * 0.6).toFixed(2));
}

export const CATEGORIES: Record<EquipmentCategory, { en: string; ru: string; he: string }> = {
  sound: {
    en: 'Sound & Console',
    ru: 'Звук и консоль',
    he: 'הגברה ועמדת DJ',
  },
  retro: {
    en: 'Warm Vintage Lighting',
    ru: 'Ретро-свет и тёплый амбиент',
    he: 'תאורת רטרו חמה',
  },
  moving_heads: {
    en: 'Dynamic Moving Heads',
    ru: 'Динамический свет (Головы)',
    he: 'תאורה נעה (מובינג הדס)',
  },
  wash_fx: {
    en: 'Ambient Wash & Effects',
    ru: 'Заливка и визуальные спецэффекты',
    he: 'שטיפת צבע ואפקטים',
  },
  stands: {
    en: 'Rigging & Heavy-Duty Stands',
    ru: 'Стойки и крепеж',
    he: 'סטנדים ומעמדים',
  },
};

export const EQUIPMENT_CATALOG: EquipmentItemConfig[] = [
  // 1. Sound & Console
  {
    id: 'denon_prime',
    name: {
      en: 'Denon DJ Prime Console',
      ru: 'Консоль Denon DJ Prime',
      he: 'קונסולת Denon DJ Prime',
    },
    category: 'sound',
    defaultQty: 1,
    maxQty: 1,
    purchasePrice: 12000,
    dailyRentalPrice: 0,
  },
  {
    id: 'udg_stand',
    name: {
      en: 'UDG Mobile DJ Case & Stand',
      ru: 'Мобильный кейс-стойка UDG',
      he: 'עמדת קייס מקצועית UDG',
    },
    category: 'sound',
    defaultQty: 1,
    maxQty: 1,
    purchasePrice: 1200,
    dailyRentalPrice: 0,
  },
  {
    id: 'sound_column',
    name: {
      en: 'Acoustic Sound System Polman Lion 1000 (Stereo Pair)',
      ru: 'Акустическая система Polman Lion 1000 (Стереопара)',
      he: 'מערכת הגברה Polman Lion 1000 (זוג רמקולים סטריאו)',
    },
    category: 'sound',
    defaultQty: 1,
    maxQty: 2,
    purchasePrice: 7000,
    dailyRentalPrice: 650,
  },

  // 2. Retro Light
  {
    id: 'retro_center',
    name: {
      en: 'Retro Center Round Statement Lamp',
      ru: 'Ретро-центр (круглая лампа)',
      he: 'גוף רטרו מרכזי עגול',
    },
    category: 'retro',
    defaultQty: 1,
    maxQty: 1,
    purchasePrice: 1000,
    dailyRentalPrice: 180,
  },
  {
    id: 'retro_side_round',
    name: {
      en: 'Side Circular Warm Retro Fixtures',
      ru: 'Боковые круглые ретро-приборы',
      he: 'גופי רטרו עגולים צדדיים',
    },
    category: 'retro',
    defaultQty: 2,
    maxQty: 2,
    purchasePrice: 450,
    dailyRentalPrice: 80,
  },
  {
    id: 'retro_vertical_bars',
    name: {
      en: 'Side Vertical Warm Retro Light Bars',
      ru: 'Боковые вертикальные ретро-бары',
      he: 'עמודי תאורת רטרו אנכיים',
    },
    category: 'retro',
    defaultQty: 2,
    maxQty: 2,
    purchasePrice: 1000,
    dailyRentalPrice: 150,
  },

  // 3. Dynamic Moving Heads
  {
    id: 'moving_lm70s',
    name: {
      en: 'LED Wash/Beam Moving Heads (LM70S)',
      ru: 'Головы LED Wash/Beam LM70S',
      he: 'מובינג הדס LED Wash/Beam (LM70S)',
    },
    category: 'moving_heads',
    defaultQty: 4,
    maxQty: 4,
    purchasePrice: 250,
    dailyRentalPrice: 65,
  },
  {
    id: 'moving_spot',
    name: {
      en: 'LED Spot Moving Heads',
      ru: 'Головы LED Spot Moving Head',
      he: 'מובינג הדס LED Spot',
    },
    category: 'moving_heads',
    defaultQty: 2,
    maxQty: 2,
    purchasePrice: 250,
    dailyRentalPrice: 75,
  },

  // 4. Wash & Effects
  {
    id: 'led_bar_10',
    name: {
      en: 'Linear LED Bar (10 Lenses Warm/Color)',
      ru: 'Линейная панель LED Bar (10 линз)',
      he: 'פס תאורה ליניארי LED Bar (10 עדשות)',
    },
    category: 'wash_fx',
    defaultQty: 1,
    maxQty: 2,
    purchasePrice: 1000,
    dailyRentalPrice: 120,
  },
  {
    id: 'led_par_18',
    name: {
      en: 'LED Par 18 Flood Wash (RGB/RGBW)',
      ru: 'Прожекторы заливки LED Par 18 RGB/RGBW',
      he: 'פנסי שטיפה LED Par 18',
    },
    category: 'wash_fx',
    defaultQty: 2,
    maxQty: 4,
    purchasePrice: 150,
    dailyRentalPrice: 40,
  },
  {
    id: 'led_par_uv',
    name: {
      en: 'LED Par 36 UV Ultraviolet Flood',
      ru: 'Прожектор LED Par 36 UV (ультрафиолет)',
      he: 'פנס אולטרה-סגול LED Par 36 UV',
    },
    category: 'wash_fx',
    defaultQty: 1,
    maxQty: 2,
    purchasePrice: 100,
    dailyRentalPrice: 35,
  },
  {
    id: 'mirror_ball',
    name: {
      en: 'Motorized Disco Mirror Ball',
      ru: 'Зеркальный шар с мотором',
      he: 'כדור מראות ממונע',
    },
    category: 'wash_fx',
    defaultQty: 1,
    maxQty: 1,
    purchasePrice: 400,
    dailyRentalPrice: 60,
  },
  {
    id: 'pinspot_white',
    name: {
      en: 'Narrow Beam White Pinspot',
      ru: 'Белый направленный пинспот',
      he: 'פינספוט לבן ממוקד',
    },
    category: 'wash_fx',
    defaultQty: 1,
    maxQty: 2,
    purchasePrice: 100,
    dailyRentalPrice: 30,
  },
  {
    id: 'laser_system',
    name: {
      en: 'Laser Show System FX',
      ru: 'Лазерная система Laser Show System',
      he: 'מערכת מופע לייזר',
    },
    category: 'wash_fx',
    defaultQty: 1,
    maxQty: 1,
    purchasePrice: 100,
    dailyRentalPrice: 35,
  },
  {
    id: 'led_candles',
    name: {
      en: 'Ambiance LED Candle Set',
      ru: 'Электронные свечи LED Candles (набор)',
      he: 'סט נרות אווירה LED',
    },
    category: 'wash_fx',
    defaultQty: 1,
    maxQty: 1,
    purchasePrice: 350,
    dailyRentalPrice: 60,
  },

  // 5. Stands & Rigging
  {
    id: 'stands_rig',
    name: {
      en: 'Heavy-Duty Light & Sound Stands (Tripods & T-bars)',
      ru: 'Стойки под свет и звук (штативы, Т-бары)',
      he: 'סטנדים כבדים לתאורה וסאונד (חצובות וקורות T)',
    },
    category: 'stands',
    defaultQty: 1,
    maxQty: 2,
    purchasePrice: 600,
    dailyRentalPrice: 80,
  },
];

export const LOCATION_ZONES: LocationZoneConfig[] = [
  {
    id: 'upper_galilee',
    name: {
      en: 'Upper Galilee (Rosh Pina, Safed, Dalton)',
      ru: 'Верхняя Галилея (Рош-Пина, Цфат, Дальтон)',
      he: 'גליל עליון (ראש פינה, צפת, דלתון)',
    },
    defaultDurationMin: 20,
    defaultFee: 100,
  },
  {
    id: 'kinneret',
    name: {
      en: 'Sea of Galilee & Jordan Valley',
      ru: 'Озеро Кинерет и Иорданская долина',
      he: 'סובב כנרת ועמק הירדן',
    },
    defaultDurationMin: 45,
    defaultFee: 200,
  },
  {
    id: 'golan',
    name: {
      en: 'Golan Heights & Merom Golan',
      ru: 'Голанские высоты и Мером-Голан',
      he: 'רמת הגולן ומרום גולן',
    },
    defaultDurationMin: 60,
    defaultFee: 250,
  },
  {
    id: 'custom',
    name: {
      en: 'Central Israel / Extended Location',
      ru: 'Центр / Индивидуальная локация',
      he: 'מרכז הארץ / מיקום מותאם אישית',
    },
    defaultDurationMin: 120,
    defaultFee: 500,
  },
];

export const PRESETS: QuotePreset[] = [
  {
    id: 'sunset_cocktail',
    name: {
      en: 'Sunset & Cocktail (Acoustic)',
      ru: 'Закатный коктейль (Камерный вечер)',
      he: 'קוקטייל שקיעה (אינטימי)',
    },
    description: {
      en: 'Sound console + warm retro center lamp and amber bars for intimate villa wine evenings.',
      ru: 'Звуковая консоль + ретро-свет янтарного спектра для вилл и виноделен до 40 гостей.',
      he: 'עמדת סאונד מלאה + תאורת רטרו ענברית חמה לאירועי יין ושקיעה עד 40 אורחים.',
    },
    djHours: 3.0,
    preprodHours: 2.0,
    setupFee: 480, // 4h @ 120 ₪/h
    daysCount: 1,
    locationZone: 'upper_galilee',
    equipmentItemIds: [
      { id: 'denon_prime', qty: 1 },
      { id: 'udg_stand', qty: 1 },
      { id: 'sound_column', qty: 1 },
      { id: 'retro_center', qty: 1 },
      { id: 'retro_side_round', qty: 2 },
      { id: 'led_candles', qty: 1 },
      { id: 'stands_rig', qty: 1 },
    ],
  },
  {
    id: 'full_production_signature',
    name: {
      en: 'Signature Full Rig (Sound & Light)',
      ru: 'Авторский сетап (Полный свет и звук)',
      he: 'הפקת פרימיום (סאונד ותאורה מלאה)',
    },
    description: {
      en: 'All 16 fixtures, moving heads, SoundSwitch DMX programming, discreet cabling, and bespoke music pre-production.',
      ru: 'Полный парк из 16 приборов, головы, лазер, SoundSwitch DMX режиссура, скрытая проводка и авторский пре-продакшн.',
      he: 'כל 16 גופי התאורה, מובינג הדס, סאונדסוויץ׳ DMX, כבילה מוסתרת והכנה מוזיקלית מלאה.',
    },
    featured: true,
    djHours: 3.5,
    preprodHours: 6.0,
    setupFee: 1080, // 9h @ 120 ₪/h
    daysCount: 1,
    locationZone: 'upper_galilee',
    equipmentItemIds: EQUIPMENT_CATALOG.map((item) => ({ id: item.id, qty: item.defaultQty })),
  },
  {
    id: 'weekend_retreat',
    name: {
      en: 'Weekend Villa Retreat (2 Days)',
      ru: 'Уикенд на вилле (2 суток)',
      he: 'ריטריט וילה (יומיים מלאים)',
    },
    description: {
      en: 'Full sound & lighting setup across Friday sunset and Saturday night party with 1.6x weekend equipment multiplier.',
      ru: 'Звук и свет на вечер пятницы и вечеринку субботы с льготным коэффициентом аренды 1.6x.',
      he: 'מערך סאונד ותאורה לשישי שקיעה ומסיבת שבת עם מקדם השכרה מוזל של 1.6 לסופ״ש.',
    },
    djHours: 6.0,
    preprodHours: 6.0,
    setupFee: 1080, // 9h @ 120 ₪/h
    daysCount: 2,
    locationZone: 'upper_galilee',
    equipmentItemIds: EQUIPMENT_CATALOG.map((item) => ({ id: item.id, qty: item.defaultQty })),
  },
];
