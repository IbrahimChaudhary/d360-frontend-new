"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { AboutD360Data } from "@/types/about/about";

interface OurStoryProps {
  data: AboutD360Data;
}

export function OurStory({ data }: OurStoryProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const paragraphs: string[] = data.Description3
    ? data.Description3.split(/\n\s*\n/)
    : [];

  return (
    <Section className="bg-white flex flex-row lg:justify-center items-center">
      <div
        className={`
          flex flex-col 
          ${language === "ar" ? "md:flex-row" : "md:flex-row"} 
          items-center justify-center lg:px-24
        `}
      >
        {/* === Image Section (unchanged) === */}
        <AnimatedSection direction="right" className="lg:w-[50%]">
          <Image
            src="/about/our-story.png"
            alt="Decorative pyramid illustration"
            width={500}
            height={500}
            className="rounded-lg lg:block hidden"
          />
          <Image
            src="/about/our-story-mob.png"
            alt="Decorative pyramid illustration (mobile)"
            className="rounded-lg block mb-10 lg:hidden h-[200px] w-[293px]"
            width={630}
            height={430}
          />
        </AnimatedSection>

        {/* === Text Section (updated to map paragraphs) === */}
        <AnimatedSection direction="up" className="lg:w-[40%]">
          {/* Heading (unchanged) */}
          <h2
            className={`
              hidden  lg:text-[60px] text-[30px] 
              font-extrabold mb-3 lg:mb-6 mt-4 lg:mt-0 
              text-[#293242] 
              ${language === "ar" ? "text-right" : "text-left"}
            `}
          >
            {content.data.about.header}
          </h2>

          {/* 
            Instead of dangerouslySetInnerHTML, we split on "\n\n" and map:
            Each <p> gets mb-1 for spacing (0.25rem), plus the font/color/alignment.
          */}
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className={`
                text-[#293242] 
                text-[14px] 
                lg:text-[20px] 
                font-normal 
                mb-4 
                ${language === "ar" ? "text-right" : "text-left"}
              `}
            >
              {para.trim()}
            </p>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}
