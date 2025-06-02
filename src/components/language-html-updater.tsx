'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/toggle-store'

export default function LanguageHTMLUpdater() {
  const { language } = useStore();
  console.log("current language selected : "  , language  )

  useEffect(() => {
    document.documentElement.lang = language;
    // document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return null;
}