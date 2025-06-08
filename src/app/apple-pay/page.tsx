"use client";
import React, { useEffect } from "react";
import { MergedFAQAccordion } from "@/components/faq-merged";
import { FAQsAbout } from "@/data/about";
import { useState } from "react";
import ApplePayOverview from "@/components/apple-pay/apple-pay-overview";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { ApplePayData } from "@/types/apple-pay/apple-pay";
import { fetchApplePay } from "@/api/apple-pay";
import { extractFAQItems } from "@/lib/faq-extract";
import { useStore } from "@/store/toggle-store";

function ApplePay() {
  const {language} = useStore();
  const [activeTab, setActiveTab] = useState<"overview" | "faq">("faq");
  const [applePay, setApplePay] = useState<ApplePayData | null>(null);

  const isOverview = (tab: "overview" | "faq"): tab is "overview" => tab === "overview";
  const isFaq = (tab: "overview" | "faq"): tab is "faq" => tab === "faq";

  useEffect(() => {
    fetchApplePay(language)
      .then(setApplePay)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  const faqItems = applePay ? extractFAQItems(applePay) : [];

  return (
    <div className="px-6 py-10 flex mt-24 flex-col justify-center items-center mx-auto">
      <Header variant="about"/>

      {activeTab === "overview" ? (
        <div className="max-w-[1728px] px-0 lg:px-4 flex flex-col justify-center items-start">
          <div className="text-[25px] lg:text-[70px] px-2 lg:px-0 text-[#E74529] lg:text-[#293242] w-[80%] lg:w-full  max-w-[1108px] font-extrabold">
            {applePay?.MainTitle}
          </div>
          
          <div className="flex   gap-4 mb-6 mt-3 lg:mt-6">
            <button
              className={`px-4 py-2 rounded-md lg:rounded-xl lg:text-base text-[8px] font-bold ${
                isOverview(activeTab)
                  ? "bg-[#E74529] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Apple Pay Overview
            </button>

            <button
              className={`px-4 py-2 rounded-md lg:rounded-xl lg:text-base text-[8px] font-bold ${
                isFaq(activeTab)
                  ? "bg-[#E74529] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              FAQs
            </button>
          </div>

          {applePay && <ApplePayOverview data={applePay}/>}
        </div>
      ) : (
        <div className="flex flex-col max-w-[1240px] lg:justify-center items-start ">
          <div className="text-[25px] lg:text-[70px]  lg:px-4 text-[#E74529] lg:text-[#293242] w-[80%] lg:w-full  max-w-[1108px] font-extrabold">
            {applePay?.MainTitle}
          </div>

          <div className="flex gap-4 lg:mb-6 mt-6 lg:px-4">
            <button
              className={`px-4 py-2 rounded-md lg:rounded-xl lg:text-base text-[8px] font-bold  ${
                isOverview(activeTab)
                  ? "bg-[#E74529] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Apple Pay Overview
            </button>

            <button
              className={`px-4 py-2 rounded-md lg:rounded-xl lg:text-base text-[8px] font-bold  ${
                isFaq(activeTab)
                  ? "bg-[#E74529] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              FAQs
            </button>
          </div>

          {applePay && <MergedFAQAccordion faqItems={faqItems} title={""} />}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ApplePay;
