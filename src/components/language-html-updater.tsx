'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/toggle-store';

export default function LanguageHTMLUpdater({ locale }: { locale: 'en' | 'ar' }) {
  const { setLanguage } = useStore();

  useEffect(() => {
    const validatedLocale = locale === 'ar' ? 'ar' : 'en'; // 🛡️ validation

    document.documentElement.lang = validatedLocale;
    document.documentElement.dir = validatedLocale === 'ar' ? 'rtl' : 'ltr';
    console.log("i am in language html ", validatedLocale)

    localStorage.setItem('lang', validatedLocale);
    setLanguage(validatedLocale);

    // ✅ Set valid cookie value only
    document.cookie = `lang=${validatedLocale}; path=/; max-age=31536000`;
  }, [locale, setLanguage]);

  return null;
}
