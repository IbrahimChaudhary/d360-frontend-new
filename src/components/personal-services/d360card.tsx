"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PersonalServiceData } from "@/types/personal-service/personal-service"

const cards = [
  {
    id: 1,
    image: "/personal/orange-card.png", // replace with actual image paths
    alt: "D360 Visa Card",
  },
  {
    id: 2,
    image: "/personal/green-card.png",
    alt: "D360 Mada Card",
  },
]
interface D360CardsProps{
  data:PersonalServiceData
}
export default function D360Cards({data}:D360CardsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-28 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#263244] mb-10">{data.Title16}</h2>

      <div className="relative w-[300px] md:w-[360px] h-[200px] mx-auto mb-6 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[activeIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={cards[activeIndex].image}
              alt={cards[activeIndex].alt}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-2 mb-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-green-700" : "bg-[#F08071]"
            }`}
          />
        ))}
      </div>

      <button className="bg-[#263244] text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-[#1e2d3b] transition">
        Explore Cards
      </button>
    </section>
  )
}
