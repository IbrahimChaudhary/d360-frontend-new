"use client";
import { Header } from "@/components/layout/header";

import { Footer } from "@/components/layout/footer/footer";

import { useTranslations } from "@/lib/i18n";
import { SectionHeading } from "../section-heading";
import { StatsCounter } from "../about/stats-counter";
import { HomeHero } from "./home-hero";
import { ShariahSection } from "./shariha-section";
import InteractiveCardHero from "./animated-section";
import MobileAnimatedSection from "./mobile-animated-section";
import MobileTransferSection from "./international-transfers-mobile";

import ScrollSection from "../ui/sticky-scroll-reveal";
import { CardCarosels } from "./card-carosel";
import { useStore } from "@/store/toggle-store";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import { useEffect, useState } from "react";
import { fetchHomePage } from "@/api/home";
import { ApplePayData } from "@/types/apple-pay/apple-pay";
import { HomePageData } from "@/types/home/home";


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
      label: homeData?.Title5 ?? '', 
      value: homeData?.Description5 ?? '', 
      animated: false 
    },
    { 
      label: homeData?.Title6 ?? '', 
      value: homeData?.Description6 ?? '', 
      prefix: "", 
      animated: true 
    },
    { 
      label: homeData?.Title7 ?? '', 
      value: homeData?.Description7 ?? '', 
      prefix: "", 
      animated: true 
    },
  ];
  
  

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="">
          {homeData && <HomeHero  data={homeData}/>}
        </div>
        <div className="hidden lg:block">
        {homeData && <ScrollSection data={homeData}/>}
        </div>
        {homeData && <CardCarosels data={homeData}/>}

        <SectionHeading className="mt-16 text-[27px] px-3  lg:text-[60px] font-extrabold">
          {homeData?.Title4}
        </SectionHeading>
        <StatsCounter
          container="pt-0 grid grid-cols-3"
          stats={stats}
        />

        {homeData && <InteractiveCardHero data={homeData}/>}
        {homeData && <MobileAnimatedSection data={homeData}/>}
        {homeData && <ShariahSection data={homeData}/>}
        {/* <TransferSection  /> */}
      </main>
      <Footer />
    </div>
  );
}
