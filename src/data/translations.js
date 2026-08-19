// ============================================
//  زمانەکان — Kurdish (ku) / Arabic (ar) / English (en)
//  بۆ گۆڕینی هەر دەقێک، تەنها لێرە دەستکاری بکە
// ============================================

export const LANGS = {
  ku: { code: 'ku', label: 'کوردی', dir: 'rtl' },
  ar: { code: 'ar', label: 'العربية', dir: 'rtl' },
  en: { code: 'en', label: 'English', dir: 'ltr' },
};

export const translations = {
  /* ---------------- KURDISH ---------------- */
  ku: {
    company: 'کۆمپانیای گۆڵدن بەیس',
    companyShort: 'گۆڵدن بەیس',
    slogan: 'بۆ بەرهەمهێنانی ڕۆنی ئۆتۆمبێل و پاککردنەوەی ڕۆنی ڕەش',
    nav: { home: 'سەرەتا', about: 'دەربارەمان', products: 'بەرهەمەکان', contact: 'پەیوەندی' },

    hero: {
      eyebrow: 'لە ساڵی ١٩٧٤ەوە',
      title: 'ڕۆنی پیشەسازی بە ستانداردی جیهانی',
      subtitle:
        'زیاتر لە پەنجا ساڵ ئەزموون لە بواری ڕۆنی ئۆتۆمبێل و پاڵاوتنەوەی ڕۆن. لە هەولێرەوە، بە پابەندبوون بە کوالێتی و پاراستنی ژینگە.',
      cta1: 'بەرهەمەکان ببینە',
      cta2: 'پەیوەندیمان پێوە بکە',
    },

    stats: {
      years: 'ساڵ ئەزموون',
      products: 'بەرهەم',
      quality: 'کوالێتی زەمانەتکراو',
      support: 'پشتگیری بەردەوام',
    },

    aboutTeaser: {
      eyebrow: 'دەربارەمان',
      title: 'میراتێکی بەردەوام لە کوالێتی',
      text:
        'کۆمپانیای گۆڵدن بەیس لە ساڵی ١٩٧٤ەوە دەستی بە کارکردن کردووە لە بواری بازرگانی ڕۆنی ئۆتۆمبێل. ئەمڕۆ، بە یەکەم کارگەی تایبەتمەندی پاڵاوتنەوەی ڕۆن لە هەولێر، پێشەنگین لە بەرپرسیارێتی ژینگەیی و کوالێتی بەرز.',
      link: 'زیاتر بزانە',
    },

    timeline: {
      eyebrow: 'مێژووی ئێمە',
      title: 'ڕێگای گەشەکردن',
      items: [
        {
          year: '1974',
          title: 'دامەزراندن',
          text:
            'بەڕێز صلاح بایز دەستی بە بازرگانی ڕۆنی ئۆتۆمبێل کرد، ناوبانگێکی بەهێزی بۆ کوالێتی دروستکرد و بنەمای میراتێکی چەند دەیەیی داڕشت.',
        },
        {
          year: '2001',
          title: 'نوێکاری',
          text:
            'هەنگاوێکی گەورە لە بەرپرسیارێتی ژینگەییدا — دامەزراندنی یەکەم کارگەی تایبەتمەندی پاڵاوتنەوەی ڕۆن لە هەولێر.',
        },
        {
          year: '2009',
          title: 'خاڵی وەرچەرخان',
          text:
            'دامەزراندنی فەرمی کۆمپانیای گۆڵدن بەیس، ڕێکخستنی کارەکانمان و بەهێزکردنی پێگەمان وەک لایەنێکی پێشەنگ لە پیشەسازی ڕۆن.',
        },
        {
          year: '2016',
          title: 'گۆڕانکاری',
          text:
            'نەوەیەکی نوێی سەرکردایەتی بە بەڕێز مەریوان صلاح، نوێکردنەوەیەکی بەرفراوان و بەکارهێنانی تەکنەلۆجیای پێشکەوتوو.',
        },
        {
          year: 'ئێستا',
          title: 'بەردەوام لە گەشەکردن',
          text: 'بەردەوامین لە فراوانکردنی توانا و باشترکردنی بەرهەمەکانمان بۆ خزمەتی باشتر.',
        },
      ],
    },

    values: {
      eyebrow: 'بەهاکانمان',
      title: 'چی جیاوازمان دەکاتەوە',
      items: [
        { title: 'کوالێتی', text: 'هەموو بەرهەمێک بەپێی ستانداردە جیهانییەکان تاقی دەکرێتەوە.' },
        { title: 'ژینگە', text: 'پاڵاوتنەوەی ڕۆن، کەمکردنەوەی پیسبوون و بەکارهێنانەوەی سەرچاوەکان.' },
        { title: 'ئەزموون', text: 'زیاتر لە ٥٠ ساڵ کارکردن لە بواری ڕۆنی پیشەسازی.' },
        { title: 'متمانە', text: 'هاوبەشی هەزاران کڕیار و کۆمپانیا لە هەرێمدا.' },
      ],
    },

    products: {
      eyebrow: 'بەرهەمەکان',
      title: 'کۆمەڵێک ڕۆنی تایبەت',
      subtitle: 'هەڵبژاردەیەکی فراوان بۆ هەموو جۆرەکانی ئۆتۆمبێل و ئامێرە پیشەسازییەکان.',
      grades: 'چڕییە بەردەستەکان',
      sizes: 'قەبارەکان',
      viewAll: 'هەموو بەرهەمەکان',
      inquire: 'داواکاری',
    },

    contact: {
      eyebrow: 'پەیوەندی',
      title: 'پەیوەندیمان پێوە بکە',
      subtitle: 'ئامادەین بۆ وەڵامدانەوەی پرسیارەکانت و پێشکەشکردنی باشترین خزمەتگوزاری.',
      phone: 'ژمارەی مۆبایل',
      whatsapp: 'واتساپ',
      email: 'ئیمەیل',
      address: 'ناونیشان',
      addressValue: 'ڕێگای کۆیە - هەولێر',
      hours: 'کاتی کارکردن',
      hoursValue: '٨:٠٠ بەیانی — ٥:٠٠ ئێوارە',
      facebook: 'فەیسبووک',
      directions: 'ڕێنمایی بۆ شوێنەکە',
      form: {
        title: 'پەیامێکمان بۆ بنێرە',
        name: 'ناو',
        namePh: 'ناوی تەواوت',
        email: 'ئیمەیل',
        emailPh: 'name@example.com',
        phone: 'ژمارەی مۆبایل',
        phonePh: '0750 000 0000',
        message: 'پەیام',
        messagePh: 'پەیامەکەت لێرە بنووسە...',
        send: 'ناردنی پەیام لە ڕێی واتساپ',
        errName: 'تکایە ناوت بنووسە',
        errMessage: 'تکایە پەیامەکەت بنووسە',
        errEmail: 'ئیمەیلەکە دروست نییە',
      },
    },

    footer: {
      about:
        'کۆمپانیای گۆڵدن بەیس — پێشەنگ لە بواری ڕۆنی ئۆتۆمبێل و پاڵاوتنەوەی ڕۆن لە هەرێمی کوردستان لە ساڵی ١٩٧٤ەوە.',
      links: 'بەستەرەکان',
      contactTitle: 'پەیوەندی',
      rights: 'هەموو مافەکان پارێزراون.',
    },

    theme: { dark: 'دۆخی تاریک', light: 'دۆخی ڕوون' },
    loading: 'چاوەڕێ بکە...',
  },

  /* ---------------- ARABIC ---------------- */
  ar: {
    company: 'شركة كولدن بيس',
    companyShort: 'كولدن بيس',
    slogan: 'لإنتاج زيوت السيارات وتكرير الزيوت المستعملة',
    nav: { home: 'الرئيسية', about: 'من نحن', products: 'المنتجات', contact: 'اتصل بنا' },

    hero: {
      eyebrow: 'منذ عام ١٩٧٤',
      title: 'زيوت صناعية بمعايير عالمية',
      subtitle:
        'أكثر من خمسين عامًا من الخبرة في تجارة زيوت السيارات وإعادة تكرير الزيوت. من أربيل، بالتزام تام بالجودة وحماية البيئة.',
      cta1: 'تصفح المنتجات',
      cta2: 'تواصل معنا',
    },

    stats: {
      years: 'عامًا من الخبرة',
      products: 'منتج',
      quality: 'جودة مضمونة',
      support: 'دعم مستمر',
    },

    aboutTeaser: {
      eyebrow: 'من نحن',
      title: 'إرث متواصل من الجودة',
      text:
        'بدأت شركة كولدن بيس عملها عام ١٩٧٤ في مجال تجارة زيوت السيارات. واليوم، ومع أول معمل متخصص لإعادة تكرير الزيوت في أربيل، نتصدر مجال المسؤولية البيئية والجودة العالية.',
      link: 'اعرف المزيد',
    },

    timeline: {
      eyebrow: 'تاريخنا',
      title: 'مسيرة النمو',
      items: [
        {
          year: '1974',
          title: 'التأسيس',
          text:
            'دخل السيد صلاح باياز مجال تجارة زيوت السيارات، وبنى سمعة قوية في الجودة، وأرسى أساس إرث يمتد لعقود.',
        },
        {
          year: '2001',
          title: 'الابتكار',
          text:
            'قفزة كبيرة في المسؤولية البيئية عبر تأسيس أول معمل متخصص لإعادة تكرير الزيوت في أربيل.',
        },
        {
          year: '2009',
          title: 'المحطة الفارقة',
          text:
            'التأسيس الرسمي لشركة كولدن بيس، وتنظيم عملياتنا وتعزيز مكانتنا كجهة رائدة في صناعة الزيوت.',
        },
        {
          year: '2016',
          title: 'التحول',
          text:
            'جيل جديد من القيادة بإدارة السيد مريوان صلاح، مع تحديث شامل وتوسيع القدرات وتطبيق تقنيات متقدمة.',
        },
        {
          year: 'الآن',
          title: 'نمو مستمر',
          text: 'نواصل توسيع قدراتنا وتطوير منتجاتنا لتقديم خدمة أفضل.',
        },
      ],
    },

    values: {
      eyebrow: 'قيمنا',
      title: 'ما الذي يميزنا',
      items: [
        { title: 'الجودة', text: 'كل منتج يُختبر وفق المعايير العالمية.' },
        { title: 'البيئة', text: 'إعادة تكرير الزيوت وتقليل التلوث وإعادة استخدام الموارد.' },
        { title: 'الخبرة', text: 'أكثر من ٥٠ عامًا في مجال الزيوت الصناعية.' },
        { title: 'الثقة', text: 'شريك لآلاف العملاء والشركات في الإقليم.' },
      ],
    },

    products: {
      eyebrow: 'المنتجات',
      title: 'مجموعة زيوت متخصصة',
      subtitle: 'تشكيلة واسعة تناسب جميع أنواع المركبات والمعدات الصناعية.',
      grades: 'الدرجات المتوفرة',
      sizes: 'الأحجام',
      viewAll: 'جميع المنتجات',
      inquire: 'استفسار',
    },

    contact: {
      eyebrow: 'اتصل بنا',
      title: 'تواصل معنا',
      subtitle: 'نحن جاهزون للإجابة على استفساراتك وتقديم أفضل خدمة.',
      phone: 'رقم الهاتف',
      whatsapp: 'واتساب',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      addressValue: 'طريق كويە - أربيل',
      hours: 'ساعات العمل',
      hoursValue: '٨:٠٠ صباحًا — ٥:٠٠ مساءً',
      facebook: 'فيسبوك',
      directions: 'الاتجاهات إلى الموقع',
      form: {
        title: 'أرسل لنا رسالة',
        name: 'الاسم',
        namePh: 'اسمك الكامل',
        email: 'البريد الإلكتروني',
        emailPh: 'name@example.com',
        phone: 'رقم الهاتف',
        phonePh: '0750 000 0000',
        message: 'الرسالة',
        messagePh: 'اكتب رسالتك هنا...',
        send: 'إرسال عبر واتساب',
        errName: 'الرجاء إدخال الاسم',
        errMessage: 'الرجاء كتابة الرسالة',
        errEmail: 'البريد الإلكتروني غير صحيح',
      },
    },

    footer: {
      about:
        'شركة كولدن بيس — رائدة في مجال زيوت السيارات وإعادة تكرير الزيوت في إقليم كوردستان منذ عام ١٩٧٤.',
      links: 'روابط',
      contactTitle: 'اتصل بنا',
      rights: 'جميع الحقوق محفوظة.',
    },

    theme: { dark: 'الوضع الداكن', light: 'الوضع الفاتح' },
    loading: 'يرجى الانتظار...',
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    company: 'Golden Base Company',
    companyShort: 'Golden Base',
    slogan: 'For lubricants production and used-oil re-refining',
    nav: { home: 'Home', about: 'About', products: 'Products', contact: 'Contact' },

    hero: {
      eyebrow: 'Since 1974',
      title: 'Industrial lubricants held to a global standard',
      subtitle:
        'Over fifty years in automotive lubricants and oil re-refining. Based in Erbil, built on quality and environmental responsibility.',
      cta1: 'View products',
      cta2: 'Get in touch',
    },

    stats: {
      years: 'Years of experience',
      products: 'Products',
      quality: 'Guaranteed quality',
      support: 'Ongoing support',
    },

    aboutTeaser: {
      eyebrow: 'About us',
      title: 'A continuing legacy of quality',
      text:
        'Golden Base Company began trading automotive lubricants in 1974. Today, with the first specialised oil re-refining plant in Erbil, we lead on environmental responsibility and high quality.',
      link: 'Read more',
    },

    timeline: {
      eyebrow: 'Our history',
      title: 'The road to here',
      items: [
        {
          year: '1974',
          title: 'The foundation',
          text:
            'Mr. Salah Bayaz enters the automotive lubricants trade, establishing a reputation for quality and laying the groundwork for a decades-long legacy of excellence.',
        },
        {
          year: '2001',
          title: 'The innovation',
          text:
            'A major leap in environmental responsibility with the establishment of the first specialised re-refining plant in Erbil, marking our commitment to sustainability.',
        },
        {
          year: '2009',
          title: 'The milestone',
          text:
            'Official establishment of Golden Base Company, formalising our operations and strengthening our position as a leading entity in the regional oil industry.',
        },
        {
          year: '2016',
          title: 'The transformation',
          text:
            'A new generation of leadership under Mr. Mariwan Salah drives modernisation, expanding capabilities and implementing advanced technological processes.',
        },
        {
          year: 'Now',
          title: 'Still growing',
          text: 'We continue expanding our capabilities and refining our products to serve you better.',
        },
      ],
    },

    values: {
      eyebrow: 'Our values',
      title: 'What sets us apart',
      items: [
        { title: 'Quality', text: 'Every product is tested against international standards.' },
        { title: 'Environment', text: 'Oil re-refining, less pollution, resources put back to work.' },
        { title: 'Experience', text: 'More than 50 years in industrial lubricants.' },
        { title: 'Trust', text: 'A partner to thousands of customers across the region.' },
      ],
    },

    products: {
      eyebrow: 'Products',
      title: 'A specialised range of lubricants',
      subtitle: 'A broad selection for every type of vehicle and industrial machine.',
      grades: 'Available grades',
      sizes: 'Sizes',
      viewAll: 'All products',
      inquire: 'Enquire',
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch',
      subtitle: "We're ready to answer your questions and give you the best service.",
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      address: 'Address',
      addressValue: 'Koya - Erbil Road',
      hours: 'Working hours',
      hoursValue: '8:00 AM — 5:00 PM',
      facebook: 'Facebook',
      directions: 'Get directions',
      form: {
        title: 'Send us a message',
        name: 'Name',
        namePh: 'Your full name',
        email: 'Email',
        emailPh: 'name@example.com',
        phone: 'Phone',
        phonePh: '0750 000 0000',
        message: 'Message',
        messagePh: 'Write your message here...',
        send: 'Send via WhatsApp',
        errName: 'Please enter your name',
        errMessage: 'Please write a message',
        errEmail: 'That email address is not valid',
      },
    },

    footer: {
      about:
        'Golden Base Company — a leader in automotive lubricants and oil re-refining in the Kurdistan Region since 1974.',
      links: 'Links',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
    },

    theme: { dark: 'Dark mode', light: 'Light mode' },
    loading: 'Please wait...',
  },
};
