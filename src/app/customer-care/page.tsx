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
    fetchCustomerCare()
      .then(setCustomerCare)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
  return (
    <div className="">
      <Header variant="about"/>
      <main className="flex-1">
        <Hero backgroundImage={
            isRTL ? "/about/about-hero-arabic.png" : "/care/care-hero.png"
          }
          direction={isRTL ? "rtl" : "ltr"}
        >
         <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center  uppercase lg:text-[80px] font-extrabold text-[#263244] lg:leading-tight lg:w-[90%] ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {customerCare?.HeroHeading}
              <br />
              {customerCare?.HeroDescription}
            </h1>
            </div>
          
        </Hero>
        <SectionHeading className="text-xl lg:text-[60px] lg:w-[77%] text-[#263244] mt-10 font-extrabold">{customerCare?.Title1}</SectionHeading>
        <div className="flex flex-col md:flex-row lg:px-6 mx-auto lg:mb-8 items-center justify-center gap-10">
          <ContactImage />
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
