"use client"

import Image from "next/image"
import { FooterColumn } from "./footer-column"
import { SocialLinks } from "./social-links"
import { FooterLegal } from "./footer-legal"
import { useMemo } from "react"
import { useTranslations } from "@/lib/i18n"

export function Footer() {
  const { t } = useTranslations()

  const footerColumns = useMemo(
    () => [
      {
        titleKey: "footer.columns.about.title",
        links: [
          { href: "#", key: "footer.columns.about.links.story" },
          { href: "#", key: "footer.columns.about.links.team" },
          { href: "#", key: "footer.columns.about.links.careers" },
          { href: "#", key: "footer.columns.about.links.news" },
        ],
      },
      {
        titleKey: "footer.columns.contact.title",
        links: [
          { href: "#", key: "footer.columns.contact.links.support" },
          { href: "#", key: "footer.columns.contact.links.branches" },
          { href: "#", key: "footer.columns.contact.links.faqs" },
          { href: "#", key: "footer.columns.contact.links.feedback" },
        ],
      },
      {
        titleKey: "footer.columns.help.title",
        links: [
          { href: "#", key: "footer.columns.help.links.security" },
          { href: "#", key: "footer.columns.help.links.terms" },
          { href: "#", key: "footer.columns.help.links.privacy" },
          { href: "#", key: "footer.columns.help.links.howTo" },
        ],
      },
    ],
    [],
  )

  return (
    <footer className=" px-4  md:px-6 md:py-10 text-sm text-[#BEBEBE] bg-white">
  <div className=" mx-auto lg:mx-0  ">
    {/* Mobile Logo at top */}
    <div className="mb-6 flex justify-center md:hidden">
      <Image
        src="/footer-logo.png"
        alt="D360 Bank Logo"
        width={59}
        height={90}
        className="object-contain"
      />
    </div>

    {/* Columns + Social */}
    <div className="w-full flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-10">
  {/* Accordion Group (About, Personal, Help) */}
  <div className="flex flex-col gap-4 md:grid md:grid-cols-4 w-full">
    {footerColumns.map((column, index) => (
      <FooterColumn key={index} titleKey={column.titleKey} links={column.links} />
    ))}
  <div className="mt-4 md:mt-0">
    <h3 className="font-bold text-[#E74529] mb-3">{t("footer.columns.follow.title")}</h3>
    <SocialLinks />
  </div>
  </div>

  {/* Follow Us */}
<div className=" lg:flex  hidden">
      <Image
        src="/footer-logo.png"
        alt="D360 Bank Logo"
        width={59}
        height={90}
        className="object-contain"
      />
    </div>
</div>



    {/* Legal Info */}
    <div className="mt-10">
      <FooterLegal />
    </div>
  </div>
</footer>

  
  )
}
