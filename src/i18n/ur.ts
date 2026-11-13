import type { Dict } from "./en";

// Urdu text. Have a native speaker read it before showing the doctor.
export const ur: Dict = {
  clinicName: "نجف کلینک",
  type: "میڈیکل سینٹر",
  area: "قاسم آباد، حیدرآباد، سندھ",
  areaShort: "قاسم آباد",
  pageTitle: "نجف کلینک | قاسم آباد، حیدرآباد",
  whatsapp: "واٹس ایپ",

  nav: {
    book: "بک کریں",
    timings: "اوقات",
    location: "پتہ",
    call: "کال",
    switchTo: "English", // label of the button that switches TO English
  },

  hero: {
    tagline: "ہجوم والے ویٹنگ ہال سے بچیں، گھر بیٹھے اپنی باری بک کریں۔",
    book: "اپائنٹمنٹ بک کریں",
    call: "کال کریں",
    ratingAfter: (n: number) => ` گوگل پر (${n} ریویوز)`,
  },

  status: {
    neutral: (opens: string) => `شام کا کلینک · ${opens} کھلتا ہے`,
    open: (until: string) => `ابھی کھلا ہے · ${until} تک`,
    closed: (opens: string) => `ابھی بند ہے · ${opens} کھلے گا`,
  },

  mock: {
    online: "آن لائن",
    request:
      "السلام علیکم، میں اپائنٹمنٹ بک کرنا چاہتا ہوں۔\n\nنام: علی\nپسندیدہ تاریخ: آج",
    reply: "آپ کی باری کنفرم ہو گئی ہے۔ جلد ملاقات ہوگی! ✅",
    thanks: "شکریہ 🙏",
    example: "نمونہ چیٹ",
  },

  about: {
    years: "سال قاسم آباد میں",
    heading: "محلے کا جانا پہچانا کلینک",
    text: (name: string, years: number) =>
      `${name} پچھلے ${years} سال سے قاسم آباد کا حصہ ہے۔ اب بکنگ بھی آسان ہو گئی ہے، تاکہ مریضوں کو کم انتظار کرنا پڑے۔`,
  },

  doctor: { meet: "اپنے ڈاکٹر سے ملیں" },
  services: { heading: "ہم کیا علاج کرتے ہیں" },

  how: {
    heading: "یہ کیسے کام کرتا ہے",
    steps: [
      {
        title: "فارم بھریں",
        text: "اپنا نام، فون نمبر اور آنے کا دن لکھیں۔",
      },
      {
        title: "واٹس ایپ پر بھیجیں",
        text: "آپ کی درخواست واٹس ایپ میں تیار کھل جائے گی، بس بھیج دیں۔",
      },
      {
        title: "تصدیق ہونے پر آئیں",
        text: "کلینک آپ کو آپ کی باری بتا دے گا، یوں ہال میں لمبا انتظار نہیں کرنا پڑے گا۔",
      },
    ],
  },

  form: {
    heading: "اپائنٹمنٹ بک کریں",
    intro: "ایک منٹ لگتا ہے۔ آپ کی معلومات واٹس ایپ پر کلینک کو جائیں گی۔",
    name: "مریض کا نام",
    namePh: "آپ کا نام",
    phone: "فون نمبر",
    phonePh: "03XX XXXXXXX",
    date: "پسندیدہ تاریخ",
    reason: "آنے کی وجہ",
    optional: "اختیاری",
    reasonPh: "مثلاً بخار، چیک اپ، دوبارہ معائنہ",
    error: "براہ کرم اپنا نام اور درست فون نمبر لکھیں۔",
    submit: "واٹس ایپ پر درخواست بھیجیں",
  },

  wa: {
    booking: (p: { name: string; phone: string; date: string; reason: string }) =>
      [
        "السلام علیکم، براہ کرم نجف کلینک میں میرے لیے اپائنٹمنٹ بک کر دیں۔",
        "",
        `نام: ${p.name}`,
        `فون: ${p.phone}`,
        `پسندیدہ تاریخ: ${p.date}`,
        ...(p.reason ? [`وجہ: ${p.reason}`] : []),
      ].join("\n"),
    question: "السلام علیکم، مجھے نجف کلینک کے بارے میں ایک سوال پوچھنا ہے۔",
  },

  hours: {
    heading: "کلینک کے اوقات",
    evening: "شام کا کلینک",
    range: (a: string, b: string) => `${a} سے ${b} تک`,
    opens: (a: string) => `${a} کھلتا ہے`,
  },

  location: {
    heading: "ہمیں یہاں تلاش کریں",
    directions: "راستہ دیکھیں",
    mapTitle: "گوگل میپس پر نجف کلینک",
  },

  footer: {
    emergency: "ایمرجنسی کی صورت میں قریبی ہسپتال جائیں۔",
  },
};
