"use client";

import { useState } from "react";
import Image from "next/image";
import { useStore } from "@/store/toggle-store";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HomePageData } from "@/types/home/home";
interface CardCaroselsProps{
  data:HomePageData
}
export function CardCarosels({data}:CardCaroselsProps) {
  const [current, setCurrent] = useState(0);
  const { language } = useStore();
  const isRTL = language === "ar";
  const content = language === "en" ? englishContent : arabicContent;

  const slides = [
    {
      heading: data.Title1,
      paragraph: data.Description1,
      image: "/home/slide1.png",
    },
    {
      heading: data.Title2,
      paragraph: data.Description2,
      image: "/home/slide2.png",
    },
    {
      heading: data.Title3,
      paragraph: data.Description3,
      image: "/home/slide3.png",
    },
    {
      heading: data.Title8,
      paragraph: data.Description8,
      image: "/home/slide3.png",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="block lg:hidden w-full lg:min-h-screen bg-[#FDF0ED] px-4 md:px-12 py-12">
      {/* MOBILE View */}
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className={`text-[30px] uppercase font-extrabold text-[#E74529] ${isRTL?"text-right": "text-left"}`}>
            {slides[current].heading}
          </h1>
          <div className={`flex justify-between items-center ${isRTL?"flex-row-reverse" : ""}`}>
            <p className={`text-[14px] w-[70%] text-[#263244] ${isRTL?"text-right" : "text-left"}`}>{slides[current].paragraph}</p>
            <div className="flex justify-center gap-2">
              <ArrowLeft
                onClick={prevSlide}
                className="text-2xl text-[#263244] hover:text-[#E74529]"
              >
                {language === "ar" ? "→" : "←"}
              /</ArrowLeft>
              <ArrowRight
                onClick={nextSlide}
                className="text-2xl text-[#263244] hover:text-[#E74529]"
              >
                {language === "ar" ? "←" : "→"}
              </ArrowRight>
            </div>
          </div>
        </div>

        <div className="relative w-full h-64">
          <Image
            src={slides[current].image}
            alt={slides[current].heading}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
