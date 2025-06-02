"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { ContactImage } from "@/components/about/contact/contact-image";
import { ContactContent } from "@/components/about/contact/contact-content";
import { ContactInfo } from "@/components/about/contact/contact-info";
import { Footer } from "@/components/layout/footer/footer";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { CustomerCareData } from "@/types/customer-care/customer-care";
import { fetchCustomerCare } from "@/api/customer-care";

export default function AboutPage() {
  const { t } = useTranslations();
  const [customerCare, setCustomerCare] = useState<CustomerCareData | null>(
    null
  );

  useEffect(() => {
    fetchCustomerCare()
      .then(setCustomerCare)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/care/care-hero.png">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#263244] leading-tight">
            {customerCare?.HeroHeading}
          </h1>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-[800] mb-2 md:mb-6 text-[#263244] leading-tight">
            {customerCare?.HeroDescription}
          </p>
          <Button
            className="bg-[#EB644C] text-white text-[10px] md:px-8 md:py-4 rounded-[14px]"
            size="sm"
          >
            {t("hero.downloadApp")}
          </Button>
        </Hero>
<<<<<<< HEAD
        <SectionHeading className="mt-10">{customerCare?.Title1}</SectionHeading>
=======
        <SectionHeading className="text-xl lg:text-3xl font-extrabold">
          Our commitment is to provide outstanding services and ensure an
          exceptional banking experience. Our team is here to assist you 24/7
        </SectionHeading>
>>>>>>> 47b4fb9b36ba4d0d6e3d3b7ca38ab2fe3eedf6e8
        <div className="flex flex-col md:flex-row lg:w-[70%] mx-auto lg:mb-8 items-center justify-center gap-10">
          <ContactImage />
          {customerCare && (
            <ContactInfo
              title={customerCare?.Feedbacks}
              subtitle={customerCare?.FeedbacksSub}
              showAppSection={true}
              showComplaintText={true}
              showButton={false}
              data={customerCare}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
