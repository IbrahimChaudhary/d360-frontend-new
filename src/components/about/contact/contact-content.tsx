"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactInfo } from "./contact-info";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { AboutD360Data } from "@/types/about/about";
interface ContactProps {
  data?: AboutD360Data
}
export function ContactContent({data}:ContactProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;

  return (
    <AnimatedSection direction="left" className="w-[70%]">
      <ContactInfo
        title={data?.Title6}
        data={data}
        showComplaintText={false}
        showAppSection={false}
      />
    </AnimatedSection>
  );
}
