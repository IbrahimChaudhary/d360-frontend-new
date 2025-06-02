"use client";

import { Button } from "@/components/ui/button";
import { CustomerCareData } from "@/types/customer-care/customer-care";

interface ContactInfoProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
  insideSaudi?: string;
  outsideSaudi?: string;
  showEmail?: boolean;
  email?: string;
  showAppSection?: boolean;
  showComplaintText?: boolean;
  showButton?: boolean;
  buttonText?: string;
  data?: CustomerCareData;
}
interface Slides {
  heading: string;
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
  showComplaintText = false,
  showButton = true,
  buttonText = "Download App",
  data,
}: ContactInfoProps) {
  const slides: Slides[] = [
    { heading: data?.ReachA || "" },
    { heading: data?.ReachB || "" },
  ];
  return (
    <div className="text-[#263244]  text-sm space-y-6 lg:px-0 mb-12 lg:mb-0 px-6">
      {title && <h3 className="text-xl font-bold">{title}</h3>}
      {subtitle && <p className="text-base font-bold text-[#E74529]">{subtitle}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {showPhone && (
          <>
            <div>
              <h4 className="text-[#6D809C] font-medium">
                Inside Saudi Arabia
              </h4>
              <p>{insideSaudi}</p>
            </div>
            <div>
              <h4 className="text-[#6D809C] font-medium">
                Outside Saudi Arabia
              </h4>
              <p>{outsideSaudi}</p>
            </div>
          </>
        )}
        {showEmail && (
          <div>
            <h4 className="text-[#6D809C] font-medium">Email</h4>
            <p>{email}</p>
          </div>
        )}
      </div>

      {showAppSection && (
        <div>
          <h4 className="text-[#E74529] font-bold text-base mb-2">
            {data?.Bank}
          </h4>
          <p className="text-[#6D809C] mb-2">{data?.Reach}</p>
          <ul className="list-disc list-inside space-y-1">
            {slides.map((point, i) => (
              <li key={i}>{point.heading}</li>
            ))}
          </ul>
        </div>
      )}

      {showComplaintText && (
        <div className="space-y-2 text-sm">
          <p>
             {data?.Contact}{" "}
            <span className="font-bold text-[#E74529]">{data?.Email}</span>
          </p>
        </div>
      )}

      {showButton && (
        <Button
          size="lg"
          className="bg-[#E74529] text-white rounded-[15px] hover:bg-[#e6391f]"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}
