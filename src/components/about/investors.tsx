"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { TeamTabs } from "./team/team-tabs";
import { useTranslations } from "@/lib/i18n";
import type { TeamMemberId } from "@/types";
import { AboutD360Data, Leader } from "@/types/about/about";

interface InvestorsProps {
  data?: AboutD360Data;
}
export function Investors({ data }: InvestorsProps) {
  const { t } = useTranslations();
  const rawLeaders = data?.leaders ?? [];

  const imageMap: Record<string, string> = {
    taha: "/about/investors/inv1.png",
    zaki: "/about/investors/inv2.png",
    ibrahim: "/about/investors/inv3.png",
    bassem: "/about/investors/inv4.png",
    fahad: "/about/investors/inv5.png",
    nouf: "/about/investors/inv6.png",
    tim: "/about/investors/inv7.png",
    mudassir: "/about/investors/inv8.png",
    faraz: "/about/investors/inv9.png",
  };

  // attach image to each leader
  const leaders: Leader[] = rawLeaders.map((l) => {
    const key = l.name.split(" ")[0].toLowerCase();
    return {
      ...l,
      image: imageMap[key] ?? "/about/investors/placeholder.png",
    };
  });

  // group by role
  const board = leaders.filter((l) => l.role === "Board");
  const management = leaders.filter((l) => l.role === "Management");
  const advisors = leaders.filter((l) => l.role === "Advisors");

  return (
    <Section className="bg-gray-50">
      <AnimatedSection direction="up" className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">
          {data?.Title4}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-[150px]">
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

      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-10 text-[#293242] px-6 md:px-12">
          {data?.Title5}
        </h2>
        <TeamTabs
          tabs={[
            { key: "board", label: t("investors.tabs.board"), members: board },
            {
              key: "management",
              label: t("investors.tabs.management"),
              members: management,
            },
            {
              key: "advisors",
              label: t("investors.tabs.advisors"),
              members: advisors,
            },
          ]}
        />{" "}
      </div>
    </Section>
  );
}
