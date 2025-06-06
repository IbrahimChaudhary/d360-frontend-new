"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";
import { SectionHeading } from "@/components/section-heading";
import { Carosel } from "@/components/savings-account/carosal-section";
import TransferSection from "@/components/home/international-transfers-mobile";
import { CountriesSection } from "@/components/international-transfer/countries-section";
import { FeaturesSection } from "@/components/international-transfer/feature-section";
import {  useState } from "react";
import { DownloadModal } from "@/components/home/download-modal";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";

export default function InternationalTransfer() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslations();
  return (
    <div className="flex min-h-screen  flex-col">
      <Header variant="about"/>
      <main className="flex-1">
        <Hero backgroundImage="/international/international-hero.png">
        <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center lg:w-[70%] uppercase lg:text-[80px] font-extrabold text-[#263244] leading-snug ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
            From Saudi to the World without fees!
          </h1>
          <div
              onClick={() => setModalOpen(true)}
              className={`bg-[#EB644C] cursor-pointer mt-4 text-white font-bold py-2 px-2 text-center text-[8px] lg:text-[20px] lg:py-2 rounded-md lg:rounded-[14px] ${
                isRTL
                  ? "lg:px-3 w-[30%] ml-[70%] lg:w-[60%] lg:ml-30"
                  : "lg:px-16"
              }`}
            >
              Download the App
            </div>
            </div>
        </Hero>
        <SectionHeading className=" pt-6 lg:pt-16 lg:max-w-5xl">
          <p className="lg:text-[60px] px-4 lg:px-0 lg:w-[90%] mx-auto text-center font-bold lg:font-extrabold ">
            Your transfers are quicker, easier, and cost you nothing extra.
          </p>
        </SectionHeading>
        <Carosel
          layout="default"
          showButton={false}
          classname="w-[70%] lg:w-[40%] rtl:text-right ltr:text-left text-[12px] lg:mt-3"
          textstyle="flex lg:block  items-center lg:space-y-6 lg:mt-0 mt-6"
          subheading="ltr:text-left rtl:text-right lg:text-[30px]"
          arrows="text-sm gap-0 lg:gap-4"
          icon="w-4 h-4 lg:w-6 lg:h-6 "
          img1=" block lg:hidden"
          img2="lg:block hidden"
          container="pl-6 lg:pl-0"
          slides={[
            {
              heading: "Why Us?",
              subheading: "No Fees",
              paragraph: "Send as much as you want with no extra charges.",
              image: "/international/international-card.png",
              icon: "/international/fees.svg",
            },
            {
              heading: "Why Us?",
              subheading: "Fast Transfers",
              paragraph: "Fast transfers that keep up with you.",
              image: "/international/international-card.png",
              icon: "/international/transfer.svg",
            },
            {
              heading: "Why Us?",
              subheading: "Best Exchange Rates",
              paragraph: "We use the daily live rate to give you more value.",
              image: "/international/international-card.png",
              icon: "/international/exchange.svg",
            },
            {
              heading: "Why Us?",
              subheading: "Global Reach",
              paragraph: "Send money to over 70 countries with ease.",
              image: "/international/international-card.png",
              icon: "/international/global.svg",
            },
          ]}
        />
        <TransferSection
          heading="Convert currencies, compare exchange rates. "
          uppertext="International transfers"
          description="and get full transparency all in 
one place."
          container="lg:flex justify-center items-start"
        />

        <CountriesSection/>
        <FeaturesSection/>
      </main>
      <Footer />
      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
