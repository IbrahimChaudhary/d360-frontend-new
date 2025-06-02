"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AppSupportSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        
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
          <h3 className="text-[20px] md:text-2xl font-semibold text-[#263244] mb-6">
            Feel free to connect with us directly for any assistance or inquiries in our app
          </h3>

          <Button className="bg-[#E74529] hover:bg-[#e93d20] text-white rounded-md px-6 py-2 text-sm">
            Download App
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
