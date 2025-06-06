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

const customReportCards = [
    { year: "2024", downloadUrl: "/reports/2024.pdf" },
    { year: "2023", downloadUrl: "/reports/2023.pdf" },
    { year: "2022", downloadUrl: "/reports/2022.pdf" },
    { year: "2021", downloadUrl: "/reports/2021.pdf" },
    { year: "2020", downloadUrl: "/reports/2020.pdf" },
    { year: "2019", downloadUrl: "/reports/2019.pdf" },
  ]


export default function InvestorRealtions() {
  const { language } = useStore();
  const isRTL = language === "ar";
  return (
    <div className="flex min-h-screen  flex-col">
      <Header  />
      <main className="flex-1">
        <Hero
          backgroundImage={
            isRTL
              ? "/reports/reports-hero.png"
              : "/reports/reports-hero.png"
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
              annual
              <br />
               Reports
            </h1>
          </div>
        </Hero>
    
        <DynamicInfoSection
        title="Annual Reports Archive"
        type="reports"
        reportCards={customReportCards}
        className=""
      />
        <ContactSection/>
      </main>
      <Footer />
    </div>
  );
}
