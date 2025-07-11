// utils/about-utils.ts

// FAQ Component interface
export interface FAQComponent {
  id: number;
  question: string;
  answers: string;
}

/**
 * NEW: Extract FAQs from Strapi component structure
 * This is for the new dynamic FAQ component approach
 */
export function extractFAQItemsFromComponents(faqs: FAQComponent[]): Array<{ id: string; question: string; answer: string }> {
  if (!faqs || !Array.isArray(faqs)) {
    return [];
  }

  return faqs
    .filter(faq => faq.question && faq.answers) // Only include complete FAQs
    .map((faq, index) => ({
      id: faq.id?.toString() || `faq-${index}`,
      question: faq.question.trim(),
      answer: faq.answers.trim()
    }));
}

/**
 * LEGACY: Extract FAQs from old hardcoded field structure
 * Keep this for backward compatibility until all pages are migrated
 * 
 * Given an object whose keys include:
 *   FAQTitle1, FAQTitle2, FAQTitle3, …
 *   FAQDescription1, FAQDescription2, FAQDescription3, …
 * this function returns an array of objects:
 *   [
 *     { question: aboutData.FAQTitle1, answer: aboutData.FAQDescription1 },
 *     { question: aboutData.FAQTitle2, answer: aboutData.FAQDescription2 },
 *     …
 *   ]
 */
export function extractFAQItemsLegacy<T extends Record<string, any>>(aboutData: T) {
  const entries = Object.entries(aboutData) as [string, any][];

  const titleMap = new Map<number, string>();
  const descMap = new Map<number, string>();

  for (const [key, value] of entries) {
    if (/^FAQTitle(\d+)$/.test(key)) {
      const idx = parseInt(key.replace(/^FAQTitle/, ""), 10);
      titleMap.set(idx, String(value));
    }

    if (/^FAQDescription(\d+)$/.test(key)) {
      const idx = parseInt(key.replace(/^FAQDescription/, ""), 10);
      descMap.set(idx, String(value));
    }
  }

  const allIndices = new Set<number>([
    ...Array.from(titleMap.keys()),
    ...Array.from(descMap.keys()),
  ]);

  const sortedIndices = Array.from(allIndices).sort((a, b) => a - b);

  const faqItems: { id: string; question: string; answer: string }[] = [];

  for (const idx of sortedIndices) {
    const question = titleMap.get(idx);
    const answer = descMap.get(idx);

    if (typeof question === "string" && typeof answer === "string") {
      faqItems.push({ 
        id: `legacy-faq-${idx}`,
        question, 
        answer 
      });
    }
  }

  return faqItems;
}

/**
 * LEGACY: Apple Pay FAQs extraction (keep for backward compatibility)
 */
export function extractAppleFAQItemsLegacy<T extends Record<string, any>>(appleData: T) {
  const entries = Object.entries(appleData) as [string, any][];

  const titleMap = new Map<number, string>();
  const descMap = new Map<number, string>();

  for (const [key, value] of entries) {
    if (/^AppleFAQTitle(\d+)$/.test(key)) {
      const idx = parseInt(key.replace(/^AppleFAQTitle/, ""), 10);
      titleMap.set(idx, String(value));
    }

    if (/^AppleFAQDescription(\d+)$/.test(key)) {
      const idx = parseInt(key.replace(/^AppleFAQDescription/, ""), 10);
      descMap.set(idx, String(value));
    }
  }

  const allIndices = new Set<number>([
    ...Array.from(titleMap.keys()),
    ...Array.from(descMap.keys()),
  ]);

  const sortedIndices = Array.from(allIndices).sort((a, b) => a - b);

  const faqItems: { id: string; question: string; answer: string }[] = [];

  for (const idx of sortedIndices) {
    const question = titleMap.get(idx);
    const answer = descMap.get(idx);

    if (typeof question === "string" && typeof answer === "string") {
      faqItems.push({ 
        id: `apple-faq-${idx}`,
        question, 
        answer 
      });
    }
  }

  return faqItems;
}

/**
 * UNIVERSAL: Smart FAQ extractor that works with both old and new approaches
 * This function automatically detects which structure is being used
 */
export function extractFAQItems<T extends Record<string, any>>(data: T): Array<{ id: string; question: string; answer: string }> {
  // Check if data has the new component structure
  if (data.faqs && Array.isArray(data.faqs)) {
    return extractFAQItemsFromComponents(data.faqs);
  }
  
  // Fallback to legacy extraction for old hardcoded fields
  return extractFAQItemsLegacy(data);
}

/**
 * UNIVERSAL: Apple Pay FAQ extractor (smart detection)
 */
export function extractAppleFAQItems<T extends Record<string, any>>(data: T): Array<{ id: string; question: string; answer: string }> {
  // Check if data has the new component structure for Apple Pay
  if (data.applefaqs && Array.isArray(data.applefaqs)) {
    return extractFAQItemsFromComponents(data.applefaqs);
  }
  
  // Fallback to legacy extraction
  return extractAppleFAQItemsLegacy(data);
}