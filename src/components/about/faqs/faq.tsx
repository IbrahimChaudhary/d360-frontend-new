"use client"

import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { FAQList } from "./faq-list"
import { useMemo } from "react"
import { useTranslations } from "@/lib/i18n"

export function FAQs() {
  const { t } = useTranslations()

  const faqIds = useMemo(() => ["licensed", "openAccount", "shariah", "benefits"], [])

  return (
    <Section className="bg-white">
      <AnimatedSection direction="up">
        <h2 className="text-4xl font-bold mb-8 md:px-24 text-[#293242]">{t("faqs.title")}</h2>
        <FAQList faqIds={faqIds} />
      </AnimatedSection>
    </Section>
  )
}
