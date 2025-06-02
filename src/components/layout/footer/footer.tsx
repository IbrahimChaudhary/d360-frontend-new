"use client";

import Image from "next/image";
import { FooterColumn } from "./footer-column";
import { SocialLinks } from "./social-links";
import { FooterLegal } from "./footer-legal";
import { useMemo } from "react";
import { useStore } from "@/store/toggle-store";
import { footerData } from "@/data/footer";

export function Footer() {
  const { language } = useStore();
  const isRTL = language === "ar";

  const footerColumns = useMemo(() => {
    const allLinks = [
      { href: "#", label: footerData.aboutLinks[0].label[language] },
      { href: "#", label: footerData.aboutLinks[1].label[language] },
      { href: "#", label: footerData.aboutLinks[2].label[language] },
      { href: "#", label: footerData.aboutLinks[3].label[language] },
      { href: "#", label: footerData.aboutLinks[4].label[language] },
      { href: "#", label: footerData.aboutLinks[5].label[language] },
      { href: "#", label: footerData.aboutLinks[6].label[language] },
      { href: "#", label: footerData.aboutLinks[7].label[language] },
    ];
    const chunkSize = 2;
    return Array.from({ length: 4 }, (_, i) => ({
      links: allLinks.slice(i * chunkSize, i * chunkSize + chunkSize),
    }));
  }, [language]);

  return (
    <footer className={`px-4 md:px-14 md:py-10 text-[20px] text-[#C0C6D0] bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className={`mx-auto lg:mx-0 flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} md:justify-between md:items-center`}>
        <div className="md:w-[80%]">
          <div className={`mb-6 flex  md:hidden ${isRTL ? 'justify-end' : 'justify-start'}`}>
            <Image
              src= {isRTL ? "/arabic-logo-black.png" : "/footer-logo.png"} 
              alt="D360 Bank Logo"
              width={59}
              height={90}
              className="object-contain"
            />
          </div>

          {/* Columns + Social */}
          <div className={`w-full flex  justify-normal items-start gap-6 md:flex-row lg:justify-between md:gap-30 ${language==="ar" ?"flex-col-reverse":"flex-col"}`}>
            {/* Follow Us - Will be on left in English, right in Arabic */}
            <div className={`flex w-full md:w-auto mb-6 md:mb-0 ${isRTL ? 'order-1' : 'order-2'}  gap-10 md:justify-between`}>
              <div className={`flex flex-col w-full ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <h3 className="font-extrabold  text-[#E74529] mb-2">
                  {language === "en" ? "Follow Us" : "تابعنا"}
                </h3>
                <SocialLinks />
              </div>
            </div>

            {/* Accordion Group - Will be on right in English, left in Arabic */}
            <div className={`mt-4 md:mt-0 grid grid-cols-2 md:grid-cols-4 gap-3 ${isRTL ? 'order-2' : 'order-1'}`}>
              {footerColumns.map((column, index) => (
                <FooterColumn key={index} links={column.links} />
              ))}
            </div>
          </div>

          {/* Legal Info */}
          <div className="mt-10 md:flex hidden">
            <FooterLegal />
          </div>
        </div>

        {/* Desktop Logo */}
        <div className="md:flex hidden">
          <Image
            src={isRTL ? "/arabic-logo-black.png" : "/footer-logo.png"}
            alt="D360 Bank Logo"
            width={59}
            height={90}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
