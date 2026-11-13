import { useState } from "react";
import type { FormEvent } from "react";
import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

function todayISO() {
  const d = new Date();
  const off = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - off).toISOString().slice(0, 10);
}

export default function BookingForm() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(todayISO());
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || phone.replace(/\D/g, "").length < 10) {
      setError(t.form.error);
      return;
    }
    setError("");

    const text = t.wa.booking({
      name: name.trim(),
      phone: phone.trim(),
      date,
      reason: reason.trim(),
    });
    const url = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const input =
    "w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200";
  const label = "mb-1 block text-sm font-medium text-slate-700";

  return (
    <section id="book" className="px-4 py-12">
      <div className="mx-auto max-w-xl rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">{t.form.heading}</h2>
        <p className="mt-1 text-sm text-slate-600">{t.form.intro}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className={label}>{t.form.name}</label>
            <input
              className={input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.form.namePh}
              autoComplete="name"
            />
          </div>

          <div>
            <label className={label}>{t.form.phone}</label>
            <input
              className={input}
              dir="ltr"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.form.phonePh}
              inputMode="tel"
              autoComplete="tel"
            />
          </div>

          <div>
            <label className={label}>{t.form.date}</label>
            <input
              type="date"
              className={input}
              value={date}
              min={todayISO()}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className={label}>
              {t.form.reason}{" "}
              <span className="text-slate-400">({t.form.optional})</span>
            </label>
            <textarea
              className={input}
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={t.form.reasonPh}
            />
          </div>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
          >
            {t.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
