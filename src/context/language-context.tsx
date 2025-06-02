"use client"

import { createContext, useContext, useState, useMemo, type ReactNode } from "react"

export type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRtl: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const isRtl = useMemo(() => language === "ar", [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isRtl,
    }),
    [language, isRtl],
  )

  return (
    <LanguageContext.Provider value={value}>
      <div dir={isRtl ? "rtl" : "ltr"} lang={language}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
