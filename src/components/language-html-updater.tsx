'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/toggle-store';

export default function LanguageHTMLUpdater({ locale }: { locale: 'en' | 'ar' }) {
  const { setLanguage } = useStore();

  useEffect(() => {
    const validatedLocale = locale === 'ar' ? 'ar' : 'en';

    console.log("LanguageHTMLUpdater: Updating HTML attributes for locale:", validatedLocale);

    // Update HTML attributes
    document.documentElement.lang = validatedLocale;
    document.documentElement.dir = validatedLocale === 'ar' ? 'rtl' : 'ltr';

    // Update localStorage and store
    localStorage.setItem('lang', validatedLocale);
    setLanguage(validatedLocale);

    // Set cookie
    document.cookie = `lang=${validatedLocale}; path=/; max-age=31536000`;
  }, [locale, setLanguage]);

  return null;
}
