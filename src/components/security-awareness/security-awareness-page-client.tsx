"use client"
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { MergedFAQAccordion } from "@/components/faq-merged";
import DesktopContentSectionSecurityAndAwareness from "@/components/security-awareness/desktop-content-section-security-and-awareness";
import { useStore } from "@/store/toggle-store";
import { useEffect, useState } from "react";
import { SecurityAwarenessData } from "@/types/security-awareness/security-awareness";
import { fetchSecurityAwareness } from "@/api/security-awareness";
import { extractFAQItems } from "@/lib/faq-extract";

interface SecurityAwarenessPageClientProps {
  initialSecurityData?: SecurityAwarenessData | null;
}

export function SecurityAwarenessPageClient({ initialSecurityData }: SecurityAwarenessPageClientProps) {
  const { language } = useStore();
  const [security, setSecurity] = useState<SecurityAwarenessData | null>(initialSecurityData || null);

  useEffect(() => {
    if (!initialSecurityData) {
      fetchSecurityAwareness(language)
        .then((data) => setSecurity(data))
        .catch((err) => console.error(err));
    }
  }, [language, initialSecurityData]);
  const faqItems = security ? extractFAQItems(security) : [];
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header variant="about"/>
      <div className="max-w-[1728px]  lg:mt-10  flex flex-col justify-center items-center  ">
       <DesktopContentSectionSecurityAndAwareness/>
      </div>
      {/* mobile version  */}
      <div className=" w-full  hidden  py-[60px] ">
      <div className="max-w-[1228px] px-6 mx-auto mt-10 space-y-16">
      {/* Page title & intro */}
      {security && (
  <div className="space-y-6">
    <h1 className="text-[25px] font-extrabold text-[#E74529]">{security.Title1}</h1>
    <p className="mt-2 text-[14px]">{security.Title1Des1}</p>
    <p className="mt-2 text-[14px]">{security.Title1Des2}</p>

    <MergedFAQAccordion faqItems={faqItems} title="hidden" />
  </div>
)}


       {/*<MergedFAQAccordion faqItems={faqItems} title="hidden" />*/}
    </div>
    
</div>
      <Footer/>
    </div>
  );
} 