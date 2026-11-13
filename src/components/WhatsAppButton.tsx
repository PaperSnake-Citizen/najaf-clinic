import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLang();
  const url = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    t.wa.question
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp}
      className="fixed bottom-5 end-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg hover:bg-green-600"
    >
      <span aria-hidden>💬</span>
      {t.whatsapp}
    </a>
  );
}
