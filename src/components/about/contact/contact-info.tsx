"use client";

import { Button } from "@/components/ui/button";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { useState } from "react";
import { DownloadModal } from "@/components/home/download-modal";

interface ContactInfoProps {
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

export function ContactInfo({
  title = "",
  subtitle = "",
  showPhone = true,
  insideSaudi = "8001244410",
  outsideSaudi = "00966920024360",
  showEmail = true,
  email = "customer.care@d360.com",
  showAppSection = true,
  appTitle = "D360 Bank App",
  appDescription = 'You can reach us via the "Help" section in the app:',
  appPoints = ["Send us message through the app", "Request a Callback"],
  showComplaintText = false,
  complaintText = "If you remain unsatisfied with the resolution, you can escalate the issue by emailing:",
  complaintEmail = "complaints@d360.com",
  showButton = true,
  buttonText = "Download App",
}: ContactInfoProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="text-[#263244] text-sm space-y-6 lg:px-10 mb-12 lg:mb-0"
    >
      {title && (
        <h3
          className={`text-[40px] font-extrabold text-${
            language === "ar" ? "right" : "left"
          }`}
        >
          {title}
        </h3>
      )}
      {subtitle && <p className="text-base text-[#263244]">{subtitle}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3  text-[24px]">
        {showPhone && (
          <>
            <div>
              <h4 className="text-[#6D809C] font-bold ">
                {content.data.contact.phone1.insideSaudi}
              </h4>
              <p>{insideSaudi}</p>
            </div>
            <div>
              <h4 className="text-[#6D809C] font-bold">
                {content.data.contact.phone2.outsideSaudi}
              </h4>
              <p>{outsideSaudi}</p>
            </div>
          </>
        )}
        {showEmail && (
          <div>
            <h4 className="text-[#6D809C] font-bold">
              {content.data.contact.phone3.email}
            </h4>
            <p>{content.data.contact.phone3.value}</p>
          </div>
        )}
      </div>

      <div>
        <h4 className="text-[#293242] font-extrabold text-[30px] mb-2">
          {content.data.contact.appTitle}
        </h4>
        <p className="text-[#293242] mb-2 text-[25px]">
          {content.data.contact.viaApp}
        </p>
        <ul className="list-disc list-inside space-y-1 hidden">
          <li>{content.data.contact.viaApp1}</li>
          <li>{content.data.contact.viaApp2}</li>
        </ul>
      </div>

      {language === "ar" && (
  <div className="space-y-2 text-sm">
    <h4 className="text-[#293242] font-extrabold text-[30px] mb-2">
      {content.data.contact.complaint.title}
    </h4>
    <p className="text-[20px] leading-relaxed">
      {content.data.contact.complaint.body}
    </p>
  </div>
)}


      {showButton && (
  <div className={`w-full flex justify-start ${language === "ar" ? "justify-start" : "justify-start"}`}>
    <Button
      onClick={() => setModalOpen(true)}
      size="lg"
      className="bg-[#E74529] font-bold text-white rounded-[15px] hover:bg-[#e6391f]"
    >
      {language === "ar" ? "حمّل التطبيق" : buttonText}
    </Button>
  </div>
)}

      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
