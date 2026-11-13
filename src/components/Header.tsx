import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

export default function Header() {
  const { t, lang, setLang } = useLang();

  const links = [
    { href: "#book", label: t.nav.book },
    { href: "#hours", label: t.nav.timings },
    { href: "#location", label: t.nav.location },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-lg font-bold text-white">
            +
          </span>
          <span className="text-lg font-semibold text-slate-800">
            {t.clinicName}
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-emerald-700">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ur" : "en")}
            aria-label="Switch language"
            className="rounded-full border border-emerald-600 px-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            {t.nav.switchTo}
          </button>
          <a
            href={`tel:${clinic.phone.replace(/\s/g, "")}`}
            className="rounded-full bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            {t.nav.call}
          </a>
        </div>
      </div>
    </header>
  );
}
