"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactInfo } from "./contact-info";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { AboutD360Data } from "@/types/about/about";
interface ContactContentProps {
  data: AboutD360Data;
}
export function ContactContent({ data }: ContactContentProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;

  return (
    <AnimatedSection direction="left" className="lg:w-[44%]">
      <ContactInfo
        data={data}
        title={content.data.contact.howTo}
        showComplaintText={false}
        showAppSection={false}
      />
    </AnimatedSection>
  );
}
