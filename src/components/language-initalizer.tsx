// components/LanguageInitializer.tsx
"use client";

import { useEffect } from "react";
import { useStore } from "@/store/toggle-store";

export default function LanguageInitializer({ lang }: { lang: "en" | "ar" }) {
  const setLanguage = useStore((state) => state.setLanguage);

  useEffect(() => {
    setLanguage(lang);
  }, [lang, setLanguage]);

  return null; // No UI, just sets the state
}
