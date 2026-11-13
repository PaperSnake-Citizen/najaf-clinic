import { useLang } from "../i18n/LanguageContext";

// An example of how a booking looks in WhatsApp. Messages pop in one by one.
export default function PhoneMock() {
  const { t } = useLang();

  return (
    <div className="float-slow mx-auto w-64 sm:w-72">
      <div className="rounded-[2.2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl">
        <div className="overflow-hidden rounded-[1.8rem] bg-[#ece5dd]">
          <div className="flex items-center gap-2 bg-emerald-700 px-4 py-3 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 font-bold">
              +
            </span>
            <div>
              <p className="text-sm font-semibold leading-none">
                {t.clinicName}
              </p>
              <p className="mt-1 text-[11px] text-emerald-100">
                {t.mock.online}
              </p>
            </div>
          </div>

          <div className="min-h-[19rem] space-y-3 px-3 py-4 text-[12px] text-slate-800">
            <div
              className="pop-in ms-auto max-w-[85%] whitespace-pre-line rounded-xl rounded-se-sm bg-[#d9fdd3] px-3 py-2 shadow-sm"
              style={{ animationDelay: "0.8s" }}
            >
              {t.mock.request}
            </div>

            <div
              className="pop-in max-w-[85%] rounded-xl rounded-ss-sm bg-white px-3 py-2 shadow-sm"
              style={{ animationDelay: "2s" }}
            >
              {t.mock.reply}
            </div>

            <div
              className="pop-in ms-auto max-w-[60%] rounded-xl rounded-se-sm bg-[#d9fdd3] px-3 py-2 shadow-sm"
              style={{ animationDelay: "3.2s" }}
            >
              {t.mock.thanks}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-emerald-50/80">
        {t.mock.example}
      </p>
    </div>
  );
}
