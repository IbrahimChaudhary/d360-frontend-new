"use client"

import { useStore } from "@/store/toggle-store"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import type { ShariahMember } from "@/types/team"
import Image from "next/image"
import { useState, useCallback } from "react"
import { shariahMembersAr as arShariahMembers } from "@/data/team-member-ar"
import { shariahMembers as enShariahMembers } from "@/data/team-member"

interface TeamTabsProps {
  shariahMembers: (ShariahMember & { image?: string })[]
}

export function Members({ shariahMembers: initialShariahMembers }: TeamTabsProps) {
  const { language } = useStore()
  const isRTL = language === "ar"

  // Language switch logic
  const translatedShariahMembers = isRTL ? arShariahMembers : enShariahMembers

  const shariahMembers = initialShariahMembers.map((member) => {
    const translatedMember = translatedShariahMembers.find((tm) => tm.id === member.id)
    return { ...member, ...translatedMember }
  })

  const [selectedMember, setSelectedMember] = useState<(ShariahMember & { image?: string }) | null>(null)

  const handleSelect = useCallback((member: ShariahMember) => {
    setSelectedMember((prev) => (prev?.id === member.id ? null : member))
  }, [])

  const handleClose = useCallback(() => {
    setSelectedMember(null)
  }, [])

  const tabs = [{ value: "advisors", label: isRTL ? "اللجنة الشرعية" : "Shariah Committee Members" }]

  return (
    <div className="w-full bg-white py-8 max-w-[1195px] mx-auto px-4 ">
      <div className="max-w-7xl mx-auto  px-4">
        <Tabs defaultValue="advisors" className="w-full">
          <TabsContent value="advisors">
            {/* Mobile View */}
            <div className="block lg:hidden">
              <AnimatePresence mode="wait">
                {selectedMember && (
                  <motion.div
                    key="details-mobile"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{selectedMember.name}</h3>
                        <p className="text-red-600 font-medium">{selectedMember.position}</p>
                      </div>
                      <button onClick={handleClose} className="text-[#EB644C]  text-xl font-bold ml-4">
                        ×
                      </button>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{selectedMember.biography}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-2 gap-4  justify-items-center mx-auto">
                {shariahMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleSelect(member)}
                    className="relative bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-200 w-full aspect-[3/4] "
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        quality={100}
                        fill
                        className="object-cover"
                      />

                      {/* Bottom overlay with member info */}
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm">
                          <h3 className="font-bold text-gray-900 text-xs leading-tight mb-1">{member.name}</h3>
                          <p className="text-gray-600 text-[10px]">{member.position}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block">
              <div className="flex gap-8">
                {/* Biography Panel - Left Side */}
                <AnimatePresence mode="wait">
                  {selectedMember && (
                    <motion.div
                      key="details-desktop"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-80 flex-shrink-0"
                    >
                      <div className="bg-[#F8F8F8] rounded-2xl p-6 ">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-[26px] font-extrabold text-[#293242] mb-2">{selectedMember.name}</h3>
                            <p className="text-[#293242] font-light text-[18px]">{selectedMember.position}</p>
                          </div>
                          <button
                            onClick={handleClose}
                            className="text-[#EB644C] text-3xl font-extrabold ml-4"
                          >
                            ×
                          </button>
                        </div>
                        <p className="text-[#293242] text-[20px] ">{selectedMember.biography}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Members Grid - Right Side */}
                <div className="flex-1">
                  <div className="flex gap-4 max-w-4xl">
                    {shariahMembers.map((member, index) => {
                      const isSelected = selectedMember?.id === member.id
                      return (
                        <motion.div
                          key={member.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          onClick={() => handleSelect(member)}
                          className={`relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300  w-70 h-94`}
                        >
                          <div className="relative w-full h-full">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              quality={100}
                              fill
                              className={`
                                object-cover transition-all duration-300
                                ${selectedMember !== null && selectedMember?.id !== member.id ? "grayscale hover:grayscale-0" : ""}
                              `}
                            />

                            {/* Bottom overlay with member info */}
                            <div className="absolute bottom-3 left-3 right-3">
                              <div className="bg-white/55 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                                <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">{member.name}</h3>
                                <p className="text-gray-600 text-xs">{member.position}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
