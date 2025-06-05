"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useTranslations } from "@/lib/i18n"

interface Feature {
  id: string
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
}

const features: Feature[] = [
  {
    id: "faster-transfers",
    title: {
      en: "Faster transfers. Better rates.",
      ar: "تحويلات أسرع. أسعار أفضل.",
    },
    description: {
      en: "Send with peace of mind—compare rates and know exactly what you're paying before you transfer.",
      ar: "أرسل براحة بال - قارن الأسعار واعرف بالضبط ما تدفعه قبل التحويل.",
    },
  },
  {
    id: "compare-currencies",
    title: {
      en: "Compare currencies in seconds",
      ar: "قارن العملات في ثوانٍ",
    },
    description: {
      en: "Enter the amount in the app and see exactly how much the recipient will receive in their currency.",
      ar: "أدخل المبلغ في التطبيق وشاهد بالضبط كم سيتلقى المستلم بعملته.",
    },
  },
  {
    id: "clear-rates",
    title: {
      en: "Clear and competitive rates",
      ar: "أسعار واضحة وتنافسية",
    },
    description: {
      en: "No fees on currency exchange. Everything's transparent and upfront.",
      ar: "لا توجد رسوم على صرف العملات. كل شيء شفاف ومقدم مسبقاً.",
    },
  },
  {
    id: "traveling-costs",
    title: {
      en: "Traveling? Check what you actually paid",
      ar: "مسافر؟ تحقق مما دفعته فعلياً",
    },
    description: {
      en: "See the difference and know the exact amount you spent—no hidden costs.",
      ar: "شاهد الفرق واعرف المبلغ الدقيق الذي أنفقته - لا توجد تكاليف خفية.",
    },
  },
]

export function FeaturesSection() {
  const { t } = useTranslations()

  return (
    <Section className="flex justify-center">
      <div className=" ">
        <AnimatedSection direction="up" className="text-center mb-8 lg:mb-16">
          <h2 className="lg:text-[50px] text-[25px] font-bold text-[slate-800]">{t("features.title" as any) || "Features"}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 lg:px-24">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        <AnimatedSection direction="up" className="text-center">
          <Button
            className="bg-[#E74529]  text-white px-8 py-3 lg:py-6 text-sm lg:text-lg font-bold rounded-xl"
            size="sm"
          >
            {t("features.tryNow" as any) || "Try It Now!"}
          </Button>
        </AnimatedSection>
      </div>
    </Section>
  )
}

interface FeatureCardProps {
  feature: Feature
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const { t } = useTranslations()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-[#F6F7F8] rounded-2xl py-3 lg:py-0 p-1 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <h3 className="text-[14px] lg:text-[40px] lg:w-full font-extrabold text-[#EB644C] mb-2 lg:mb-4 leading-tight">
        {t(`features.items.${feature.id}.title` as any) || feature.title.en}
      </h3>
      <p className="text-[#263244]  text-[12px] lg:text-[25px]">
        {t(`features.items.${feature.id}.description` as any) || feature.description.en}
      </p>
    </motion.div>
  )
}
