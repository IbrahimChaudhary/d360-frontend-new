"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroProps {
  backgroundImage: string;
  children: React.ReactNode;
  direction?: "ltr" | "rtl";
  containerAlign?: string; // e.g., "lg:items-start" or "lg:items-end"
  bgimage?:string
}

export function Hero({
  backgroundImage,
  children,
  direction = "ltr",
  containerAlign = "lg:items-center", // default to center
  bgimage
}: HeroProps) {
  const isRTL = direction === "rtl";

  return (
    <section className="w-full md:min-h-[750px] lg:h-[100vh] relative overflow-hidden">
      <div
        className={`absolute w-full h-full bg-no-repeat bg-cover bg-center z-0 ${bgimage}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div
        className={`container max-w-screen w-full px-4 md:px-18 flex flex-col md:flex-row justify-between h-full pt-28 lg:pt-32 pb-16 relative z-10 ${containerAlign}`}
      >
        <motion.div
          className={` ${isRTL ? "text-right" : "text-left"}`}
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>

        <motion.div
          className="w-full md:w-[45%] mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Future visual content */}
        </motion.div>
      </div>
    </section>
  );
}
