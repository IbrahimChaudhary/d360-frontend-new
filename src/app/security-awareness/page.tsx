"use client"
import ContentSection from "@/components/content-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { aboutData, FAQsAbout } from "@/data/about";
import DesktopContentSectionSecurityAndAwareness from "@/components/security-awareness/desktop-content-section-security-and-awareness";
import { useStore } from "@/store/toggle-store";
import { useEffect, useState } from "react";
import { SecurityAwarenessData } from "@/types/security-awareness/security-awareness";
import { fetchSecurityAwareness } from "@/api/security-awareness";
import { extractFAQItems } from "@/lib/faq-extract";
export default function SecurityAwareness() {
  const { language } = useStore();
  const [security, setSecurity] = useState<SecurityAwarenessData | null>(null);

  useEffect(() => {
    fetchSecurityAwareness(language)
      .then((data) => setSecurity(data))
      .catch((err) => console.error(err));
  }, [language]);
  const faqItems = security ? extractFAQItems(security) : [];
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header variant="about"/>
      <div className="max-w-[1728px] hidden lg:mt-10  md:flex flex-col justify-center items-center  ">
       <DesktopContentSectionSecurityAndAwareness/>
      </div>
      {/* mobile version  */}
      <div className=" mt-[100px] flex  md:hidden flex-col justify-center items-center overflow-y-scroll  ">
       <MergedFAQAccordion faqItems={faqItems} />
    </div>
      <Footer/>
    </div>
  );
}
