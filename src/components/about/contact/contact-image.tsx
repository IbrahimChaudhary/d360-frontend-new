"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useStore } from "@/store/toggle-store";  // import your language store

export function ContactImage() {
  const { language } = useStore();
  const isRTL = language === "ar";

  // Set the image source depending on language
  const imageSrc = isRTL ? "/about/phone-ar.png" : "/about/phone.png";

  return (
    <AnimatedSection direction="right">
      <div className="w-[180px] h-[360px] sm:w-[240px] mx-auto sm:h-[480px] md:w-[400px] md:h-[600px] relative">
        <Image
          src={imageSrc}
          alt="D360 App Help Screen"
          fill
          className="object-contain"
        />
      </div>
    </AnimatedSection>
  );
}
