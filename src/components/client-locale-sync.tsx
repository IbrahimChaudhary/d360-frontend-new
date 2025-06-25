// src/components/client-locale-sync.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientLocaleSync({ locale }: { locale: "en" | "ar" }) {
  console.log("layout wala")
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    console.log("i am in client locale", locale)
    // Set lang in localStorage and cookies
    localStorage.setItem("lang", locale);
    document.cookie = `lang=${locale}; path=/`;

    // // Set direction (optional but good UX)
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    console.log("language", lang)

    // If already localized, do nothing
    if (pathname.startsWith("/en") || pathname.startsWith("/ar")) return;
    console.log(`/${lang}${pathname}`)
    // Redirect to localized path
    router.replace(`/${lang}${pathname}`);
  }, [pathname, router]);

  return null;
}
