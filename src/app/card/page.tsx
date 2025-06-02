"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { SectionHeading } from "@/components/section-heading";
import CardVariants from "@/components/card/cards-variation";

export default function AboutPage() {
  const { t } = useTranslations();
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/card/card-hero.jpg">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#263244] leading-tight">
            D360 Cards
          </h1>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-[600] mb-2 md:mb-6 text-[#263244] leading-tight">
            Smart, Secure & Seamless
          </p>
        </Hero>
        <SectionHeading className="pt-16">
           <span className="text-5xl font-extrabold"> Why Choose D360 Cards?</span>
       <p className="text-sm w-[70%] mx-auto pt-7"> Imagine a card that gives you total payment freedom, top-tier security, and exclusive perks tailored to your lifestyle. D360 Cards are designed to put you in full control—whether you’re shopping online, withdrawing cash, or traveling the world. </p>
      </SectionHeading>
      <CardVariants/>

        <MergedFAQAccordion faqItems={FAQsAbout} />
      </main>
      <Footer />
    </div>
  );
}
