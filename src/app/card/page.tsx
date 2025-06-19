"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { SectionHeading } from "@/components/section-heading";
import CardVariants from "@/components/card/cards-variation";
import { useEffect, useState } from "react";
import { CardsData } from "@/types/card/card";
import { fetchCard } from "@/api/card";
import { useStore } from "@/store/toggle-store";
import { extractFAQItems } from "@/lib/faq-extract";



export default function AboutPage() {
  const { language } = useStore();
  const isRTL = language === "ar";
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
        <Hero
          backgroundImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            cardData?.imges?.formats?.large?.url ||
            cardData?.imges?.formats?.medium?.url ||
            cardData?.imges?.url
          }`}
          direction={isRTL ? "rtl" : "ltr"}
        >
          <h1 className="text-[25px] ltr:lg:px-6  lg:text-[80px] font-extrabold text-[#263244] leading-tight">
            {cardData?.MainTitle}
          </h1>
          <p className="text-[25px] ltr:lg:px-6 lg:text-[80px] font-extrabold lg:font-medium w-[40%] lg:w-[70%] mb-2 md:mb-6 text-[#263244] leading-tight">
            {cardData?.MainTitle1} <br className="lg:hidden block" /> {cardData?.MainTitle2}
          </p>
        </Hero>
        <SectionHeading className="pt-16">
          <p className="text-[30px] lg:w-full w-[60%] leading-tight mx-auto lg:mx-0 lg:text-[70px] font-extrabold">
            {" "}
            {cardData?.Title1}
          </p>
          <p className="text-[14px] lg:text-[25px] w-[86%] mx-auto pt-3 lg:pt-7">
            {cardData?.Description1}
            {cardData?.Description2}
            {cardData?.Description3}
            {cardData?.Description4}
          </p>
        </SectionHeading>
        {cardData && <CardVariants data={cardData} />}

        <MergedFAQAccordion faqItems={faqItems} titleClassName="mt-10 lg:mt-2 text-[30px] lg:text-[60px] font-extrabold mb-8  text-[#293242] lg:px-0 px-2"  />
      </main>
      <Footer />
    </div>
  );
}
