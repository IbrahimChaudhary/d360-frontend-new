"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { useStore } from "@/store/toggle-store";
import { Footer } from "@/components/layout/footer/footer";
import { SectionHeading } from "@/components/section-heading";
import ShariahCommittee from "@/components/shahriah-committee/committee-details";
import { Members } from "@/components/shahriah-committee/members";
import { shariahMembers } from "@/data/team-member";
import { shariahMembersAr } from "@/data/team-member-ar";
import { ShariahCommitteeData } from "@/types/shahriah-committee/shahriah-committee";
import { useEffect, useState } from "react";
import { fetchShariah } from "@/api/shahriah-committee";

export default function ShahriahCommittee() {
  const { language } = useStore();
  const [shahriah, setShahriah] = useState<ShariahCommitteeData | null>(null);

  useEffect(() => {
    fetchShariah(language)
      .then((data) => setShahriah(data))
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  const isRTL = language === "ar";
  const shariahMembersContent =
    language === "en" ? shariahMembers : shariahMembersAr;

  const shariahMembersWithImages = shariahMembersContent.map(
    (member, index) => ({
      ...member,
      image: `/about/advisors/advisor${index + 1}.png`,
    })
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero
          backgroundImage={
            shahriah?.HeroImg?.formats?.large?.url ||
            shahriah?.HeroImg?.formats?.medium?.url ||
            shahriah?.HeroImg?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  shahriah?.HeroImg?.formats?.large?.url ||
                  shahriah?.HeroImg?.formats?.medium?.url ||
                  shahriah?.HeroImg?.url
                }`
              : "/international/international-hero"
          }
        >
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center  uppercase lg:text-[80px] font-extrabold text-white leading-tight${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {shahriah?.HeroTitle1}
              <br />
              {shahriah?.HeroTitle2}
            </h1>
          </div>
        </Hero>

        <SectionHeading>
          <p className="text-[25px] lg:text-[60px] font-extrabold px-2 lg:px-0 py-2 lg:py-0 lg:w-[70%] mx-auto">
            {shahriah?.Title2}
          </p>
        </SectionHeading>

        {shahriah && <ShariahCommittee data={shahriah}/>}
        <div className="mt-10 lg:mt-20 ">
          <h2 className="text-[30px] lg:text-[40px] font-extrabold mb-10 text-[#293242] px-4 container mx-auto">
            {shahriah?.MembersHead}
          </h2>

          {shahriah && <Members shariahMembers={shahriah.directors.map(director => ({
            ...director,
            id: director.id.toString(),
            category: "shariah",
            biography: director.fullDes.map(des => des.children.map((child: { text: string }) => child.text).join('')).join(' '),
            image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${director.image.url}`
          }))} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
