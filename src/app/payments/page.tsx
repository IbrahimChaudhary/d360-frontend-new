"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { useTranslations } from "@/lib/i18n";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { SectionHeading } from "@/components/section-heading";
import { Carosel } from "@/components/savings-account/carosal-section";


export default function Payments() {
  const { t } = useTranslations();
  return (
    <div className="flex min-h-screen  flex-col">
      <Header variant="about" />
      <main className="flex-1">
        <Hero backgroundImage="/payments/payments-hero.jpg">
          <h1 className="text-[30px] lg:text-[80px] rtl:text-right  uppercase font-extrabold text-[#263244] leading-tight">
            All your
            <br /> 
            payments, 
            <br />
             one tap away.
          </h1>
        </Hero>
        <SectionHeading className=" pt-6 lg:pt-16">
          <h1 className="text-lg px-4 lg:px-0 lg:text-[60px] mx-auto lg:w-[80%] font-bold lg:font-extrabold ">
            From bills to government fees or splitting a dinner bill, we make
            payments effortless.
          </h1>
        </SectionHeading>
        <Carosel
          layout="default"
          showButton={false}
        classname="w-[70%] lg:w-[40%] rtl:text-right ltr:text-left text-[12px] lg:mt-3"
        textstyle="flex lg:block items-center lg:space-y-6 lg:mt-0 mt-6"
        subheading="ltr:text-left rtl:text-right text-[12px]"
        arrows="text-sm gap-0 lg:gap-4"
        icon="w-4 h-4 lg:w-6 lg:h-6 "
        img1=" block lg:hidden"
        img2="lg:block hidden"
        container="pl-6 lg:pl-0" 
      
          slides={[
            {
              heading: "Pay Your Way",
              subheading: "SADAD Bills",
              paragraph:
                "Electricity, water, mobile, pay all bills in one place.",
              image: "/payments/mob1.png",
              icon: "/payments/doc.svg",
            },
            {
              heading: "Pay Your Way",
              subheading: "Government Services",
              paragraph: "Pay all your government fees fast, from renewals to new requests",
              image: "/payments/mob2.png",
              icon: "/payments/bank.svg",
            },
            {
              heading: "Pay Your Way",
              subheading: "Traffic Violations",
              paragraph: "Avoid late fees and pay your fines on time with one tap",
              image: "/payments/mob3.png",
              icon: "/payments/block.svg",
            },
          ]}
        />

      

        <MergedFAQAccordion faqItems={FAQsAbout} />
      </main>
      <Footer />
    </div>
  );
}
