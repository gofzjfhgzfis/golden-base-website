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
  mapQuery: 'Koya Erbil Road, Erbil, Iraq',
  foundedYear: 1974,
};

export const waLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// ============================================
//  بەرهەمەکان — Products (9)
//  بۆ گۆڕین: وێنە لە public/images/products/ ، ناو و پلەکان لێرە
// ============================================

export const products = [
  {
    id: 1,
    name: 'CRYSTAL',
    image: '/images/products/crystal.webp',
    tone: 'orange',
    sizes: ['1L', '4L', '5L', '25L', '200L'],
    grades: ['5W-30', '10W-30', '15W-40', '20W-50', 'HD50', 'HD', 'HD70'],
  },
  {
    id: 2,
    name: 'PLANET',
    image: '/images/products/planet.webp',
    tone: 'sky',
    sizes: ['4L'],
    grades: ['5W-30', '10W-30', '15W-40', '20W-50'],
  },
  {
    id: 3,
    name: 'MHC',
    image: '/images/products/mhc.webp',
    tone: 'navy',
    sizes: ['4L'],
    grades: ['5W-30', '10W-30', '10W-40', '15W-40', '20W-50'],
  },
  {
    id: 4,
    name: 'VENOM',
    image: '/images/products/venom.webp',
    tone: 'orange',
    sizes: ['4L'],
    grades: ['5W-30', '10W-30', '10W-40', '15W-40', '20W-50'],
  },
  {
    id: 5,
    name: 'EXTEGIC',
    image: '/images/products/extegic.webp',
    tone: 'sky',
    sizes: ['5L'],
    grades: ['0W-20', '5W-20', '5W-30', '10W-30', '10W-40', '15W-40', '20W-50'],
  },
  {
    id: 6,
    name: 'POLY ROX',
    image: '/images/products/poly-rox.webp',
    tone: 'navy',
    sizes: ['4L', '5L'],
    grades: ['5W-30', '10W-30', '15W-40', '20W-50', 'HD50', 'HD', 'HD70'],
  },
  {
    id: 7,
    name: 'BIDOL LUB',
    image: '/images/products/bidol-lub.webp',
    tone: 'orange',
    sizes: ['4L'],
    grades: ['15W-40', '20W-50', 'HD50', 'HD70'],
  },
  {
    id: 8,
    name: 'GREAT TOWER',
    image: '/images/products/great-tower.webp',
    tone: 'sky',
    sizes: ['4L', '5L'],
    grades: ['5W-30', '10W-30', '15W-40', '20W-50', 'HD50', 'HD', 'HD70'],
  },
  {
    id: 9,
    name: 'INTERIALITY',
    image: '/images/products/interiality.webp',
    tone: 'navy',
    sizes: ['6L', '7L'],
    grades: ['10W-30', '15W-40', '20W-50', 'HD50', 'HD', 'HD70'],
  },
];
