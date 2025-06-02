"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface MenuSection {
  title?: string
  items: { label: string; href: string }[]
}

interface DesktopDropdownMenuProps {
    label: string
    active: boolean
    onToggle: () => void
    sections: MenuSection[]
  }

  export function DesktopDropdownMenu({
    label,
    sections,
    active,
    onToggle,
  }: DesktopDropdownMenuProps) {
    const menuRef = useRef<HTMLDivElement | null>(null)
  
  
  
    return (
      <div
        ref={menuRef}
        className="relative"
        onMouseEnter={() => onToggle()}
        onMouseLeave={() => onToggle()}
      >
        <button
          onClick={onToggle}
          className={`font-semibold px-2 py-1 transition-colors duration-200 ${
            active ? "text-[#E74529]" : "text-slate-800"
          } hover:text-[#E74529]`}
        >
          {label}
        </button>
  
        <AnimatePresence>
          {active && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[130px] left-0 w-full bg-white z-40 shadow-md"
            >
              <div className="container px-28 py-10 grid grid-cols-2 w-[80%] max-w-7xl">
                {sections.map((section, idx) => (
                  <div key={idx} className="space-y-2">
                    {section.title && (
                      <p className="font-bold text-[#263244] mb-2">{section.title}</p>
                    )}
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-[#263244] hover:text-[#E74529] transition text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
  
