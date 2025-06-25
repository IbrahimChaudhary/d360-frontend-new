"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useStore } from "@/store/toggle-store"
import { DesktopDropdownMenu } from "./dropdown-menu"
import { fetchHeader } from "@/api/header"
import type { Header as HeaderType } from "@/types/header/header"
import { useRouter, usePathname } from 'next/navigation';

interface MenuSection {
  title?: string
  items: {
    label: string
    href: string
  }[]
}

interface HeaderProps {
  fixed?: boolean
  variant?: "default" | "about"
}

export function Header({ variant = "default", locale }: HeaderProps & { locale?: "en" | "ar" }) {
  const [openMenu, setOpenMenu] = useState<"about" | "personal" | null>(null)
  const { language, toggleLanguage } = useStore()
  // Use the passed locale prop if available, otherwise fall back to store language
  const currentLanguage = locale || language;
  const isRTL = currentLanguage === "ar"
  const [headerData, setHeaderData] = useState<HeaderType | null>(null)
  const [mobileSubMenu, setMobileSubMenu] = useState<"about" | "personal" | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  
const router = useRouter();
const pathname = usePathname();

  useEffect(() => {
    const loadHeaderData = async () => {
      try {
        const data = await fetchHeader(currentLanguage)
        setHeaderData(data)
      } catch (error) {
        console.error("Error fetching header data:", error)
      }
    }

    loadHeaderData()
  }, [currentLanguage])

  const handleToggle = useCallback(() => {
    const newLang = language === 'en' ? 'ar' : 'en';
    const newPath = pathname.replace(`/${language}`, `/${newLang}`);
    toggleLanguage();
    router.push(newPath);
  }, [language, pathname, toggleLanguage]);

  useEffect(() => {
    const handleScroll = () => setOpenMenu(null)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = (menu: "about" | "personal") => {
    setOpenMenu((prev) => (prev === menu ? null : menu))
  }

  useEffect(() => {
    let lastY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      setScrollY(currentY)

      if (currentY > lastY && currentY > 80) {
        setScrollDir("down")
      } else if (currentY < lastY) {
        setScrollDir("up")
      }

      lastY = currentY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reset mobile submenu when mobile menu is closed
  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileSubMenu(null) // Always reset to initial menu
  }

  // Scroll-based styles (same for both variants)
  const isBlur = scrollY > 50 && scrollY < 500
  const isWhite = scrollY >= 500
  const isHidden = scrollDir === "down" && isWhite

  // Logic for changing logo and nav color (only for 'default')
  const shouldChangeAssets = variant === "default"

  const isMenuOpen = openMenu !== null

  const logoSrc = shouldChangeAssets
    ? isMenuOpen || isWhite
      ? isRTL
        ? "/arabic-logo-black.svg"
        : "/footer-logo.svg"
      : isRTL
        ? "/arabic-logo.svg"
        : "/logo2.svg"
    : isRTL
      ? "/arabic-logo-black.svg"
      : "/footer-logo.svg"

  const navColor = shouldChangeAssets ? (isMenuOpen || isWhite ? "text-[#293242]" : "text-white") : "text-[#293242]"

  const aboutSections: MenuSection[] = [
    {
      items: [
        {
          label: headerData?.link1 || "About D360",
          href: headerData?.link1Url || "/about",
        },
        {
          label: headerData?.link2 || "Media Center",
          href: headerData?.link2Url || "/media",
        },
        {
          label: headerData?.link3 || "Shariah Committee",
          href: headerData?.link3Url || "/shariah-committee",
        },
        {
          label: headerData?.link4 || "Investor Relations",
          href: headerData?.link4Url || "/investor-relations",
        },
      ],
    },
    {
      title: headerData?.Help || "Help & Support",
      items: [
        {
          label: headerData?.HelpLink1 || "Security Awareness",
          href: headerData?.HelpLink1Url || "/security-awareness",
        },
        {
          label: headerData?.HelpLink2 || "Privacy Notice",
          href: headerData?.HelpLink2Url || "/privacy-notice",
        },
        {
          label: headerData?.HelpLink3 || "Customer Care",
          href: headerData?.HelpLink3Url || "/customer-care",
        },
        {
          label: headerData?.HelpLink4 || "Customer Protection Principles",
          href: headerData?.HelpLink4Url || "/",
        },
        {
          label: headerData?.HelpLink5 || "Products & Services Fees",
          href: headerData?.HelpLink5Url || "/products-and-services",
        },
        {
          label: headerData?.HelpLink6 || "Contact Us",
          href: headerData?.HelpLink6Url || "/contact-us",
        },
      ],
    },
  ]

  const personalSections: MenuSection[] = [
    {
      items: [
        {
          label: headerData?.PSLink1 || "Personal Services",
          href: headerData?.PSLink1Url || "/personal-services",
        },
        {
          label: headerData?.PSLink2 || "Savings Accounts",
          href: headerData?.PSLink2Url || "/savings-account",
        },
        {
          label: headerData?.PSLink3 || "Payments",
          href: headerData?.PSLink3Url || "/payments",
        },
        {
          label: headerData?.PSLink4 || "International Transfers",
          href: headerData?.PSLink4Url || "/international-transfer",
        },
        {
          label: headerData?.PSLink5 || "Cards",
          href: headerData?.PSLink5Url || "/card",
        },
        {
          label: headerData?.PSLink6 || "Offers",
          href: headerData?.PSLink6Url || "/offers",
        },
      ],
    },
    {
      title: headerData?.Help || "Help & Support",
      items: [
        {
          label: headerData?.HelpLink1 || "Security Awareness",
          href: headerData?.HelpLink1Url || "/security-awareness",
        },
        {
          label: headerData?.HelpLink2 || "Privacy Notice",
          href: headerData?.HelpLink2Url || "/privacy-notice",
        },
        {
          label: headerData?.HelpLink3 || "Customer Care",
          href: headerData?.HelpLink3Url || "/customer-care",
        },
        {
          label: headerData?.HelpLink4 || "Customer Protection Principles",
          href: headerData?.HelpLink4Url || "/",
        },
        {
          label: headerData?.HelpLink5 || "Products & Services Fees",
          href: headerData?.HelpLink5Url || "/products-and-services",
        },
        {
          label: headerData?.HelpLink6 || "Contact Us",
          href: headerData?.HelpLink6Url || "/contact-us",
        },
      ],
    },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 lg:px-9",
        isHidden ? "-translate-y-full" : "translate-y-0",
        isMenuOpen
          ? "bg-white shadow-md"
          : isWhite
            ? "bg-white shadow-md"
            : isBlur
              ? "bg-white/30 backdrop-blur-[2rem]"
              : "bg-transparent",
      )}
    >
      <div className={cn("w-full flex items-center justify-between px-4", isRTL ? "flex-row" : "flex-row")}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/">
            <Image
              src={logoSrc || "/placeholder.svg"}
              width={isRTL ? 59 : 59}
              height={isRTL ? 90 : 90}
              alt="Logo"
              className={cn(
                "transition-all duration-300",
                isRTL ? "lg:w-[59px] lg:h-[90px] w-[34px] h-[55px]" : "lg:w-[59px] lg:h-[90px] w-[34px] h-[55px]",
              )}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className={cn(
            "hidden md:flex items-center gap-6 text-[22px] font-semibold transition-colors duration-300",
            navColor,
            isRTL ? "flex-row" : "flex-row",
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <DesktopDropdownMenu
            label={isRTL ? "عن بنك D360" : "About D360"}
            active={openMenu === "about"}
            onToggle={() => toggleMenu("about")}
            sections={aboutSections}
            className={navColor}
          />

          <DesktopDropdownMenu
            label={isRTL ? "شخصي" : "Personal"}
            active={openMenu === "personal"}
            onToggle={() => toggleMenu("personal")}
            sections={personalSections}
            className={navColor}
          />

          <div onClick={handleToggle} className="cursor-pointer font-trans hover:text-[#E74529]">
            {isRTL ? "English" : "عربي"}
          </div>
        </motion.nav>

        {/* Mobile Toggle */}
        <div className="block md:hidden z-[100]">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <img
              className="w-[29px] h-[22px]"
              src={variant === "about" ? "/hambar.svg" : isWhite ? "/hambar.svg" : "/hambar-white.svg"}
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
            {/* Close Button */}
            <div className={`flex items-start justify-between py-2`}>
              
            

            <nav
              className={cn(
                "mt-4 flex flex-col gap-4 text-[16px] font-normal",
                isRTL ? "items-end text-right" : "items-start -mt-1 text-left",
              )}
            >
              {/* 1️⃣ INITIAL MENU - Image 1 */}
              {!mobileSubMenu && (
                <div className="flex flex-col gap-4 w-full">
                  <button
                    onClick={() => setMobileSubMenu("about")}
                    className="text-[#293242] hover:text-[#E74529] text-left"
                  >
                    {isRTL ? "عن D360" : "About D360"}
                  </button>
                  <button
                    onClick={() => setMobileSubMenu("personal")}
                    className="text-[#293242] hover:text-[#E74529] text-left"
                  >
                    {isRTL ? "شخصي" : "Personal"}
                  </button>
                  <button
                    onClick={() => {
                      handleToggle()
                      closeMobileMenu()
                    }}
                    className="text-[#293242] hover:text-[#E74529] text-left"
                  >
                    {isRTL ? "English" : "عربي"}
                  </button>
                </div>
              )}

              {/* 2️⃣ ABOUT D360 SUBMENU - Image 2 */}
              {mobileSubMenu === "about" && (
                <div className="flex flex-col gap-4 w-full">
                  {/* Red heading */}
                  <h3 className="text-[#E74529] font-extrabold text-[16px] mb-2">{isRTL ? "عن D360" : "About D360"}</h3>

                  {/* About links in 2 columns */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-4 border-b pb-4 border-[#878787]">
                    {aboutSections[0]?.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="text-[#293242] hover:text-[#E74529] text-[12px]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Help & Support Section */}
                  <div className="mb-4">
                    <h4 className="text-[#293242] font-bold text-[14px] mb-3">
                      {headerData?.Help || (isRTL ? "المساعدة والدعم" : "Help & Support")}
                    </h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-b pb-4 border-[#878787]">
                      {aboutSections[1]?.items.map(
                        (item, idx) =>
                          item.label && (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="text-[#293242] hover:text-[#E74529] text-[12px]"
                            >
                              {item.label}
                            </Link>
                          ),
                      )}
                    </div>
                  </div>

                  {/* Personal button at bottom */}
                  <button
                    onClick={() => setMobileSubMenu("personal")}
                    className="text-[#293242] hover:text-[#E74529] rtl:text-right ltr:text-left  text-[16px]"
                  >
                    {isRTL ? "شخصي" : "Personal"}
                  </button>

                  {/* Language toggle */}
                  <button
                    onClick={() => {
                      handleToggle()
                      closeMobileMenu()
                    }}
                    className="text-[#293242] text-[16px] hover:text-[#E74529] rtl:text-right ltr:text-left "
                  >
                    {isRTL ? "English" : "عربي"}
                  </button>
                </div>
              )}

              {/* 3️⃣ PERSONAL SUBMENU - Image 3 */}
              {mobileSubMenu === "personal" && (
                <div className="flex flex-col gap-4 w-full">
                  {/* About D360 button at top */}
                  <button
                    onClick={() => setMobileSubMenu("about")}
                    className="text-[#293242] hover:text-[#E74529] text-[16px] rtl:text-right ltr:text-left mb-2"
                  >
                    {isRTL ? "عن D360" : "About D360"}
                  </button>

                  {/* Red heading */}
                  <h3 className="text-[#E74529] font-extrabold text-[16px] mb-2">{isRTL ? "شخصي" : "Personal"}</h3>

                  {/* Personal links in 2 columns */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-4 border-b-[1px] border-[#878787] pb-4">
                    {personalSections[0]?.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="text-[#293242] hover:text-[#E74529] text-[12px]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Help & Support Section */}
                  <div className="mb-4">
                    <h4 className="text-[#293242] font-bold text-[16px] mb-3">
                      {headerData?.Help || (isRTL ? "المساعدة والدعم" : "Help & Support")}
                    </h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-b-[1px] border-[#878787] pb-4">
                      {personalSections[1]?.items.map(
                        (item, idx) =>
                          item.label && (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="text-[#293242] hover:text-[#E74529] text-[12px]"
                            >
                              {item.label}
                            </Link>
                          ),
                      )}
                    </div>
                  </div>

                  {/* Language toggle */}
                  <button
                    onClick={() => {
                      handleToggle()
                      closeMobileMenu()
                    }}
                    className="text-[#293242] hover:text-[#E74529] rtl:text-right ltr:text-left"
                  >
                    {isRTL ? "English" : "عربي"}
                  </button>
                </div>
              )}
            </nav>
            <button onClick={closeMobileMenu}>
                <img src="/plus.svg" alt="" className="w-[17px] h-[18px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
