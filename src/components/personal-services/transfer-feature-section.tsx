"use client"

import { motion } from "framer-motion"
import { FaGlobe, FaExchangeAlt } from "react-icons/fa"
import Image from "next/image"
import { PersonalServiceData } from "@/types/personal-service/personal-service"


interface TransfersFeatureSectionProps{
  data:PersonalServiceData
}
export default function TransfersFeatureSection({data}:TransfersFeatureSectionProps) {
  const items = [
    {
      icon: <FaGlobe size={20} className="text-[#263244] bg-[#F6F7F8] rounded-full w-[40px] h-[40px] " />,
      title: `${data.Title12} ${data.Title13}`,
      button: `${data.button}`,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image1?.formats?.large?.url || data.image1?.formats?.medium?.url || data.image1?.url }`,
      reverse: false,
    },
    {
      icon: <FaExchangeAlt size={22} className="text-[#263244] bg-[#F6F7F8] rounded-full w-[40px] h-[40px]" />,
      title: `${data.Title14} ${data.Title15}`,
      button: `${data.button2}`,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.imges2?.formats?.large?.url || data.imges2?.formats?.medium?.url || data.imges2?.url || "/personal/mob-left.png"}`,
      reverse: true,
    },
  ]
  return (
    <section className="bg-white lg:pt-0 pt-18 px-6 lg:px-0 max-w-5xl mx-auto">
      <div className="space-y-20 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={` lg:flex ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10 `}
          >
            <div className="flex-1  space-y-4">
              <div className="flex items-center justify-start gap-2">
                {item.icon}
              </div>
              <h3 className="text-[30px] lg:text-[60px] font-extrabold text-[#263244]">{item.title}</h3>
              <button className="bg-[#E74529] text-white rounded-md lg:rounded-xl px-8 lg:px-12 py-2 font-bold text-[8px] lg:text-[20px] hover:bg-[#cf3c21] transition">
                {item.button}
              </button>
            </div>

            <div className="flex-1 max-w-[300px] lg:max-w-[400px]">
              <Image
                src={item.image}
                alt={item.title}
                width={360}
                height={360}
                className="object-contain  h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
