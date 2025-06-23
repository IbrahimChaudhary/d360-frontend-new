"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./ui/animated-section";
import { useStore } from "@/store/toggle-store";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

// Type definitions
interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

interface FAQItemComponentProps {
  item: FAQItem;
  index: number;
}

interface MergedFAQAccordionProps {
  faqItems: FAQItem[];
  title?: string;
  sectionClassName?: string;
  titleClassName?: string;
  para?: string
  paraClassName?: string;
}

function FAQMerged({ item, index }: FAQItemComponentProps) {
  const {language} = useStore()
  const isRTL = language === "ar";
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AccordionItem
      value={`item-${index}`}
      className={`  rounded-2xl mb-4 px-3 md:px-6 md:py-4 bg-[#F8F8F8]`}
    >
      <AccordionTrigger
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex  ${language === "ar" ? "flex-row text-right" : "flex-row text-left"} justify-between items-center w-full hover:no-underline font-semibold md:font-extrabold text-[#263244] text-[10px] lg:text-[40px] [&>svg]:hidden`}
      >
        {item.question}
        <span className="ml-4 shrink-0 relative md:w-[38px] md:h-[39px] w-[24px] h-[24px] flex items-center justify-center">
  <AnimatePresence mode="wait" initial={false}>
    {isOpen ? (
      <motion.div
        key="x-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img src="/plus.svg" className="w-[10px] h-[11px] lg:w-[38px] lg:h-[39px]"  alt="" />
      </motion.div>
    ) : (
      <motion.div
        key="plus-icon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img src="/+.svg" className="w-[10px] h-[11px] lg:w-[38px] lg:h-[39px]" alt="" />
      </motion.div>
    )}
  </AnimatePresence>
</span>

      </AccordionTrigger>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <AccordionContent className={`overflow-hidden  flex ${language === 'ar' ? "flex-row" : "flex-row"}`}>
              <p className={`text-[10px]  lg:text-[25px]  text-[#263244] mt-2 leading-relaxed ${ language==="ar"?"text-right":"text-left"}`}>
                {item.answer}
              </p>
            </AccordionContent>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionItem>
  );
}

export function MergedFAQAccordion({
  
 
  
  faqItems,
  title,
  para,
  sectionClassName = "pb-4 lg:pb-0 md:py-16 w-full  flex lg:justify-center lg:items-center",
  titleClassName = "text-[30px] lg:text-[60px] font-extrabold lg:mb-8   text-[#293242]",
  paraClassName = "text-[#263244] text-[10px] lg:text-[25px] font-[500] py-2"
}: MergedFAQAccordionProps) {
  const {language} = useStore()
   const isRTL = language === "ar";
  return (
    <div className={sectionClassName}>
      <div className="container w-full 2xl:max-w-[1100px] md:px-6">
      <AnimatedSection direction="up">
  {title !== "hidden" && (
    <h2 className={`${language === 'ar' ? "text-right" : "text-left"} ${titleClassName}`}>
       {title ?? (isRTL ? "الأسئلة الشائعة" : "FAQs")}
    </h2>
  )}

{para && (
  <h2 className={`${language === 'ar' ? "text-right" : "text-left"} ${paraClassName}`}>
    {para}
  </h2>
)}

  <Accordion
    type="single"
    collapsible
    className="w-full mx-auto lg:p-4  lg:px-0" 
  >
    {faqItems.map((item: FAQItem, index: number) => (
      <FAQMerged key={item.id || index} item={item} index={index} />
    ))}
  </Accordion>
</AnimatedSection>

      </div>
    </div>
  );
}
