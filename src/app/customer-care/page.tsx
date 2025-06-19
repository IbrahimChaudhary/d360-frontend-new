"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { ContactImage } from "@/components/about/contact/contact-image";
import { DownloadModal } from "@/components/home/download-modal";
import { Footer } from "@/components/layout/footer/footer";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { useEffect, useState } from "react";
import { CustomerCareData } from "@/types/customer-care/customer-care";
import { fetchCustomerCare } from "@/api/customer-care";
import { CustomerCareContactInfo } from "@/components/customer-care/customer-care-info";

export default function AboutPage() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [customerCare, setCustomerCare] = useState<CustomerCareData | null>(
    null
  );
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchCustomerCare(language)
      .then(setCustomerCare)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  return (
    <div className="">
      <Header variant="about"/>
      <main className="flex-1">
        <Hero
          backgroundImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${customerCare?.heroImg?.formats?.large?.url || customerCare?.heroImg?.formats?.medium?.url || customerCare?.heroImg?.url || (isRTL ? "/about/about-hero-arabic.png" : "/care/care-hero.png")}`}
          direction={isRTL ? "rtl" : "ltr"}
        >
         <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center  uppercase lg:text-[80px] font-extrabold text-[#263244] leading-tight lg:w-[90%] w-[50%] ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {customerCare?.HeroHeading}
              <br />
              {customerCare?.HeroDescription}
            </h1>
            </div>
          
        </Hero>
        <SectionHeading className="text-[30px] lg:text-[60px]  mx-auto lg:mx-0 lg:w-[100%] text-[#263244] mt-10 font-extrabold">{customerCare?.Title1}</SectionHeading>
        <div className="flex flex-col md:flex-row lg:px-6 w-full max-w-7xl mx-auto lg:mb-8 items-center justify-center gap-10">
          <ContactImage url={`${process.env.NEXT_PUBLIC_STRAPI_URL}${customerCare?.sideImg?.formats?.large?.url || customerCare?.sideImg?.formats?.medium?.url || customerCare?.sideImg?.url || "/contact/contact-mob.png"}`} />
          {customerCare && (
            <CustomerCareContactInfo
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
      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
