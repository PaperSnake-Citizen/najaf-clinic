import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

export default function Location() {
  const { t } = useLang();
  const q = encodeURIComponent(clinic.mapsQuery);

  return (
    <section id="location" className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-slate-900">
          {t.location.heading}
        </h2>
        <p className="mt-1 text-center text-slate-600">
          {t.area} · <span dir="ltr">{clinic.plusCode}</span>
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            title={t.location.mapTitle}
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            className="h-72 w-full sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-4 text-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl border border-emerald-600 px-5 py-2.5 font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            {t.location.directions}
          </a>
        </div>
      </div>
    </section>
  );
}
