"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { useStore } from "@/store/toggle-store";
import { Footer } from "@/components/layout/footer/footer";
import { SectionHeading } from "@/components/section-heading";
import ShariahCommittee from "@/components/shahriah-committee/committee-details";
import { Members } from "@/components/shahriah-committee/members";
import {  shariahMembers } from "@/data/team-member"
import { shariahMembersAr } from "@/data/team-member-ar"


export default function ShahriahCommittee() {
  const { language } = useStore();
  const isRTL = language === "ar";
  const shariahMembersContent = language === "en" ? shariahMembers : shariahMembersAr;

  const shariahMembersWithImages = shariahMembersContent.map((member, index) => ({
    ...member,
    image: `/about/advisors/advisor${index + 1}.png`,
  }));

 

  return (
    <div className="flex min-h-screen flex-col">
      <Header  />

      <main className="flex-1">
        <Hero
          backgroundImage={
            isRTL ? "/home/shariah-bg.png" : "/home/shariah-bg.png"
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
              Shariah
              <br />
              Committee
            </h1>
             </div>
        </Hero>

        <SectionHeading>
            <p className="text-[25px] lg:text-[60px] font-extrabold px-2 lg:px-0 py-2 lg:py-0 lg:w-[70%] mx-auto">
            D360 Bank is committed to the principles of Islamic Shariah and ensuring compliance in all its banking transactions
            </p>
        </SectionHeading>

        <ShariahCommittee/>
        <div className="mt-10 lg:mt-20 ">
        <h2 className="text-[30px] lg:text-[40px] font-extrabold mb-10 text-[#293242] px-4 container mx-auto">
  Shariah Committee Members
</h2>


        <Members
          shariahMembers={shariahMembersWithImages}
        />
      </div>
 
      </main>
      <Footer />
    </div>
  );
}
