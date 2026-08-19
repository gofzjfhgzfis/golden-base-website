import { createContext, useContext, useEffect, useState } from 'react';
import { translations, LANGS } from '../data/translations';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'gb-lang';

function readInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && LANGS[saved]) return saved;
  } catch {
    /* storage blocked */
  }
  return 'en'; // زمانی بنەڕەتی
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang);
  const dir = LANGS[lang].dir;

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* preference just won't persist */
    }
  }, [lang, dir]);

  const value = {
    lang,
    setLang,
    dir,
    isRTL: dir === 'rtl',
    t: translations[lang],
    langs: LANGS,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
