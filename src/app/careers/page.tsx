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


export default function Career() {
  const { language } = useStore();
  const isRTL = language === "ar";
  return (
    <div className="flex min-h-screen  flex-col">
      <Header  />
      <main className="flex-1">
        <Hero
          backgroundImage={
            isRTL
              ? "/career/career-hero.png"
              : "/career/career-hero.png"
          }
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center  uppercase lg:text-[80px] font-extrabold text-white leading-snug ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              Work at 
              <br />
               D360 Bank
            </h1>
          </div>
        </Hero>
        <SectionHeading className=" pt-6 lg:pt-16 lg:max-w-5xl">
          <p className="lg:text-[50px] text-[25px] px-4 lg:px-0  mx-auto text-center font-extrabold ">
          Discover a world of endless possibilities as you embark on a career journey with our dynamic and innovative digital bank.
          </p>
        </SectionHeading>

        
       <WorkSection/>
       <OpenApplication/>
       <CustomerSupport/>
      </main>
      <Footer />
    </div>
  );
}
