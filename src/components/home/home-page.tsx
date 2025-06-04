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


export default function HomePage() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";

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
      <Header />
      <main className="flex-1">
        <div className="">
          <HomeHero />
        </div>
        <div className="hidden lg:block">
          <ScrollSection/>
        </div>
        <CardCarosels/>

        <SectionHeading className="mt-16 text-[27px] px-3  lg:text-[60px] font-extrabold">
          {content?.sections?.shariah.title}
        </SectionHeading>
        <StatsCounter
          container="pt-0 grid grid-cols-3"
          stats={stats}
        />

        <InteractiveCardHero />
        <MobileAnimatedSection />
        <ShariahSection />
        {/* <TransferSection  /> */}
      </main>
      <Footer />
    </div>
  );
}
