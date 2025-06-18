"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CareerData } from "@/types/careers/careers";
import { Button } from "../ui/button";
import Link from "next/link";

interface CustomerSupportProps {
  data: CareerData;
}

export default function CustomerSupport({ data }: CustomerSupportProps) {
  const mdComponents = {
    p: (props: React.ComponentPropsWithoutRef<"p">) => (
      <p className="text-[#293242] text-[14px] md:text-[25px] mb-8" {...props} />
    ),
    strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
      <strong className="font-bold" {...props} />
    ),
  };

  return (
    <section className="py-8 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[25px] lg:text-[60px] font-extrabold text-[#293242] mb-6">
          {data.HelpingHead}
        </h2>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={mdComponents}
        >
          {data.HelpingText}
        </ReactMarkdown>

      <Link href="/contact-us">
        <Button
          className="bg-[#E74529] hover:bg-[#d23e23] text-white px-6 lg:px-8 py-4 rounded-lg font-semibold text-[20px]"
          
        >
          {data.HelpingBtn}
        </Button>
        </Link>
      </div>
    </section>
  );
}
