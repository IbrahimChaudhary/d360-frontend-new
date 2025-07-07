"use client"
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { MergedFAQAccordion } from "@/components/faq-merged";
import DesktopContentSectionTermsConditions from "@/components/terms-conditions/desktop-content-section-terms-and-conditions";
import { useStore } from "@/store/toggle-store";
import { useEffect, useState } from "react";
import { TermsConditionsData } from "@/types/terms-conditions/terms-conditions";
import { fetchTermsConditions } from "@/api/terms-conditions";
import { extractFAQItems } from "@/lib/faq-extract";

interface TermsConditionsPageClientProps {
  initialTermsConditionsData?: TermsConditionsData | null;
}

export function TermsConditionsPageClient({ initialTermsConditionsData }: TermsConditionsPageClientProps) {
  const { language } = useStore();
  const [security, setSecurity] = useState<TermsConditionsData | null>(initialTermsConditionsData || null);

  useEffect(() => {
    if (!initialTermsConditionsData) {
      fetchTermsConditions(language)
        .then((data) => setSecurity(data))
        .catch((err) => console.error(err));
    }
  }, [language, initialTermsConditionsData]);
  const faqItems = security ? extractFAQItems(security) : [];
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header variant="about"/>
      <div className="max-w-[1728px] hidden lg:mt-10  md:flex flex-col justify-center items-center  ">
       <DesktopContentSectionTermsConditions/>
      </div>
      {/* mobile version  */}
      <div className=" w-full  block  md:hidden  py-[60px] ">
      <div className="max-w-[1228px] px-6 mx-auto mt-10 space-y-16">
      {/* Page title & intro */}
      {security && (
  <div className="space-y-6">
    <DesktopContentSectionTermsConditions/>
  </div>

)}
       {/*<MergedFAQAccordion faqItems={faqItems} title="hidden" />*/}
    </div>
    
</div>
      <Footer/>
    </div>
  );
} 