"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useStore } from "@/store/toggle-store";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import { HomePageData } from "@/types/home/home";

const iconFadeIn = {
  hidden: { opacity: 1, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 1.5, ease: "easeOut" },
  }),
};

const statCardVariant = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};
interface ScrollSectionProps {
  data: HomePageData;
}
export default function ScrollSection({ data }: ScrollSectionProps) {
  const { language } = useStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollLockRef = useRef(false);

  const content = language === "en" ? englishContent : arabicContent;
  const [ref, inView] = useInView({ threshold: 0.5 });
  const sections = [
    {
      title1: data.Title1,
      title2: data.Title1B,
      description: data.Description1,
      image: "/card/red.png",
      rotate: 20,
      icons:
        language === "ar"
          ? [
              { src: "/home/card-icons/plane.png", className: "-top-20 left-40" },
              {
                src: "/home/card-icons/location.png",
                className: "-bottom-30 right-20",
              },
              {
                src: "/home/card-icons/coin.png",
                className: "top-10 -left-16 h-28",
              },
              {
                src: "/home/card-icons/stat-card-ar.png",
                className: "top-50 -left-10",
              },
            ]
          : [
              { src: "/home/card-icons/plane.png", className: "-top-20 left-40" },
              {
                src: "/home/card-icons/location.png",
                className: "-bottom-30 right-20",
              },
              {
                src: "/home/card-icons/coin.png",
                className: "top-10 -left-16 h-28",
              },
              {
                src: "/home/card-icons/stat-card.png",
                className: "top-50 -left-10",
              },
            ],
    },
    {
      title1: data.Title2,
      title2: data.Title2B,
      description: data.Description2,
      image: "/card/red.png",
      rotate: -10,
      icons:
        language === "ar"
          ? [
              { src: "/home/card-icons/lock.png", className: "-top-20 left-30" },
              {
                src: "/home/card-icons/shield.png",
                className: "-bottom-15 right-10",
              },
              {
                src: "/home/card-icons/coin.png",
                className: "top-30 -left-16 h-28",
              },
              {
                src: "/home/card-icons/stat-card2-ar.png",
                className: "top-60 right-69",
              },
            ]
          : [
              { src: "/home/card-icons/lock.png", className: "-top-20 left-30" },
              {
                src: "/home/card-icons/shield.png",
                className: "-bottom-15 right-10",
              },
              {
                src: "/home/card-icons/coin.png",
                className: "top-30 -left-16 h-28",
              },
              { src: "/home/card-icons/stat-card2.png", className: "top-60" },
            ],
    },
    {
      title1: data.Title3,
      title2: data.Title3B,
      description: data.Description3,
      image: "/card/red.png",
      rotate: 10,
      icons:
        language === "ar"
          ? [
              { src: "/home/card-icons/arrow.png", className: "-top-25 left-30" },
              {
                src: "/home/card-icons/shield.png",
                className: "-bottom-20 right-20",
              },
              {
                src: "/home/card-icons/watch.png",
                className: "top-10 -left-16 h-28",
              },
              {
                src: "/home/card-icons/stat-card3-ar.png",
                className: "top-50 -left-10",
              },
            ]
          : [
              { src: "/home/card-icons/arrow.png", className: "-top-25 left-30" },
              {
                src: "/home/card-icons/shield.png",
                className: "-bottom-20 right-20",
              },
              {
                src: "/home/card-icons/watch.png",
                className: "top-10 -left-16 h-28",
              },
              {
                src: "/home/card-icons/stat-card3.png",
                className: "top-50 -left-10",
              },
            ],
    },
    {
      title1: data.Title8,
      title2: data.Title8B,
      description: data.Description8,
      image: "/card/red.png",
      rotate: 20,
      icons:
        language === "ar"
          ? [
              {
                src: "/home/card-icons/diamond.png",
                className: "-top-25 left-30",
              },
              {
                src: "/home/card-icons/coin.png",
                className: "-bottom-26 right-20",
              },
              {
                src: "/home/card-icons/mag.png",
                className: "top-10 -left-16 h-28 ",
              },
              {
                src: "/home/card-icons/stat-card4-ar.png",
                className: "top-50 -left-10",
              },
            ]
          : [
              {
                src: "/home/card-icons/diamond.png",
                className: "-top-25 left-30",
              },
              {
                src: "/home/card-icons/coin.png",
                className: "-bottom-26 right-20",
              },
              {
                src: "/home/card-icons/mag.png",
                className: "top-10 -left-16 h-28",
              },
              {
                src: "/home/card-icons/stat-card4.png",
                className: "top-50 -left-10",
              },
            ],
    },
  ];

  // Scroll logic
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!inView) return;

      if (scrollLockRef.current) return;
      e.preventDefault();

      scrollLockRef.current = true;

      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }

      setTimeout(() => {
        scrollLockRef.current = false;
      }, 1000);
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [activeIndex, inView]);

  // Lock body scroll only while in the section and in the range
  useEffect(() => {
    const isScrollingSlides =
      inView && activeIndex > 0 && activeIndex < sections.length - 1;
    document.body.style.overflow = isScrollingSlides ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [inView, activeIndex]);

  const current = sections[activeIndex];

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[#FDF0ED]"
    >
      <div
        ref={containerRef}
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-16 gap-14",
          language === "ar" ? "md:flex-row-reverse gap-[200px]" : "md:flex-row"
        )}
      >
        <div className=" text-start">
          <motion.h2
            key={`${current.title1}-${current.title2}`} // make key more unique
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl w-full md:text-[80px] uppercase font-extrabold text-[#E74529] ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {current.title1}
            <br />
            {current.title2}
          </motion.h2>

          <motion.p
            key={current.description}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 w-full lg:w-[70%] text-[#263244] text-base md:text-[28px] ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {current.description}
          </motion.p>
        </div>

        <div className="relative mt-10 md:mt-0 md:ml-20 w-full max-w-md">
          <motion.div
            key={current.image}
            initial={{ opacity: 0, y: -100, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: current.rotate }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={current.image}
              alt={current.title1}
              width={550}
              height={350}
              className="object-contain w-full h-auto"
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {current.icons.map((icon, i) => {
              const isStatCard = typeof icon.src === 'string' && icon.src.includes("stat-card");
              if (!isStatCard) return null;

              return (
                <motion.div
                  key={icon.src}
                  variants={statCardVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={cn("absolute", icon.className)}
                >
                  <Image
                    src={icon.src}
                    alt={`stat-${i}`}
                    width={160}
                    height={80}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>

          {current.icons.map((icon, i) => {
            const isStatCard = typeof icon.src === 'string' && icon.src.includes("stat-card");
            if (isStatCard) return null;

            return (
              <motion.div
                key={icon.src}
                custom={0.4 + i * 0.1}
                variants={iconFadeIn}
                initial="hidden"
                animate="visible"
                className={cn("absolute", icon.className)}
              >
                <Image
                  src={icon.src}
                  alt={`icon-${i}`}
                  width={120}
                  height={80}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
