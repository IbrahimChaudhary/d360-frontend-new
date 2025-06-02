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
import { HomePageData } from "@/types/home/home";
import { useEffect, useState } from "react";
import { fetchHomePage } from "@/api/home";
import { extractNumber, extractSuffix } from "@/lib/separate-number-date";

export default function HomePage() {
  const { t } = useTranslations();
  const [homeData, setHomeData] = useState<HomePageData | null>(null);

  useEffect(() => {
    fetchHomePage()
      .then(setHomeData)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="">
          {homeData && <HomeHero data={homeData} />}
        </div>
        <div className="hidden lg:block">
        {homeData && <ScrollSection data={homeData}/>}
        </div>
        {homeData && <CardCarosels data={homeData}/>}

        <SectionHeading className="mt-16 px-2 text-3xl font-bold">
         {homeData?.Title4}
        </SectionHeading>
        <StatsCounter
          container="pt-0"
          stats={[
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
            {
              label: `${homeData?.Title8}`,
              value: extractNumber(homeData?.Description8),
              suffix: extractSuffix(homeData?.Description8),
            },
          ]}
        />


        {homeData && <InteractiveCardHero data={homeData}/>}
        {homeData && <MobileAnimatedSection data={homeData}/>}
        {homeData && <ShariahSection data={homeData}/>}
        {homeData && <MobileTransferSection data={homeData}/>}
      </main>
      <Footer />
    </div>
  );
}
