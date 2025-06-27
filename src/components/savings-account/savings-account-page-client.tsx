"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { useStore } from "@/store/toggle-store";
import { Carosel } from "@/components/savings-account/carosal-section";
import SanabilSteps from "@/components/savings-account/sanabil-steps";
import ProfitBanner from "@/components/savings-account/profit-banner";
import SanabilRates from "@/components/savings-account/sanabil-rates";
import ProfitCalculationSection from "@/components/savings-account/profit-calculation";
import { SavingsData } from "@/types/savings-account/savings-account";
import { useEffect, useState } from "react";
import { fetchSavings } from "@/api/savings-account";
import { extractFAQItems } from "@/lib/faq-extract";

export function SavingsAccountPageClient() {
  const { t } = useTranslations();
  const { language } = useStore();
  const isRTL = language === "ar";
  const [savings, setSavings] = useState<SavingsData | null>(null);

  useEffect(() => {
    fetchSavings(language)
      .then((data) => setSavings(data))
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  const faqItems = savings ? extractFAQItems(savings) : [];

  return (
    <div className="flex  flex-col">
      <Header variant="about" />
      <main className="flex-1">
        <Hero
          backgroundImage={
            savings?.HeroImg?.formats?.large?.url ||
            savings?.HeroImg?.formats?.medium?.url ||
            savings?.HeroImg?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  savings?.HeroImg?.formats?.large?.url ||
                  savings?.HeroImg?.formats?.medium?.url ||
                  savings?.HeroImg?.url
                }`
              : ""
          }
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <p className="text-[12px] w-full lg:text-xl  lg:mb-2  text-[#263244] leading-tight lg:leading-[5.5rem]">
              {savings?.MainTitleUpDes}{" "}
            </p>
            <h1 className="text-[25px] mb-2 lg:text-[80px]  w-[50%] lg:w-full leading-tight uppercase font-extrabold text-[#263244] lg:leading-[5.5rem]">
              {savings?.MainTitle1}
              <br />
              {savings?.MainTitle2}
              <br />
              {savings?.MainTitle3}
            </h1>
            <button className="bg-[#EB644C] rounded-md px-8 py-2  font-bold text-white text-[8px] lg:text-[20px] lg:px-8 lg:py-2 lg:rounded-[14px]">
              {savings?.HeroBtn}
            </button>
            <p className="text-[10px] lg:w-full w-[46%]  lg:text-[14px] font-medium py-3 lg:py-6 text-white lg:leading-[5.5rem]">
              {savings?.MainTitleDownDes}{" "}
            </p>
          </div>
        </Hero>
        <Carosel

          arrows="flex text-xl rtl:flex-row-reverse justify-center gap-2 z-10
    absolute -bottom-8 left-[50%]  -translate-x-1/2
    lg:static lg:translate-x-0 ltr:lg:justify-start rtl:lg:justify-end lg:bottom-auto lg:left-auto"
          headsection="flex flex-col-reverse lg:flex-row max-w-[1100px] lg:max-w-[1200px]  mx-auto  items-center px-4 lg:px-8 justify-center lg:py-24 pb-10 lg:pb-0 mt-10 lg:mt-0"
          classname="text-[14px] lg:text-[20px] font-[400] lg:w-full lg:mb-2 text-center rtl:lg:text-right ltr:lg:text-left text-[#263244]"
          layout="default"
          showButton={true}
          btnTxt={savings?.SavingBtn}
          slides={[
            {
              heading: `${savings?.Way1Title}`,
              subheading: `${savings?.Way1Head}`,
              paragraph: `${savings?.Way1Des}`,
              image: `${
                savings?.Way1Img?.formats?.large?.url ||
                savings?.Way1Img?.formats?.medium?.url ||
                savings?.Way1Img?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      savings?.Way1Img?.formats?.large?.url ||
                      savings?.Way1Img?.formats?.medium?.url ||
                      savings?.Way1Img?.url
                    }`
                  : ""
              }`,
            },
            {
              heading: `${savings?.Way2Title}`,
              subheading: `${savings?.Way2Head}`,
              paragraph: `${savings?.Way2Des}`,
              image: `${
                savings?.Way2Img?.formats?.large?.url ||
                savings?.Way2Img?.formats?.medium?.url ||
                savings?.Way2Img?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      savings?.Way2Img?.formats?.large?.url ||
                      savings?.Way2Img?.formats?.medium?.url ||
                      savings?.Way2Img?.url
                    }`
                  : ""
              }`,
            },
            {
              heading: `${savings?.Way3Title}`,
              subheading: `${savings?.Way3Head}`,
              paragraph: `${savings?.Way3Des}`,
              image: `${
                savings?.Way3Img?.formats?.large?.url ||
                savings?.Way3Img?.formats?.medium?.url ||
                savings?.Way3Img?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      savings?.Way3Img?.formats?.large?.url ||
                      savings?.Way3Img?.formats?.medium?.url ||
                      savings?.Way3Img?.url
                    }`
                  : ""
              }`,
            },
            {
              heading: `${savings?.Way4Title}`,
              subheading: `${savings?.Way4Head}`,
              paragraph: `${savings?.Way4Des}`,
              image: `${
                savings?.Way4Img?.formats?.large?.url ||
                savings?.Way4Img?.formats?.medium?.url ||
                savings?.Way4Img?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      savings?.Way4Img?.formats?.large?.url ||
                      savings?.Way4Img?.formats?.medium?.url ||
                      savings?.Way4Img?.url
                    }`
                  : ""
              }`,
            },
          ]}
        />

        {savings && <SanabilSteps data={savings} />}
        {savings && <ProfitBanner data={savings} />}
        {savings && <SanabilRates data={savings} />}
        {savings && <ProfitCalculationSection data={savings} />}

        <br />
        <br />
        <br />
        <br />
        <br />
        <MergedFAQAccordion
          faqItems={faqItems}
          sectionClassName="py-8 lg:py-0  px-4  w-full lg:flex lg:justify-center lg:items-center"
          titleClassName="lg:pb-0 text-[30px] lg:text-[60px] font-extrabold    text-[#293242]"
          para={
            language === "ar"
              ? "ابحث عن إجابات لأكثر الأسئلة شيوعًا حول حساب التوفير سنابل."
              : "Find answers to the most frequently asked questions about the Sanabil Savings Account."
          }
        />
      </main>
      <Footer />
    </div>
  );
}
