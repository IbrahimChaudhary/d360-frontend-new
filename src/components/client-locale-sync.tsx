// src/components/client-locale-sync.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useStore } from "@/store/toggle-store";

export default function ClientLocaleSync({ locale }: { locale: "en" | "ar" }) {
  const router = useRouter();
  const pathname = usePathname();
  const { syncFromUrl } = useStore();
  
  useEffect(() => {
    // Set lang in localStorage and cookies
    localStorage.setItem("lang", locale);
    document.cookie = `lang=${locale}; path=/`;

    // Set direction
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    
    // Sync Zustand store with URL locale
    syncFromUrl(locale);
  }, [locale, syncFromUrl]);

  // Handle manual URL changes to prevent server-side rendering
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "en";
    
    // If URL locale doesn't match stored locale, update stored locale to match URL
    if (locale !== storedLang) {
      console.log(`ClientLocaleSync: Manual URL change detected. Syncing store with URL locale: ${locale}`);
      localStorage.setItem("lang", locale);
      syncFromUrl(locale);
    }
  }, [locale, syncFromUrl]);

  return null;
}
