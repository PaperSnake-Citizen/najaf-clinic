# Najaf Clinic website

One-page site for Najaf Clinic (Qasimabad, Hyderabad), in English and Urdu.
Patients fill a short form and it opens WhatsApp with the booking request
already written.

Built with React, TypeScript, Vite and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # open the local link it prints
npm run build    # production build in /dist
```

## Where to edit things

```
src/
  data/clinic.ts            <- phone, timings, doctor, services
  i18n/en.ts, ur.ts         <- all headings, buttons and sentences, per language
  i18n/LanguageContext.tsx  <- language switch, RTL, saved choice
  components/               <- one file per section
```

Doctor and services in `clinic.ts` take both languages, like
`{ en: "Fever & flu", ur: "بخار اور فلو" }`.

## Still to confirm with the clinic

- [ ] Doctor name, specialty, qualification, experience, photo
- [ ] What they treat (services list)
- [ ] Closed days, if any (`closedDays`)
- [ ] That 0313 3513715 is on WhatsApp
- [ ] A native Urdu speaker reads `src/i18n/ur.ts`

## Deploy free

Push to GitHub and import the repo in Vercel or Netlify. Build command
`npm run build`, output folder `dist`.
