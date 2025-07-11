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
import { AnimatePresence, motion } from "framer-motion";

interface PrivacyNoticePageClientProps {
  initialPrivacyNoticeData?: PrivacyNoticeData | null;
}

export function PrivacyNoticePageClient({ initialPrivacyNoticeData }: PrivacyNoticePageClientProps) {

  const [privacy, setPrivacy] = useState<PrivacyNoticeData | null>(initialPrivacyNoticeData || null);
  const [showMore, setShowMore] = useState(false);
  const {language} = useStore()
  useEffect(() => {
    if (!initialPrivacyNoticeData) {
      fetchPrivacyNotice(language)
        .then(setPrivacy)
        .catch((err) => console.error("Failed to load media center:", err));
    }
  }, [language, initialPrivacyNoticeData]);
  const faqItems = privacy ? extractFAQItems(privacy) : [];
  return (
    <div className="w-full  flex flex-col justify-center items-center">
      <Header variant="about" />
      <div className="max-w-[1728px] lg:px-6 mx-auto mt-20 space-y-16 flex flex-col justify-center items-center ">
       {privacy && <DesktopContentSectionPrivacyAndNotice data={privacy}/>}
      </div>
      {/* mobile version  */}
      <div className="w-full hidden py-[60px]">
  <div className="max-w-[1228px] px-6 mx-auto mt-10 space-y-6">
    {privacy && (
      <>
        {/* Heading & first paragraph */}
        <h1 className="text-[25px] font-extrabold text-[#E74529]">{privacy.Heading}</h1>
        <p className="text-[14px]">{privacy.headingPara1}</p>

        {/* Conditional extra paragraphs */}
        <AnimatePresence initial={false}>
  {showMore && (
    <motion.div
      key="more-content"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <p className="text-[14px]">{privacy.headingPara2}</p>
      {privacy.headingPara3 && (
        <p className="text-[14px]">{privacy.headingPara3}</p>
      )}
    </motion.div>
  )}
</AnimatePresence>


        {/* Toggle button */}
        <button
          className="text-[#E74529] font-extrabold underline text-[10px]"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>

        {/* ✅ FAQs always visible */}
        {faqItems.length > 0 && (
          <div className="">
            <MergedFAQAccordion faqItems={faqItems} title="hidden" />
          </div>
        )}
      </>
    )}
  </div>
</div>
      <Footer/>
    </div>
  );
} 