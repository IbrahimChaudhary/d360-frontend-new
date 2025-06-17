"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import FeatureSection from "@/components/personal-services/feature-section";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";
import { DownloadModal } from "@/components/home/download-modal";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { Footer } from "@/components/layout/footer/footer";
import TransfersFeatureSection from "@/components/personal-services/transfer-feature-section";
import D360Cards from "@/components/personal-services/d360card";
import { PersonalServiceData } from "@/types/personal-service/personal-service";
import { useEffect, useState } from "react";
import { fetchPersonalService } from "@/api/personal-service";

export default function AboutPage() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [isModalOpen, setModalOpen] = useState(false);
  const [personalService, setPersonalService] =
    useState<PersonalServiceData | null>(null);

  useEffect(() => {
    fetchPersonalService(language)
      .then(setPersonalService)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about" />
      <main className="flex-1">
        <Hero
          backgroundImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            personalService?.heroImg?.formats?.large?.url ||
            personalService?.heroImg?.formats?.medium?.url ||
            personalService?.heroImg?.url ||
            "/personal/services-hero.png"
          }`}
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center lg:w-full leading-tight w-[62.8%] uppercase lg:text-[80px] font-extrabold text-[#263244] lg:leading-22 ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {personalService?.MainTitle}
              <br />
              {personalService?.MainTitle1}
            </h1>

            <div
              onClick={() => setModalOpen(true)}
              className={`bg-[#EB644C] text-white font-bold py-2 mt-4 lg:mt-6 cursor-pointer px-4 text-center text-[8px] lg:text-[20px] lg:py-2 rounded-md lg:rounded-[14px] ${
                isRTL
                  ? "lg:px-3 w-[30%] ml-[70%] lg:w-[60%] lg:ml-30"
                  : "lg:px-16"
              }`}
            >
              {personalService?.download}{" "}
            </div>
          </div>
        </Hero>

        {personalService && <FeatureSection data={personalService} />}
        {personalService && <TransfersFeatureSection data={personalService} />}
        {personalService && <D360Cards data={personalService} />}
      </main>
      <Footer />
      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
