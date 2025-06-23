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
import { useEffect, useState } from "react";
import { DownloadModal } from "@/components/home/download-modal";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { InternationalData } from "@/types/international/international";
import { fetchInternational } from "@/api/international";

export default function InternationalTransferPageClient() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslations();
  const [international, setInternational] = useState<InternationalData | null>(
    null
  );

  useEffect(() => {
    fetchInternational(language)
      .then((data) => setInternational(data))
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);

  return (
    <div className="flex min-h-screen  flex-col">
      <div className="hidden lg:block">
      <Header variant="about" />
      </div>
      <div className="lg:hidden block">
      <Header />
      </div>
      <main className="flex-1">
        <Hero
          backgroundImage={
            international?.heroImage?.formats?.large?.url ||
            international?.heroImage?.formats?.medium?.url ||
            international?.heroImage?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  international?.heroImage?.formats?.large?.url ||
                  international?.heroImage?.formats?.medium?.url ||
                  international?.heroImage?.url
                }`
              : "/international/international-hero.png"
          }
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center w-[40%] lg:w-[80%] uppercase lg:text-[80px] font-extrabold text-white lg:text-[#263244] leading-tight lg:leading-[5.5rem] ${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {international?.MainTitle}{" "}<br />
              {international?.MainTitle2}{" "}
            </h1>
            <div
              onClick={() => setModalOpen(true)}
              className={`bg-[#EB644C] lg:mt-8 cursor-pointer mt-4 text-white font-bold py-2 px-4 text-center text-[8px] lg:text-[20px] lg:py-2 rounded-md lg:rounded-[14px] ${
                isRTL
                  ? "lg:px-3 w-[30%] ml-[70%] lg:w-[40%] lg:ml-30"
                  : "lg:px-16"
              }`}
            >
              {international?.download}
            </div>
          </div>
        </Hero>
        <SectionHeading className=" pt-6 lg:pt-16 ">
          <p className="lg:text-[60px] text-[30px] px-2 lg:px-0 w-[90%] lg:w-full mx-auto text-center font-extrabold ">
            {international?.Title1}{" "}
          </p>
        </SectionHeading>
        <Carosel
          layout="default"
          showButton={false}
          classname="w-[70%] lg:w-[40%] rtl:text-right ltr:text-left text-[12px] lg:mt-3"
          textstyle="flex lg:block  items-center lg:space-y-6 lg:mt-0 mt-6"
          subheading="ltr:text-left rtl:text-right lg:text-[30px]"
          arrows="text-sm gap-0 lg:gap-4"
          icon="w-[23px] h-[23px] lg:w-[34px] lg:h-[34px] "
          img1=" block lg:hidden"
          img2="lg:block hidden"
          container="pl-6 lg:pl-0"
          slides={[
            {
              heading: `${international?.Title2}`,
              subheading: `${international?.Way1Head}`,
              paragraph: `${international?.Way1Des}`,
              image: `${
                international?.Way1Img?.formats?.large?.url ||
                international?.Way1Img?.formats?.medium?.url ||
                international?.Way1Img?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      international?.Way1Img?.formats?.large?.url ||
                      international?.Way1Img?.formats?.medium?.url ||
                      international?.Way1Img?.url
                    }`
                  : "/international/international-hero.png"
              }`,
              icon: `${
                international?.Way1Icon?.formats?.large?.url ||
                international?.Way1Icon?.formats?.medium?.url ||
                international?.Way1Icon?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      international?.Way1Icon?.formats?.large?.url ||
                      international?.Way1Icon?.formats?.medium?.url ||
                      international?.Way1Icon?.url
                    }`
                  : "/international/international-hero.png"
              }`,
            },
            {
              heading: `${international?.Title2}`,
              subheading: `${international?.Way2Head}`,
              paragraph: `${international?.Way2Des}`,
              image: `${
                international?.Way2Img?.formats?.large?.url ||
                international?.Way2Img?.formats?.medium?.url ||
                international?.Way2Img?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      international?.Way2Img?.formats?.large?.url ||
                      international?.Way2Img?.formats?.medium?.url ||
                      international?.Way2Img?.url
                    }`
                  : "/international/international-hero.png"
              }`,
              icon: `${
                international?.Way2Icon?.formats?.large?.url ||
                international?.Way2Icon?.formats?.medium?.url ||
                international?.Way2Icon?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      international?.Way2Icon?.formats?.large?.url ||
                      international?.Way2Icon?.formats?.medium?.url ||
                      international?.Way2Icon?.url
                    }`
                  : "/international/international-hero.png"
              }`,
            },
            {
              heading: `${international?.Title2}`,
              subheading: `${international?.Way3Head}`,
              paragraph: `${international?.Way3Des}`,
              image: `${
                international?.Way3Img?.formats?.large?.url ||
                international?.Way3Img?.formats?.medium?.url ||
                international?.Way3Img?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      international?.Way3Img?.formats?.large?.url ||
                      international?.Way3Img?.formats?.medium?.url ||
                      international?.Way3Img?.url
                    }`
                  : "/international/international-hero.png"
              }`,
              icon: `${
                international?.Way3Icon?.formats?.large?.url ||
                international?.Way3Icon?.formats?.medium?.url ||
                international?.Way3Icon?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      international?.Way3Icon?.formats?.large?.url ||
                      international?.Way3Icon?.formats?.medium?.url ||
                      international?.Way3Icon?.url
                    }`
                  : "/international/international-hero.png"
              }`,
            },
            {
              heading: `${international?.Title2}`,
              subheading: `${international?.Way4Head}`,
              paragraph: `${international?.Way4Des}`,
              image: `${
                international?.Way4Img?.formats?.large?.url ||
                international?.Way4Img?.formats?.medium?.url ||
                international?.Way4Img?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      international?.Way4Img?.formats?.large?.url ||
                      international?.Way4Img?.formats?.medium?.url ||
                      international?.Way4Img?.url
                    }`
                  : "/international/international-hero.png"
              }`,
              icon: `${
                international?.Way4Icon?.formats?.large?.url ||
                international?.Way4Icon?.formats?.medium?.url ||
                international?.Way4Icon?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                      international?.Way4Icon?.formats?.large?.url ||
                      international?.Way4Icon?.formats?.medium?.url ||
                      international?.Way4Icon?.url
                    }`
                  : "/international/international-hero.png"
              }`,
            },
          ]}
        />
        {international && (
          <TransferSection
          data={international}
            heading={international?.InternationalHead}
            uppertext={international?.International}
            description={international?.InternationalDes}
            container="lg:flex justify-center items-start"
          />
        )}

        {international && <CountriesSection data={international}/>}
        {international && <FeaturesSection data={international}/>}
      </main>
      <Footer />
      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </div>
  );
} 