"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { aboutData, FAQsAbout } from "@/data/about";
import { FeesData } from "@/types/product-services/product-services";
import { useEffect, useState } from "react";
import { fetchFee } from "@/api/product-services";
import { FeeFAQAccordion } from "@/components/product-service/faq";
export default function ProductAndServicesFee() {
  const [feeData, setFeeData] = useState<FeesData | null>(null);

  useEffect(() => {
    fetchFee()
      .then(setFeeData)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
  return (
    <div className="w-full  flex flex-col justify-center px-4 items-center">
      <Header />
      <div className=" mt-[100px] flex max-w-[1180px]  flex-col justify-center items-center overflow-y-scroll  ">
        <div className="text-[80px]  flex flex-col justify-start items-start text-[#E74529] font-extrabold">
          {feeData?.MainTitle}
        </div>
        <div className="text-[25px] max-w-[1024px]">{feeData?.Description}</div>

        {feeData && <FeeFAQAccordion data={feeData} />}
      </div>
      <Footer />
    </div>
  );
}
