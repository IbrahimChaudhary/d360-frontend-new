"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { aboutData, FAQsAbout } from "@/data/about";
import { FeesData } from "@/types/product-services/product-services";
import { useEffect, useState } from "react";
import { fetchFee } from "@/api/product-services";
import { FeeFAQAccordion } from "@/components/product-service/faq";
import { useStore } from "@/store/toggle-store";
export default function ProductAndServicesFee() {
  const [feeData, setFeeData] = useState<FeesData | null>(null);
  const {language} = useStore()
  useEffect(() => {
    fetchFee(language)
      .then(setFeeData)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  return (
    <div className="w-full  flex flex-col justify-center px-4 items-center">
      <Header variant="about" />
      <div className=" mt-[150px] flex max-w-5xl  flex-col justify-center items-center overflow-y-scroll  ">
        <div className="text-[25px] md:px-7 px-4 lg:text-[80px]  flex flex-col justify-start items-start text-[#E74529] font-extrabold">
          {feeData?.MainTitle}
        </div>
        <div className="text-[14px] md:px-7 px-4 lg:text-[25px] max-w-[1024px]">{feeData?.Description}</div>

        {feeData && <FeeFAQAccordion data={feeData} />}
      </div>
      <Footer />
    </div>
  );
}
