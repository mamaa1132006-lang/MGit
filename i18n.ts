export type Lang = "ar" | "en";

export const translations = {
  ar: {
    brand: "دربك للنقل",
    tagline: "توصيل مشاوير في جميع أنحاء المملكة",
    nav: {
      home: "الرئيسية",
      routes: "الرحلات",
      fleet: "الأسطول",
      faq: "الأسئلة الشائعة",
      reviews: "آراء العملاء",
      contact: "اتصل بنا",
    },
    hero: {
      badge: "خدمة نقل احترافية 24/7",
      title: "اختر رحلتك القادمة",
      subtitle: "نقل آمن ومريح بسيارات حديثة وسائقين محترفين في جميع أنحاء المملكة العربية السعودية",
      bookNow: "احجز الآن",
      whatsapp: "تواصل واتساب",
    },
    routes: {
      title: "اختر رحلتك القادمة",
      subtitle: "أشهر الخطوط التي نخدمها",
      list: [
        "من مطار جدة إلى مكة",
        "من جدة إلى مكة",
        "من مطار الطائف إلى مكة",
        "من الطائف إلى مكة",
        "من المدينة إلى مكة",
        "من مطار المدينة إلى المدينة",
        "من مكة إلى القطار",
        "من المدينة إلى القطار",
        "مسار آخر",
      ],
    },
    fleet: {
      title: "أسطول واسع من السيارات لتختار منها",
      subtitle: "سيارات حديثة بمستويات راحة متعددة",
      cars: [
        { name: "فيتو فان 2025", brand: "Mercedes", type: "عائلي", seats: 7 },
        { name: "كراون 2025", brand: "Toyota", type: "سيدان", seats: 4 },
        { name: "GMC 2025", brand: "GMC", type: "SUV فاخر", seats: 6 },
        { name: "BMW 2025", brand: "BMW", type: "فاخر", seats: 4 },
        { name: "كامري 2025", brand: "Toyota", type: "اقتصادي", seats: 4 },
        { name: "هايس 2025", brand: "Toyota", type: "باص", seats: 12 },
        { name: "تاوروس 2025", brand: "Ford", type: "VIP", seats: 4 },
        { name: "لكزس 2025", brand: "Lexus", type: "فاخر", seats: 4 },
        { name: "ستاريا 2025", brand: "Hyundai", type: "عائلي", seats: 9 },
      ],
      bookCar: "احجز هذه السيارة",
    },
    features: {
      title: "لماذا تختارنا؟",
      items: [
        { title: "سائقون محترفون", desc: "سائقون مدربون ومرخصون بخبرة طويلة" },
        { title: "سيارات حديثة", desc: "أسطول من سيارات موديلات حديثة ومكيفة" },
        { title: "أسعار تنافسية", desc: "أفضل الأسعار بدون رسوم خفية" },
        { title: "خدمة 24/7", desc: "متاحون لخدمتك في أي وقت من اليوم" },
      ],
    },
    faq: {
      title: "من الأسئلة الشائعة التي نتلقاها",
      items: [
        {
          q: "ما هي شركة دربك للنقل؟",
          a: "دربك للنقل هي شركة سعودية متخصصة في نقل الركاب داخل المملكة العربية السعودية، بسيارات حديثة يقودها سائقون محترفون. نخدم الحجاج والمعتمرين والزوار والمقيمين، ونوفر رحلات بين مكة، جدة، المدينة المنورة، الطائف، والمطارات.",
        },
        {
          q: "ما هي المسارات التي تغطونها؟",
          a: "نغطي أهم خطوط النقل بين المدن والمطارات، ومنها: مكة ⇆ جدة، مكة ⇆ المدينة، جدة ⇆ الطائف، مطار جدة ⇆ مكة، مطار الطائف ⇆ مكة، مطار المدينة ⇆ المدينة. كما نقدم رحلات خاصة لأي وجهة داخل المملكة.",
        },
        {
          q: "كيف يمكنني حجز رحلة؟",
          a: "يمكنك الحجز عبر الموقع الإلكتروني باختيار الوجهة وتاريخ الرحلة، أو عبر الواتساب لخدمة أسرع. بعد الحجز، تصلك رسالة تحتوي على بيانات السائق وموعد الرحلة وموقع الانطلاق.",
        },
        {
          q: "هل يمكنني تعديل أو إلغاء الحجز؟",
          a: "نعم، يمكنك التعديل أو الإلغاء قبل موعد الرحلة بسهولة من خلال خدمة العملاء أو الواتساب. نرجو فقط إشعارنا مسبقًا لضمان التنظيم وتوفير الخدمة بأفضل جودة.",
        },
        {
          q: "ما أنواع السيارات المتوفرة؟",
          a: "نوفر سيارات حديثة بمستويات متعددة من الراحة: اقتصادية مثل تويوتا وهيونداي، عائلية مثل الفانات والباصات، وفاخرة (VIP) مثل مرسيدس ولكزس وفورد تورس. كل السيارات مكيفة ومتابعة فنيًا باستمرار.",
        },
        {
          q: "ماذا لو تأخرت رحلتي؟",
          a: "نقوم بمتابعة مواعيد الرحلات بشكل مباشر، ويتم تعديل وقت الاستقبال تلقائيًا دون أي رسوم إضافية. نضمن أن السائق سيكون في انتظارك في الوقت الصحيح.",
        },
        {
          q: "هل تقدمون خدمات للحجاج والمعتمرين؟",
          a: "نعم، نقدم خدمات متكاملة تشمل: استقبال من المطارات، نقل إلى مكة والمدينة والمشاعر المقدسة، ورحلات العودة بعد أداء المناسك، بخيارات سيارات خاصة أو باصات جماعية.",
        },
        {
          q: "هل لديكم خدمة للمجموعات والعائلات؟",
          a: "نعم، لدينا سيارات وفانات وباصات مخصصة للمجموعات والعائلات الكبيرة، مجهزة ومريحة. يمكنك تحديد العدد والمواعيد مسبقًا.",
        },
        {
          q: "هل توجد عروض أو خصومات؟",
          a: "نعم، نقدم عروضًا موسمية في فترات الحج والعمرة، وخصومات خاصة للعائلات والمجموعات. تابع موقعنا لمعرفة أحدث العروض.",
        },
      ],
    },
    reviews: {
      title: "آراء عملائنا تتحدث عنا",
      list: [
        {
          name: "أ. خالد العتيبي",
          city: "جدة",
          date: "15 ديسمبر 2025",
          text: "بصراحة من أفضل شركات النقل التي تعاملت معها. حجزت مشوار من مطار جدة إلى مكة، وكان السائق في الوقت المحدد، والسيارة نظيفة ومريحة جدًا.",
        },
        {
          name: "أم أحمد",
          city: "المدينة المنورة",
          date: "10 ديسمبر 2025",
          text: "جزاهم الله خير، استخدمنا خدمتهم أثناء العمرة، وكان السائق متعاون جدًا وصبور رغم الزحام. السيارة ممتازة ومكيفة، ووصلنا في الوقت المحدد.",
        },
        {
          name: "م. سامي الحربي",
          city: "الطائف",
          date: "5 ديسمبر 2025",
          text: "تجربة مميزة بكل المقاييس. حجزت بسهولة من الموقع، وتم التواصل معي بسرعة لتأكيد الرحلة. السائق محترم جدًا ومهذب، والخدمة منظمة.",
        },
      ],
    },
    promo: {
      title: "احصل على خصم 20٪ على أول حجز لك من دربك للنقل",
      subtitle: "عروض حصرية للعملاء الجدد، اغتنمها الآن",
      btn: "احجز الآن واستفد",
    },
    footer: {
      about: "دربك للنقل شركة سعودية متخصصة في نقل الركاب بأعلى معايير الجودة والأمان داخل المملكة العربية السعودية.",
      links: "روابط سريعة",
      contact: "تواصل معنا",
      followUs: "تابعنا على",
      rights: "جميع الحقوق محفوظة © 2026 دربك للنقل",
      phone: "+966 50 000 0000",
      email: "info@darbak-transport.com",
      address: "المملكة العربية السعودية - جدة",
    },
    customer: "عميل",
  },
  en: {
    brand: "Darbak Transport",
    tagline: "Trip transfers across the Kingdom",
    nav: {
      home: "Home",
      routes: "Routes",
      fleet: "Fleet",
      faq: "FAQ",
      reviews: "Reviews",
      contact: "Contact",
    },
    hero: {
      badge: "Professional Transport Service 24/7",
      title: "Choose Your Next Trip",
      subtitle: "Safe and comfortable transport with modern vehicles and professional drivers all over Saudi Arabia",
      bookNow: "Book Now",
      whatsapp: "WhatsApp Us",
    },
    routes: {
      title: "Choose Your Next Trip",
      subtitle: "Most popular routes we serve",
      list: [
        "Jeddah Airport → Makkah",
        "Jeddah → Makkah",
        "Taif Airport → Makkah",
        "Taif → Makkah",
        "Madinah → Makkah",
        "Madinah Airport → Madinah",
        "Makkah → Train Station",
        "Madinah → Train Station",
        "Custom Route",
      ],
    },
    fleet: {
      title: "A Wide Fleet of Vehicles to Choose From",
      subtitle: "Modern cars across multiple comfort levels",
      cars: [
        { name: "Vito Van 2025", brand: "Mercedes", type: "Family", seats: 7 },
        { name: "Crown 2025", brand: "Toyota", type: "Sedan", seats: 4 },
        { name: "GMC 2025", brand: "GMC", type: "Luxury SUV", seats: 6 },
        { name: "BMW 2025", brand: "BMW", type: "Luxury", seats: 4 },
        { name: "Camry 2025", brand: "Toyota", type: "Economy", seats: 4 },
        { name: "Hiace 2025", brand: "Toyota", type: "Bus", seats: 12 },
        { name: "Taurus 2025", brand: "Ford", type: "VIP", seats: 4 },
        { name: "Lexus 2025", brand: "Lexus", type: "Luxury", seats: 4 },
        { name: "Staria 2025", brand: "Hyundai", type: "Family", seats: 9 },
      ],
      bookCar: "Book This Car",
    },
    features: {
      title: "Why Choose Us?",
      items: [
        { title: "Professional Drivers", desc: "Trained and licensed drivers with years of experience" },
        { title: "Modern Vehicles", desc: "Late-model, fully air-conditioned fleet" },
        { title: "Competitive Prices", desc: "Best prices with no hidden fees" },
        { title: "24/7 Service", desc: "Available to serve you any time of day" },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "What is Darbak Transport?",
          a: "Darbak Transport is a Saudi company specializing in passenger transport across Saudi Arabia, with modern vehicles driven by professional drivers. We serve pilgrims, visitors and residents between Makkah, Jeddah, Madinah, Taif and the airports.",
        },
        {
          q: "Which routes do you cover?",
          a: "We cover the major intercity and airport routes, including: Makkah ⇆ Jeddah, Makkah ⇆ Madinah, Jeddah ⇆ Taif, Jeddah Airport ⇆ Makkah, Taif Airport ⇆ Makkah, Madinah Airport ⇆ Madinah. We also offer private trips to any destination in the Kingdom.",
        },
        {
          q: "How do I book a trip?",
          a: "You can book through our website by selecting destination and date, or via WhatsApp for faster service. After booking, you receive a message with the driver's info, trip time and pickup location.",
        },
        {
          q: "Can I edit or cancel my booking?",
          a: "Yes, you can easily modify or cancel before the trip time through customer service or WhatsApp. Please notify us in advance to ensure proper organization.",
        },
        {
          q: "What types of vehicles are available?",
          a: "We offer modern vehicles at multiple comfort levels: Economy (Toyota, Hyundai), Family (vans and small buses), and Luxury VIP (Mercedes, Lexus, Ford Taurus and more). All vehicles are air-conditioned and regularly maintained.",
        },
        {
          q: "What if my flight is delayed?",
          a: "We track flight schedules in real time, and pickup time is automatically adjusted at no extra cost. Your driver will be waiting for you at the right time.",
        },
        {
          q: "Do you provide services for pilgrims?",
          a: "Yes, we provide complete services including: airport pickup, transport to Makkah and Madinah and the holy sites, and return trips, with private cars or group buses.",
        },
        {
          q: "Do you offer group and family service?",
          a: "Yes, we have vans and buses dedicated to large groups and families, fully equipped and comfortable. You can specify the number and times in advance.",
        },
        {
          q: "Are there any offers or discounts?",
          a: "Yes, we offer seasonal promotions during Hajj and Umrah, and special discounts for families and groups. Follow our website for the latest deals.",
        },
      ],
    },
    reviews: {
      title: "What Our Clients Say About Us",
      list: [
        {
          name: "Mr. Khalid Al-Otaibi",
          city: "Jeddah",
          date: "Dec 15, 2025",
          text: "Honestly one of the best transport companies I've dealt with. I booked a trip from Jeddah Airport to Makkah, the driver was on time, the car was clean and very comfortable.",
        },
        {
          name: "Umm Ahmed",
          city: "Madinah",
          date: "Dec 10, 2025",
          text: "May Allah reward them. We used their service during Umrah, the driver was very cooperative and patient despite the traffic. Excellent air-conditioned car and we arrived on time.",
        },
        {
          name: "Eng. Sami Al-Harbi",
          city: "Taif",
          date: "Dec 5, 2025",
          text: "An excellent experience by every measure. I booked easily from the website, they contacted me quickly to confirm. The driver was very polite, the service is well organized.",
        },
      ],
    },
    promo: {
      title: "Get 20% off your first booking with Darbak Transport",
      subtitle: "Exclusive offers for new customers — grab them now",
      btn: "Book Now & Save",
    },
    footer: {
      about: "Darbak Transport is a Saudi company specializing in passenger transport with the highest quality and safety standards across Saudi Arabia.",
      links: "Quick Links",
      contact: "Contact Us",
      followUs: "Follow us on",
      rights: "All rights reserved © 2026 Darbak Transport",
      phone: "+966 50 000 0000",
      email: "info@darbak-transport.com",
      address: "Saudi Arabia - Jeddah",
    },
    customer: "Customer",
  },
} as const;
