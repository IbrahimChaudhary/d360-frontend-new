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

function ApplePay() {
  const [activeTab, setActiveTab] = useState<"overview" | "faq">("faq");
  const [applePay, setApplePay] = useState<ApplePayData | null>(null);

  const isOverview = (tab: "overview" | "faq"): tab is "overview" => tab === "overview";
  const isFaq = (tab: "overview" | "faq"): tab is "faq" => tab === "faq";

  useEffect(() => {
    fetchApplePay()
      .then(setApplePay)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
  return (
    <div className="px-6 py-10 flex mt-24 flex-col justify-center items-center mx-auto">
      <Header />

      {activeTab === "overview" ? (
        <div className="max-w-[1728px] flex flex-col justify-center items-start overflow-y-scroll">
          <div className="text-[70px] max-w-[1108px] font-extrabold">
            {applePay?.MainTitle}
          </div>
          
          <div className="flex   gap-4 mb-6 mt-6">
            <button
              className={`px-4 py-2 rounded-xl font-medium ${
                isOverview(activeTab)
                  ? "bg-[#E74529] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Apple Pay Overview
            </button>

            <button
              className={`px-4 py-2 rounded-xl font-medium ${
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
        <div className="flex flex-col justify-center items-start overflow-y-scroll">
          <div className="text-[70px] max-w-[1108px] font-extrabold">
            {applePay?.MainTitle}
          </div>

          <div className="flex gap-4 mb-6 mt-6">
            <button
              className={`px-4 py-2 rounded-xl font-medium ${
                isOverview(activeTab)
                  ? "bg-[#E74529] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Apple Pay Overview
            </button>

            <button
              className={`px-4 py-2 rounded-xl font-medium ${
                isFaq(activeTab)
                  ? "bg-[#E74529] text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              FAQs
            </button>
          </div>

          {applePay && <MergedFAQAccordion data={applePay} title="" />}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ApplePay;
