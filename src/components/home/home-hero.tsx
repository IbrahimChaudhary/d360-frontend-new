"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { HomePageData } from "@/types/home/home";

interface HeroProps {
 data:HomePageData
}

export function HomeHero({data}:HeroProps) {
  const { isRtl } = useLanguage();

  return (
    <section className="w-full  min-h-[750px] relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute w-full h-full lg:h-full object-cover  object-center z-0"
        src="/home/home-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="container px-4 md:px-18 flex md:flex-row mt-50 items-center justify-between h-full  pb-16 relative z-10 ">
        <motion.div
          className="text-left lg:max-w-xl"
          initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl lg:text-6xl font-[800] pb-2 lg:mb-0 text-white leading-tight">
            {data.Heading}
          </h1>
          <h1 className="text-xl lg:text-6xl font-[800] pb-2 lg:mb-0 text-white leading-tight">
            {data.HeadingB}
          </h1>
          <p className="text-sm sm:text-md lg:w-[60%]  mb-4 md:mb-6 text-white leading-tight">
          {data.Description}
          </p>
          <Button
            className="bg-[#EB644C] text-white text-[10px] md:px-12 md:py-4 rounded-[14px]"
            size="default"
          >
            Download the App
          </Button>
        </motion.div>

        <motion.div
          className="w-full md:w-[45%] mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Optional right-side content (image, animation, etc.) */}
        </motion.div>
      </div>
    </section>
  );
}
