"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";
import type { TeamMemberId } from "@/types";

interface TeamMemberProps {
  id: string;
  image: string;
  name: string;
  position: string;
  index: number;
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function TeamMemberCard({
  id,
  image,
  name,
  position,
  index,
  selectedId,
  onSelect,
}: TeamMemberProps) {
  const { t } = useTranslations();

  const isSelected = selectedId === id;
  const isDimmed = selectedId !== null && !isSelected;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onSelect(id)}
      className={`
  overflow-hidden rounded-xl shadow-md cursor-pointer relative transition-all duration-300 group bg-white
 
`}
    >
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={image || "/placeholder.svg"}
          alt={t(`team.members.${id}.name` as any)}
          fill
          className={`
    object-contain md:object-cover w-full h-full 
    transition-transform duration-300 group-hover:scale-105
    ${isDimmed ? "grayscale group-hover:grayscale-0" : ""}
  `}
        />

        <div className="absolute bottom-2 md:bottom-4 left-1 right-1 md:left-4 md:right-4 rounded-xl backdrop-blur-sm bg-white/50 px-2 py-1 md:px-4 md:py-3 shadow-md flex flex-col items-start">
          <h3 className="text-[11px] md:text-md font-bold text-gray-900">
            {name}
          </h3>
          <p className=" text-[8px] md:text-sm text-gray-700">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
