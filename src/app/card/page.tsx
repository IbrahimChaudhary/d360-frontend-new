"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { SectionHeading } from "@/components/section-heading";
import CardVariants from "@/components/card/cards-variation";
import { useEffect, useState } from "react";
import { CardsData } from "@/types/card/card";
import { fetchCard } from "@/api/card";
import { useStore } from "@/store/toggle-store";
import { extractFAQItems } from "@/lib/faq-extract";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";

export default function AboutPage() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const { t } = useTranslations();
  const [cardData, setCardData] = useState<CardsData | null>(null);

  useEffect(() => {
    fetchCard(language)
      .then(setCardData)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  const faqItems = cardData ? extractFAQItems(cardData) : [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about" />
      <main className="flex-1">
        <Hero backgroundImage={
            isRTL ? "/about/about-hero-arabic.png" : "/card/card-hero.jpg"
          }
          direction={isRTL ? "rtl" : "ltr"}
        >
          <h1 className="text-4xl ltr:lg:px-6  lg:text-[80px] font-extrabold text-[#263244] leading-tight">
            {cardData?.MainTitle}
          </h1>
          <p className="text-4xl ltr:lg:px-6 lg:text-[80px] font-medium lg:w-[70%] mb-2 md:mb-6 text-[#263244] leading-tight">
            {cardData?.MainTitle1} {cardData?.MainTitle2}
          </p>
        </Hero>
        <SectionHeading className="pt-16">
          <span className="text-[30px] lg:text-[70px] font-extrabold">
            {" "}
            {cardData?.Title1}
          </span>
          <p className="text-[14px] lg:text-[25px] w-[86%] mx-auto pt-7">
            {cardData?.Description1}
            {cardData?.Description2}
            {cardData?.Description3}
            {cardData?.Description4}

          </p>
        </SectionHeading>
        {cardData && 
        <CardVariants data={cardData}/>
        }

        <MergedFAQAccordion faqItems={faqItems} />
      </main>
      <Footer />
    </div>
  );
}
