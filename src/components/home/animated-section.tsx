"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/toggle-store";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import { DownloadModal } from "./download-modal";
import { HomePageData } from "@/types/home/home";
import { useEffect } from "react";
interface InteractiveCardHeroProps {
  data: HomePageData;
}
export default function InteractiveCardHero({
  data,
}: InteractiveCardHeroProps) {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleAreaHover = (side: "left" | "right") => setHoveredSide(side);
  const handleAreaClick = (side: "left" | "right") => {
    if (!isMobile) return;
    if (hoveredSide === side) {
      // Clicked again on open side → reset to initial
      setHoveredSide(null);
    } else {
      setHoveredSide(side);
    }
  };

  const resetHover = () => setHoveredSide(null);

  return (
    <div
      className="flex  relative w-full mt-10 h-[400px] lg:h-[650px] overflow-hidden bg-black"
      onMouseLeave={resetHover}
    >
      {/* Panels Container */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-row z-10">

        {/* LEFT SIDE (PHYSICAL) */}
        <motion.div
          onMouseEnter={() => !isMobile && handleAreaHover("left")}
          onClick={() => handleAreaClick("left")}
          animate={{
            flexBasis:
              hoveredSide === "left"
                ? "100%"
                : hoveredSide === "right"
                ? "0%"
                : "50%",
          }}
          transition={{ duration: 0.6 }}
          className="relative h-full overflow-hidden flex-grow-0"
        >
          <Image
            src="/home/red-bg.png"
            alt="Physical Card"
            fill
            className="object-cover"
          />
          {/* Red floating vector icons */}

          <div className="absolute inset-0 pointer-events-none z-10">
            {hoveredSide === "left" ? (
              <>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -10 }}
                  transition={{ duration: 1 }}
                  className="absolute top-[5%] left-[10%]"
                >
                  <Image
                    src="/home/aero.png"
                    alt="aero"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 15 }}
                  transition={{ duration: 1.2 }}
                  className="absolute top-[5%] lg:top-[15%] left-[45%]"
                >
                  <Image
                    src="/home/lock.png"
                    alt="lock"
                    width={50}
                    height={50}
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: -10 }}
                  transition={{ duration: 1.1 }}
                  className="absolute  top-[10%] right-[10%]"
                >
                  <Image
                    src="/home/shade.png"
                    alt="shade"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -20 }}
                  transition={{ duration: 1.3 }}
                  className="absolute top-[30%] left-[5%] lg:left-[15%]"
                >
                  <Image
                    src="/home/diamond.png"
                    alt="diamond"
                    width={50}
                    height={50}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 15 }}
                  transition={{ duration: 1.4 }}
                  className="absolute top-[35%] left-[80%]"
                >
                  <Image
                    src="/home/pill.png"
                    alt="pill"
                    width={45}
                    height={45}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -15 }}
                  transition={{ duration: 1.2 }}
                  className="absolute bottom-[30%] left-[30%]"
                >
                  <Image
                    src="/home/pill2.png"
                    alt="pill2"
                    width={50}
                    height={50}
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: 10 }}
                  transition={{ duration: 1.1 }}
                  className="absolute bottom-[15%] left-[5%]"
                >
                  <Image
                    src="/home/moon.png"
                    alt="moon"
                    width={45}
                    height={45}
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: -15 }}
                  transition={{ duration: 1.5 }}
                  className="absolute lg:block hidden bottom-[0%] left-[30%]  -z-50"
                >
                  <Image
                    src="/home/case.png"
                    alt="case"
                    width={90}
                    height={90}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 10 }}
                  transition={{ duration: 1.4 }}
                  className="absolute  top-[50%] left-[3%]"
                >
                  <Image
                    src="/home/plane.png"
                    alt="plane"
                    width={50}
                    height={50}
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 20 }}
                  transition={{ duration: 1.4 }}
                  className="absolute bottom-[10%] left-[85%]"
                >
                  <Image
                    src="/home/aero.png"
                    alt="plane"
                    width={80}
                    height={80}
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 10 }}
                  transition={{ duration: 1.4 }}
                  className="absolute lg:block hidden top-[10%] left-[3%]"
                >
                  <Image
                    src="/home/wallet.png"
                    alt="plane"
                    width={80}
                    height={80}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 10 }}
                  transition={{ duration: 1.4 }}
                  className="absolute lg:block hidden top-[90%] left-[90%]"
                >
                  <Image
                    src="/home/blur-d.png"
                    alt="plane"
                    width={100}
                    height={100}
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 10 }}
                  transition={{ duration: 1.4 }}
                  className="absolute lg:block hidden top-[70%] left-[20%]"
                >
                  <Image
                    src="/home/shade.png"
                    alt="plane"
                    width={80}
                    height={80}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 10 }}
                  transition={{ duration: 1.4 }}
                  className="absolute top-[50%] left-[80%] lg:left-[70%]"
                >
                  <Image
                    src="/home/dark-plane.png"
                    alt="plane"
                    width={60}
                    height={60}
                  />
                </motion.div>
              </>
            ) : (
              <>
                {/* Static positions for center view */}
                <Image
                  src="/home/aero.png"
                  alt="aero"
                  width={90}
                  height={90}
                  className="absolute top-[50%] left-[0%] lg:left-[10%]"
                />
                <Image
                  src="/home/lock.png"
                  alt="lock"
                  width={50}
                  height={50}
                  className="absolute top-[25%] left-[25%] lg:block hidden lg:left-[45%]"
                />
                <Image
                  src="/home/shade.png"
                  alt="shade"
                  width={40}
                  height={40}
                  className="absolute top-[10%] right-[10%]"
                />
                <Image
                  src="/home/diamond.png"
                  alt="diamond"
                  width={50}
                  height={50}
                  className="absolute top-[10%] lg:top-[30%] left-[15%]"
                />
                <Image
                  src="/home/pill.png"
                  alt="pill"
                  width={45}
                  height={45}
                  className="absolute top-[45%] left-[50%]"
                />
                <Image
                  src="/home/pill2.png"
                  alt="pill2"
                  width={50}
                  height={50}
                  className="absolute bottom-[30%] left-[30%]"
                />
                <Image
                  src="/home/moon.png"
                  alt="moon"
                  width={45}
                  height={45}
                  className="absolute bottom-[15%] left-[5%]"
                />
                <Image
                  src="/home/case.png"
                  alt="case"
                  width={90}
                  height={90}
                  className="absolute lg:block hidden bottom-[10%] left-[50%]"
                />
                <Image
                  src="/home/plane.png"
                  alt="plane"
                  width={50}
                  height={50}
                  className="absolute lg:block hidden bottom-[10%] left-[35%]"
                />
                <Image
                  src="/home/blur-d.png"
                  alt="plane"
                  width={100}
                  height={100}
                  className="absolute bottom-[1%] left-[75%]"
                />
                <Image
                  src="/home/wallet.png"
                  alt="plane"
                  width={100}
                  height={100}
                  className="absolute lg:block hidden top-[10%] left-[10%]"
                />
                <Image
                  src="/home/dark-plane.png"
                  alt="plane"
                  width={50}
                  height={50}
                  className="absolute bottom-[40%] left-[60%]"
                />
              </>
            )}
          </div>

         {/* Fadein label */}
          <AnimatePresence>
            {!hoveredSide && (
              <motion.div
                key="physical-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-6 lg:bottom-5 w-full text-center text-white text-[27px] lg:text-[75px] lg:z-10 z-[100] font-extrabold"
              >
                {data.PhysicalCard}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Full Content */}
          {hoveredSide === "left" && (
            <motion.div
              key="left-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 top-[60%] lg:top-[65%] flex flex-col items-center  text-white text-center px-4"
            >
              <h2 className="text-[25px] lg:text-[42.75px] font-extrabold mb-2">
                {data.PhysicalCard}
              </h2>
              <p className="text-[14px] lg:text-[22.09px] max-w-sm lg:w-full w-[70%] lg:max-w-md pl-5 pr-5 leading-tight">
                {data.PhysicalCardDescription}
              </p>
              <button
                className="mt-2 bg-white text-[#E74529] px-8 lg:px-22 py-2 rounded-lg font-bold text-[8px] lg:text-[14.25px] shadow-md"
                onClick={() => setModalOpen(true)}
              >
                {data.PhysicalCardCTA}
              </button>
              <div
                onMouseEnter={() => handleAreaHover("right")}
                className="absolute top-0 right-0 h-full w-10"
              />
            </motion.div>
          )}
        </motion.div>

        {/* RIGHT SIDE (DIGITAL) */}
        <motion.div
  onMouseEnter={() => !isMobile && handleAreaHover("right")}
  onClick={() => handleAreaClick("right")}
  animate={{
    flexBasis:
      hoveredSide === "right"
        ? "100%"
        : hoveredSide === "left"
        ? "0%"
        : "50%",
  }}
  transition={{ duration: 0.6 }}
  className="relative h-full overflow-hidden flex-grow-0"
>

          <Image
            src="/home/blue-bg.png"
            alt="Digital Card"
            fill
            className="object-cover"
          />
          {/* Blue floating vector icons */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {hoveredSide === "right" ? (
              <>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -15 }}
                  transition={{ duration: 1 }}
                  className="absolute top-[10%] left-[10%]"
                >
                  <Image
                    src="/home/shade-blue.png"
                    alt="hex"
                    width={70}
                    height={70}
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: 20 }}
                  transition={{ duration: 1.2 }}
                  className="absolute top-[3%] lg:top-[15%] left-[70%]"
                >
                  <Image
                    src="/home/globe.png"
                    alt="cube"
                    width={60}
                    height={60}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 20 }}
                  transition={{ duration: 1.3 }}
                  className="absolute top-[30%] left-[10%] lg:left-[25%]"
                >
                  <Image
                    src="/home/coin.png"
                    alt="coin"
                    width={60}
                    height={60}
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: -10 }}
                  transition={{ duration: 1.4 }}
                  className="absolute top-[45%] left-[80%]"
                >
                  <Image
                    src="/home/case-blue.png"
                    alt="plane"
                    width={100}
                    height={100}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 15 }}
                  transition={{ duration: 1.2 }}
                  className="absolute bottom-[15%] left-[20%]"
                >
                  <Image
                    src="/home/blur-blue.png"
                    alt="glow"
                    width={70}
                    height={70}
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: 15 }}
                  transition={{ duration: 1.5 }}
                  className="absolute bottom-[10%] lg:left-[60%]"
                >
                  <Image
                    src="/home/aero-blue.png"
                    alt="suitcase"
                    width={100}
                    height={100}
                  />
                </motion.div>
              </>
            ) : (
              <>
                {/* Static icons for center view */}
                <Image
                  src="/home/aero-blue.png"
                  alt="hex"
                  width={100}
                  height={100}
                  className="absolute top-[60%] left-[10%] lg:left-[30%]"
                />
                <Image
                  src="/home/shade-blue.png"
                  alt="cube"
                  width={40}
                  height={40}
                  className="absolute top-[15%] left-[70%]"
                />
                <Image
                  src="/home/coin.png"
                  alt="coin"
                  width={60}
                  height={60}
                  className="absolute top-[10%] lg:top-[30%] left-[30%]"
                />
                <Image
                  src="/home/globe.png"
                  alt="plane"
                  width={50}
                  height={50}
                  className="absolute top-[45%] left-[80%]"
                />
                <Image
                  src="/home/case-blue.png"
                  alt="glow"
                  width={100}
                  height={100}
                  className="absolute top-[65%] left-[60%]"
                />
                <Image
                  src="/home/blur-blue.png"
                  alt="suitcase"
                  width={70}
                  height={70}
                  className="absolute bottom-[10%] right-0"
                />
              </>
            )}
          </div>

          {/* Fade-in Label */}
          <AnimatePresence>
            {!hoveredSide && (
              <motion.div
                key="digital-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute  lg:left-[108px] lg:z-10 z-[100] bottom-6 w-full text-center text-white text-[27px]  lg:text-[75px]  font-extrabold rtl:left-[-2px]"
              >
                {data.DigitalCard}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Mockup (Always Visible, But Moves) */}
          <motion.div
            className="lg:block hidden absolute w-[400px] h-[700px] top-18 z-10"
            animate={{
              left:
                hoveredSide === "right"
                  ? "50%"
                  : language === "ar"
                  ? "80%"
                  : "-20%",
              x: hoveredSide === "right" ? "-50%" : "0%",
              opacity: 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/home/mobile-mockup.png"
              alt="Mobile Phone"
              fill
              className="object-contain"
            />

            {/* Only show content when fully open */}
            <AnimatePresence>
              {hoveredSide === "right" && (
                <motion.div
                  key="mobile-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-[50%] w-full px-6 text-center text-white"
                >
                  <h2 className="text-[42.75px] font-bold ">
                    {data.DigitalCard}
                  </h2>
                  <p className="text-[20px] px-1 mb-4 rtl:px-6 pl-5 pr-5 text-center ">
                    {data.DigitalCardDescription}
                  </p>
                  <button
                    className="bg-white font-bold text-[#E74529] text-[14.25px] rounded-lg px-12 py-2 mx-auto block"
                    onClick={() => setModalOpen(true)}
                  >
                    {data.DigitalCardCTA}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            className="block lg:hidden absolute w-[270px] h-[700px] -top-26 z-10"
            animate={{
              left:
                hoveredSide === "right"
                  ? "50%"
                  : language === "ar"
                  ? "-160%"
                  : "-20%",
              x: hoveredSide === "right" ? "-50%" : "60%",
              opacity: 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/home/mobile-mockup.png"
              alt="Mobile Phone"
              fill
              className="object-contain"
            />

            {/* Only show content when fully open */}
            <AnimatePresence>
              {hoveredSide === "right" && (
                <motion.div
                  key="mobile-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-[50%] w-full px-6 text-center text-white"
                >
                  <h2 className="text-[20px] font-bold ">{data.DigitalCard}</h2>
                  <p className="text-[12px] px-1 mb-4 rtl:px-6 pl-5 pr-5 text-center ">
                    {data.DigitalCardDescription}
                  </p>
                  <button
                    className="bg-white font-bold text-[#E74529] text-[8px] rounded-lg px-8 py-2 mx-auto block"
                    onClick={() => setModalOpen(true)}
                  >
                    {data.DigitalCardCTA}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Trigger Red from left */}
          {hoveredSide === "right" && (
            <div
              onMouseEnter={() => handleAreaHover("left")}
              className="absolute top-0 left-0 h-full w-10"
            />
          )}
        </motion.div>
      </div>

      {/* Center Card (Moves into mobile when right side opens) */}
      <motion.div
        key="center-card"
        className="lg:block hidden absolute z-20 pointer-events-none w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]"
        animate={{
          top: hoveredSide === "right" ? "25%" : "50%",
          left: "50%",
          x: "-50%",
          y: hoveredSide === "right" ? "0%" : "-50%",
        }}
        transition={{ duration: 0, ease: "easeOut" }}
      >
        <Image
          src={
            hoveredSide === "right"
              ? "/home/card-digital.png"
              : "/home/card.png"
          }
          alt="Center Card"
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.div
        key="center-card"
        className="block lg:hidden absolute z-20 pointer-events-none w-[200px] h-[200px] "
        animate={{
          top: hoveredSide === "right" ? "15%" : "45%",
          left: "50%",
          x: "-50%",
          y: hoveredSide === "right" ? "0%" : "-50%",
        }}
        transition={{ duration: 0, ease: "easeOut" }}
      >
        <Image
          src={
            hoveredSide === "right"
              ? "/home/card-digital.png"
              : "/home/card.png"
          }
          alt="Center Card"
          fill
          className="object-contain"
        />
      </motion.div>

      <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
