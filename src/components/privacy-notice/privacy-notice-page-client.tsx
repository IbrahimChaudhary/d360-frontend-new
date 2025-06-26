"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { MergedFAQAccordion } from "@/components/faq-merged";
import DesktopContentSectionPrivacyAndNotice from "@/components/privacy-notice/desktop-content-section-privacy-notice";
import { useEffect, useState } from "react";
import { PrivacyNoticeData } from "@/types/privacy-notice/privacy-notice";
import { fetchPrivacyNotice } from "@/api/privacy-notice";
import { useStore } from "@/store/toggle-store";
import { extractFAQItems } from "@/lib/faq-extract";



export function PrivacyNoticePageClient() {

  const [privacy, setPrivacy] = useState<PrivacyNoticeData | null>(null);
  const {language} = useStore()
  useEffect(() => {
    fetchPrivacyNotice(language)
      .then(setPrivacy)
      .catch((err) => console.error("Failed to load media center:", err));
  }, [language]);
  const faqItems = privacy ? extractFAQItems(privacy) : [];
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header variant="about" />
      <div className="max-w-[1728px] hidden  px-6 mx-auto mt-20 space-y-16 md:flex flex-col justify-center items-center ">
       {privacy && <DesktopContentSectionPrivacyAndNotice data={privacy}/>}
      </div>
      {/* mobile version  */}
      <div className=" w-full  block  md:hidden  py-[60px] ">

      <div className="max-w-[1228px] px-6 mx-auto mt-10 space-y-16">
      {/* Page title & intro */}
      {privacy && (
  <div className="space-y-6">
    {privacy && <DesktopContentSectionPrivacyAndNotice data={privacy}/>}
  </div>

)}


       <MergedFAQAccordion faqItems={faqItems} title="hidden" />
    </div>
    </div>
      <Footer/>
    </div>
  );
} 