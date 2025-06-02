"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { OurStory } from "@/components/about/our-story";
import { Investors } from "@/components/about/investors";
import { FAQs } from "@/components/about/faqs/faq";
import { ContactImage } from "@/components/about/contact/contact-image";
import { ContactContent } from "@/components/about/contact/contact-content";
import { Footer } from "@/components/layout/footer/footer";
import { GlobalCTA } from "@/components/about/global-presence";
import { StatsCounter } from "@/components/about/stats-counter";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { useEffect, useState } from "react";
import { AboutD360Data } from "@/types/about/about";
import { fetchAboutD360 } from "@/api/about";
import { AboutFAQAccordion } from "@/components/about/faq-about";

export default function AboutPage() {
  const { t } = useTranslations();
  const [about, setAbout] = useState<AboutD360Data | null>(null);

  useEffect(() => {
    fetchAboutD360()
      .then(setAbout)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
  const raw = about?.Description2 ?? "";
  const cleaned = raw.startsWith("+") ? raw.slice(1) : raw;
  const parsed = parseInt(cleaned, 10);
  const numericPart = Number.isNaN(parsed) ? 0 : parsed;
  const suffixPart = cleaned.replace(/\d+/g, "");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/about/about-hero.png">
          <h1 className="text-4xl sm:text-5xl  lg:text-6xl font-[800] text-[#263244] leading-tight">
            {about?.Title1}
          </h1>
          <Button
            className="bg-[#EB644C] text-white text-[10px] md:px-8 md:py-4 rounded-[14px]"
            size="sm"
          >
            {t("hero.downloadApp")}
          </Button>
        </Hero>
        <StatsCounter
          stats={[
            {
              label: `${about?.Title2}`,
              value: numericPart,
              suffix: `${suffixPart}`,
            },
            {
              label: `${about?.Title2}`,
              value: numericPart,
              suffix: `${suffixPart}`,
            },
            {
              label: `${about?.Title2}`,
              value: numericPart,
              suffix: `${suffixPart}`,
            },
            {
              label: `${about?.Title2}`,
              value: numericPart,
              suffix: `${suffixPart}`,
            },
          ]}
        />

        {about && <OurStory data={about} />}
        {about && <Investors data={about} />}
        {about && <AboutFAQAccordion data={about} />}
        {about && (
          <GlobalCTA
            title={about?.HelpingTitle}
            subtitle1={about.HelpingDescription}
            subtitle2={about.HelpingDescription1}
            ctaText="Contact Us"
            backgroundImage="/about/contact-cta.png"
          />
        )}
        <div className="md:flex flex-col md:flex-row items-center justify-center gap-10">
          <ContactImage />
          {about && <ContactContent data={about}/>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
