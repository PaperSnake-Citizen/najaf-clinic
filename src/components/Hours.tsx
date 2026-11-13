import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

export default function Hours() {
  const { t, pick, fmt } = useLang();

  const time = clinic.closesAt
    ? t.hours.range(fmt(clinic.opensAt), fmt(clinic.closesAt))
    : t.hours.opens(fmt(clinic.opensAt));
  const closedDays = pick(clinic.closedDays);

  return (
    <section id="hours" className="bg-slate-50 px-4 py-14">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold text-slate-900">{t.hours.heading}</h2>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            {t.hours.evening}
          </p>
          <p className="mt-1 text-3xl font-bold text-emerald-700">{time}</p>
          {closedDays && (
            <p className="mt-2 text-sm font-medium text-slate-600">
              {closedDays}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
