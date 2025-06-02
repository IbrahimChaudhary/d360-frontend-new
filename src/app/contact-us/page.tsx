'use client'
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { AppSupportSection } from "@/components/contact-us/app-support";
import { BusinessForm } from "@/components/contact-us/business-contact-form";
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/i18n"
import { useEffect, useState } from "react";
import { ContactPageData } from "@/types/contact-us/contact-us";
import { fetchContact } from "@/api/contact-us";


export default function AboutPage() {
  const { t } = useTranslations()
  const [contact, setContact] = useState<ContactPageData | null>(null);

  useEffect(() => {
    fetchContact()
      .then(setContact)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
      <Hero backgroundImage="/contact/contact-hero.png">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#263244] leading-tight">
        {contact?.BannerText1}
        {contact?.BannerText2}
        {contact?.BannerText3}
      </h1>
      <Button className="bg-[#EB644C] text-white text-[10px] md:px-8 md:py-4 rounded-[14px]" size="sm">
        {t("hero.downloadApp")}
      </Button>
    </Hero>

        {contact && <AppSupportSection data={contact}/>}
        {contact && <BusinessForm data={contact}/>}
       
      </main>
      <Footer />
    </div>
  );
}
