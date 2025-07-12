"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/context/language-context";
import type { Offer } from "@/types/offers";
import { OfferPageData } from "@/types/offer/offerpage";
import { Hero } from "@/components/layout/page-hero";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface OfferDetailsProps {
  offer: OfferPageData;
}

export function OfferDetails({ offer }: OfferDetailsProps) {
  const { language } = useLanguage();
  const mdComponents = {
    h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
      <h1 className="text-4xl font-extrabold mt-8" {...props} />
    ),
    p: (props: React.ComponentPropsWithoutRef<"p">) => (
      <p className="text-[20px] mb-4" {...props} />
    ),
    h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
      <h2 className="text-[27px] text-[#6D809C] font-bold mt-10" {...props} />
    ),
    h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
      <h3 className="text-5xl  font-semibold mt-4 mb-4" {...props} />
    ),
    h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
      <h4 className="text-2xl  font-semibold mt-3 mb-4" {...props} />
    ),
    ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
      <ul className="list-outside list-disc pl-6 p-4 space-y-2" {...props} />
    ),
    li: (props: React.ComponentPropsWithoutRef<"li">) => (
      <li className="text-base md:text-lg leading-relaxed" {...props} />
    ),
  };
  console.log(offer);
  return (
    <div>
      {/* Hero Image for mobile/small screens */}
      <div className="lg:hidden mb-8 ">
        <Hero
          backgroundImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            offer?.heroImage?.formats?.large?.url ||
            offer?.heroImage?.formats?.medium?.url ||
            offer?.heroImage?.url ||
            "/offers/card1.png"
          }`}
        >
          <></>
        </Hero>
      </div>

      {/* Main Image for large screens */}
      <div className="hidden lg:flex relative lg:mt-20 h-72 md:h-96 w-full overflow-hidden mb-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            offer?.heroImage?.formats?.large?.url ||
            offer?.heroImage?.formats?.medium?.url ||
            offer?.heroImage?.url ||
            "/offers/cta.png"
          }`}
          alt={language === "en" ? offer?.title : offer?.title}
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-5xl w-full mx-auto px-4 md:px-0 mt-10 lg:mt-0">
        {/* Title */}

        <h1 className="text-[16px] md:text-[60px] font-extrabold text-[#263244] mb-4">
          {language === "en" ? offer?.title : offer?.title}
        </h1>

        {offer?.Description && (
          <div className="prose max-w-none my-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={mdComponents}
            >
              {offer.Description}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
