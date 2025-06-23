"use client";
import { AboutD360Data } from "@/types/about/about";
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
import { ApplePayData } from "@/types/apple-pay/apple-pay";
import { FeesData } from "@/types/product-services/product-services";

export interface FAQSubItem {
  description: string;
  value: string;
}

export interface FAQSection {
  id: string;
  title: string;
  header: {
    label: string;
    value: string;
  };
  items: FAQSubItem[];
}

interface FAQItemComponentProps {
  item: FAQSection;
  index: number;
}

interface FeeFAQAccordionProps {
  data?: FeesData;
  title?: string;
  sectionClassName?: string;
  titleClassName?: string;
}

function FAQFee({ item, index }: FAQItemComponentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AccordionItem
      value={`item-${index}`}
      className="bg-[#F8F8F8] rounded-2xl mb-4 px-3 md:px-6 md:py-4 transition-shadow"
    >
      <AccordionTrigger
        onClick={() => setIsOpen((prev) => !prev)}
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
                <X
                  size={28}
                  className="text-[#E74529] font-extrabold w-[80%]  h-full lg:w-full lg:h-full"
                />
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
                <Plus
                  size={28}
                  className="text-[#C0C5CE] font-extrabold w-[80%] h-full  lg:w-full lg:h-full"
                />
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
              <div className="text-[20px] text-[#263244] flex justify-between font-semibold border-b-[2px] border-black pb-3 mt-2 leading-relaxed">
                <p>{item.header.label}</p>
                <p>{item.header.value}</p>
              </div>
              <div className="mt-3">
                {item.items.map((sub, idx) => (
                  <div
                    key={idx}
                    className="text-[20px] flex justify-between py-2  last:border-none"
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
  title = "FAQs",
  data,
  sectionClassName = "bg-white",
  titleClassName = "text-4xl font-bold mb-8  text-[#293242]",
}: FeeFAQAccordionProps) {
  const faqItems: FAQSection[] = [
    {
      id: "1",
      title: `${data?.FAQTitle1}`,
      header: {
        label: `${data?.FAQ1DescriptionA}`,
        value: `${data?.FAQ1DescriptionAValue}`,
      },
      items: [
        {
          description: `${data?.FAQ1SubDescriptionA}`,
          value: `${data?.FAQ1SubDescriptionAValue}`,
        },
        {
          description: `${data?.FAQ1SubDescriptionB}`,
          value: `${data?.FAQ1SubDescriptionBValue}`,
        },
      ],
    },
    {
      id: "2",
      title: `${data?.FAQTitle2}`,
      header: {
        label: `${data?.FAQ2DescriptionA}`,
        value: `${data?.FAQ2DescriptionAValue}`,
      },
      items: [
        {
          description: `${data?.FAQ2SubDescriptionA}`,
          value: `${data?.FAQ2SubDescriptionAValue}`,
        },
        {
          description: `${data?.FAQ2SubDescriptionB}`,
          value: `${data?.FAQ2SubDescriptionBValue}`,
        },
      ],
    },
    {
      id: "3",
      title: `${data?.FAQTitle3}`,
      header: {
        label: `${data?.FAQ3DescriptionA}`,
        value: `${data?.FAQ3DescriptionAValue}`,
      },
      items: [
        {
          description: `${data?.FAQ3SubDescriptionA}`,
          value: `${data?.FAQ3SubDescriptionAValue}`,
        },
        {
          description: `${data?.FAQ3SubDescriptionB}`,
          value: `${data?.FAQ3SubDescriptionBValue}`,
        },
      ],
    },
    {
      id: "4",
      title: `${data?.FAQTitle4}`,
      header: {
        label: `${data?.FAQ4DescriptionA}`,
        value: `${data?.FAQ4DescriptionAValue}`,
      },
      items: [
        {
          description: `${data?.FAQ4SubDescriptionA}`,
          value: `${data?.FAQ4SubDescriptionAValue}`,
        },
        {
          description: `${data?.FAQ4SubDescriptionB}`,
          value: `${data?.FAQ4SubDescriptionBValue}`,
        },
        {
          description: `${data?.FAQ4SubDescriptionC}`,
          value: `${data?.FAQ4SubDescriptionCValue}`,
        },
        {
          description: `${data?.FAQ4SubDescriptionD}`,
          value: `${data?.FAQ4SubDescriptionDValue}`,
        },
        {
          description: `${data?.FAQ4SubDescriptionE}`,
          value: `${data?.FAQ4SubDescriptionEValue}`,
        },
        {
          description: `${data?.FAQ4SubDescriptionF}`,
          value: `${data?.FAQ4SubDescriptionFValue}`,
        },
      ],
    },
  ];
  return (
    <Section className={sectionClassName}>
      <AnimatedSection direction="up">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-5xl mx-auto"
        >
          {faqItems.map((item: FAQSection, index: number) => (
            <FAQFee key={item.id || index} item={item} index={index} />
          ))}
        </Accordion>
      </AnimatedSection>
    </Section>
  );
}
