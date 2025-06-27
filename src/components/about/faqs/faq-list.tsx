"use client"

import { Accordion } from "@/components/ui/accordion"
import { FAQItem } from "./faq-item"

interface FAQListProps {
  faqIds: string[]
}

export function FAQList({ faqIds }: FAQListProps) {
  return (
    <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
      {faqIds.map((id, index) => (
        <FAQItem key={id} id={id} index={index} />
      ))}
    </Accordion>
  )
}
