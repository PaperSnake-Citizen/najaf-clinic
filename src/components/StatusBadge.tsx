import { useEffect, useState } from "react";
import { clinic } from "../data/clinic";
import { useLang } from "../i18n/LanguageContext";

function toMinutes(t: string): number | null {
  const m = t.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let h = Number(m[1]) % 12;
  if (m[3].toUpperCase() === "PM") h += 12;
  return h * 60 + Number(m[2]);
}

// Current time in Pakistan, as minutes since midnight
function nowInKarachi(): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return h * 60 + m;
}

export default function StatusBadge() {
  const { t, fmt } = useLang();
  const [now, setNow] = useState(nowInKarachi());

  useEffect(() => {
    const id = setInterval(() => setNow(nowInKarachi()), 60_000);
    return () => clearInterval(id);
  }, []);

  const open = toMinutes(clinic.opensAt);
  const close = clinic.closesAt ? toMinutes(clinic.closesAt) : null;

  let dot = "bg-white";
  let text = t.status.neutral(fmt(clinic.opensAt));

  // Only claim "open" or "closed" once the closing time is filled in
  if (open !== null && close !== null) {
    const isOpen =
      close > open ? now >= open && now < close : now >= open || now < close;
    dot = isOpen ? "bg-green-300" : "bg-amber-300";
    text = isOpen
      ? t.status.open(fmt(clinic.closesAt))
      : t.status.closed(fmt(clinic.opensAt));
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 text-sm font-semibold">
      <span className={`live-dot h-2.5 w-2.5 rounded-full ${dot}`} />
      {text}
    </span>
  );
}
