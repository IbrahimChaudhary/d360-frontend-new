"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { SectionHeading } from "@/components/section-heading";
import { Carosel } from "@/components/savings-account/carosal-section";
import { useStore } from "@/store/toggle-store";
import { useEffect, useState } from "react";
import { PaymentsData } from "@/types/payments/payments";
import { fetchPayments } from "@/api/payments";
import { extractFAQItems } from "@/lib/faq-extract";

export function PaymentsPageClient() {
  const { t } = useTranslations();
  const { language } = useStore();
  const isRTL = language === "ar";
  const [payment, setPayment] = useState<PaymentsData | null>(null);

  useEffect(() => {
    fetchPayments(language)
      .then(setPayment)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  
  console.log(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}${
      payment?.imges?.formats?.large?.url ||
      payment?.imges?.formats?.medium?.url ||
      payment?.imges?.url
    }`
  );
  const faqItems = payment ? extractFAQItems(payment) : [];
  return (
    <div className="flex min-h-screen  flex-col">
      <Header variant="about" />
      {payment && (
        <main className="flex-1">
          <Hero
            backgroundImage={
              payment?.imges?.formats?.large?.url ||
              payment?.imges?.formats?.medium?.url ||
              payment?.imges?.url
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    payment?.imges?.formats?.large?.url ||
                    payment?.imges?.formats?.medium?.url ||
                    payment?.imges?.url
                  }`
                : ""
            }
          >
            <h1 className="text-[30px] lg:text-[80px] rtl:text-right lg:w-full w-[50%]  uppercase font-extrabold text-[#263244] leading-tight lg:leading-[5.5rem]">
              {payment?.MainTitle}
              <br />
              {payment?.MainTitle1}
              <br />
              {payment?.MainTitle2}
            </h1>
          </Hero>
          <SectionHeading className=" pt-6 lg:pt-16">
            <h1 className="text-[30px] px-4 lg:px-0 lg:text-[50px] mx-auto w-[80%] font-extrabold ">
              {payment?.Title1}
            </h1>
          </SectionHeading>
          <Carosel
            layout="default"
            headsection="lg:mx-20 lg:max-w-[1500px] 2xl:mx-auto"
            showButton={false}
            classname="w-[70%] lg:w-[50%] rtl:text-right ltr:text-left text-[12px] lg:mt-3"
            textstyle="flex lg:block items-center lg:space-y-6 lg:mt-0 mt-6"
            subheading="ltr:text-left rtl:text-right text-[12px]"
            arrows="text-sm gap-0 lg:gap-4 text-sm gap-0 lg:gap-4 flex text-xl rtl:flex-row-reverse justify-center gap-2 z-10 bottom-4 lg:static lg:translate-x-0 ltr:lg:justify-start rtl:lg:justify-end lg:bottom-auto lg:left-auto carousel-arrow"
            icon="w-4 h-4 lg:w-6 lg:h-6 "
            img1=" block lg:hidden"
            img2="lg:flex hidden w-full  justify-end items-end"
            container="pl-6 lg:pl-0"
            slides={[
              {
                heading: `${payment?.Title2}`,
                subheading: `${payment?.Way1Head}`,
                paragraph: `${payment?.Way1Des}`,
                image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  payment?.Way1Img?.formats?.large?.url ||
                  payment?.Way1Img?.formats?.medium?.url ||
                  payment?.Way1Img?.url
                }`,
                icon: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  payment?.Way1Icon?.formats?.large?.url ||
                  payment?.Way1Icon?.formats?.medium?.url ||
                  payment?.Way1Icon?.url
                }`,
              },
              {
                heading: `${payment?.Title2}`,
                subheading: `${payment?.Way2Head}`,
                paragraph: `${payment?.Way2Des}`,
                image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  payment?.Way2Img?.formats?.large?.url ||
                  payment?.Way2Img?.formats?.medium?.url ||
                  payment?.Way2Img?.url
                }`,
                icon: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  payment?.Way2Icon?.formats?.large?.url ||
                  payment?.Way2Icon?.formats?.medium?.url ||
                  payment?.Way2Icon?.url
                }`,
              },
              {
                heading: `${payment?.Title2}`,
                subheading: `${payment?.Way3Head}`,
                paragraph: `${payment?.Way3Des}`,
                image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  payment?.Way3Img?.formats?.large?.url ||
                  payment?.Way3Img?.formats?.medium?.url ||
                  payment?.Way3Img?.url
                }`,
                icon: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  payment?.Way3Icon?.formats?.large?.url ||
                  payment?.Way3Icon?.formats?.medium?.url ||
                  payment?.Way3Icon?.url
                }`,
              },
            ]}
          />

          <MergedFAQAccordion faqItems={faqItems} titleClassName="py-4 lg:py-0 text-[30px] lg:text-[60px] font-extrabold lg:mb-8   text-[#293242]" sectionClassName="px-4 lg:mx-20  lg:px-0  xl:flex justify-center items-center lg:py-14 " />
        </main>
      )}
      <Footer />
    </div>
  );
} 