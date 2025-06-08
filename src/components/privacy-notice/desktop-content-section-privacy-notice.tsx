"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PrivacyNoticeData } from "@/types/privacy-notice/privacy-notice";

interface Props {
  data: PrivacyNoticeData;
}

export default function DesktopContentSectionPrivacyAndNotice({ data }: Props) {
  const mdComponents = {
    // Headings
    h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
      <h1 className="text-4xl font-extrabold mt-8 mb-4" {...props} />
    ),
    h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
      <h2 className="text-3xl font-bold mt-6 mb-4" {...props} />
    ),
    h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
      <h3 className="text-[25px] lg:text-[60px] font-extrabold mt-4 mb-6" {...props} />
    ),
    h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
      <h4 className="text-2xl font-bold mt-3 mb-4" {...props} />
    ),
    p: (props: React.ComponentPropsWithoutRef<"h4">) => (
      <h4 className="text-[14px] lg:text-[25px] mt-3 mb-4" {...props} />
    ),

    // Unordered lists
    ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
      <ul className="list-disc  pl-4 space-y-2" {...props} />
    ),
    // Ordered lists (alphabetical if the source uses 1. a) etc)
    ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
      <ol className="list-decimal  pl-4 space-y-2" type="a" {...props} />
    ),
    li: (props: React.ComponentPropsWithoutRef<"li">) => (
      <li className="text-base md:text-lg leading-relaxed" {...props} />
    ),
  };

  return (
    <div className="max-w-[1228px] px-6 mx-auto mt-10 space-y-16">
      {/* Page title & intro */}
      <div className="space-y-6">
        <h1 className="text-[25px] lg:text-[70px] font-extrabold text-[#E74529]">
          {data.Heading}
        </h1>
        <p className="text-[14px] lg:text-[25px]">{data.headingPara1}</p>
        <p className="text-[14px] lg:text-[25px]">{data.headingPara2}</p>
        <p className="text-[14px] lg:text-[25px]">{data.headingPara3}</p>
      </div>

      {/* Render the full markdown notice body */}
      <div className="prose prose-lg dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {data.Title2}
        </ReactMarkdown>
      </div>
    </div>
  );
}
