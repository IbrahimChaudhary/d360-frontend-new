"use client"

import { useState } from "react"
import Image from "next/image"
import { useStore } from "@/store/toggle-store"
import englishContent from "@/data/home-en"
import arabicContent from "@/data/home-ar"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { HomePageData } from "@/types/home/home"
interface CardCaroselsProps{
  data:HomePageData
}
export function CardCarosels({data}:CardCaroselsProps) {
  const [current, setCurrent] = useState(0)
  const { language } = useStore()
  const isRTL = language === "ar"
  const content = language === "en" ? englishContent : arabicContent

  const slide1 = language === "en" ? "/home/slide1.png" : "/home/slide1-ar.png"
  const slide2 = language === "en" ? "/home/slide2.png" : "/home/slide2-ar.png"
  const slide3 = language === "en" ? "/home/slide3.png" : "/home/slide3-ar.png"
  const slide4 = language === "en" ? "/home/slide4.png" : "/home/slide4-ar.png"

  const slides = [
    {
      heading: data.Title1,
      heading2: data.Title1B || "",
      paragraph: data.Description1,
      image: slide1,
    },
    {
      heading: data.Title2,
      heading2: data.Title2B || "",
      paragraph: data.Description2,
      image: slide2,
    },
    {
      heading: data.Title3,
      heading2: data.Title3B || "",
      paragraph: data.Description3,
      image: slide3,
    },
    {
      heading: data.Title8,
      heading2: data.Title8B || "",
      paragraph: data.Description8,
      image: slide4,
    },
  ]

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // For RTL, we need to swap the visual arrows but keep the functionality consistent
  const PrevArrow = isRTL ? ArrowRight : ArrowLeft
  const NextArrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="block lg:hidden w-full lg:min-h-screen bg-[#FDF0ED] px-4 md:px-12 py-12">
      {/* MOBILE View */}
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <div className={`space-y-1 ${isRTL ? "text-right" : "text-left"} rtl:w-[50%]`}>
            <h1 className="text-[30px] uppercase font-extrabold leading-tight text-[#E74529]">{slides[current].heading}</h1>
            {slides[current].heading2 && (
              <h2 className="text-[30px] uppercase font-extrabold leading-tight text-[#E74529]">{slides[current].heading2}</h2>
            )}
          </div>

          <div className={`flex justify-between items-center `}>
            <p className={`text-[14px] w-[70%] text-[#263244] ${isRTL ? "text-right" : "text-left"}`}>
              {slides[current].paragraph}
            </p>

            <div className="flex justify-center gap-2">
              {/* Use the dynamically selected arrow components */}
              <button
                onClick={prevSlide}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="Previous slide"
              >
                <PrevArrow className="w-6 h-6 text-[#263244] hover:text-[#E74529] transition-colors" />
              </button>

              <button
                onClick={nextSlide}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="Next slide"
              >
                <NextArrow className="w-6 h-6 text-[#263244] hover:text-[#E74529] transition-colors" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-64">
          <Image
            src={slides[current].image || "/placeholder.svg"}
            alt={slides[current].heading}
            fill
            className="object-contain"
          />
        </div>

        {/* Optional: Add slide indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-[#E74529]" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}