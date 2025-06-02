"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { AboutD360Data } from "@/types/about/about";
interface OurStoryProps {
  data?: AboutD360Data;
}

export function OurStory({ data }: OurStoryProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;

  return (
    <Section className="bg-white flex flex-row lg:justify-center items-center">
      <div
        className={`flex flex-col  ${
          language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
        }   items-center justify-center lg:px-24 `}
      >
        <AnimatedSection direction="right" className="lg:w-[50%]">
          <Image
            src="/about/our-story.png"
            alt="Decorative pyramid illustration"
            width={700}
            height={700}
            className="rounded-lg lg:block hidden"
          />
          <Image
            src="/about/our-story-mob.png"
            alt=""
            className="rounded-lg block lg:hidden h-[200px] w-[293px]"
            width={630}
            height={430}
          />
        </AnimatedSection>

        <AnimatedSection direction="up" className="lg:w-[40%]">
          <h2
            className={`lg:text-[60px] text-[30px] font-extrabold mb-3 lg:mb-6 mt-4 lg:mt-0 text-[#293242] text-left ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {data?.Title3}
          </h2>
          <p
            className={`text-[#293242] text-[14px] lg:text-[20px] font-normal mb-4 text-left ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {data?.Description3}{" "}
          </p>
        </AnimatedSection>
      </div>
    </Section>
  );
}
