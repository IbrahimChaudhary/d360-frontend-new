"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useCallback } from "react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "ar" : "en")
  }, [language, setLanguage])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
      <Button
        variant="ghost"
        onClick={toggleLanguage}
        className="font-medium"
        aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
      >
        {language === "en" ? "عربي" : "English"}
      </Button>
    </motion.div>
  )
}
