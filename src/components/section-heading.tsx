
"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionHeadingProps {
  children: ReactNode
  className?: string
  textstyle?:string
}

export function SectionHeading({ children, className,textstyle = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center max-w-3xl mx-auto mb-16 ${className}`}
    >
      <h2 className={cn(` mx-auto lg:w-[80%] text-[#263244] mb-2 `,textstyle)}>
        {children}
      </h2>
    </motion.div>
  )
}
