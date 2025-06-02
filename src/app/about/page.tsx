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
import { extractNumber, extractSuffix } from "@/lib/separate-number-data";

export default function AboutPage() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [isModalOpen, setModalOpen] = useState(false);
  const [about, setAbout] = useState<AboutD360Data | null>(null);

  useEffect(() => {
    fetchAboutD360(language)
      .then(setAbout)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);

  const stats = [
    {
      label: `${about?.value1Des}`,
      value: extractNumber(about?.value1),
      suffix: extractSuffix(about?.value1),
    },
    {
      label: `${about?.value2Des}`,
      value: extractNumber(about?.value2),
      suffix: extractSuffix(about?.value2),
    },
    {
      label: `${about?.value3Des}`,
      value: extractNumber(about?.value3),
      suffix: extractSuffix(about?.value3),
    },
  ];

  // Transform FAQ data into the required format
  const faqItems = about
    ? [
        {
          id: "1",
          question: about.FAQTitle1,
          answer: about.FAQDescription1,
        },
        {
          id: "2",
          question: about.FAQTitle2,
          answer: about.FAQDescription2,
        },
        {
          id: "3",
          question: about.FAQTitle3,
          answer: about.FAQDescription3,
        },
        {
          id: "4",
          question: about.FAQTitle4,
          answer: about.FAQDescription4,
        },
      ]
    : [];

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
            <h1
              className={`text-[25px] flex items-center  uppercase lg:text-[140px] font-extrabold text-[#263244] lg:leading-33 ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {about?.Title1}
              <br />
              {about?.Title2}
            </h1>

            <p className="text-4xl sm:text-5xl lg:text-6xl font-[800] mb-2 md:mb-6 text-[#263244] leading-tight">
              {/* Optionally add a hero description here if needed */}
            </p>

            <div
              onClick={() => setModalOpen(true)}
              className={`bg-[#EB644C] text-white font-bold py-2 px-2 text-center text-[8px] lg:text-[20px] lg:py-2 rounded-md lg:rounded-[14px] ${
                isRTL
                  ? "lg:px-3 w-[30%] ml-[70%] lg:w-[60%] lg:ml-30"
                  : "lg:px-16"
              }`}
            >
              {about?.download}
            </div>
          </div>
        </Hero>

        <StatsCounter container=" lg:pt-22 grid grid-cols-3" stats={stats} />

        {about && <OurStory data={about} />}
        {about && <Investors data={about} />}
        <MergedFAQAccordion
          faqItems={faqItems}
          title={about?.FAQTitle || content.data.faqHead.head}
        />
        {about && (
          <GlobalCTA
            title={about?.HelpingTitle}
            subtitle1={about?.HelpingDescription}
            subtitle2={about?.HelpingDescription1}
            ctaText={about?.contact}
            backgroundImage="/about/contact-cta.png"
          />
        )}
        <div
          className={`lg:flex hidden flex-col  items-center justify-center ${
            language === "ar" ? "flex-row-reverse" : "flex-row"
          } `}
        >
          <ContactImage />
          {about && <ContactContent data={about} />}{" "}
        </div>
        <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
      </main>
      <Footer />
    </div>
  );
}
