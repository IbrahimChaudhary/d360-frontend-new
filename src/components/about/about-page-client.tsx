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
import { useEffect, useState } from "react";
import { DownloadModal } from "@/components/home/download-modal";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { AboutD360Data } from "@/types/about/about";
import { fetchAboutD360 } from "@/api/about";
import { extractFAQItems } from "@/lib/faq-extract";

export default function AboutPageClient() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [isModalOpen, setModalOpen] = useState(false);
  const [aboutData, setAboutData] = useState<AboutD360Data | null>(null);

  useEffect(() => {
    fetchAboutD360(language)
      .then((data) => setAboutData(data))
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);

  const faqItems = aboutData ? extractFAQItems(aboutData) : [];
  const stats = [
    {
      label: isRTL ? "بنك سعودي رقمي" : "Saudi Digital Bank",
      value: isRTL ? "اول" : "1st",
      animated: false,
    },
    {
      label: isRTL ? "المستخدمين" : "Users",
      value: 1,
      prefix: "+",
      suffix: "M",
      animated: true,
    },
    {
      label: isRTL ? "الدول" : "Countries",
      value: 70,
      prefix: "+",
      animated: true,
    },
  ];
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about" />

      <main className="flex-1">
        {/*<Hero
          backgroundImage={`${baseUrl}${aboutData?.heroImage?.formats?.large?.url || aboutData?.heroImage?.formats?.medium?.url || aboutData?.heroImage.formats?.small?.url || aboutData?.heroImage?.url}`}
          direction={isRTL ? "rtl" : "ltr"}
        >*/}
        <Hero
          backgroundImage={
            isRTL ? "/about/about-hero-arabic.png" : "/about/about-hero.png"
          }
          direction={isRTL ? "rtl" : "ltr"}
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1 className={`text-[25px] flex   uppercase lg:text-[80px] bold-900 text-[#263244] lg:leading-[5.5rem] ${isRTL?"justify-end":" "}`}>
              {aboutData?.Title1}
              <br />
              {aboutData?.Title2}
            </h1>

            <p className="text-4xl sm:text-5xl lg:text-6xl font-[800] mb-2 md:mb-6 text-[#263244] leading-tight"></p>

            <div
              onClick={() => setModalOpen(true)}
              className={`bg-[#EB644C] hover:bg-[#d23e23] cursor-pointer text-white font-bold py-2 px-2 text-center text-[8px] lg:text-[20px] lg:py-2 rounded-md lg:rounded-[14px] ${
                isRTL
                  ? "lg:px-3 w-[30%] ml-[70%] lg:w-[60%] lg:ml-30"
                  : "lg:px-16"
              }`}
            >
              {aboutData?.download}
            </div>
          </div>
        </Hero>
        {/* 
        <StatsCounter
          container=" lg:pt-22 grid grid-cols-3"
          stats={stats}
        /> */}

        {aboutData && <OurStory data={aboutData} />}
        {aboutData && <Investors data={aboutData} />}
        {aboutData && (
          <MergedFAQAccordion faqItems={faqItems} title={aboutData.FAQTitle} />
        )}
        {aboutData && (
          <GlobalCTA
            title={aboutData?.HelpingTitle}
            subtitle={aboutData?.HelpingDescription}
            subtitle2={aboutData?.HelpingDescription1}
            ctaText={aboutData?.contact}
            backgroundImage="/about/contact-cta.png"
          />
        )}
        <div
          className={`lg:flex hidden flex-col  items-center justify-center ${
            language === "ar" ? "flex-row" : "flex-row"
          } `}
        >
          <ContactImage />

          {aboutData && <ContactContent data={aboutData} />}
        </div>
        <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
      </main>
      <Footer />
    </div>
  );
} 