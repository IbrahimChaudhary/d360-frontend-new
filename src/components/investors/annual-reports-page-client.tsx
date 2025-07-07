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
import { fetchAnnualReport } from "@/api/annual-report";
import { AnnualReportsData } from "@/types/annual-report/annual-report";

interface AnnualReportsPageClientProps {
  initialAnnualData?: AnnualReportsData | null;
}

export default function AnnualReportsPageClient({ initialAnnualData }: AnnualReportsPageClientProps) {
  const { language } = useStore();
  
  // Initialize state with server-side data if available
  const [annual, setAnnual] = useState<AnnualReportsData | null>(initialAnnualData || null);

  // Only fetch if we don't have initial data or if language changes
  useEffect(() => {
    if (!initialAnnualData || language !== (initialAnnualData?.locale || language)) {
      fetchAnnualReport(language)
        .then((data) => setAnnual(data))
        .catch((err) => console.error("Failed to load Annual Report:", err));
    }
  }, [language, initialAnnualData]);

  const isRTL = language === "ar";
  const customReportCards =
    annual?.reports.map((report) => ({
      year: report.year,
      downloadUrl: report.download,
    })) || [];
  return (
    <div className="flex min-h-screen  flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          backgroundImage={
            annual?.HeroImg?.formats?.large?.url ||
            annual?.HeroImg?.formats?.medium?.url ||
            annual?.HeroImg?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  annual?.HeroImg?.formats?.large?.url ||
                  annual?.HeroImg?.formats?.medium?.url ||
                  annual?.HeroImg?.url
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
                isRTL ? "justify-end" : " "
              }`}
            >
              {annual?.HeroTitle1}
              <br />
              {annual?.HeroTitle2}
            </h1>
          </div>
        </Hero>
        {annual && (
          <DynamicInfoSection
            // title={annual?.AnnualHead}
            type="reports"
            reportCards={customReportCards}
            className=""
          />
        )}
        {annual && <ContactSection data={annual}/>}
      </main>
      <Footer />
    </div>
  );
} 