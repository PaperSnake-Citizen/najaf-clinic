export const en = {
  clinicName: "Najaf Clinic",
  type: "Medical Center",
  area: "Qasimabad, Hyderabad, Sindh",
  areaShort: "Qasimabad",
  pageTitle: "Najaf Clinic | Qasimabad, Hyderabad",
  whatsapp: "WhatsApp",

  nav: {
    book: "Book",
    timings: "Timings",
    location: "Location",
    call: "Call",
    switchTo: "اردو", // label of the button that switches TO Urdu
  },

  hero: {
    tagline: "Skip the crowded waiting hall. Book your visit from home.",
    book: "Book an appointment",
    call: "Call",
    ratingAfter: (n: number) => ` on Google (${n} reviews)`,
  },

  status: {
    neutral: (opens: string) => `Evening clinic · opens ${opens}`,
    open: (until: string) => `Open now · until ${until}`,
    closed: (opens: string) => `Closed now · opens ${opens}`,
  },

  mock: {
    online: "online",
    request:
      "Assalam o Alaikum, I would like to book an appointment.\n\nName: Ali\nPreferred date: Today",
    reply: "Your turn is confirmed. We will see you soon! ✅",
    thanks: "Thank you 🙏",
    example: "Example chat",
  },

  about: {
    years: "years in Qasimabad",
    heading: "A clinic the neighbourhood knows",
    text: (name: string, years: number) =>
      `${name} has been part of Qasimabad for ${years} years. Now booking is easier too, so patients wait less.`,
  },

  doctor: { meet: "Meet your doctor" },
  services: { heading: "What we treat" },

  how: {
    heading: "How it works",
    steps: [
      {
        title: "Fill the form",
        text: "Enter your name, phone number and the day you want to visit.",
      },
      {
        title: "Send on WhatsApp",
        text: "Your request opens in WhatsApp, ready to send to the clinic.",
      },
      {
        title: "Come when confirmed",
        text: "The clinic replies with your turn, so you skip the long wait in the hall.",
      },
    ],
  },

  form: {
    heading: "Book an appointment",
    intro: "Takes a minute. Your details go to the clinic on WhatsApp.",
    name: "Patient name",
    namePh: "Your name",
    phone: "Phone number",
    phonePh: "03XX XXXXXXX",
    date: "Preferred date",
    reason: "Reason for visit",
    optional: "optional",
    reasonPh: "e.g. fever, check-up, follow-up",
    error: "Please enter your name and a valid phone number.",
    submit: "Send request on WhatsApp",
  },

  wa: {
    booking: (p: { name: string; phone: string; date: string; reason: string }) =>
      [
        "Assalam o Alaikum, I would like to book an appointment at Najaf Clinic.",
        "",
        `Name: ${p.name}`,
        `Phone: ${p.phone}`,
        `Preferred date: ${p.date}`,
        ...(p.reason ? [`Reason: ${p.reason}`] : []),
      ].join("\n"),
    question: "Assalam o Alaikum, I have a question about Najaf Clinic.",
  },

  hours: {
    heading: "Clinic timings",
    evening: "Evening clinic",
    range: (a: string, b: string) => `${a} to ${b}`,
    opens: (a: string) => `Opens ${a}`,
  },

  location: {
    heading: "Find us",
    directions: "Get directions",
    mapTitle: "Najaf Clinic on Google Maps",
  },

  footer: {
    emergency: "For emergencies, go to the nearest hospital.",
  },
};

export type Dict = typeof en;
