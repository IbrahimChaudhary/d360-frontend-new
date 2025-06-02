"use client"

import { TeamMemberCard } from "./team-member-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { BoardMember, ExecutiveMember, ShariahMember } from "@/types/team"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TeamMemberCarouselProps {
  teamMembers: ((BoardMember | ExecutiveMember | ShariahMember) & { image?: string })[]
  selectedMember: (BoardMember | ExecutiveMember | ShariahMember) | null
  onSelect: (member: BoardMember | ExecutiveMember | ShariahMember) => void
}

export function TeamMemberCarousel({ teamMembers, selectedMember, onSelect }: TeamMemberCarouselProps) {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {teamMembers.map((member, index) => (
            <CarouselItem key={member.id} className="pl-2 md:pl-4 basis-1/2">
              <TeamMemberCard member={member} index={index} selectedMember={selectedMember} onSelect={onSelect} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center  items-center mt-4 ">
          <CarouselPrevious className=" static h-10 w-10 rounded-none  p-0">
            <ChevronLeft className="h-12 w-12 text-gray-400" />
          </CarouselPrevious>
          <CarouselNext className=" static h-10 w-10 rounded-none  p-0">
            <ChevronRight className="h-12 w-12 text-gray-400" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  )
}
