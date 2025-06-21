"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { SectionHeading } from "@/components/section-heading";
import { useStore } from "@/store/toggle-store";
import InfoCards from "@/components/investors/detail-cards";
import DynamicInfoSection from "@/components/investors/reports-cards";
import AnnualReportsBanner from "@/components/investors/cta";
import ContactSection from "@/components/investors/contact";
import WorkSection from "@/components/careers/work-section";
import OpenApplication from "@/components/careers/open-application";
import CustomerSupport from "@/components/careers/customer-support";
import { useEffect, useState } from "react";
import { fetchCareer } from "@/api/careers";
import { CareerData } from "@/types/careers/careers";

export default function CareersPageClient() {
  const { language } = useStore();
  const [career, setCareer] = useState<CareerData | null>(null);

  useEffect(() => {
    fetchCareer(language)
      .then((data) => setCareer(data))
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  const isRTL = language === "ar";
  return (
    <div className="flex min-h-screen  flex-col">
      <Header  />
      <main className="flex-1">
        <Hero
           backgroundImage={
            career?.HeroImg?.formats?.large?.url ||
            career?.HeroImg?.formats?.medium?.url ||
            career?.HeroImg?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  career?.HeroImg?.formats?.large?.url ||
                  career?.HeroImg?.formats?.medium?.url ||
                  career?.HeroImg?.url
                }`
              : "/international/international-hero"
          }
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center  uppercase lg:text-[80px] font-extrabold text-white leading-tight lg:leading-[5.5rem] ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {career?.HeroTitle1} 
              <br />
              {career?.HeroTitle2}
            </h1>
          </div>
        </Hero>
        <SectionHeading className=" pt-6 lg:pt-16 lg:max-w-6xl mx-auto">
          <p className="lg:text-[50px] text-[30px] px-4 lg:px-0 lg:w-full w-[86%]  mx-auto text-center font-extrabold ">
          {career?.Title2}
          </p>
        </SectionHeading>

        
       {career && <WorkSection data={career}/>}
       {career && <OpenApplication data={career}/>}
       {career && <CustomerSupport data={career}/>}
      </main>
      <Footer />
    </div>
  );
} 