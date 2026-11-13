import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";
import CountUp from "./CountUp";
import StatusBadge from "./StatusBadge";
import PhoneMock from "./PhoneMock";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="bg-pan relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-500 px-4 py-14 text-white sm:py-20"
    >
      {/* floating decorative circles */}
      <div className="float-slow pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
      <div className="float-slower pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/10" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-start">
          <div
            className="pop-in mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide">
              {t.type} · {t.areaShort}
            </span>
            <StatusBadge />
          </div>

          <h1
            className="pop-in text-4xl font-extrabold leading-tight sm:text-6xl"
            style={{ animationDelay: "0.25s" }}
          >
            {t.clinicName}
          </h1>

          <p
            className="pop-in mt-4 text-xl font-medium text-emerald-50 sm:text-2xl"
            style={{ animationDelay: "0.4s" }}
          >
            {t.hero.tagline}
          </p>

          <div
            className="pop-in mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#book"
              className="cta-ring w-full rounded-xl bg-white px-7 py-3.5 text-base font-bold text-emerald-700 shadow-lg transition hover:scale-105 hover:bg-emerald-50 active:scale-95 sm:w-auto"
            >
              {t.hero.book}
            </a>
            <a
              href={`tel:${clinic.phone.replace(/\s/g, "")}`}
              className="w-full rounded-xl border border-white/60 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {t.hero.call} <span dir="ltr">{clinic.phone}</span>
            </a>
          </div>

          <p
            className="pop-in mt-6 text-sm text-emerald-50/90"
            style={{ animationDelay: "0.8s" }}
          >
            ★ <CountUp to={clinic.rating} decimals={1} />
            {t.hero.ratingAfter(clinic.reviews)}
          </p>
        </div>

        <PhoneMock />
      </div>
    </section>
  );
}
