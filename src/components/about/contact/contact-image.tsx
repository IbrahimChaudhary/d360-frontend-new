"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"

export function ContactImage() {
  return (
    <AnimatedSection direction="right">
      <div className="w-[180px] h-[360px] sm:w-[240px] mx-auto sm:h-[480px] md:w-[400px] md:h-[600px] relative">
        <Image
          src="/about/phone.png"
          alt="D360 App Help Screen"
          fill
          className="object-contain"
        />
      </div>
    </AnimatedSection>
  )
}
