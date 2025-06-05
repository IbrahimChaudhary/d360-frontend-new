"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/context/language-context";
import type { Offer } from "@/types/offers";
import { OfferPageData } from "@/types/offer/offerpage";

interface OfferDetailsProps {
  offer: OfferPageData;
}

export function OfferDetails({ offer }: OfferDetailsProps) {
  const { language } = useLanguage();
  const termsList: string[] = [
    offer?.Terms1,
    offer?.Terms2,
    offer?.Terms3,
    offer?.Terms4,
    offer?.Terms5,
    offer?.Terms6,
    offer?.Terms7,
  ].filter((t): t is string => Boolean(t));
  return (
    <div>
      <div className="hidden lg:flex relative lg:mt-20 h-72 md:h-96 w-full overflow-hidden mb-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${offer?.imgage?.formats?.thumbnail?.url}`  || "/offers/cta."}
          alt={language === "en" ? offer?.MainTitle : offer?.MainTitle}
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-5xl w-full mx-auto px-4 md:px-0 mt-10 lg:mt-0">
        {/* Title */}

        <h1 className="text-[16px] md:text-[60px] font-extrabold text-[#263244] mb-4">
          {language === "en" ? offer?.MainTitle : offer?.MainTitle}
        </h1>

        {/* Description */}

        {/* <p className="text-[25px] font-bold text-[#6D809C]">
          {language === "en" ? offer?.Description1 : offer?.Description1}
        </p> */}
      {/* How to Benefit */}
      {offer?.benefit && (
          <div className="mb-4 ">
            <h2 className="text-[14px] lg:text-[25px] font-bold text-[#6D809C] mb-1">
              {language === "en"
                ? `${offer?.benefit}`
                : "كيفية الاستفادة من العرض"}
            </h2>
            <p className="text-[14px] lg:text-[25px] text-[#263244]">
              {(language === "en"
                ? offer?.benefitDescription
                : offer?.benefitDescription
              )}
            </p>
          </div>
        )}
        {/* Validity */}
        {offer?.date && (
          <div className="mb-4 ">
            <h2 className="text-[14px] lg:text-[25px] font-bold text-[#6D809C] mb-1">
              {language === "en" ? `${offer?.offerDuration}` : "مدة العرض"}
            </h2>
            <p className="text-[14px] lg:text-[25px] text-[#263244]">{offer?.date}</p>
          </div>
        )}

  

        {/* Terms */}
        {offer?.Terms && (
          <div className="mb-10">
            <h2 className="text-[14px] lg:text-[25px] font-bold text-[#6D809C] mb-2">
              {language === "en" ? "Terms and Conditions" : "الشروط والأحكام"}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[14px] rtl:px-4 lg:text-[25px] text-[#263244]">
              {(language === "en" ? termsList : termsList).map(
                (term, index) => (
                  <li key={index}>{term}</li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
