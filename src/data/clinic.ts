import type { L } from "../i18n/LanguageContext";

// All clinic info lives here. Edit this file and the whole site updates.
// Fixed site text (headings, buttons) lives in src/i18n/en.ts and ur.ts.
// Doctor and services need both languages: { en: "...", ur: "..." }
const empty = (): L => ({ en: "", ur: "" });

export const clinic = {
  name: "Najaf Clinic",
  phone: "+92 313 3513715",
  whatsapp: "923133513715", // international format, no + or spaces
  opensAt: "6:00 PM",
  closesAt: "10:00 PM", // also powers the live "Open now" badge
  closedDays: empty(), // e.g. { en: "Closed on Fridays", ur: "جمعہ کو بند" }, leave empty if open daily
  plusCode: "C88R+2H Hyderabad",
  rating: 4.6,
  reviews: 7,
  yearsServing: 25, // the clinic is 25 years old
  mapsQuery: "Najaf Clinic Qasimabad Hyderabad",

  // Fill the name in and the Doctor section appears automatically.
  doctor: {
    name: { en: "Dr. Zulfiqar Ali khawaja", ur: "ڈاکٹر زلفیقار علی خواجه" },
    specialty: { en: "General Physician", ur: "جنرل فزیشن" },
    qualifications: { en: "MBBS", ur: "ایم بی بی ایس" },
    experience: { en: "25+ years of experience", ur: "25 سال سے زیادہ کا تجربہ" },
    about: { en: "Dr. Zulfiqar Ali khawaja is a highly qualified general physician with over 25 years of experience in providing comprehensive healthcare services.", ur: "ڈاکٹر زلفیقار علی خواجه ایک بہترین جنرل فزیشن ہے جو 25 سال سے زیادہ کا تجربہ رکھتا ہے" },
    photo: "", // put the photo in /public and write "/doctor.jpg"
  },

  // Add services and the Services section appears automatically.
  services: [] as L[], // e.g. [{ en: "Fever & flu", ur: "بخار اور فلو" }]
};
