"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardsData } from "@/types/card/card";
import { useStore } from "@/store/toggle-store";
import { DownloadModal } from "../home/download-modal";

interface CardVariantsProps {
  data: CardsData;
}

const translations = {
  en: {
    subtitle: "Ideal for everyday payments with full control.",
    button: "Get your card now",
    footer: "* Free for all D360  Bank customers.",
  },
  ar: {
    subtitle: "مثالي للمدفوعات اليومية مع تحكم كامل.",
    button: "احصل على بطاقتك الآن",
    footer: " *مجانًا لجميع عملاء D360",
  },
};

export default function CardVariants({ data }: CardVariantsProps) {
  const [selected, setSelected] = useState(0);
  const [animate, setAnimate] = useState(false);
  const { language } = useStore();

  const t = translations[language] || translations.en;
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timeout);
  }, [selected]);
  const features = [
    `${data.feat1}`,
    `${data.feat2}`,
    `${data.feat3}`,
    `${data.feat4}`,
    `${data.feat5}`,
    `${data.feat6}`,
  ];
  const cards = [
    {
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
        data?.imges1?.formats?.large?.url ||
        data?.imges1?.formats?.medium?.url ||
        data?.imges1?.url ||
        "/placeholder-card-1.png"
      }`,
      bg: "bg-[#FDF0ED]",
      button: "bg-[#EB644C]",
      text: "text-[#EB644C]",
      iconBg: "bg-[#EB644C]",
      border: "border-[#EB644C] border-[1px] rounded-full",
      icons: [
        "/card/icons/card.svg",
        "/card/icons/call.svg",
        "/card/icons/bell.svg",
        "/card/icons/mob.svg",
        "/card/icons/stack.svg",
        "/card/icons/fees.svg",
      ],
    },
    {
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
        data?.imges2?.formats?.large?.url ||
        data?.imges2?.formats?.medium?.url ||
        data?.imges2?.url ||
        "/placeholder-card-2.png"
      }`,
      bg: "bg-[#F6F7F8]",
      button: "bg-[#EB644C]",
      text: "text-[#293242]",
      iconBg: "bg-[#004118]",
      border: "border-[#004118] border-[1px]",
      icons: [
        "/card/icons/card-green.svg",
        "/card/icons/call-green.svg",
        "/card/icons/bell-green.svg",
        "/card/icons/mob-green.svg",
        "/card/icons/stack-green.svg",
        "/card/icons/fees-green.svg",
      ],
    },
    {
      image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${
        data?.imges3?.formats?.large?.url ||
        data?.imges3?.formats?.medium?.url ||
        data?.imges3?.url ||
        "/placeholder-card-3.png"
      }`,
      bg: "bg-[#F2EAE5]",
      button: "bg-[#EB644C]",
      text: "text-[#293242]",
      iconBg: "bg-[#DCC9BB]",
      border: "border-[#DCC9BB] border-[1px]",
      icons: [
        "/card/icons/card-gold.svg",
        "/card/icons/call-gold.svg",
        "/card/icons/bell-gold.svg",
        "/card/icons/mob-gold.svg",
        "/card/icons/stack-gold.svg",
        "/card/icons/fees-gold.svg",
      ],
    },
  ];
  const current = cards[selected];

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className={`${current.bg} py-6 lg:py-10 `}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="ltr:text-left leading-tight rtl:text-right mb-6">
            <h2
              className={`text-[30px] sm:text-5xl  w-[65%] font-extrabold mb-2 ${current.text}`}
            >
              {data.Title2}
            </h2>
            <h2
              className={`text-[30px] sm:text-5xl  w-[65%] font-extrabold mb-2 ${current.text}`}
            >
              {data.Title3}
            </h2>
            <p className="text-[#263244] text-[14px] font-[400] mb-4">
              {data.Description5}
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className={`${current.button} text-white px-6 py-3 rounded-lg font-bold text-[8px] `}
            >
              {data.getCard}
            </button>
          </div>

          {/* Features Grid - Mobile 2 columns */}
          <motion.div
            className="grid grid-cols-2 gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                className={cn(
                  "flex  items-center gap-2 rounded-2xl px-2 py-1 lg:text-center",
                  current.border
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center mb-1",
                    current.iconBg
                  )}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.icons[i]}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <Image
                        src={current.icons[i] || "/placeholder.svg"}
                        alt={`icon-${i}`}
                        width={16}
                        height={16}
                        className=""
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <p className="text-[7px] font-bold text-[#263244] leading-tight">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Card Image - Mobile */}
          <div className="flex justify-center mb-6">
          <div className="relative w-[332px] h-48 ">
              <Image
                src={current.image || "/placeholder.svg"}
                alt="card"
                fill
                className="object-contain border-none rounded-xl"
              />
            </div>
          </div>


          {/* Bottom Section - Mobile */}
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-3">
              {cards.map((_, idx) => {
                const colors = ["bg-[#E74529]", "bg-[#0A6C4D]", "bg-[#D9D9D9]"];
                const isActive = idx === selected;

                return (
                  <div key={idx} className="relative w-3 h-3">
                    <button
                      onClick={() => {
                        setSelected(idx);
                        setAnimate(false);
                      }}
                      className={cn("w-3 h-3 rounded-full", colors[idx])}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="mobile-selector-ring"
                        className="absolute top-1.5 left-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-black"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 50,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-lg font-bold text-black">{data.free} </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-evenly gap-10">
          {/* Left Side */}
          <div>
            <div className="space-y-2">
              <h2 className={`text-[60px] font-bold ${current.text}`}>
                {data.Title2}
              </h2>
              <p className="text-[#263244] text-[25px]">{t.subtitle}</p>
              <button
                onClick={() => setModalOpen(true)}
                 className={`${current.button} text-white hover:bg-[#d23e23] cursor-pointer px-5 py-2 rounded-xl font-bold text-[20px] btn-14`} >
                {t.button}
              </button>
            </div>

            {/* Card Animation - Desktop */}
            <motion.div
              className="relative h-[230px] mt-10 mr-22"
              animate={animate ? { rotate: -20, y: 20, opacity: 1 } : {}}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              <Image
                src={current.image || "/placeholder.svg"}
                alt="card"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Right Features - Desktop */}
          <motion.div
            className="flex-1 space-y-4 w-full pt-6 max-w-[430px]"
            initial={{ x: 50, opacity: 0 }}
            animate={animate ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                className={cn(
                  "flex items-center gap-4 rounded-full px-4 py-4",
                  current.border
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    current.iconBg
                  )}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.icons[i]}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <Image
                        src={current.icons[i] || "/placeholder.svg"}
                        alt={`icon-${i}`}
                        width={16}
                        height={16}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <p className="text-[19px] font-bold text-[#263244]">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Bottom Section */}
        <div className="hidden lg:flex justify-around items-center pt-10 lg:pt-26 ">
          <p className="text-[25px] w-full max-w-[430px] font-extrabold text-black">
          {t.footer}
          </p>

          <div className="flex justify-end w-full max-w-[430px] gap-4 relative">
            {cards.map((_, idx) => {
              const colors = ["bg-[#E74529]", "bg-[#0A6C4D]", "bg-[#D9D9D9]"];
              const isActive = idx === selected;

              return (
                <div key={idx} className="relative w-4 h-4">
                  <button
                    onClick={() => {
                      setSelected(idx);
                      setAnimate(false);
                    }}
                    className={cn("w-4 h-4 rounded-full", colors[idx])}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="desktop-selector-ring"
                      className="absolute top-[29px] rtl:lg:top-[1px] ltr:lg:top-[1.5px] left-0 w-4 h-4 rounded-full ring-1 lg:ring-2 ring-black"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 50,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
