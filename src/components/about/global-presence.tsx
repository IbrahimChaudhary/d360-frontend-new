"use client"

import { useState, type ReactNode } from "react";
import { Button } from "../ui/button";
import { DownloadModal } from "../home/download-modal";
import { motion } from "framer-motion"
import Image from "next/image"
import { Link } from "lucide-react";

interface CTAProps {
  title: string
  subtitle: string
  subtitle2: string
  ctaText: string
  backgroundImage: string
  onClick?: () => void
}

export function GlobalCTA({
  title,
  subtitle,
  subtitle2,
  ctaText,
  backgroundImage,
  onClick
}: CTAProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    
    <section className=" hidden md:flex relative w-full h-[500px] md:h-[430px] my-24  items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="CTA Background"
        fill
        priority
        className="object-cover object-center z-10 rtl:scale-x-[-1]"
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 px-4 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-[60px] px- font-extrabold text-[#263244]  mb-4">
          {title}
        </h2>
        <p className="text-md md:text-[20px] lg:px-60 text-[#263244] ">
          {subtitle}
        </p>
        <p className="text-md md:text-[20px] lg:px-60 text-[#263244]  mb-8">
          {subtitle2}
        </p>
        <a href="/contact-us">
        <button
          className="bg-[#E74529] hover:bg-[#d23e23] text-white px-6 lg:px-8 py-2 rounded-xl font-bold text-[20px]"
          
        >
          {ctaText}
        </button>
        </a>
      </motion.div>

      {/* Optional Overlay Tint */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />
      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </section>
  )
}
