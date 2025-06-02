"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { aboutData, FAQsAbout } from "@/data/about";
import DesktopContentSectionPrivacyAndNotice from "@/components/privacy-notice/desktop-content-section-privacy-notice";
import { useEffect, useState } from "react";
import { PrivacyNoticeData } from "@/types/privacy-notice/privacy-notice";
import { fetchPrivacyNotice } from "@/api/privacy-notice";
export default function PrivacyNotice() {
  const [privacy, setPrivacy] = useState<PrivacyNoticeData | null>(null);

  useEffect(() => {
    fetchPrivacyNotice()
      .then(setPrivacy)
      .catch((err) => console.error("Failed to load media center:", err));
  }, []);
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header />
      <div className="max-w-[1728px] hidden  md:flex flex-col justify-center items-center overflow-y-scroll  ">
       {privacy && <DesktopContentSectionPrivacyAndNotice data={privacy}/>}
      </div>
      {/* mobile version  */}
      <div className=" mt-[100px] flex  md:hidden flex-col justify-center items-center overflow-y-scroll  ">
       <MergedFAQAccordion faqItems={FAQsAbout} />
    </div>
      <Footer/>
    </div>
  );
}
