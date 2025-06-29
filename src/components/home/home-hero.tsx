"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { DownloadModal } from "./download-modal";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import { useStore } from "@/store/toggle-store";
import { cn } from "@/lib/utils";
import { HomePageData } from "@/types/home/home";
interface HomeHeroProps {
  data: HomePageData;
}
export function HomeHero({ data }: HomeHeroProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { language } = useStore();
  const isRTL = language === "ar";
  const content = isRTL ? arabicContent : englishContent;
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

  return (
    <section className="w-full min-h-[450px] lg:min-h-[100vh] h-full flex items-center relative overflow-hidden">
      {/* Switch video based on language */}
      <video
        className="absolute w-full h-full object-cover object-center z-0"
        src={`${baseUrl}${data?.heroVideo?.url}`}
        autoPlay
        loop
        muted
        playsInline
      />

      <div
        className={`container max-w-screen w-full px-4 md:px-18 flex flex-col md:flex-row ${
          isRTL ? "" : ""
        } lg:items-center justify-between h-full pt-28 lg:pt-10 pb-16 relative z-10`}
      >
        <motion.div
          className={cn(
            "lg:max-w-xl w-full",
            isRTL ? "text-right items-end" : "text-left "
          )}
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`text-[25px] lg:text-[80px] bold-900 pb-2 lg:mb-0 text-white lg:leading-[5.5rem] ${
              language === "ar"
                ? " ml-[29%] lg:ml-0 lg:w-full"
                : "lg:w-full w-[70%]"
            }`}
          >
            {data.Heading} <br /> {data.HeadingB}
          </h1>
          <p
            className={`text-[16px] lg:text-[31px] mb-4 md:mb-6 text-white leading-tight ${
              language === "ar"
                ? "w-[60%] ml-[29%] lg:ml-0 lg:w-full"
                : "lg:w-full w-[70%]"
            }`}
          >
            {data.Description}{" "}
            <br />
            {data.DescriptionB}{" "}
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#EB644C] text-white text-[8px] hover:bg-[#d23e23] cursor-pointer font-bold lg:text-[20px] md:px-18 py-3 px-6  md:py-3 rounded-lg lg:rounded-[14px]"
          >
            {data.download}
          </button>
        </motion.div>

        <motion.div
          className="w-full md:w-[45%] mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Optional image or animation */}
        </motion.div>

        <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
      </div>
    </section>
  );
}
