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

export default function AboutPage() {
  const { language } = useStore();

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
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/card/card-hero.jpg">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#263244] leading-tight">
            {cardData?.MainTitle}
          </h1>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-[600] mb-2 md:mb-6 text-[#263244] leading-tight">
            {cardData?.MainTitle1} {cardData?.MainTitle2}
          </p>
        </Hero>
        <SectionHeading className="pt-16">
          <span className="text-5xl font-extrabold">
            {" "}
            {cardData?.Title1}
          </span>
          <p className="text-sm w-[70%] mx-auto pt-7">
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
