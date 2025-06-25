"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientLocaleSync({ locale }: { locale: "en" | "ar" }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Set lang in localStorage and cookies
    localStorage.setItem("lang", locale);
    document.cookie = `lang=${locale}; path=/`;

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  // ✅ Only redirect from `/` to `/${locale}`
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";

    // Redirect ONLY if path is exactly "/"
    if (pathname === "/") {
      router.replace(`/${lang}`);
    }
  }, [pathname, router]);

  return null;
}
