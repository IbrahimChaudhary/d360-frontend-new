'use client';

import { useEffect } from 'react';
import LanguageHTMLUpdater from './language-html-updater';
import FontSwitcher from './font-switcher';

export default function ClientLayout({
  localeParam,
  children,
}: {
  localeParam: string;
  children: React.ReactNode;
}) {
  const locale = localeParam === 'ar' ? 'ar' : 'en';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <>
      <LanguageHTMLUpdater locale={locale} />
      <FontSwitcher>{children}</FontSwitcher>
    </>
  );
}
