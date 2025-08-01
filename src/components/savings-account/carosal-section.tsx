"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadModal } from "../home/download-modal";

type Slide = {
  heading: string;
  subheading: string;
  paragraph: string;
  image: string;
  icon?: string;
};

type CaroselSliderProps = {
  slides: Slide[];
  showButton?: boolean;
  layout?: "default" | "centered";
  classname?: string;
  textstyle?: string;
  subheading?: string;
  img2?: string;
  icon?: string;
  arrows?: string;
  img1?:string
  btnTxt?:string
  container?:string
  headsection?:string
};

export function Carosel({

  slides,
  showButton = true,
  layout = "default",
  classname,
  textstyle,
  headsection,
  btnTxt,
  arrows,
  img2,
  icon,
  subheading,
  img1,
  container
}: CaroselSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[current];

  const getSlideMotion = (dir: number, delay: number = 0) => ({
    initial: { x: dir > 0 ? 100 : -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay },
    },
    exit: {
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4 },
    },
  });

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section
    className={cn(
      "flex flex-col-reverse lg:flex-row max-w-[1100px] lg:max-w-[1100px]  mx-auto  items-center px-4 lg:px-8 justify-center lg:py-24 pb-10 lg:pb-0",
      headsection,
      layout === "centered" && "text-center lg:text-center justify-center gap-10"
    )}
    
    >
      {/* Text Block */}
      <div
        className={cn(
          "w-full space-y-6 relative ",
          layout === "centered" && ""
        )}
      >
        <div className="space-y-4 flex  flex-col lg:justify-normal justify-center min-h-[280px]">
          <h1 className="text-[30px] lg:pt-0 pt-8 lg:text-[50px] mb-8 lg:mb-12 text-center ltr:lg:text-left rtl:lg:text-right font-extrabold text-[#263244] leading-tight w-[80%] lg:w-full mx-auto">
            {currentSlide.heading}
          </h1>

          <div className={cn(" relative w-full hidden max-w-md h-[200px] lg:h-[300px]",img1)}>
            <Image
              src={currentSlide.image || "/placeholder.svg"}
              alt={currentSlide.heading}
              fill
              className="object-contain"
            />
          </div>

          <div className={cn("rtl:gap-2 lg:gap-0", textstyle)}>
          
            <AnimatePresence mode="wait" custom={direction}>
              {currentSlide.icon && (
                <motion.div
                  key={currentSlide.icon}
                  {...getSlideMotion(direction, 0.5)}
                  custom={direction}
                  className="h-10 w-10 lg:w-14 lg:h-14 flex items-center  justify-center rounded-full bg-[#E6E8EB]"
                >
                  <Image
                    src={currentSlide.icon || "/placeholder.svg"}
                    alt="icon"
                    width={20}
                    height={20}
                    className={cn("object-contain", icon)}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className={cn( "",container)}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.h2
                  key={currentSlide.subheading}
                  {...getSlideMotion(direction, 0.1)}
                  custom={direction}
                  className={cn(
                    "text-[14px] lg:text-[30px] text-center rtl:lg:text-right ltr:lg:text-left font-bold text-[#263244]",
                    subheading
                  )}
                >
                  {currentSlide.subheading}
                </motion.h2>
              </AnimatePresence>

              {/* PARAGRAPH (delayed after subheading) */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.p
                  key={currentSlide.paragraph}
                  {...getSlideMotion(direction, 0.2)}
                  custom={direction}
                  className={cn(
                    "text-[14px] lg:text-[20px] font-[400] lg:w-[80%] lg:mb-2 text-center rtl:lg:text-right ltr:lg:text-left text-[#263244]",
                    classname
                  )}
                >
                  {currentSlide.paragraph}
                </motion.p>
              </AnimatePresence>
            </div>

                       {/* Arrows */}
                       <div
  className={cn(
    
    arrows
  )}
>
  <button className="text-[#263244] hover:text-[#E74529]" onClick={prevSlide}>
    <ArrowLeft />
  </button>
  <button className="text-[#263244] hover:text-[#E74529]" onClick={nextSlide}>
    <ArrowRight />
  </button>
</div>

           

            {showButton && (
              <button
               onClick={() => setModalOpen(true)}
              className="  flex justify-center  px- lg:mx-0 mx-auto  lg:mt-10 bg-[#EB644C] hover:bg-[#d23e23] cursor-pointer rounded-md px-4 lg:mb-22 mb-0 font-bold text-white text-[8px] lg:text-[20px] py-2 lg:px-8 lg:py-2 lg:rounded-[14px] btn-14"
            >
                {btnTxt}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className={cn("relative w-full max-w-sm flex   justify-end items-end h-[200px] lg:h-[300px]",img2)}>
        <Image
          src={currentSlide.image || "/placeholder.svg"}
          alt={currentSlide.heading}
          fill
          className="object-contain"
        />
      </div>
       <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
