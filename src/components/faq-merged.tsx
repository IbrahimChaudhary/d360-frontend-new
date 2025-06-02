"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { Section } from "./ui/section";
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
}

function FAQMerged({ item, index }: FAQItemComponentProps) {
  const {language} = useStore()
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AccordionItem
      value={`item-${index}`}
      className={`  rounded-2xl mb-4 px-3 md:px-6 md:py-4 bg-[#F8F8F8]`}
    >
      <AccordionTrigger
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex  ${language === "ar" ? "flex-row-reverse text-right" : "flex-row text-left"} justify-between items-center w-full hover:no-underline font-semibold md:font-extrabold text-[#263244] text-[10px] lg:text-[40px] [&>svg]:hidden`}
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
        <X className="text-[#E74529] font-extrabold lg:w-full lg:h-full w-[18px] h-[18px]" />
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
        <Plus className="text-[#C0C5CE] font-extrabold lg:w-full lg:h-full w-[18px] h-[18px]" />
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
            <AccordionContent className={`overflow-hidden  flex ${language === 'ar' ? "flex-row-reverse" : "flex-row"}`}>
              <p className={`text-[10px] lg:text-lg text-[#263244] mt-2 leading-relaxed ${ language==="ar"?"text-right":"text-left"}`}>
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
  title = "FAQs",
  sectionClassName = "w-full flex justify-center ",
  titleClassName = "text-[30px] lg:text-[60px] font-extrabold mb-8 lg:px-14 text-[#293242]",
}: MergedFAQAccordionProps) {
  const {language} = useStore()
  return (
    <Section className={sectionClassName}>
      <AnimatedSection direction="up">
        <h2 className={`${language === 'ar' ? "text-right" : "text-left"} ${titleClassName}`}>{title}</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full mx-auto"
        >
          {faqItems.map((item: FAQItem, index: number) => (
            <FAQMerged key={item.id || index} item={item} index={index} />
          ))}
        </Accordion>
      </AnimatedSection>
    </Section>
  );
}
