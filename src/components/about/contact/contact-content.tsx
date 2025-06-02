"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactInfo } from "./contact-info";
import { AboutD360Data } from "@/types/about/about";
interface ContactProps {
  data?: AboutD360Data
}
export function ContactContent({data}:ContactProps) {
  return (
    <AnimatedSection direction="left" className="lg:w-[44%]">
      <ContactInfo
        title={data?.Title6}
        showComplaintText={false}
        showAppSection={false}
      />
    </AnimatedSection>
  );
}
