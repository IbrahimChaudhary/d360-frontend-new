"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import type { ReactNode } from "react"

interface HeroProps {
  backgroundImage: string
  children: ReactNode
  
}

export function Hero({ backgroundImage, children }: HeroProps) {
  const { isRtl } = useLanguage()

  return (
    <section className="w-full md:min-h-[750px] relative overflow-hidden">
      <div
        className="absolute w-full h-full bg-no-repeat bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="container px-4 md:px-18 flex md:flex-row items-center justify-between h-full pt-28 lg:pt-52 pb-16 relative z-10">
        <motion.div
          className={`text-left max-w-xl`}
          initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>

        <motion.div
          className="w-full md:w-[45%] mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* You can place an image or animation here */}
        </motion.div>
      </div>
    </section>
  )
}
