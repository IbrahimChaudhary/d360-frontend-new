"use client";

import { FeesData, FeeFAQSection } from "@/types/product-services/product-services";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { Section } from "../ui/section";
import { AnimatedSection } from "../ui/animated-section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { useStore } from "@/store/toggle-store";

interface FeeFAQAccordionProps {
  data?: FeesData;
  title?: string;
  sectionClassName?: string;
  titleClassName?: string;
}

interface FAQItemComponentProps {
  item: FeeFAQSection;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQFee({ item, index, isOpen, onToggle }: FAQItemComponentProps) {
  const { language } = useStore();
  const isRTL = language === "ar";

  return (
    <AccordionItem
      value={`item-${index}`}
      className="bg-[#F8F8F8] rounded-2xl mb-4 px-3 md:px-6 md:py-4 transition-shadow"
    >
      <AccordionTrigger
        onClick={onToggle}
        className="flex justify-between items-center w-full hover:no-underline font-semibold md:font-extrabold text-[#263244] text-[15px] md:text-[30px] [&>svg]:hidden"
      >
        {item.title}
        <span className="ml-4 shrink-0 relative w-[38px] h-[39px]">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="x-icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <X size={28} className="text-[#E74529] font-extrabold w-[80%] h-full lg:w-full lg:h-full" />
              </motion.div>
            ) : (
              <motion.div
                key="plus-icon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Plus size={28} className="text-[#C0C5CE] font-extrabold w-[80%] h-full lg:w-full lg:h-full" />
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
            <AccordionContent className="overflow-hidden">
              {/* Optional header row */}
              {item.header && item.header.description && (
                <div className="text-[20px] text-[#263244] flex justify-between font-semibold border-b-[2px] border-black pb-3 mt-2 leading-relaxed">
                  <p>{item.header.description}</p>
                  <p>{item.header.value}</p>
                </div>
              )}

              {/* FAQ rows */}
              <div className="mt-3">
                {item.items && item.items.map((sub, idx) => (
                  <div
                    key={idx}
                    className={`text-[20px] flex justify-between py-2 last:border-none ${
                      sub.description === "null" || sub.description === "" ? "hidden" : ""
                    }`}
                  >
                    <span>{sub.description}</span>
                    <span className="text-right">{sub.value}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionItem>
  );
}

export function FeeFAQAccordion({
  data,
  sectionClassName = "bg-white",
  titleClassName = "text-4xl font-bold mb-8 text-[#293242]",
}: FeeFAQAccordionProps) {
  const { language } = useStore();
  const isRTL = language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Use the dynamic faqs data from Strapi
  const faqItems = data?.faqs || [];

  // Add some debugging
  console.log("=== DEBUG: Fee FAQ Data ===", data);
  console.log("=== DEBUG: FAQ Items ===", faqItems);

  if (!faqItems.length) {
    console.log("No FAQ items found");
    return null;
  }

  return (
    <Section className={sectionClassName}>
      <AnimatedSection direction="up">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-5xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <FAQFee
              key={item.id || index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </Accordion>
      </AnimatedSection>
    </Section>
  );
}