"use client";

import Image from "next/image";
import { FooterColumn } from "./footer-column";
import { SocialLinks } from "./social-links";
import { FooterLegal } from "./footer-legal";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "@/store/toggle-store";
import { footerData } from "@/data/footer";
import { FooterData } from "@/types/footer/footer";
import { fetchFooter } from "@/api/footer";

export function Footer() {
  const { language } = useStore();
  const isRTL = language === "ar";

  
  const [footer, setFooter] = useState<FooterData | null>(null);
  
  
  useEffect(() => {
    fetchFooter(language)
    .then(setFooter)
    .catch((err) => console.error("Failed to load Footer D360:", err));
  }, [language]);
  
  const footerColumns = useMemo(() => {
    const allLinks = [
      { href: footer?.Title1Url || "", label: footer?.Title1 || "" },
      { href: footer?.Title2Url || "", label: footer?.Title2 || "" },
      { href: footer?.Title3Url || "", label: footer?.Title3 || "" },
      { href: footer?.Title4Url || "", label: footer?.Title4 || "" },
      { href: footer?.Title5Url || "", label: footer?.Title5 || "" },
      { href: footer?.Title6Url || "", label: footer?.Title6 || "" },
      { href: footer?.Title7Url || "", label: footer?.Title7 || "" },
      { href: footer?.Title8Url || "", label: footer?.Title8 || "" },
    ];
    const chunkSize = 2;
    return Array.from({ length: 4 }, (_, i) => ({
      links: allLinks.slice(i * chunkSize, i * chunkSize + chunkSize),
    }));
  }, [footer]);
  return (
    <footer className={`px-4 md:px-14 md:py-10 text-[20px] text-[#C0C6D0] bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className={`mx-auto lg:mx-0 flex ${isRTL ? 'flex-row' : 'flex-row'} md:justify-between md:items-center`}>
        <div className="md:w-[80%]">
          <div className={`mb-6 flex  md:hidden ${isRTL ? 'justify-start' : 'justify-start'}`}>
            <Image
            src={isRTL 
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${footer?.logo?.formats?.large?.url || footer?.logo?.formats?.medium?.url || footer?.logo?.url || "/arabic-logo-black.png"}`
              : `${process.env.NEXT_PUBLIC_STRAPI_URL}${footer?.logo?.formats?.large?.url || footer?.logo?.formats?.medium?.url || footer?.logo?.url || "/footer-logo.png"}`
            }
              alt="D360 Bank Logo"
              width={59}
              height={90}
              className="object-contain"
            />
          </div>

          {/* Columns + Social */}
          <div className={`w-full flex flex-col lg:flex-row  justify-normal items-start gap-6  lg:justify-between md:gap-30 `}>
            {/* Follow Us - Will be on left in English, right in Arabic */}
            <div className={`flex w-full md:w-auto mb-6 md:mb-0 ${isRTL ? 'order-2' : 'order-2'}  gap-10 md:justify-between`}>
              <div className={`flex flex-col w-full  `}>
                <h3 className="font-extrabold  text-[#E74529] mb-2">
                  {footer?.Follow}
                </h3>
                <SocialLinks />
              </div>
            </div>

            {/* Accordion Group - Will be on right in English, left in Arabic */}
            <div className={`mt-4 md:mt-0 grid grid-cols-2 md:grid-cols-4 gap-3 `}>
              {footerColumns.map((column, index) => (
                <FooterColumn key={index} links={column.links} />
              ))}
            </div>
          </div>

          {/* Legal Info */}
          <div className="mt-10 md:flex">
            {footer && <FooterLegal data={footer}/>}
          </div>
        </div>

        {/* Desktop Logo */}
        <div className="md:flex hidden">
          <Image
            src={isRTL 
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${footer?.logo?.formats?.large?.url || footer?.logo?.formats?.medium?.url || footer?.logo?.url || "/arabic-logo-black.png"}`
              : `${process.env.NEXT_PUBLIC_STRAPI_URL}${footer?.logo?.formats?.large?.url || footer?.logo?.formats?.medium?.url || footer?.logo?.url || "/footer-logo.png"}`
            }
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