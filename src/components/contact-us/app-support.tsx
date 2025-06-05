"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactPageData } from "@/types/contact-us/contact-us";
import { DownloadModal } from "../home/download-modal";
import { useState } from "react";

interface AppSupportSectionProps {
  data: ContactPageData;
}

export function AppSupportSection({ data }: AppSupportSectionProps) {
  
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image on Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[280px] sm:max-w-[320px]"
        >
          <Image
            src="/contact/contact-mob.png" // update with your image path
            alt="App Support Screen"
            width={320}
            height={600}
            objectFit="contain"
            className="w-[180px] h-[360px] sm:w-[240px] sm:h-[480px] md:w-[300px] md:h-[600px] mx-auto"
          />
        </motion.div>

        {/* Text on Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-center md:text-left"
        >
          <h3 className="text-[20px] md:text-[40px]  text-[#263244] mb-6">
            {data.Title1}
          </h3>

          <Button 
          onClick={() => setModalOpen(true)}
          className="bg-[#E74529] hover:bg-[#e93d20] text-white lg:rounded-xl rounded-md text-[8px] font-bold  px-6 py-2 lg:text-[20px]">
            Download App
          </Button>
        </motion.div>
      </div>
      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
