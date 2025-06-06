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

const customInfoCards = [
    {
      title1: "Financial",
      title2: "Reports",
      description: "Latest financial results and analysis.",
    },
    {
      title1: "Stock",
      title2: "Price",
      description: "Real-time stock performance updates.",
    },
    {
      title1: "Corporate",
      title2: "Governance",
      description: "Our principles for transparency and accountability.",
    },
    {
      title1: "Official",
      title2: "Announcements",
      description: "Key updates that matter to our investors.",
    },
  ]


export default function InvestorRealtions() {
  const { language } = useStore();
  const isRTL = language === "ar";
  return (
    <div className="flex min-h-screen  flex-col">
      <Header variant="about" />
      <main className="flex-1">
        <Hero
          backgroundImage={
            isRTL
              ? "/investor/investor-hero.png"
              : "/investor/investor-hero.png"
          }
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center  uppercase lg:text-[80px] font-extrabold text-[#263244] leading-snug ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              Invest in
              <br />
               D360 Bank
            </h1>
          </div>
        </Hero>
        <SectionHeading className=" pt-6 lg:pt-16 lg:max-w-5xl">
          <p className="lg:text-[50px] text-[25px] px-4 lg:px-0  mx-auto text-center font-extrabold ">
            At D360 Bank, we believe transparency is the key to smart investing.
                        We provide you with everything you need to track our performance and
            make informed decisions.
          </p>
        </SectionHeading>

        <InfoCards/>
        <DynamicInfoSection title="All the Information You Need" type="info" infoCards={customInfoCards} />
        <AnnualReportsBanner/>
        <ContactSection/>
      </main>
      <Footer />
    </div>
  );
}
