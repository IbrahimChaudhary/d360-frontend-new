"use client"

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion"
import { FaGlobe } from "react-icons/fa"
import Image from "next/image"
import { PersonalServiceData } from "@/types/personal-service/personal-service"
import { Button } from "../ui/button"
import { DownloadModal } from "../home/download-modal"

interface TransfersFeatureSectionProps {
  data: PersonalServiceData
}
export default function TransfersFeatureSection({data}:TransfersFeatureSectionProps) {
   const [isModalOpen, setModalOpen] = useState(false);
  const items = [
    {
      icon: (
        <div className="w-10 h-10 bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <FaGlobe className="text-[#263244] w-5 h-5" />
        </div>
      ),
      title: `${data.Title12} ${data.Title13}`,
      button: `${data.button}`,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image1?.formats?.large?.url || data.image1?.formats?.medium?.url || data.image1?.url}`,
      reverse: false,
    },
    {
      icon: (
        <div className="w-10 h-10 bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <img src="/personal/arrows.svg" alt="" className="w-5 h-5" />
        </div>
      ),
      title: `${data.Title14} ${data.Title15}`,
      button: `${data.button2}`,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.imges2?.formats?.large?.url || data.imges2?.formats?.medium?.url || data.imges2?.url || "/personal/mob-left.png"}`,
      reverse: true,
    },
  ]

  return (
    <section className="bg-white py-12 px-4">
      <div className="lg:max-w-3xl  mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`grid lg:grid-cols-2 items-center ${index === 0 ? "mb-16" : ""}`}
          >
            {/* Content Section */}
            <div className={`space-y-6 ${item.reverse ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex items-center justify-start">{item.icon}</div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#263244] leading-tight mb-4">{item.title}</h2>
                <button className="bg-[#E74529] hover:bg-[#cf3c21] text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors">
                  {item.button}
                </button>
              </div>
              <h3 className="text-[30px] lg:text-[40px] leading-tight lg:leading-normal font-extrabold text-[#263244]">{item.title}</h3>
              
              <Button onClick={() => setModalOpen(true)} className="bg-[#E74529] text-white rounded-md lg:rounded-xl px-8 lg:px-12 py-2 font-bold text-[8px] lg:text-[20px] hover:bg-[#cf3c21] transition">
                {item.button}
              </Button>
            </div>

            <div className="flex-1 items-center lg:h-full h-[286px]  -mt-12 lg:-mt-0 lg:max-w-[500px]">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={600}
                className="object-contain  h-[266px] lg:w-full lg:h-auto"
              />
            </div>
          </motion.div>
        ))}
          <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />

      </div>
    </section>
  )
}
