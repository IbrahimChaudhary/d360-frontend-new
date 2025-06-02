"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useTranslations } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"

interface FooterLink {
  href: string
  key: string
}

interface FooterColumnProps {
  titleKey: string
  links: FooterLink[]
}

export function FooterColumn({ titleKey, links }: FooterColumnProps) {
  const { t } = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      {/* Mobile: Accordion */}
      <div className="block md:hidden w-full   py-2">
        <button
          className="flex justify-between items-center w-full text-[#EB644C] font-bold text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {t(titleKey as any)}
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-[#EB644C]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[#EB644C]" />
          )}
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              className="pl-2 mt-2 space-y-1"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-[#263244] block">
                    {t(link.key as any)}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop: Static */}
      <div className="hidden md:block">
        <h3 className="text-coral-500 font-bold mb-3 text-[#EB644C]">{t(titleKey as any)}</h3>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                {t(link.key as any)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
