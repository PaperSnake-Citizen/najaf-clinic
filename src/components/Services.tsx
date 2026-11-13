import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

// Shows only after services are added in clinic.ts
export default function Services() {
  const { t, pick } = useLang();
  if (clinic.services.length === 0) return null;

  return (
    <section id="services" className="px-4 py-14">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {t.services.heading}
        </h2>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.services.map((s) => (
            <li
              key={s.en || s.ur}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-800 shadow-sm"
            >
              <span className="text-emerald-600">✚</span>
              {pick(s)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
