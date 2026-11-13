import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";
import CountUp from "./CountUp";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="px-4 py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl bg-emerald-50 p-8 text-center sm:flex-row sm:text-start">
        <div className="shrink-0">
          <p className="text-7xl font-extrabold leading-none text-emerald-700 sm:text-8xl">
            <CountUp to={clinic.yearsServing} />
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            {t.about.years}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {t.about.heading}
          </h2>
          <p className="mt-2 text-slate-600">
            {t.about.text(t.clinicName, clinic.yearsServing)}
          </p>
        </div>
      </div>
    </section>
  );
}
