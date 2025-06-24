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
import { useEffect, useState } from "react";
import { InvestData } from "@/types/investor-relations/investor-relations";
import { fetchInvestor } from "@/api/investor-relations";

export default function InvestorRealtions() {
  const { language } = useStore();
  const [investor, setInvestor] = useState<InvestData | null>(null);

  useEffect(() => {
    fetchInvestor(language)
      .then((data) => setInvestor(data))
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  const isRTL = language === "ar";
  const customInfoCards = [
    {
      title1: `${investor?.Info1Head1}`,
      title2: `${investor?.Info1Head2}`,
      description: `${investor?.Info1Des}`,
    },
    {
      title1: `${investor?.Info2Head1}`,
      title2: `${investor?.Info2Head2}`,
      description: `${investor?.Info2Des}`,
    },
    {
      title1: `${investor?.Info3Head1}`,
      title2: `${investor?.Info3Head2}`,
      description: `${investor?.Info3Des}`,
    },
    {
      title1: `${investor?.Info4Hea1}`,
      title2: `${investor?.Info4Hea2}`,
      description: `${investor?.Info4Des}`,
    },
  ];
  return (
    <div className="flex min-h-screen  flex-col">
      <Header variant="about" />
      <main className="flex-1">
        <Hero
        containerAlign="lg:items-start"
          backgroundImage={
            investor?.HeroImg?.formats?.large?.url ||
            investor?.HeroImg?.formats?.medium?.url ||
            investor?.HeroImg?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  investor?.HeroImg?.formats?.large?.url ||
                  investor?.HeroImg?.formats?.medium?.url ||
                  investor?.HeroImg?.url
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
              className={`text-[25px]  items-center  lg:mt-42 lg:flex hidden leading-tight lg:leading-[5.5rem] uppercase lg:text-[80px] font-extrabold text-[#263244] ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {investor?.HeroTitle1}
              <br />
              {investor?.HeroTitle2}
            </h1>
            {/* <h1
              className={`text-[25px] flex items-center  lg:mt-32 lg:hidden  leading-tight lg:leading-[5.5rem] uppercase lg:text-[80px] font-extrabold text-[#263244] ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              Invest in 
              <br />
              D360 Bank
            </h1> */}
          </div>
        </Hero>
        <SectionHeading className="mt-16 pb-16 lg:py-16 px-4 mx-auto">
          <p className="lg:text-[50px] text-[30px] lg:w-full w-[90%] px-4 lg:px-0  mx-auto text-center bold-900">
            {investor?.Title2}
          </p>
        </SectionHeading>

        {investor && <InfoCards data={investor} />}
        {investor && (
          <DynamicInfoSection
            title={investor.InfoHead}
            type="info"
            infoCards={customInfoCards}
          />
        )}
        {investor && <AnnualReportsBanner data={investor} />}
        {investor && <ContactSection data={investor} />}
      </main>
      <Footer />
    </div>
  );
}
