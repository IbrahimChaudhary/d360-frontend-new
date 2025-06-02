"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { OurStory } from "@/components/about/our-story";
import { Investors } from "@/components/about/investors";
import { ContactImage } from "@/components/about/contact/contact-image";
import { ContactContent } from "@/components/about/contact/contact-content";
import { Footer } from "@/components/layout/footer/footer";
import { GlobalCTA } from "@/components/about/global-presence";
import { StatsCounter } from "@/components/about/stats-counter";
import { Button } from "@/components/ui/button";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { useState } from "react";
import { DownloadModal } from "@/components/home/download-modal";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";


export default function AboutPage() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [isModalOpen, setModalOpen] = useState(false);

  const stats = [
    { 
      label: isRTL ? "بنك سعودي رقمي" : "Saudi Digital Bank", 
      value: isRTL ? "اول" : "1st", 
      animated: false 
    },
    { 
      label: isRTL ? "المستخدمين" : "Users", 
      value: 1, 
      prefix: "+", 
      suffix: "M", 
      animated: true 
    },
    { 
      label: isRTL ? "الدول" : "Countries", 
      value: 70, 
      prefix: "+", 
      animated: true 
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about" />

      <main className="flex-1">
        <Hero
          backgroundImage={
            isRTL ? "/about/about-hero-arabic.png" : "/about/about-hero.png"
          }
          direction={isRTL ? "rtl" : "ltr"}
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? "  text-right" : "items-start text-left"
            }`}
          >
            <h1 className={`text-[25px] flex items-center  uppercase lg:text-[140px] font-extrabold text-[#263244] lg:leading-33 ${isRTL?"justify-end":" justify-center"}`}>
              {content.data.head.head1}
              <br />
              {content.data.head.head2}
            </h1>

            <p className="text-4xl sm:text-5xl lg:text-6xl font-[800] mb-2 md:mb-6 text-[#263244] leading-tight">
            </p>

            <div
              onClick={() => setModalOpen(true)}
              className={`bg-[#EB644C] text-white font-bold py-2 px-2 text-center text-[8px] lg:text-[20px] lg:py-2 rounded-md lg:rounded-[14px] ${
                isRTL ? "lg:px-3 w-[30%] ml-[70%] lg:w-[60%] lg:ml-30" : "lg:px-16"
              }`}
              
            >
              {isRTL ? "حمل التطبيق" : "Download the App"}
            </div>
          </div>
        </Hero>

        <StatsCounter
          container=" lg:pt-22 grid grid-cols-3"
          stats={stats}
        />

        <OurStory />
        <Investors />
        <MergedFAQAccordion
          faqItems={content.data.faq}
          title={content.data.faqHead.head}
        />
        <GlobalCTA
          title={content.data.contact.heading}
          subtitle={content.data.contact.body}
          ctaText={content.data.contact.contact}
          backgroundImage="/about/contact-cta.png"
        />
        <div
          className={`lg:flex hidden flex-col  items-center justify-center ${
            language === "ar" ? "flex-row-reverse" : "flex-row"
          } `}
        >
          <ContactImage />
          <ContactContent />
        </div>
        <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
      </main>
      <Footer />
    </div>
  );
}
