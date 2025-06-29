"use client";

import { HomePageData } from "@/types/home/home";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/store/toggle-store";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import { useState } from "react";
import { DownloadModal } from "./download-modal";
interface ShariahSectionProps {
  data: HomePageData;
}
export function ShariahSection({ data }: ShariahSectionProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";

  return (
    <section
      className={`relative w-full h-[600px] lg:h-full mb-6 lg:mb-0 py-20 flex ${
        isRTL ? "" : "flex-row"
      } items-center justify-start text-white overflow-hidden`}
    >
      <Image
        src="/home/shariah-bg.png"
        alt="Shariah background"
        fill
        priority
        className={`object-cover object-center z-10 ${
          isRTL ? "scale-x-[-1]" : ""
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className={`relative z-10 px-6 md:px-16 max-w-4xl ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <h2 className={`text-[30px]  md:text-[80px] uppercase font-extrabold leading-tight mb-6 ${isRTL?"lg:text-right text-center" : "lg:text-left text-center"}`}>
          {data.Shariah}{" "}
        </h2>
        <p className={ `text-[25px]   md:text-[25px] leading-tight  mb-8 ${isRTL?"lg:text-right text-center":"lg:text-left text-center"}`}>
          {data.ShariahDescription}
        </p>
        <div className={`flex  ${isRTL ? "justify-start" : "justify-start"}`}>
          <Link
            href="/shariah-committee"
            className={`lg:w-[50%] flex items-center ${
              isRTL ? "flex-row" : "flex-row"
            } justify-between lg:gap-3 px-7 mx-auto lg:mx-0 font-bold lg:px-5 py-2 border border-white rounded-lg hover:bg-white hover:text-[#0B1B2B] transition text-[8px] lg:text-[20px] btn-14`}
          >
            {data.SarihaBTN}
            {isRTL ? (
              <ChevronLeft className="lg:w-6 lg:h-6 hidden lg:block" />
            ) : (
              <ChevronRight className="lg:w-6 lg:h-6 hidden lg:block" />
            )}
          </Link>
        </div>
        <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
      </div>
    </section>
  );
}
