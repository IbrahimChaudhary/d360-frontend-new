"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useTranslations } from "@/lib/i18n"
import { InternationalData } from "@/types/international/international"
import { useState } from "react"
import { DownloadModal } from "../home/download-modal"

interface Feature {
  title: string
  description: string
}

interface FeaturesSectionProps{
  data:InternationalData
}
export function FeaturesSection({data}:FeaturesSectionProps) {
  const { t } = useTranslations()
  const [isModalOpen, setModalOpen] = useState(false);

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
          <h2 className="lg:text-[50px] text-[25px] font-bold text-[#263244]">{data.FeatHead}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 px-4 lg:px-0 ">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <AnimatedSection direction="up" className="text-center">
          <button
          onClick={() => setModalOpen(true)}
             className="bg-[#E74529]  text-white px-8 lg:px-8 py-3 lg:py-2 text-[8px] lg:text-[20px] font-bold rounded-lg lg:rounded-xl"
          
          >
            {data.FeatBtn}
          </button>
        </AnimatedSection>
      </div>
      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
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
      className="bg-[#F6F7F8] rounded-2xl py-3 lg:py-[35px] lg:pl-[26px] rtl:lg:pr-[25px] ltr:lg:pr-[100px] p-1  transition-all duration-300 lg:px-0 px-4"
    >
      <h3 className="text-[14px] lg:text-[40px] ltr:pr-[105px] lg:w-full font-extrabold text-[#EB644C] mb-2 lg:mb-4">
        {feature.title}
      </h3>
      <p className="text-[#263244]  text-[12px] lg:text-[25px]">
        {feature.description}
      </p>
    </motion.div>
  )
}
