// src/components/ApplePayOverview.tsx
"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ApplePayData } from "@/types/apple-pay/apple-pay";

interface ApplePayProps {
  data: ApplePayData;
}

export default function ApplePayOverview({ data }: ApplePayProps) {
  // Tailwind classes for each MD element you care about
  const mdComponents = {
    h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
      <h1 className="text-4xl font-extrabold mt-8 mb-4" {...props} />
    ),
    h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
      <h2 className="text-3xl font-bold mt-6 mb-4" {...props} />
    ),
    h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
      <h3 className="text-5xl font-semibold mt-4 mb-4" {...props} />
    ),
    h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
      <h4 className="text-2xl font-semibold mt-3 mb-4" {...props} />
    ),
    ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
      <ul className="list-disc  pl-4 space-y-2" {...props} />
    ),
    li: (props: React.ComponentPropsWithoutRef<"li">) => (
      <li className="text-base md:text-lg leading-relaxed" {...props} />
    ),
  };

  return (
    <div className="max-w-[1100px] px-6 mx-auto mt-10 space-y-16">
      {/* Page title & intro */}
      <div className="space-y-4">
        <h1 className="text-[25px] lg:text-[70px] font-extrabold">
          {data.Title1}
        </h1>
        <p className="text-[14px] lg:text-[25px] leading-relaxed">
          {data.Title1Des}
        </p>
      </div>

      {/* Render all of your Markdown—including headings—through one MD renderer */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={mdComponents}
      >
        {data.Title2}
      </ReactMarkdown>
    </div>
  );
}
