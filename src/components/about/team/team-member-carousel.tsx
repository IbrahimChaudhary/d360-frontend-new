"use client"

import { TeamMemberCard } from "./team-member-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { BoardMember, ExecutiveMember, ShariahMember } from "@/types/team"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface TeamMemberCarouselProps {
  teamMembers: ((BoardMember | ExecutiveMember | ShariahMember) & { image?: string })[]
  selectedMember: (BoardMember | ExecutiveMember | ShariahMember) | null
  onSelect: (member: BoardMember | ExecutiveMember | ShariahMember) => void
}

export function TeamMemberCarousel({ teamMembers, selectedMember, onSelect }: TeamMemberCarouselProps) {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  return (
    <div className={`relative`} dir={isRTL ? "rtl" : "ltr"}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          direction: isRTL ? "rtl" : "ltr",
        }}
        className="w-full"
      >
        <CarouselContent className={`-ml-2 md:-ml-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          {teamMembers.map((member, index) => (
            <CarouselItem key={member.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/3">
              <TeamMemberCard member={member} index={index} selectedMember={selectedMember} onSelect={onSelect} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center items-center mt-4 gap-8">
          {/* Previous button - always shows left arrow */}
          <CarouselPrevious className="static h-10 w-10 rounded-none p-0 border-none bg-transparent hover:bg-transparent">
            <ChevronLeft className="h-12 w-12 text-gray-400 hover:text-gray-600 transition-colors" />
          </CarouselPrevious>

          {/* Next button - always shows right arrow */}
          <CarouselNext className="static h-10 w-10 rounded-none p-0 border-none bg-transparent hover:bg-transparent">
            <ChevronRight className="h-12 w-12 text-gray-400 hover:text-gray-600 transition-colors" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  )
}
