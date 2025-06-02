"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"
import { AnimatedSection } from "@/components/ui/animated-section"
import { TeamTabs } from "./team/team-tabs"
import { boardMembers, executiveMembers, shariahMembers } from "@/data/team-member"
import { boardMembersAr,executiveMembersAr,shariahMembersAr } from "@/data/team-member-ar"
import { title } from "process"
import { useStore } from "@/store/toggle-store"
import { englishContent } from "@/data/about-en"
import { arabicContent } from "@/data/about-ar"

export function Investors() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const boardMembersContent = language === "en" ? boardMembers : boardMembersAr;
  const executiveMembersContent = language === "en" ? executiveMembers : executiveMembersAr;
  const shariahMembersContent = language === "en" ? shariahMembers : shariahMembersAr;

  // Map board members with their images
  const boardMembersWithImages = boardMembersContent.map((member, index) => ({
    ...member,
    image: `/about/investors/inv${index + 1}.png`,
  }))

  // Map executive members with placeholder images
  const executiveMembersWithImages = executiveMembersContent.map((member, index) => ({
    ...member,
    image: `/about/executives/executive${index + 1}.png`, // You can update these paths as needed
  }))

  // Map shariah members with placeholder images
  const shariahMembersWithImages = shariahMembersContent.map((member, index) => ({
    ...member,
    image: `/about/advisors/advisor${index + 1}.png`, // You can update these paths as needed
  }))

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
            className="object-contain w-[120px] h-[60px]  md:w-[15%] md:h-[15%]"
          />
          <Image
            src="/about/investor1.png"
            alt="Dirayah Logo"
            width={242}
            height={220}
            className="object-contain w-[100px] h-[90px]  md:w-[15%] md:h-[15%]"
          />
        </div>
      </AnimatedSection>

      <div className="mt-10 lg:mt-20 ">
        <h2 className={`text-[30px] lg:text-[40px] font-extrabold mb-10 text-[#293242]  lg:px-12 flex ${language === "ar"?'flex-row-reverse': "flex-row"}`}>{content.data.investors.meet}</h2>

        <TeamTabs
          boardMembers={boardMembersWithImages}
          executiveMembers={executiveMembersWithImages}
          shariahMembers={shariahMembersWithImages}
        />
      </div>
    </Section>
  )
}
