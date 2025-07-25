"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PersonalServiceData } from "@/types/personal-service/personal-service"
import Link from "next/link"

interface D360CardsProps{
  data:PersonalServiceData
}
export default function D360Cards({data}:D360CardsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const cards = [
    {
      id: 1,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.card1?.formats?.large?.url || data.card1?.formats?.medium?.url || data.card1?.url || "/personal/orange-card.png"}`,
      alt: "D360 Visa Card",
      buttonColor: "#EB644C",
      hoverColor: "#d8583f",
    },
    {
      id: 2,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.card2?.formats?.large?.url || data.card2?.formats?.medium?.url || data.card2?.url || "/personal/green-card.png"}`,
      alt: "D360 Mada Card",
      buttonColor: "#004119",
      hoverColor: "#003217",
    },
    {
      id: 3,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.card3?.formats?.large?.url || data.card3?.formats?.medium?.url || data.card3?.url || ""}`,
      alt: "D360 Mada Card",
      buttonColor: "#DCC9BB",
      hoverColor: "#DCC9BB",
    },
  ]

  const activeCard = cards[activeIndex]


  return (
    <section className="py-16 lg:py-28 bg-white text-center">
      <h2 className="text-[30px] md:text-[60px] font-extrabold text-[#263244] lg:mb-10">{data.Title16}</h2>

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
  {cards.map((card, index) => (
    <button
      key={index}
      onClick={() => setActiveIndex(index)}
      style={{
        backgroundColor: card.buttonColor,
        transform: activeIndex === index ? "scale(1.3)" : "scale(1)",
      
      }}
      className="w-3 h-3 rounded-full transition-all duration-300"
    />
  ))}
</div>

      <Link href="/card">     
       <button className="bg-[#263244] cursor-pointer text-white py-2 px-8 rounded-md lg:rounded-xl text-[8px] lg:text-[20px] font-bold hover:bg-[#1e2d3b] transition btn-14">
        {data.explore}
      </button>
      </Link>

    </section>
  )
}
