import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

// Shows only after the doctor's name is filled in clinic.ts
export default function Doctor() {
  const { t, pick } = useLang();
  const d = clinic.doctor;

  const name = pick(d.name);
  if (!name) return null;

  const initials = (d.name.en || d.name.ur)
    .replace(/^dr\.?\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const tags = [d.specialty, d.qualifications, d.experience]
    .map(pick)
    .filter(Boolean);
  const about = pick(d.about);

  return (
    <section id="doctor" className="bg-emerald-50 px-4 py-14">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-lg sm:p-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-emerald-700">
          {t.doctor.meet}
        </p>

        <div className="mt-5 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-start">
          <div className="relative shrink-0">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-300/50 motion-reduce:hidden" />
            {d.photo ? (
              <img
                src={d.photo}
                alt={name}
                className="relative h-28 w-28 rounded-full object-cover ring-4 ring-emerald-500"
              />
            ) : (
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-emerald-600 text-4xl font-bold text-white ring-4 ring-emerald-200">
                {initials}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">{name}</h2>

            {tags.length > 0 && (
              <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-100 px-3 text-sm font-medium text-emerald-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {about && <p className="mt-3 text-slate-600">{about}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
