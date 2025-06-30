"use client";
import React, { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import ContentSection from "../content-section";
import { TermsConditionsData } from "@/types/terms-conditions/terms-conditions";
import { fetchTermsConditions} from "@/api/terms-conditions";
import { useStore } from "@/store/toggle-store";
import remarkGfm from "remark-gfm";

interface Section {
  heading: string;
  body: string;
}
const mdComponents = {
  // Headings
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-4xl font-extrabold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-3xl font-bold mt-6 mb-4" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-[25px] lg:text-[30px] font-extrabold mt-4 mb-6" {...props} />
  ),
  h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <h4 className="text-2xl font-bold mt-3 mb-4" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <h4 className="text-[14px] lg:text-[20px] mt-3 mb-4" {...props} />
  ),

  // Unordered lists
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc  p-4 space-y-2" {...props} />
  ),
  // Ordered lists (alphabetical if the source uses 1. a) etc)
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal  pl-4 space-y-2" type="a" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="text-[14px] lg:text-[20px] leading-relaxed" {...props} />
  ),
};

export default function DesktopContentSectionTermsConditions() {
  const { language } = useStore();
  const [security, setSecurity] = useState<TermsConditionsData | null>(null);

  useEffect(() => {
    fetchTermsConditions(language)
      .then((data) => setSecurity(data))
      .catch((err) => console.error(err));
  }, [language]);

  // memoize splitting logic so we don't re-split on every render
  const sections: Section[] = useMemo(() => {
    if (!security) return [];

    // 1) grab the raw Markdown
    const md = security.Title;

    // 2) split on ### headings
    //    result of split is [intro, "Password Security", body1, "Social Engineering", body2, ...]
    const parts = md.split(/^###\s+(.*)$/m);

    // 3) parts[0] is everything before first ###, so if you want to render it as an intro:
    const intro = parts[0].trim();
    const items: Section[] = [];
    if (intro) {
      items.push({ heading: "", body: intro });
    }

    // 4) walk the rest in pairs
    for (let i = 1; i < parts.length; i += 2) {
      const heading = parts[i].trim();
      const body = (parts[i + 1] || "").trim();
      items.push({ heading, body });
    }
    return items;
  }, [security]);

  if (!security) return <p></p>;

  return (
    <div className="max-w-[1228px] px-6 mx-auto mt-24 space-y-16">
      {/* Render optional Title1 and its descriptions */}
      <div>
        <h1 className="text-[25px] lg:text-[60px] font-extrabold text-[#E74529]">{security.Title}</h1>
      </div>

      {/* Loop over each parsed section */}
      <div className="prose prose-lg dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {security.Content}
        </ReactMarkdown>
      </div>
    </div>
  );
}