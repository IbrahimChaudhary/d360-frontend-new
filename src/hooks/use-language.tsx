"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useStore } from "@/store/toggle-store"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (en: string, ar: string) => string
  navigateToLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const router = useRouter()
  const pathname = usePathname()
  const { syncFromUrl } = useStore()

  // Sync with Zustand store
  useEffect(() => {
    const storedLang = localStorage.getItem('lang') as Language || 'en'
    setLanguage(storedLang)
  }, [])

  const t = (en: string, ar: string) => {
    return language === "en" ? en : ar
  }

  const navigateToLanguage = (lang: Language) => {
    // Update localStorage and state
    localStorage.setItem('lang', lang)
    setLanguage(lang)
    syncFromUrl(lang)
    
    // Navigate to the same page in new language
    const currentPath = pathname
    const newPath = currentPath.replace(/^\/(en|ar)/, `/${lang}`)
    router.push(newPath)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, navigateToLanguage }}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>{children}</div>
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
