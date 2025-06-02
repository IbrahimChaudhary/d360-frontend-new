"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/toggle-store";

interface HeaderProps {
  fixed?: boolean;
  variant?: "default" | "about";
}

export function Header({ variant = "default" }: HeaderProps) {
  const { language, toggleLanguage } = useStore();
  const isRTL = language === "ar";

  const handleToggle = useCallback(() => {
    toggleLanguage();
  }, [toggleLanguage]);

  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      if (currentY > lastY && currentY > 80) {
        setScrollDir("down");
      } else if (currentY < lastY) {
        setScrollDir("up");
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-based styles (same for both variants)
  const isBlur = scrollY > 50 && scrollY < 500;
  const isWhite = scrollY >= 500;
  const isHidden = scrollDir === "down" && isWhite;

  // Logic for changing logo and nav color (only for 'default')
  const shouldChangeAssets = variant === "default";

  const logoSrc = shouldChangeAssets
    ? isWhite
      ? isRTL
        ? "/arabic-logo-black.png"
        : "/footer-logo.png"
      : isRTL
      ? "/arabic-logo.png"
      : "/logo2.png"
    : isRTL
    ? "/arabic-logo-black.png"
    : "/footer-logo.png";

  const navColor = shouldChangeAssets
    ? isWhite
      ? "text-[#293242]"
      : "text-white"
    : "text-[#293242]"; // 'about' stays white

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 lg:px-9",
        isHidden ? "-translate-y-full" : "translate-y-0",
        isWhite
          ? "bg-white shadow-md"
          : isBlur
          ? "bg-white/30 backdrop-blur-[2rem]"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "w-full flex items-center justify-between px-4",
          isRTL ? "flex-row-reverse" : "flex-row"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src={logoSrc}
              width={isRTL ? 80 : 65}
              height={isRTL ? 80 : 105}
              alt="Logo"
              className={cn(
                "transition-all duration-300",
                isRTL
                  ? "lg:w-[65px] lg:h-[105px] w-[50px] h-[80px]"
                  : "lg:w-[65px] lg:h-[105px] w-[50px] h-[80px]"
              )}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className={cn(
            "hidden md:flex items-center gap-6 text-[22px] font-semibold transition-colors duration-300",
            navColor,
            isRTL ? "flex-row-reverse" : "flex-row"
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/about" className="hover:text-[#E74529]">
            {isRTL ? "عن D360" : "About D360"}
          </Link>
          <div
            onClick={handleToggle}
            className="cursor-pointer hover:text-[#E74529]"
          >
            {isRTL ? "English" : "عربي"}
          </div>
        </motion.nav>

        {/* Mobile Toggle */}
        <div className="block md:hidden z-[100]">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <img
            
              src={
                variant === "about"
                  ? "/hambar.svg"
                  : isWhite
                  ? "/hambar.svg"
                  : "/hambar-white.svg"
              }
              alt="menu"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[70px] left-4 right-4 mx-auto bg-white rounded-2xl shadow-xl z-40 px-6 py-6"
          >
            <div className={`flex justify-${isRTL ? "start" : "end"}`}>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6 text-[#E74529]" />
              </button>
            </div>

            <nav
              className={cn(
                "mt-4 flex flex-col gap-6 text-[20px] font-semibold",
                isRTL ? "items-end text-right" : "items-start text-left"
              )}
            >
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-[#293242] hover:text-[#E74529]"
              >
                {isRTL ? "عن D360" : "About D360"}
              </Link>
              <button
                onClick={handleToggle}
                className="text-[#293242] hover:text-[#E74529]"
              >
                {isRTL ? "English" : "عربي"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
