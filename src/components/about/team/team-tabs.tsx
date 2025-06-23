"use client";

import type React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamMemberCarousel } from "./team-member-carousel";
import { useState, useCallback,useEffect } from "react";
import type {
  BoardMember,
  ExecutiveMember,
  ShariahMember,
  Position,
} from "@/types/team";
import { TeamMemberCard } from "./team-member-card";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/toggle-store";
import {
  boardMembers as enBoardMembers,
  executiveMembers as enExecutiveMembers,
  shariahMembers as enShariahMembers,
} from "@/data/team-member";
import {
  boardMembersAr as arBoardMembers,
  executiveMembersAr as arExecutiveMembers,
  shariahMembersAr as arShariahMembers,
} from "@/data/team-member-ar";
import { AboutD360Data } from "@/types/about/about";

interface TeamTabsProps {
  boardMembers: (BoardMember & { image?: string; fullDes?: any[] })[];
  executiveMembers: (ExecutiveMember & { image?: string; fullDes?: any[] })[];
  shariahMembers: (ShariahMember & { image?: string; fullDes?: any[] })[];
  data:AboutD360Data
}

export function TeamTabs({
  data,
  boardMembers: initialBoardMembers,
  executiveMembers: initialExecutiveMembers,
  shariahMembers: initialShariahMembers,
}: TeamTabsProps) {
  const { language } = useStore();
  const isRTL = language === "ar";

  // Translated members logic
  const translatedBoardMembers = isRTL ? arBoardMembers : enBoardMembers;
  const translatedExecutiveMembers = isRTL
    ? arExecutiveMembers
    : enExecutiveMembers;
  const translatedShariahMembers = isRTL ? arShariahMembers : enShariahMembers;

  const boardMembers = initialBoardMembers.map((member) => {
    const translatedMember = translatedBoardMembers.find(
      (tm) => tm.id === member.id
    );
    return { ...member, ...translatedMember };
  });

  const executiveMembers = initialExecutiveMembers.map((member) => {
    const translatedMember = translatedExecutiveMembers.find(
      (tm) => tm.id === member.id
    );
    return { ...member, ...translatedMember };
  });

  const shariahMembers = initialShariahMembers.map((member) => {
    const translatedMember = translatedShariahMembers.find(
      (tm) => tm.id === member.id
    );
    return { ...member, ...translatedMember };
  });

  const [selectedMember, setSelectedMember] = useState<
    | ((BoardMember | ExecutiveMember | ShariahMember) & {
        fullDes?: any[];
        biography?: string;
      })
    | null
  >(null);
  const [activeTab, setActiveTab] = useState("board");

  useEffect(() => {
    setSelectedMember(null);
  }, [language]);

  const handleSelect = useCallback(
    (member: BoardMember | ExecutiveMember | ShariahMember) => {
      setSelectedMember((prev) => (prev?.id === member.id ? null : member));
    },
    []
  );

  const handleClose = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedMember(null);
  }, []);

  function renderBiographyRichText(blocks: any[] = []) {
    return blocks.map((block, idx) => {
      switch (block.type) {
        case "paragraph":
          // Render each paragraph, mapping children for bold text.
          return (
            <p
              key={`para-${idx}`}
              className={`text-[#293242] text-[14px] lg:text-[20px] leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {block.children.map((child: any, cidx: number) => {
                if (child.bold) {
                  return (
                    <strong key={`b-${idx}-${cidx}`} className="font-bold">
                      {child.text}
                    </strong>
                  );
                }
                return <span key={`t-${idx}-${cidx}`}>{child.text}</span>;
              })}
            </p>
          );

        case "list":
          // Only handling unordered lists here; if you have ordered lists, add that branch
          return (
            <ul
              key={`list-${idx}`}
              className={`list-disc text-[#293242] text-[14px] lg:text-[20px] leading-relaxed ${
                isRTL
                  ? "list-inside text-right pr-3 [&>li]:text-right"
                  : "list-inside text-left pl-3"
              }`}
              style={isRTL ? { direction: "rtl" } : {}}
            >
              {block.children.map((listItem: any, liIdx: number) => (
                <li key={`li-${idx}-${liIdx}`}>
                  {listItem.children.map((child: any, cidx: number) => {
                    if (child.bold) {
                      return (
                        <strong
                          key={`lb-${idx}-${liIdx}-${cidx}`}
                          className="font-bold"
                        >
                          {child.text}
                        </strong>
                      );
                    }
                    return (
                      <span key={`lt-${idx}-${liIdx}-${cidx}`}>
                        {child.text}
                      </span>
                    );
                  })}
                </li>
              ))}
            </ul>
          );

        default:
          return null;
      }
    });
  }

  const renderPositions = (title: string, positions?: Position[]) => {
    if (!positions || positions.length === 0) return null;

    const positionTitles = {
      Chairman: isRTL ? "رئيس" : "Chairman",
      "Vice Chairman": isRTL ? "نائب الرئيس" : "Vice Chairman",
      "Board Member": isRTL ? "عضو مجلس الإدارة" : "Board Member",
      CEO: isRTL ? "الرئيس التنفيذي" : "CEO",
      Member: isRTL ? "عضو" : "Member",
    };

    return (
      <div key={title} className="mb-4">
        <h4
          className={`font-bold text-[#293242] text-[20px] mb-1 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {positionTitles[title as keyof typeof positionTitles]}:
        </h4>
        <ul
          className={`list-disc text-[#293242] text-[20px] leading-relaxed ${
            isRTL
              ? "list-inside text-right pr-3 [&>li]:text-right"
              : "list-inside text-left pl-3"
          }`}
          style={isRTL ? { direction: "rtl" } : {}}
        >
          {positions.map((position, index) => (
            <li key={index}>
              {position.company}
              {position.endDate && (
                <span className="text-[#6D809C] text-sm ml-1">
                  ({isRTL ? "حتى" : "Until"} {position.endDate})
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Dynamic tabs logic
  const tabs = [
    { value: "board", label: `${data.directorHead}` },
    {
      value: "management",
      label: `${data.manageHead}`,
    },
    { value: "advisors", label:`${data.shariahHead}` },
  ];

  const orderedTabs = isRTL ? tabs : tabs;

  // TabsContent rendering
  const renderTabContent = (
    tabKey: string,
    members: ((BoardMember | ExecutiveMember | ShariahMember) & {
      image?: string;
    })[]
  ) => (
    <TabsContent value={tabKey}>
      {/* Mobile */}
      <div className="block lg:hidden">
        <AnimatePresence mode="wait">
          {selectedMember && (
            <motion.div
              key="mobile-details-panel"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-4 mb-6 bg-[#F8F8F8] shadow-md rounded-xl"
            >
              <div
                className={`flex justify-between items-start mb-4 ${
                  isRTL ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <button
                  onClick={(e) => handleClose(e)}
                  className="text-[#E74529] text-2xl font-bold hover:text-red-600 transition-colors z-10 cursor-pointer"
                  aria-label="Close details"
                >
                  ×
                </button>

                <div className={`${isRTL ? "text-right" : "text-left"}`}>
                  <h3 className="text-[20px] lg:text-[26px] font-extrabold text-[#293242]">
                    {selectedMember.name}
                  </h3>
                  <p className="text-[#293242] font-light text-[18px] mb-4">
                    {selectedMember.position}
                  </p>
                </div>
              </div>

              <div
                className={`text-[#293242] leading-tight text-[20px] mb-4 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {selectedMember.fullDes && selectedMember.fullDes.length > 0 ? (
                  renderBiographyRichText(selectedMember.fullDes)
                ) : (
                  // fallback to the plain "biography" string if fullDes is missing:
                  <p className="text-[#293242] leading-relaxed text-[20px]">
                    {selectedMember.biography}
                  </p>
                )}{" "}
              </div>

              {selectedMember.currentPositions && (
                <div className="mt-3">
                  {renderPositions(
                    "Chairman",
                    selectedMember.currentPositions.chairman
                  )}
                  {renderPositions(
                    "Vice Chairman",
                    selectedMember.currentPositions.viceChairman
                  )}
                  {renderPositions(
                    "Board Member",
                    selectedMember.currentPositions.boardMember
                  )}
                  {renderPositions("CEO", selectedMember.currentPositions.ceo)}
                  {renderPositions(
                    "Member",
                    selectedMember.currentPositions.member
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <TeamMemberCarousel
          teamMembers={members}
          selectedMember={selectedMember}
          onSelect={handleSelect}
        />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex gap-6 relative overflow-hidden">
          <div className={`flex-1 min-w-0 ${isRTL ? "order-1" : "order-2"}`}>
            <motion.div
              layout
              dir={isRTL ? "rtl" : "ltr"}
              className={`grid gap-4 ${
                selectedMember ? "grid-cols-3" : "grid-cols-4"
              } ${isRTL ? "text-right" : "text-left"}`}
              transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
            >
              {members.map((member, index) => (
                <motion.div
                  key={member.id}
                  layout="position"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    layout: { duration: 0.5, ease: "easeInOut" },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <TeamMemberCard
                    member={member}
                    index={index}
                    selectedMember={selectedMember}
                    onSelect={handleSelect}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {selectedMember && (
              <motion.div
                key="details-panel"
                initial={{ x: isRTL ? -320 : -320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: isRTL ? -320 : -320, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`w-[300px] p-6 bg-[#F8F8F8] rounded-xl h-fit flex-shrink-0 `}
              >
                <div
                  className={`flex justify-between items-start mb-4 ${
                    isRTL ? "flex-row" : "flex-row"
                  }`}
                >
                  <div className={`${isRTL ? "text-right" : "text-left"}`}>
                    <h3 className="text-[26px] font-extrabold text-[#293242]">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[#293242] font-light text-[18px] mb-4">
                      {selectedMember.position}
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleClose(e)}
                    className="text-[#E74529] text-2xl font-bold hover:text-red-600 transition-colors z-10 cursor-pointer ml-2"
                    aria-label="Close details"
                  >
                    ×
                  </button>
                </div>

                <div
                  className={`text-[#293242] leading-tight text-[20px] mb-4 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {selectedMember.fullDes &&
                  selectedMember.fullDes.length > 0 ? (
                    renderBiographyRichText(selectedMember.fullDes)
                  ) : (
                    <p className="text-[#293242] leading-relaxed text-[20px]">
                      {selectedMember.biography}
                    </p>
                  )}{" "}
                </div>

                {selectedMember.currentPositions && (
                  <div className="mt-4">
                    {renderPositions(
                      "Chairman",
                      selectedMember.currentPositions.chairman
                    )}
                    {renderPositions(
                      "Vice Chairman",
                      selectedMember.currentPositions.viceChairman
                    )}
                    {renderPositions(
                      "Board Member",
                      selectedMember.currentPositions.boardMember
                    )}
                    {renderPositions(
                      "CEO",
                      selectedMember.currentPositions.ceo
                    )}
                    {renderPositions(
                      "Member",
                      selectedMember.currentPositions.member
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </TabsContent>
  );

  return (
<Tabs
  defaultValue="board"
  value={activeTab}
  onValueChange={(value) => {
    setActiveTab(value);
    setSelectedMember(null); // Reset when tab changes
  }}
  className="w-full px-0 md:px-12 relative"
>

      <div className={`mb-8 flex ${isRTL ? "flex-row" : "flex-row"}`}>
        <TabsList className="grid w-full max-w-lg grid-cols-3 bg-transparent p-0 gap-2">
          {orderedTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-lg lg:px-20 md:py-2 text-[8px] md:text-[15px] font-bold transition-all duration-200 data-[state=active]:bg-[#E74529] data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {renderTabContent("board", boardMembers)}
      {renderTabContent("management", executiveMembers)}
      {renderTabContent("advisors", shariahMembers)}
    </Tabs>
  );
}
