"use client"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface StatItem {
  label: string
  value: number
  suffix?: string //oprnsjndjsnr
}

interface StatsCounterProps {
  stats: StatItem[]
  container?:string
}

export function StatsCounter({ stats,container }: StatsCounterProps) {
  return (
    <div className={cn(`grid grid-cols-2 md:grid-cols-4 md:px-18 text-center pt-10 gap-y-7  pb-8`,container)}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-md text-[#293242] mb-1">{stat.label}</span>
          <CountUp end={stat.value} suffix={stat.suffix || ""} />
        </motion.div>
      ))}
    </div>
  )
}

function CountUp({ end, suffix }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200 // milliseconds
    const increment = end / (duration / 16) // update every ~16ms
    const step = () => {
      start += increment
      if (start < end) {
        setCount(Math.round(start))
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(step)
  }, [end])

  return (
    <span className="text-2xl md:text-5xl font-bold text-[#E74529]">
      +{count.toLocaleString()}
      {suffix}
    </span>
  )
}
