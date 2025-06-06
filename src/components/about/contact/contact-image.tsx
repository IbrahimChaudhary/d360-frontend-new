"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useStore } from "@/store/toggle-store";  // import your language store

interface ContactImageProps {
  url: string;
}

export function ContactImage({ url }: ContactImageProps) {
  const { language } = useStore();
  const isRTL = language === "ar";

  return (
    <AnimatedSection direction="right">
      <div className="w-[180px] h-[360px] ml-20 sm:w-[240px] sm:h-[480px] md:w-[300px] md:h-[600px] relative">
        <Image
          src={url}
          alt="D360 App Help Screen"
          fill
          className="object-contain"
        />
      </div>
    </AnimatedSection>
  );
}
