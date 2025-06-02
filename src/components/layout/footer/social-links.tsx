"use client"

import Link from "next/link"
import Image from "next/image"
import { footerData } from "@/data/footer"
import { useStore } from "@/store/toggle-store"

export function SocialLinks() {
  const { language } = useStore();
  const isRTL = language === "ar";
  return (
    <div className={`flex space-x-3  items-center gap-1 ${isRTL?"justify-end":"justify-normal"}`}>
      {footerData.socialLinks.map((link, index) => {
       

        return (
          <Link key={index} href="/" target="_blank">
            <Image 
              src={link.icon} 
              alt="" 
              width={17} 
              height={18} 
              className={`transition-opacity duration-200 hover:opacity-75 `}
            />
          </Link>
        );
      })}
    </div>
  )
}
