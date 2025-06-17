"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { BoardMember, ExecutiveMember, ShariahMember } from "@/types/team"

interface TeamMemberProps {
  member: (BoardMember | ExecutiveMember | ShariahMember) & { image?: string }
  index: number
  selectedMember: (BoardMember | ExecutiveMember | ShariahMember) | null
  onSelect: (member: BoardMember | ExecutiveMember | ShariahMember) => void
}

export function TeamMemberCard({ member, index, selectedMember, onSelect }: TeamMemberProps) {
  const isSelected = selectedMember?.id === member.id
  const isDimmed = selectedMember !== null && !isSelected

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onSelect(member)}
      className={`
  overflow-hidden rounded-xl  cursor-pointer relative transition-all duration-300 group bg-[#F8F8F8]
 
`}
    >
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          quality={100}
          fill
          className={`
    object-contain md:object-cover w-full h-full 
    transition-transform duration-300 group-hover:scale-105
    ${isDimmed ? "grayscale group-hover:grayscale-0" : ""}
  `}
        />

        <div className="absolute bottom-2 md:bottom-4 left-1 right-1 md:left-4 md:right-4 rounded-xl backdrop-blur-sm bg-white/50 px-2 py-1 md:px-4 md:py-3 shadow-md flex flex-col items-start">
          <h3 className="text-[15px] md:text-md font-bold text-gray-900">{member.name}</h3>
          <p className=" text-[15px] md:text-sm text-gray-700">{member.position}</p>
        </div>
      </div>
    </motion.div>
  )
}
