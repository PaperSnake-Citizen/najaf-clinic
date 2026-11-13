import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 px-4 py-8 text-center text-sm text-slate-300">
      <p className="text-base font-semibold text-white">{t.clinicName}</p>
      <p className="mt-1">{t.area}</p>
      <p className="mt-1">
        <a
          href={`tel:${clinic.phone.replace(/\s/g, "")}`}
          dir="ltr"
          className="underline"
        >
          {clinic.phone}
        </a>
      </p>
      <p className="mt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} {t.clinicName}. {t.footer.emergency}
      </p>
    </footer>
  );
}
