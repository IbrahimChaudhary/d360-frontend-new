// utils/about-utils.ts

/**
 * Given an object whose keys include:
 *   FAQTitle1, FAQTitle2, FAQTitle3, …
 *   FAQDescription1, FAQDescription2, FAQDescription3, …
 * this function returns an array of objects:
 *   [
 *     { question: aboutData.FAQTitle1, answer: aboutData.FAQDescription1 },
 *     { question: aboutData.FAQTitle2, answer: aboutData.FAQDescription2 },
 *     …
 *   ]
 *
 * Any missing pairs are skipped if either side is unavailable.
 */
export function extractFAQItems<T extends Record<string, any>>(aboutData: T) {
    // 1) Convert to [key, value] pairs once:
    const entries = Object.entries(aboutData) as [string, any][];
  
    // 2) Separate out only those entries whose key matches "FAQTitle<number>" or "FAQDescription<number>"
    //    We’ll store them in two maps keyed by their index: { [index]: stringValue }
    const titleMap = new Map<number, string>();
    const descMap = new Map<number, string>();
  
    for (const [key, value] of entries) {
      // Check if key is exactly "FAQTitle" followed by digits, e.g. "FAQTitle1"
      if (/^FAQTitle(\d+)$/.test(key)) {
        const idx = parseInt(key.replace(/^FAQTitle/, ""), 10);
        titleMap.set(idx, String(value));
      }
  
      // Check if key is exactly "FAQDescription" followed by digits, e.g. "FAQDescription1"
      if (/^FAQDescription(\d+)$/.test(key)) {
        const idx = parseInt(key.replace(/^FAQDescription/, ""), 10);
        descMap.set(idx, String(value));
      }
    }
  
    // 3) Collect all indices that appear in either map, sort them ascending
    const allIndices = new Set<number>([
      ...Array.from(titleMap.keys()),
      ...Array.from(descMap.keys()),
    ]);
  
    const sortedIndices = Array.from(allIndices).sort((a, b) => a - b);
  
    // 4) Build the final FAQItem[] by zipping titles and descriptions at each index
    const faqItems: { question: string; answer: string }[] = [];
  
    for (const idx of sortedIndices) {
      const question = titleMap.get(idx);
      const answer = descMap.get(idx);
  
      // Only push if both question & answer exist
      if (typeof question === "string" && typeof answer === "string") {
        faqItems.push({ question, answer });
      }
    }
  
    return faqItems;
  }

  export function extractAppleFAQItems<T extends Record<string, any>>(appleData: T) {
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
  
    const faqItems: { question: string; answer: string }[] = [];
  
    for (const idx of sortedIndices) {
      const question = titleMap.get(idx);
      const answer = descMap.get(idx);
  
      if (typeof question === "string" && typeof answer === "string") {
        faqItems.push({ question, answer });
      }
    }
  
    return faqItems;
  }
  
  