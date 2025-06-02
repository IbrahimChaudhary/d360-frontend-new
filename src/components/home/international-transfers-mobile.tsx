"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/toggle-store";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";

interface InternationalTransferProps {
  container?: string;
}

export default function TransferSection({
  container,
}: InternationalTransferProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";

  return (
    <section
      className={cn(
        "w-full px-6 py-16 bg-white flex lg:flex-row items-center flex-col justify-between",
        container
      )}
    >
      {/* Content Section - Always on top for mobile, switches sides for desktop */}
      <div className={cn(
        "lg:w-[40%] order-1",
        isRTL ? "lg:order-2 lg:w-[60%]" : "lg:order-1"
      )}>
        <div className="space-y-2 flex flex-col lg:items-start items-center">
          <h2 className={`text-3xl lg:text-[90px] w-full font-bold text-center ${isRTL ? "lg:text-right" : "lg:text-left"} text-[#263244] uppercase lg:normal-case leading-tight`}>
            {content.sections.internationalTransfers.title}
          </h2>
          <p className={`lg:text-left text-xl lg:text-[50px] ${isRTL ? "lg:text-right w-[100%]" : "lg:text-left w-[70%]"} text-center text-[#ACBBD1]`}>
            {content.sections.internationalTransfers.subtitle}
          </p>
          <p className={`text-sm  lg:text-[20px] font-medium ${isRTL ? "lg:text-right w-[100%]" : "lg:text-left w-[70%]"} text-[#263244]  text-center mb-4`}>
            {content.sections.internationalTransfers.description}
          </p>
        </div>
      </div>

      {/* Calculator Section - Always below for mobile, switches sides for desktop */}
      <div className={cn(
        "w-[90%] sm:w-[60%] lg:w-[30%] mt-5 lg:mt-0 order-2",
        isRTL ? "lg:order-1" : "lg:order-2"
      )}>
        <div className="bg-gray-50 p-2 rounded-xl shadow-md space-y-3 mx-auto lg:mx-0 text-black">
          <div className="bg-white p-2 rounded-lg">
            <span className="text-[8px] text-left">
              {language === "en" ? "You Send Exactly" : "المبلغ المرسل بالضبط"}
            </span>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">$1,000</span>
              <span className="text-sm flex items-center font-medium text-black">
                🇺🇸 USD
                <ChevronDown className="align-middle" size={18} />
              </span>
            </div>
          </div>

          <div className="bg-white p-2 rounded-lg">
            <span className="text-xs">
              {language === "en" ? "Recipient Gets" : "المبلغ المستلم"}
            </span>
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">€956.65</span>
              <span className="text-sm flex items-center font-medium text-black">
                🇪🇺 EUR
                <ChevronDown className="align-middle" size={18} />
              </span>
            </div>
          </div>

          <div className="bg-white p-2 rounded-lg">
            <span className="text-sm flex items-center font-medium text-black">
              {language === "en" ? "Bank Transfer Fee" : "رسوم التحويل البنكي"}
              <ChevronDown className="align-middle" size={18} />
            </span>
            <span className="text-xl font-bold">$3.00</span>
          </div>

          <div className="bg-white p-2 rounded-lg">
            <span className="text-sm flex items-center font-medium text-black">
              {language === "en" ? "Amount You'll Convert" : "المبلغ المحول"}
              <ChevronDown className="align-middle hidden" size={18} />
            </span>
            <span className="text-xl font-bold">$997</span>
          </div>

          <button className="w-full bg-[#E74529] text-white py-2 rounded-md text-sm font-semibold">
            {language === "en" ? "Send Money" : "إرسال المال"}
          </button>
        </div>
      </div>
    </section>
  );
}
