"use client"

import { motion } from "framer-motion"
import { IconType } from "react-icons"
import {
  FaGlobe,
  FaCreditCard,
  FaExchangeAlt,
  FaUniversity,
  FaBolt,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaCalculator,
} from "react-icons/fa"
import { SectionHeading } from "../section-heading"

interface Feature {
  icon: IconType
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: FaGlobe,
    title: "0% Foreign Exchange fees",
    description: "Enjoy zero fees on international transactions.",
  },
  {
    icon: FaCreditCard,
    title: "Classic Debit Card",
    description: "Benefit from a wide range of Visa debit card features.",
  },
  {
    icon: FaExchangeAlt,
    title: "Free Local Transfers",
    description: "Send cost-free transfers to other local banks.",
  },
  {
    icon: FaUniversity,
    title: "Free International Transfers",
    description: "Make free transactions to banks abroad.",
  },
  {
    icon: FaBolt,
    title: "Instant International Transfers",
    description: "Enjoy fast transfers to over 70 countries.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Free ATM Withdrawal",
    description: "Withdraw money from ATMs abroad without any fees.",
  },
  {
    icon: FaPhoneAlt,
    title: "24/7 Assistance & Emergency Hotline",
    description: "Access round-the-clock customer service and an emergency hotline.",
  },
  {
    icon: FaCalculator,
    title: "FX Calculator (Coming Soon)",
    description: "Take control of your transfers and monitor daily exchange rates.",
  },
]

export default function FeatureSection() {
  return (
    <section className="py-16  bg-white px-4 md:px-32">
        <SectionHeading className="text-xl lg:text-3xl font-extrabold">
        Your Everyday and Travel Companion!
        Experience banking excellence with every detail designed for you.
      </SectionHeading>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <feature.icon size={32} className="text-[#E74529] mb-3" />
            <h4 className="text-sm font-bold text-[#263244] mb-1 text-center">{feature.title}</h4>
            <p className="text-xs text-[#4B5563]">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="hidden lg:block text-center mt-12">
        <a href="#" className="text-sm font-medium underline text-[#263244] hover:text-[#E74529]">
          Products and Services Fees
        </a>
      </div>
    </section>
  )
}
