"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { AppSupportSection } from "@/components/contact-us/app-support";
import { BusinessForm } from "@/components/contact-us/business-contact-form";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { ContactPageData } from "@/types/contact-us/contact-us";
import { fetchContact } from "@/api/contact-us";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";

export default function AboutPage() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [contact, setContact] = useState<ContactPageData | null>(null);

  useEffect(() => {
    fetchContact(language)
      .then(setContact)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  return (
    <div className="flex flex-col">
      <Header variant="about" />
      <main className="flex-1 ">
        <Hero
        containerAlign="lg:items-start"
          backgroundImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            contact?.heroImg?.formats?.large?.url ||
            contact?.heroImg?.formats?.medium?.url ||
            contact?.heroImg?.url ||
            (isRTL
              ? "/about/about-hero-arabic.png"
              : "/contact/contact-hero.png")
          }`}
          direction={isRTL ? "rtl" : "ltr"}
        >
          <div
            className={`flex  flex-col w-full ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
  className={`
    text-[25px] 
    lg:text-[80px] 
    font-extrabold 
    text-[#263244] 
    leading-tight 
    uppercase 
    ${isRTL ? "text-right" : "text-left"} 
    w-full 
    max-w-[190px] 
    sm:max-w-[400px] 
    lg:max-w-none
  `}
>
  {contact?.BannerText1}
  <br />
  {contact?.BannerText2}
  <br />
  {contact?.BannerText3}
</h1>

          </div>
        </Hero>

        {contact && <AppSupportSection data={contact} />}
        {contact && <BusinessForm data={contact} />}
      </main>
      <Footer />
    </div>
  );
}
