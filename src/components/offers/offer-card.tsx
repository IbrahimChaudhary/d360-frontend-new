"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/context/language-context"
import type { Offer } from "@/types/offers"
import { cn } from "@/lib/utils"
import { Calendar } from "lucide-react"
import { OfferCardData } from "@/types/offer/offercard"

interface OfferCardProps {
  index: number
  height?: string
  width?: string
  textColor?: string
  glassBg?: string
  data:OfferCardData
}

export function OfferCard({
  index,
  height = "h-[432px]",
  width = "w-full",
  textColor = "text-white",
  glassBg = "bg-white/10 backdrop-blur-md",
  data
}: OfferCardProps) {
  const { t } = useTranslations()
  const { language } = useLanguage()
  console.log(data)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Link href={`/offers/${data?.slug}`}>
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300",
            height,
            width,
          )}
        >
          <div className="absolute inset-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data?.cardImage?.formats?.large?.url || data?.cardImage?.formats?.medium?.url || data?.cardImage?.url || "/"}`}
              alt={language === "en" ? data?.title : data?.title}
              fill
              className="lg:object-cover  group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Gradient layer (optional if needed) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Bottom Text with Glassmorphism */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0 p-4",
            glassBg,
            textColor
          )}>
            <h3 className="font-extrabold text-base md:text-[25px] leading-snug mb-2">
              {language === "en" ? `${data?.title}` : data?.title}
            </h3>
            <div className="text-[11px] pt-3 flex items-center gap-2 opacity-90">
              <Calendar width={14} height={14}/>
              <span>{data?.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
