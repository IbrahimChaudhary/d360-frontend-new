"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/toggle-store";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import { DownloadModal } from "./download-modal";
import { HomePageData } from "@/types/home/home";
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

  const handleAreaHover = (side: "left" | "right") => setHoveredSide(side);
  const resetHover = () => setHoveredSide(null);

  return (
    <div
      className="lg:flex hidden relative w-full mt-10 h-[650px] overflow-hidden bg-black"
      onMouseLeave={resetHover}
    >
      {/* Panels Container */}
      <div className="absolute top-0 left-0 w-full h-full flex z-10">
        {/* LEFT SIDE (PHYSICAL) */}
        <motion.div
          onMouseEnter={() => handleAreaHover("left")}
          animate={{
            width:
              hoveredSide === "left"
                ? "100%"
                : hoveredSide === "right"
                ? "0%"
                : "50%",
          }}
          transition={{ duration: 0.6 }}
          className="relative h-full overflow-hidden"
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
                  className="absolute top-[15%] left-[45%]"
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
                  className="absolute top-[10%] right-[10%]"
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
                  className="absolute top-[30%] left-[15%]"
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
                  className="absolute bottom-[0%] left-[30%]  -z-50"
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
                  className="absolute top-[50%] left-[3%]"
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
                  className="absolute top-[10%] left-[3%]"
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
                  className="absolute top-[90%] left-[90%]"
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
                  className="absolute top-[70%] left-[20%]"
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
                  className="absolute top-[50%] left-[70%]"
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
                  className="absolute top-[50%] left-[10%]"
                />
                <Image
                  src="/home/lock.png"
                  alt="lock"
                  width={50}
                  height={50}
                  className="absolute top-[25%] left-[45%]"
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
                  className="absolute top-[30%] left-[15%]"
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
                  className="absolute bottom-[10%] left-[50%]"
                />
                <Image
                  src="/home/plane.png"
                  alt="plane"
                  width={50}
                  height={50}
                  className="absolute bottom-[10%] left-[35%]"
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
                  className="absolute top-[10%] left-[10%]"
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

          {/* Fade-in Label */}
          <AnimatePresence>
            {!hoveredSide && (
              <motion.div
                key="physical-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-5 w-full text-center text-white text-[75px] z-10 font-extrabold"
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
              className="absolute inset-0 top-[65%] flex flex-col items-center  text-white text-center px-4"
            >
              <h2 className="text-[42.75px] font-extrabold mb-2">
                {data.PhysicalCard}
              </h2>
              <p className="text-[18px] max-w-md pl-5 pr-5 leading-tight">
                {data.PhysicalCardDescription}
              </p>
              <button
                className="mt-2 bg-white text-[#E74529] px-22 py-2 rounded-lg font-bold text-sm shadow-md"
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
          onMouseEnter={() => handleAreaHover("right")}
          animate={{
            width:
              hoveredSide === "right"
                ? "100%"
                : hoveredSide === "left"
                ? "0%"
                : "50%",
          }}
          transition={{ duration: 0.6 }}
          className="relative h-full overflow-hidden"
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
                  className="absolute top-[15%] left-[70%]"
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
                  className="absolute top-[30%] left-[25%]"
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
                  className="absolute bottom-[10%] left-[60%]"
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
                  className="absolute top-[60%] left-[30%]"
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
                  className="absolute top-[30%] left-[30%]"
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
                className="absolute left-[108px] z-10 bottom-6 w-full text-center text-white text-[75px]  font-extrabold rtl:left-[-2px]"
              >
                {data.DigitalCard}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Mockup (Always Visible, But Moves) */}
          <motion.div
            className="absolute w-[400px] h-[700px] top-18 z-10"
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
                  <p className="text-[18px] px-1 mb-4 rtl:px-6 pl-5 pr-5 text-center ">
                    {data.DigitalCardDescription}
                  </p>
                  <button
                    className="bg-white font-bold text-[#E74529] text-sm rounded-lg px-12 py-3 mx-auto block"
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
        className="absolute z-20 pointer-events-none"
        animate={{
          top: hoveredSide === "right" ? "25%" : "50%",
          left: "50%",
          x: "-50%",
          y: hoveredSide === "right" ? "0%" : "-50%",
        }}
        transition={{ duration: 0, ease: "easeOut" }}
        style={{
          width: "300px",
          height: "300px",
        }}
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
