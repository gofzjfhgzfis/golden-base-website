// ============================================
//  زانیاری پەیوەندی — Contact details
//  گۆڕینیان لێرەدا بەسە، لە هەموو وێبسایتەکەدا نوێ دەبنەوە
// ============================================

// ڕێڕەوی دروستی وێنەکان — لەگەڵ base ـی Vite دەگونجێت (GitHub Pages / Netlify)
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`;

export const site = {
  phoneDisplay: '0750 101 0003',
  phoneRaw: '07501010003',
  whatsapp: '9647501010003', // بۆ wa.me — بەبێ + و بەبێ سفر
  email: 'marzmariwan@gmail.com',
  facebook: 'https://www.facebook.com/share/1BnL7zLEao/?mibextid=wwXIfr',
  // شوێنی وردی کۆمپانیا لەسەر Google Maps
  mapLat: 36.0752276,
  mapLng: 44.5516845,
  mapLink: 'https://maps.app.goo.gl/SBTadPqpJ6cpioHd6',
  foundedYear: 1974,
};

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// ============================================
//  بەرهەمەکان — Products (9)
//  وێنە: public/images/products/
// ============================================

export const products = [
  {
    id: 1,
    slug: 'crystal',
    name: 'CRYSTAL',
    image: '/images/products/crystal.webp',
    tone: 'orange',
    engine: 'petrol',
    api: 'SAE 15W-40',
    sizes: ['1L', '4L', '5L', '25L', '200L'],
    grades: ['5W-30', '10W-30', '15W-40', '20W-50', 'HD50', 'HD70'],
    desc: {
      ku: 'ڕۆنی synthetic blend بۆ ئۆتۆمبێلی بەنزین، بەتایبەت ئەوانەی زیاتر لە ٥٠٠٠ کم ڕۆیشتوون. پاراستنێکی باشتری بزوێنەر لە کۆبوونەوەی لیتە (sludge) و یارمەتیدەرە بۆ نەهێشتنی کێشەی سیستەمی دەرکردنی دووکەڵ.',
      ar: 'زيت synthetic blend لمحركات البنزين، خاصة للمركبات التي تجاوزت 5000 كم. حماية أفضل من تراكم الرواسب ويساعد على منع أعطال نظام العادم.',
      en: 'A synthetic blend oil for petrol engines, particularly vehicles past 5,000 km. Better protection against sludge build-up, and helps prevent emission system failure.',
    },
    features: {
      ku: ['پاککەرەوەی بەهێز', 'بۆ ئۆتۆمبێلی کۆن و نوێ', 'پاراستنی بەردەوامی بزوێنەر'],
      ar: ['منظف قوي', 'للمركبات القديمة والحديثة', 'حماية مستمرة للمحرك'],
      en: ['Strong detergent action', 'For older and newer vehicles', 'Continuous engine protection'],
    },
  },
  {
    id: 2,
    slug: 'planet',
    name: 'PLANET',
    image: '/images/products/planet.webp',
    tone: 'sky',
    engine: 'petrol',
    api: 'API SL/CF',
    sizes: ['4L'],
    grades: ['5W-30', '10W-30', '15W-40', '20W-50'],
    desc: {
      ku: 'ڕۆنی بزوێنەری چەند-پلەیی بۆ ئۆتۆمبێل. هاوسەنگییەکی باش لە نێوان پاراستن و کارایی، گونجاو بۆ کەشوهەوای گەرمی ناوچەکە.',
      ar: 'زيت محرك متعدد الدرجات للمركبات. توازن جيد بين الحماية والأداء، ومناسب لمناخ المنطقة الحار.',
      en: 'A multigrade engine oil for vehicles. A good balance of protection and performance, suited to the region\'s hot climate.',
    },
    features: {
      ku: ['جێگیری لە پلەی گەرمی بەرز', 'پاراستنی بەردەوامی بزوێنەر', 'بۆ بەکارهێنانی ڕۆژانە'],
      ar: ['ثبات في درجات الحرارة العالية', 'حماية مستمرة للمحرك', 'للاستخدام اليومي'],
      en: ['Stable at high temperatures', 'Continuous engine protection', 'Everyday driving'],
    },
  },
  {
    id: 3,
    slug: 'mhc',
    name: 'MHC',
    image: '/images/products/mhc.webp',
    tone: 'navy',
    engine: 'petrol',
    api: 'API SL/CF',
    sizes: ['4L'],
    grades: ['5W-30', '10W-30', '10W-40', '15W-40', '20W-50'],
    desc: {
      ku: 'ڕۆنی Premium Blend لە بنەمای ڕۆنی بەکارنەهێنراو (virgin). بۆ گۆڕینی هەر ٥٠٠٠ کم داڕێژراوە، بەتایبەت بۆ بزوێنەری ئاسیایی.',
      ar: 'زيت Premium Blend من زيت أساس غير مستعمل (virgin). مصمم للتغيير كل 5000 كم، وخاصة لمحركات المركبات الآسيوية.',
      en: 'A premium blend built on virgin base oil. Formulated for 5,000 km change intervals, particularly for Asian engines.',
    },
    features: {
      ku: ['پاراستنی پیستۆن', 'تەکنەلۆژیای نوێ', 'پاراستنی بەردەوامی بزوێنەر'],
      ar: ['حماية المكابس', 'تقنية حديثة', 'حماية مستمرة للمحرك'],
      en: ['Piston protection', 'New-generation technology', 'Continuous engine protection'],
    },
  },
  {
    id: 4,
    slug: 'venom',
    name: 'VENOM',
    image: '/images/products/venom.webp',
    tone: 'orange',
    engine: 'both',
    api: 'API SL/CF',
    sizes: ['4L', '20L'],
    grades: ['5W-30', '10W-30', '10W-40', '15W-40', '20W-50'],
    desc: {
      ku: 'ڕۆنێکی نەوەی نوێ کە بۆ هەردوو بزوێنەری بەنزین و دیزل گونجاوە. پاراستنی زیادکراو لە گەرمی و کۆبوونەوەی پیسی.',
      ar: 'زيت من الجيل الجديد يناسب محركات البنزين والديزل معاً. حماية معززة من الحرارة وتراكم الرواسب.',
      en: 'A new-generation oil suited to both petrol and diesel engines. Enhanced protection against heat and deposit build-up.',
    },
    features: {
      ku: ['بەرگری لە گەرمی', 'کەمکردنەوەی depositـەکان', 'بەکارهێنانی فرەجۆر'],
      ar: ['مقاومة الحرارة', 'تقليل الرواسب', 'استخدام متعدد'],
      en: ['Heat resistance', 'Fewer deposits', 'Multi-purpose use'],
    },
  },
  {
    id: 5,
    slug: 'extegic',
    name: 'EXTEGIC',
    image: '/images/products/extegic.webp',
    tone: 'sky',
    engine: 'petrol',
    api: 'API SN · ACEA A3',
    sizes: ['5L'],
    grades: ['0W-20', '5W-20', '5W-30', '10W-30', '10W-40', '15W-40', '20W-50'],
    desc: {
      ku: 'ڕۆنی کوالێتی بەرز لە ڕۆنی بەکارنەهێنراوەوە، بۆ بزوێنەری بەنزینی نوێ. پلە سووکەکانی (0W-20، 5W-20) خێراتر دەگەن بە بەشەکانی بزوێنەر لە کاتی هەڵکردندا.',
      ar: 'زيت عالي الجودة من زيت غير مستعمل، لمحركات البنزين الحديثة. الدرجات الخفيفة (0W-20، 5W-20) تصل أسرع إلى أجزاء المحرك عند التشغيل.',
      en: 'High-quality oil from virgin base stock, for modern petrol engines. The lighter grades (0W-20, 5W-20) reach engine parts faster on start-up.',
    },
    features: {
      ku: ['پاشەکەوتی سووتەمەنی', 'هەڵکردنی ئاسان لە ساردیدا', 'ستانداردی ئەورووپی'],
      ar: ['توفير الوقود', 'تشغيل سهل في البرد', 'مواصفات أوروبية'],
      en: ['Fuel economy', 'Easier cold starts', 'European specification'],
    },
  },
  {
    id: 6,
    slug: 'poly-rox',
    name: 'POLY ROX',
    image: '/images/products/poly-rox.webp',
    tone: 'navy',
    engine: 'diesel',
    api: 'API CF',
    sizes: ['4L', '5L'],
    grades: ['5W-30', '10W-30', '15W-40', '20W-50', 'HD50', 'HD70'],
    desc: {
      ku: 'ڕۆنی heavy duty بۆ بزوێنەری دیزل و ئامێری قورس. پێکهاتەی پاککەرەوەی بەهێزی هەیە کە بزوێنەر پاک و کارا ڕادەگرێت.',
      ar: 'زيت heavy duty لمحركات الديزل والمعدات الثقيلة. تركيبة منظفة قوية تحافظ على نظافة المحرك وكفاءته.',
      en: 'A heavy-duty oil for diesel engines and heavy equipment. A strong detergent formulation keeps the engine clean and efficient.',
    },
    features: {
      ku: ['پاراستنی بەرزی بزوێنەر', 'پاکی و بەرگەگرتن', 'کارایی لە بارودۆخی قورس'],
      ar: ['حماية عالية للمحرك', 'نظافة ومتانة', 'أداء في الظروف القاسية'],
      en: ['High engine protection', 'Cleanliness and durability', 'Performs under hard use'],
    },
  },
  {
    id: 7,
    slug: 'bidol-lub',
    name: 'BIDOL LUB',
    image: '/images/products/bidol-lub.webp',
    tone: 'orange',
    engine: 'diesel',
    api: 'API CH-4',
    sizes: ['4L'],
    grades: ['15W-40', '20W-50', 'HD50', 'HD70'],
    desc: {
      ku: 'ڕۆنی دیزلی SAE 70 بۆ بزوێنەری قورس و کاری بەردەوام. چڕی بەرزی وا دەکات لە پلەی گەرمی زۆر بەرزیشدا چینی پاراستن بمێنێتەوە.',
      ar: 'زيت ديزل SAE 70 للمحركات الثقيلة والعمل المتواصل. لزوجته العالية تحافظ على طبقة الحماية حتى في درجات الحرارة المرتفعة جداً.',
      en: 'An SAE 70 diesel oil for heavy engines in continuous service. Its high viscosity holds the protective film even at very high temperatures.',
    },
    features: {
      ku: ['بۆ کەشی گەرم', 'تەمەنی درێژی ڕۆن', 'بۆ ئامێری قورس'],
      ar: ['للمناخ الحار', 'عمر أطول للزيت', 'للمعدات الثقيلة'],
      en: ['Built for hot climates', 'Longer oil life', 'For heavy equipment'],
    },
  },
  {
    id: 8,
    slug: 'great-tower',
    name: 'GREAT TOWER',
    image: '/images/products/great-tower.webp',
    tone: 'sky',
    engine: 'diesel',
    api: 'API CI-4 · ACEA B4',
    sizes: ['4L', '5L'],
    grades: ['5W-30', '10W-30', '15W-40', '20W-50', 'HD50', 'HD70'],
    desc: {
      ku: 'ڕۆنی fully synthetic بۆ بزوێنەری دیزل. جێگیری زیاتری هەیە لە گەرمیدا و پاراستنێکی بەردەوام دەدات لە درێژەی تەمەنی ڕۆنەکەدا.',
      ar: 'زيت fully synthetic لمحركات الديزل. ثبات أعلى في الحرارة وحماية مستمرة طوال عمر الزيت.',
      en: 'A fully synthetic oil for diesel engines. Greater thermal stability and steady protection across the oil\'s service life.',
    },
    features: {
      ku: ['پاراستنی زۆرترین', 'جێگیری گەرمی', 'پاشەکەوتی سووتەمەنی'],
      ar: ['حماية قصوى', 'ثبات حراري', 'توفير الوقود'],
      en: ['Maximum protection', 'Thermal stability', 'Fuel efficiency'],
    },
  },
  {
    id: 9,
    slug: 'interiality',
    name: 'INTERIALITY',
    image: '/images/products/interiality.webp',
    tone: 'navy',
    engine: 'diesel',
    api: 'API CI-4 PLUS · ACEA E7, A3/B4 · JASO DH-1',
    sizes: ['6L', '7L'],
    grades: ['10W-30', '15W-40', '20W-50', 'HD50', 'HD70'],
    desc: {
      ku: 'ڕۆنی دیزلی export quality بۆ بارودۆخی زۆر قورس. چڕی بەرز و volatilityـی نزم وا دەکات خواردنی ڕۆن کەم بێتەوە.',
      ar: 'زيت ديزل بجودة التصدير للظروف القاسية جداً. لزوجة عالية وتطاير منخفض يقللان من استهلاك الزيت.',
      en: 'Export-quality diesel oil for severe conditions. High viscosity and low volatility keep oil consumption down.',
    },
    features: {
      ku: ['خواردنی کەمی ڕۆن', 'بەرگەگرتنی بەرز', 'ستانداردی نێودەوڵەتی'],
      ar: ['استهلاك أقل للزيت', 'متانة عالية', 'مواصفات دولية'],
      en: ['Low oil consumption', 'High durability', 'International specification'],
    },
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
