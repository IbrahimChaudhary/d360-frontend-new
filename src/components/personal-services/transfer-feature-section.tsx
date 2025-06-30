"use client"

import { motion } from "framer-motion"
import { FaGlobe, FaExchangeAlt } from "react-icons/fa"
import Image from "next/image"
import { PersonalServiceData } from "@/types/personal-service/personal-service"
import Link from 'next/link'
import { useStore } from "@/store/toggle-store";


interface TransfersFeatureSectionProps{
  data:PersonalServiceData
}
export default function TransfersFeatureSection({data}:TransfersFeatureSectionProps) {
  const items = [
    {
      icon: (
        <div className="lg:w-14 lg:h-14 w-10 h-10 bg-[#F6F7F8] rounded-full flex items-center justify-center">
        <FaGlobe className="text-[#263244] lg:w-10 lg:h-10 w-5 h-5" />
        </div>
      ),
      title: `${data.Title12} ${data.Title13}`,
      button: `${data.button}`,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image1?.formats?.large?.url || data.image1?.formats?.medium?.url || data.image1?.url}`,
      reverse: false,
    },
    {
      icon: (
        <div className="w-[45px] h-[45px] bg-[#F6F7F8] rounded-full flex items-center justify-center">
          <img src="/personal/arrows.svg" className="lg:w-[28px] lg:h-[28px] w-5 h-5" alt="" />
        </div>
      ),
      title: `${data.Title14} ${data.Title15}`,
      button: `${data.button2}`,
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.imges2?.formats?.large?.url || data.imges2?.formats?.medium?.url || data.imges2?.url || "/personal/mob-left.png"}`,
      reverse: true,
    },
  ];

  const { language } = useStore();
  const isRTL = language === "ar";

  return (
    <section className="bg-white py-12 px-4 overflow-hidden">
    <div className="lg:max-w-3xl  mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`grid lg:grid-cols-2 items-center ${index === 0 ? "lg:mb-16" : ""}`}
            >
             <div className={`space-y-6 ${item.reverse ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex items-center justify-start">{item.icon}</div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#263244] leading-tight mb-4">{item.title}</h2>
                <Link href={isRTL ? "/ar/international-transfer" : "/en/international-transfer"}>
                  <button className="bg-[#E74529]  text-white px-8 py-2 rounded-[10px] lg:rounded-xl font-bold text-[8px] lg:text-[14px]  transition-colors btn-14">
                    {item.button}
                  </button>
              </Link>
            </div>
            </div>

            <div
  className={`flex ${
    item.reverse
      ? "lg:order-1 justify-center lg:justify-start"
      : "lg:order-2 rtl:justify-end ltr:justify-center lg:justify-end"
  }`}
>
  <div className="relative flex justify-end lg:items-end  lg:h-[330px] h-[286px]  lg:max-w-[500px] w-full">
    <div className="w-[90%] lg:w-full">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        width={300}
        height={700}
        className={`w-full h-auto object-contain ${index === 1 ? " -mt-10 ltr:ml-15 rtl:lg:mr-0 rtl:mr-15 ltr:lg:ml-0 lg:-mt-0" : "-mt-15 lg:-mt-0 lg:ml-0 ltr:ml-10 rtl:lg:mr-0 rtl:mr-10" }`}
        priority={index === 0}
      />
    </div>
  </div>
</div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}
