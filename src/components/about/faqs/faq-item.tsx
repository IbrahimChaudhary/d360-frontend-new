"use client"

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion"
import { useTranslations } from "@/lib/i18n"
import { useState } from "react"
import { Plus, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItemProps {
  id: string
  index: number
}

export function FAQItem({ id, index }: FAQItemProps) {
  const { t } = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionItem
      value={`item-${index}`}
      className="bg-[#F8F8F8] rounded-2xl mb-4 px-3 md:px-6 md:py-4 transition-shadow "
    >
      <AccordionTrigger
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full hover:no-underline font-semibold md:font-extrabold text-[#263244]  text-[15px] md:text-[30px] [&>svg]:hidden"
      >
        {t(`faqs.items.${id}.question` as any)}

        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "plus" : "x"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="ml-4 shrink-0"
          >
            {isOpen ? (<X className="text-[#E74529] md:w-[38] md:h-[39] font-extrabold cursor-pointer" />
            ):(
              <Plus  className="text-[#C0C5CE] md:w-[38] md:h-[39] font-extrabold cursor-pointer" />
            )
              }
          </motion.span>
        </AnimatePresence>
      </AccordionTrigger>

      <AccordionContent className="overflow-hidden">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1}}
    transition={{ duration: 1 }}
  >
    <p className="text-md text-[#263244] mt-2 leading-relaxed">
      {t(`faqs.items.${id}.answer` as any)}
    </p>
  </motion.div>
</AccordionContent>

    </AccordionItem>
  )
}
