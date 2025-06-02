"use client";
import { Header } from "@/components/layout/header";

import { Footer } from "@/components/layout/footer/footer";

import { SectionHeading } from "../section-heading";
import { StatsCounter } from "../about/stats-counter";
import { HomeHero } from "./home-hero";
import { ShariahSection } from "./shariha-section";
import InteractiveCardHero from "./animated-section";
import MobileAnimatedSection from "./mobile-animated-section";
import TransferSection from "./international-transfers-mobile";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import ScrollSection from "../ui/sticky-scroll-reveal";
import { CardCarosels } from "./card-carosel";
import { useStore } from "@/store/toggle-store";
import { useEffect, useState } from "react";
import { fetchHomePage } from "@/api/home";
import { HomePageData } from "@/types/home/home";
import { extractNumber, extractSuffix } from "@/lib/separate-number-data";

export default function HomePage() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [homeData, setHomeData] = useState<HomePageData | null>(null);

  useEffect(() => {
    fetchHomePage(language)
      .then(setHomeData)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  const stats = [
    {
      label: `${homeData?.Title5}`,
      value: extractNumber(homeData?.Description5),
      suffix: extractSuffix(homeData?.Description5),
    },
    {
      label: `${homeData?.Title6}`,
      value: extractNumber(homeData?.Description6),
      suffix: extractSuffix(homeData?.Description6),
    },
    {
      label: `${homeData?.Title7}`,
      value: extractNumber(homeData?.Description7),
      suffix: extractSuffix(homeData?.Description7),
    },
  ];

  return (
    <div className={`flex min-h-screen flex-col font-sans`}>
      <Header />
      <main className="flex-1">
        <div className="">{homeData && <HomeHero data={homeData} />}</div>
        <div className="hidden lg:block">
          {homeData && <ScrollSection data={homeData} />}
        </div>
        {homeData && <CardCarosels data={homeData} />}

        <SectionHeading className="mt-16 text-[27px] px-3  lg:text-[60px] font-extrabold">
          {homeData?.Title4}
        </SectionHeading>
        <StatsCounter container="pt-0 grid grid-cols-3" stats={stats} />

        {homeData && <InteractiveCardHero data={homeData} />}
        {homeData && <MobileAnimatedSection data={homeData}/>}
        {homeData && <ShariahSection data={homeData}/>}
        {/* <TransferSection  /> */}
      </main>
      <Footer />
    </div>
  );
}
