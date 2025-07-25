"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useStore } from "@/store/toggle-store";  // import your language store

interface ContactImageProps {
  url?: string;
}

export function ContactImage ({url}:ContactImageProps) {
  const { language } = useStore();
  const isRTL = language === "ar";

    // Set the image source depending on language
  const imageSrc = isRTL ? "/about/phone-ar.png" : "/about/phone.png";

  return (
    <AnimatedSection direction="right">
      <div className="w-[180px] h-[360px] rounded-full sm:w-[240px] sm:h-[480px] md:w-[300px] md:h-auto aspect-[9/20] relative">
        <Image
          src={imageSrc}
          alt="D360 App Help Screen"
          fill
          className="lg:object-cover object-contain "
        />
      </div>
    </AnimatedSection>
  );
}
