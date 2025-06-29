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
    <section className="py-2 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[25px] lg:text-[50px] lg:w-full w-[70%] mx-auto lg:mx-0 font-extrabold text-[#293242] mb-6">
          {data.HelpingHead}
        </h2>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={mdComponents}
        >
          {data.HelpingText}
        </ReactMarkdown>

        <Link href="/contact-us">
        <button
          className="bg-[#E74529]  text-white px-6 lg:px-8 py-2 rounded-lg lg:rounded-xl font-bold text-[8px] lg:text-[14px] btn-14"
          
        >
          {data.HelpingBtn}
          </button>
        </Link>
      </div>
    </section>
  );
}
