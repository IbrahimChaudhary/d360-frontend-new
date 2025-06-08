"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useTranslations } from "@/lib/i18n"
import { InternationalData } from "@/types/international/international"

interface Feature {
  title: string
  description: string
}

interface FeaturesSectionProps{
  data:InternationalData
}
export function FeaturesSection({data}:FeaturesSectionProps) {
  const { t } = useTranslations()

  const features: Feature[] = [
    {
      title: data.FeatHead1,
      description: data.FeatHeadDes1,
    },
    {
      title: data.FeatHead2,
      description: data.FeatHeadDes2,
    },
    {
      title: data.FeatHead3,
      description: data.FeatHeadDes3,
    },
    {
      title: data.FeatHead4,
      description: data.FeatHeadDes4,
    },
  ].filter(feature => feature.title && feature.description);

  return (
    <Section className="flex justify-center">
      <div className=" ">
        <AnimatedSection direction="up" className="text-center mb-8 lg:mb-16">
          <h2 className="lg:text-[50px] text-[25px] font-bold text-[slate-800]">{data.FeatHead}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 lg:px-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <AnimatedSection direction="up" className="text-center">
          <Button
            className="bg-[#E74529]  text-white px-8 py-3 lg:py-6 text-sm lg:text-lg font-bold rounded-xl"
            size="sm"
          >
            {data.FeatBtn}
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
        {feature.title}
      </h3>
      <p className="text-[#263244]  text-[12px] lg:text-[25px]">
        {feature.description}
      </p>
    </motion.div>
  )
}
