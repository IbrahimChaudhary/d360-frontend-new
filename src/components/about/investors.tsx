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
import { AboutD360Data } from "@/types/about/about"
interface InvestorsProps{
  data:AboutD360Data
}
export function Investors({data}:InvestorsProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const boardMembersContent = language === "en" ? boardMembers : boardMembersAr;
  const executiveMembersContent = language === "en" ? executiveMembers : executiveMembersAr;
  const shariahMembersContent = language === "en" ? shariahMembers : shariahMembersAr;
  console.log("hee i ammmm",data.directors)

  const getImageUrl = (image: any, fallbackPath: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
    return image?.formats?.large?.url 
      ? `${baseUrl}${image.formats.large.url}`
      : image?.formats?.medium?.url 
        ? `${baseUrl}${image.formats.medium.url}`
        : image?.formats?.small?.url 
          ? `${baseUrl}${image.formats.small.url}`
          : image?.url 
            ? `${baseUrl}${image.url}`
            : fallbackPath;
  };

  const boardMembersFromData = data.directors
    .filter(director => director.role?.toLowerCase() === "board")
    .map((director) => {
      const boardRole = director.position.toLowerCase().includes("chairman") 
        ? "chairman" 
        : director.position.toLowerCase().includes("vice") 
          ? "vice-chairman" 
          : "member";

      return {
        id: director.id.toString(),
        name: director.name,
        position: director.position,
        fullDes: director.fullDes, 
        biography: director.description,
        image: getImageUrl(director.image, "/about/investors/placeholder.png"),
        category: "board" as const, 
        boardRole: boardRole as "chairman" | "vice-chairman" | "member", 
      };
    });
  console.log(boardMembersFromData)
  const executiveMembersWithImages = data.directors
    .filter(director => director.role?.toLowerCase() === "management")
    .map((director) => ({
      id: director.id.toString(),
      name: director.name,
      position: director.position,
      fullDes: director.fullDes, 
      biography: director.description,
      image: getImageUrl(director.image, "/about/executives/executive1.png"),
      category: "executive" as const,
      department: director.position,
    }));

  const shariahMembersWithImages = data.directors
    .filter(director => {
      console.log("Director role:", director.role);
      return director.role?.toLowerCase() === "shariah" || director.role?.toLowerCase() === "advisors";
    })
    .map((director) => ({
      id: director.id.toString(),
      name: director.name,
      position: director.position,
      fullDes: director.fullDes, 
      biography: director.description,
      image: getImageUrl(director.image, "/about/advisors/advisor1.png"),
      category: "shariah" as const,
      specialization: [],
    }));

  return (
    <Section className=" flex flex-row justify-center items-center ">
      <AnimatedSection direction="up" className="text-center mb-12">
        <h2 className={`lg:text-[60px] text-[30px]  font-extrabold mb-8 text-[#293242] ${language==="ar"?"text-center":"text-center"}`}>{data.Title4}</h2>

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
        <h2 className={`text-[30px] lg:text-[40px] font-extrabold mb-10 text-[#293242]  lg:px-12 flex ${language === "ar"?'flex-row': "flex-row"}`}>{data.Title5}</h2>

        <TeamTabs
          boardMembers={boardMembersFromData}
          executiveMembers={executiveMembersWithImages}
          shariahMembers={shariahMembersWithImages}
        />
      </div>
    </Section>
  )
}
