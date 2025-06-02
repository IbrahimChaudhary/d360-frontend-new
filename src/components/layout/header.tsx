"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { DesktopDropdownMenu } from "./dropdown-menu";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const aboutSections = [
  {
    items: [
      { label: "About D360", href: "/about" },
      { label: "Media Center", href: "/media-center" },
      { label: "Shariah Committee", href: "/shariah" },
      { label: "Investor Relations", href: "/investors" },
    ],
  },
  {
    title: "Help & Support",
    items: [
      { label: "Security Awareness", href: "/security-awareness" },
      { label: "Privacy Notice", href: "/privacy-notice" },
      {
        label: "Customer Protection Principles",
        href: "/protection-principles",
      },
      { label: "Customer Care", href: "/customer-care" },
      { label: "Products & Services Fees", href: "/products-fees" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const personalSections = [
  {
    items: [
      { label: "Personal Services", href: "/personal-services" },
      { label: "Savings Accounts", href: "/savings" },
      { label: "Payments", href: "/payments" },
      { label: "International Transfers", href: "/international-transfers" },
      { label: "Cards", href: "/cards" },
      { label: "Offers", href: "/offers" },
    ],
  },
  {
    title: "Help & Support",
    items: [
      { label: "Security Awareness", href: "/security-awareness" },
      { label: "Privacy Notice", href: "/privacy-notice" },
      {
        label: "Customer Protection Principles",
        href: "/protection-principles",
      },
      { label: "Customer Care", href: "/customer-care" },
      { label: "Products & Services Fees", href: "/products-fees" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

interface HeaderProps {
  fixed?: boolean;
}

export function Header({ fixed = false }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState<"about" | "personal" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => setOpenMenu(null);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menu: "about" | "personal") => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const isDropdownOpen = openMenu !== null;


  return (
    <header
    className={cn(
      "transition-colors duration-300",
      "py-4 px-4 md:px-9",
      "top-0 left-0 right-0 z-50",
      fixed ? "fixed" : "absolute",
      isDropdownOpen ? "bg-white shadow" : "bg-transparent"
    )}
  >
  
  
      <div className="w-full   flex items-center justify-between px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" >
           <img src="/footer-logo.png" className="hidden lg:flex h-[105px] w-[65px]" alt="" />
           <img src="/logo2.png" className=" lg:hidden h-[55px] w-[34px]" alt="" />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <DesktopDropdownMenu
            label="About D360"
            active={openMenu === "about"}
            onToggle={() => toggleMenu("about")}
            sections={aboutSections}
          />
          <DesktopDropdownMenu
            label="Personal"
            active={openMenu === "personal"}
            onToggle={() => toggleMenu("personal")}
            sections={personalSections}
          />
          <LanguageSwitcher />
        </motion.nav>

        {/* Mobile toggle */}
        <div className="block md:hidden z-[100]">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="w-7 h-7 text-[#263244]" />
            ) : (
              <img src="/hambar.svg" alt="menu" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md py-6 px-6 md:hidden z-40"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-slate-800 text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                About D360
              </Link>
              <Link
                href="/personal"
                className="text-slate-800 text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Personal
              </Link>
              <div className="mt-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
