import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how" className="px-4 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {t.how.heading}
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {t.how.steps.map((s, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="h-full rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
