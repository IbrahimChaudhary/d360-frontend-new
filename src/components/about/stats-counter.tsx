"use client"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface StatItem {
  label: string;
  value: number | string;
  suffix?: string;
  animated: boolean;
  prefix?:string
}

interface StatsCounterProps {
  stats: StatItem[]
  container?:string
}

export function StatsCounter({ stats, container }: StatsCounterProps) {
  return (
    <div className={cn(`md:px-18 text-center pt-10 gap-y-7 pb-8`, container)}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {stat.animated ? (
            <CountUp
              end={stat.value as number}
              prefix={stat.prefix || ""}
              suffix={stat.suffix || ""}
            />
          ) : (
            <span className="text-[30px] md:text-[60px] font-extrabold text-[#E74529]">
              {stat.value}
            </span>
          )}
          <span className="text-[14px] lg:text-[30px] text-center text-[#293242] mb-1">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}



function CountUp({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; 
    const increment = end / (duration / 16);
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.round(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end]);

  return (
    <span className="text-[30px] md:text-[60px] font-extrabold text-[#E74529]">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

