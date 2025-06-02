"use client"

import { motion } from "framer-motion"
import { FaGlobe, FaExchangeAlt } from "react-icons/fa"
import Image from "next/image"

const items = [
  {
    icon: <FaGlobe size={20} className="text-[#263244] bg-[#F6F7F8] rounded-full  " />,
    title: "Send money abroad safely and swiftly.",
    button: "Explore",
    image: "/personal/mob-right.png", // adjust path
    reverse: false,
  },
  {
    icon: <FaExchangeAlt size={22} className="text-[#263244] bg-[#F6F7F8] rounded-full " />,
    title: "Transfers that are simple fast and secure",
    button: "Explore",
    image: "/personal/mob-left.png", // adjust path
    reverse: true,
  },
]

export default function TransfersFeatureSection() {
  return (
    <section className="bg-white px-6 lg:px-0 lg:w-[65%] mx-auto">
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
            <div className="flex-1 text-left space-y-4">
              <div className="flex items-center justify-start gap-2">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#263244]">{item.title}</h3>
              <button className="bg-[#E74529] text-white rounded-md px-6 py-2 font-semibold text-sm hover:bg-[#cf3c21] transition">
                {item.button}
              </button>
            </div>

            <div className="flex-1 w-full max-w-[300px] md:max-w-[400px]">
              <Image
                src={item.image}
                alt={item.title}
                width={360}
                height={360}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
