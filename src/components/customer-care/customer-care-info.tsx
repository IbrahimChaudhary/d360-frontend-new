"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { useState } from "react";
import { DownloadModal } from "@/components/home/download-modal";
import { AboutD360Data } from "@/types/about/about";
import { CustomerCareData } from "@/types/customer-care/customer-care";

interface ContactInfoProps {
  data: CustomerCareData;
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  insideSaudi?: string;
  outsideSaudi?: string;
  showEmail?: boolean;
  email?: string;
  showAppSection?: boolean;
  appTitle?: string;
  appDescription?: string;
  appPoints?: string[];
  showComplaintText?: boolean;
  complaintText?: string;
  complaintEmail?: string;
  showButton?: boolean;
  buttonText?: string;
}

export function CustomerCareContactInfo({
  data,
  showPhone = true,
}: ContactInfoProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="text-[#263244] text-sm space-y-6 px-4 lg:px-10 mb-12 lg:mb-0"
    >
      {data.Feedbacks && (
        <h3
          className={`text-[14px] lg:text-[40px] max-w-4xl text-center lg:text-left  font-extrabold text-${
            language === "ar" ? "right" : "left"
          }`}
        >
          {data.Feedbacks}
        </h3>
      )}
      {data.FeedbacksSub && (
        <p className="text-lg font-semibold text-[#EB644C] ">
          {data.FeedbacksSub}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 text-[14px] lg:text-[24px]">
        {showPhone && (
          <>
            <div>
              <h4 className="text-[#6D809C] font-bold ">{data.inside}</h4>
              <p>{data.insideDes}</p>
            </div>
            <div>
              <h4 className="text-[#6D809C] font-bold">{data.outside}</h4>
              <p>{data.outsideDes}</p>
            </div>
            <div>
              <h4 className="text-[#6D809C] font-bold">{data.emailHead}</h4>
              <p>{data.Email}</p>
            </div>
          </>
        )}
      </div>

      <div>
        <h4 className="text-[#EB644C] font-extrabold text-[14px] lg:text-[30px] mb-2">
          {data.Bank}
        </h4>
        <p className="text-[#293242] mb-2 text-[14px] lg:text-[25px]">{data.Reach}</p>
        <ul className="list-disc text-[10px] lg:text-base list-inside space-y-1">
          <li>{data.ReachA}</li>
          <li>{data.ReachB}</li>
        </ul>
      </div>

      <div className="lg:text-base text-[10px]">{data.complaint}</div>
      <div className="lg:text-base text-[10px]">{data.Contact}</div>
    </div>
  );
}
