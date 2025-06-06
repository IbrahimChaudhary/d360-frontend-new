"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { SectionHeading } from "@/components/section-heading";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { Button } from "@/components/ui/button";
import { Carosel } from "@/components/savings-account/carosal-section";
import SanabilSteps from "@/components/savings-account/sanabil-steps";
import ProfitBanner from "@/components/savings-account/profit-banner";
import SanabilRates from "@/components/savings-account/sanabil-rates";
import ProfitCalculationSection from "@/components/savings-account/profit-calculation";

export default function SavingsAccount() {
  const { t } = useTranslations();
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  return (
    <div className="flex  flex-col">
      <Header variant="about"/>
      <main className="flex-1">
        <Hero backgroundImage={ isRTL ? "/savings/savings-hero.png": "/savings/savings-hero.png"}>
        <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
          <p className="text-[12px] w-full lg:text-xl  lg:mb-2  text-[#263244] leading-tight">
            Sanabil Daily Distribution Account{" "}
          </p>
          <h1 className="text-[25px] mb-2 lg:text-[80px]  uppercase font-extrabold text-[#263244] lg:leading-19">
            Daily profit,
            <br />
             brighter future!
          </h1>
          <Button
            className="bg-[#EB644C] rounded-md px-7  font-bold text-white text-[8px] lg:text-[10px] lg:px-8 lg:py-4 lg:rounded-[14px]"
            size="lg"
          >
            Open Your Savings Account
          </Button>
          <p className="text-[10px] lg:w-full w-[46%]  lg:text-[14px] font-medium py-3 lg:py-6 text-white leading-tight">
            *Minimum deposit of SAR 2,500 required to earn profit
          </p>
          </div>
        </Hero>
        <SectionHeading className=" pt-6 lg:pt-16">
          <span className="text-[25px] lg:text-[60px] font-extrabold ">
            {" "}
            Save today, <br /> secure tomorrow!
          </span>
        </SectionHeading>
        <Carosel
          layout="default"
          showButton={true}
          slides={[
            {
              heading: "Sanabil Daily Distribution Account Benefits",
              subheading: "Daily profit calculation and deposit",
              paragraph:
                "Your profits are calculated daily based on your minimum balance and automatically deposited into your account at 9:00 AM on the next business day.",
              image: "/savings/carosel1.png",
            },
            {
              heading: "Sanabil Daily Distribution Account Benefits",
              subheading: "Withdraw your money at any time",
              paragraph:
                "Benefit from unlimited withdrawals with no frequency restrictions, giving you full access to your funds anytime you need them",
              image: "/savings/carosel2.png",
            },
            {
                heading: "Sanabil Daily Distribution Account Benefits",
                subheading: "Dedicated IBAN for easy transfers",
                paragraph:
                  "Get your own International Bank Account Number (IBAN) for smooth, secure transfers—whether local or international",
                image: "/savings/carosel3.png",
              },
              {
                heading: "Sanabil Daily Distribution Account Benefits",
                subheading: "Shariah Compliant",
                paragraph:
                  "The Sanabil Savings Account follows Islamic banking principles, with all transactions and profit distributions compliant with Shariah guidelines.",
                image: "/savings/carosel4.png",
              },
          ]}
        />

        <SanabilSteps />
        <ProfitBanner />
        <SanabilRates />
        <ProfitCalculationSection />

        <MergedFAQAccordion faqItems={FAQsAbout} />
      </main>
      <Footer />
    </div>
  );
}
