"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { TeamTabs } from "./team/team-tabs"
import { useStore } from "@/store/toggle-store"
import { englishContent } from "@/data/about-en"
import { arabicContent } from "@/data/about-ar"
import { AboutD360Data } from "@/types/about/about"
import { BoardMember, ExecutiveMember, ShariahMember } from "@/types/team"

interface InvestorsProps {
  data: AboutD360Data;
}

export function Investors({ data }: InvestorsProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;

  // Organize leaders into three arrays based on their roles and map to required types
  const boardMembers: (BoardMember & { image?: string })[] = data.leaders
    .filter(member => member.role === 'Board')
    .map((member, index) => ({
      id: member.id.toString(),
      name: member.name,
      position: member.position,
      category: "board" as const,
      boardRole: "member", // Default to member since it's not in the API
      biography: member.description || "",
      image: `/about/investors/inv${index + 1}.png`,
    }));

  const executiveMembers: (ExecutiveMember & { image?: string })[] = data.leaders
    .filter(member => member.role === 'Management')
    .map((member, index) => ({
      id: member.id.toString(),
      name: member.name,
      position: member.position,
      category: "executive" as const,
      department: member.position, // Use position as department since it's not in the API
      biography: member.description || "",
      image: `/about/executives/executive${index + 1}.png`,
    }));

  const shariahMembers: (ShariahMember & { image?: string })[] = data.leaders
    .filter(member => member.role === 'Advisors')
    .map((member, index) => ({
      id: member.id.toString(),
      name: member.name,
      position: member.position,
      category: "shariah" as const,
      biography: member.description || "",
      image: `/about/advisors/advisor${index + 1}.png`,
    }));

  return (
    <Section className=" flex flex-row justify-center items-center ">
      <AnimatedSection direction="up" className="text-center mb-12">
        <h2 className={`lg:text-[60px] text-[30px]  font-extrabold mb-8 text-[#293242] ${language==="ar"?"text-center":"text-center"}`}>{content.data.investors.head}</h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-[190px]">
          <Image
            src="/about/investor2.png"
            alt="PIF Logo"
            width={360}
            height={161}
            className="object-contain w-[120px] h-[60px] sm:w-[200px] sm:h-[100px] md:w-[360px] md:h-[161px]"
          />
          <Image
            src="/about/investor1.png"
            alt="Dirayah Logo"
            width={242}
            height={220}
            className="object-contain w-[100px] h-[90px] sm:w-[180px] sm:h-[160px] md:w-[242px] md:h-[220px]"
          />
        </div>
      </AnimatedSection>

      <div className="mt-10 lg:mt-20 ">
        <h2 className={`text-[30px] lg:text-[40px] font-extrabold mb-10 text-[#293242]  lg:px-12 flex ${language === "ar"?'flex-row-reverse': "flex-row"}`}>{content.data.investors.meet}</h2>

        <TeamTabs
          boardMembers={boardMembers}
          executiveMembers={executiveMembers}
          shariahMembers={shariahMembers}
        />
      </div>
    </Section>
  )
}
