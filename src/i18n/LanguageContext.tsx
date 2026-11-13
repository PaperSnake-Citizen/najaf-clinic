import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { en } from "./en";
import type { Dict } from "./en";
import { ur } from "./ur";

export type Lang = "en" | "ur";
export type L = { en: string; ur: string }; // text that needs both languages

const dicts: Record<Lang, Dict> = { en, ur };

// "6:00 PM" stays as is in English, becomes "شام 6:00 بجے" in Urdu
export function formatTime(time: string, lang: Lang): string {
  if (lang === "en") return time;
  const m = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return time;
  let h = Number(m[1]) % 12;
  if (m[3].toUpperCase() === "PM") h += 12;
  const period =
    h >= 4 && h < 12
      ? "صبح"
      : h >= 12 && h < 16
        ? "دوپہر"
        : h >= 16 && h < 19
          ? "شام"
          : "رات";
  return `${period} ${Number(m[1])}:${m[2]} بجے`;
}

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  pick: (v: L) => string;
  fmt: (time: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ur" || saved === "en") return saved;
  } catch {
    // storage can be blocked, just use English
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ur" ? "rtl" : "ltr";
    document.title = dicts[lang].pageTitle;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang,
    t: dicts[lang],
    pick: (v) => v[lang] || v.en || v.ur,
    fmt: (time) => formatTime(time, lang),
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
