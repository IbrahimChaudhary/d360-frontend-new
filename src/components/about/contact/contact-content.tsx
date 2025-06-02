"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactInfo } from "./contact-info";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";

export function ContactContent() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;

  return (
    <AnimatedSection direction="left" className="w-[70%]">
      <ContactInfo
        title={content.data.contact.howTo}
        showComplaintText={false}
        showAppSection={false}
      />
    </AnimatedSection>
  );
}
