"use client";
import React from 'react'
import Image from 'next/image'
import { useStore } from "@/store/toggle-store";
import englishContent from "@/data/home-en";
import arabicContent from "@/data/home-ar";
import { DownloadModal } from './download-modal';
import { useState } from 'react';
import { HomePageData } from '@/types/home/home';
interface MobileAnimatedSectionProps {
  data?: HomePageData;
}
export default function MobileAnimatedSection({
  data,
}: MobileAnimatedSectionProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
    {/* Mobile View Only */}
    <div className="flex flex-col md:hidden w-full  relative">
  {/* Shared Card */}
  <div className="absolute top-[29%] left-1/2 -translate-x-1/2 z-20 w-full h-[290px]">
    <Image
      src="/home/card.png"
      alt="Center Card"
      fill
      className="object-contain"
    />
  </div>
  {/* DIGITAL SECTION */}
  <div className="relative w-full h-[300px] bg-[#071F3F] overflow-hidden">
    <Image
      src="/home/blue-bg.png"
      alt="Blue Background"
      fill
      className="object-cover"
    />
    {/* Floating Blue Icons (Static) */}
    <Image
      src="/home/aero-blue.png"
      alt="icon"
      width={60}
      height={60}
      className="absolute top-[10%] left-[10%]"
    />
    <Image
      src="/home/coin.png"
      alt="icon"
      width={50}
      height={50}
      className="absolute top-[50%] left-[80%]"
    />
     <Image
      src="/home/case-blue.png"
      alt="icon"
      width={70}
      height={70}
      className="absolute top-[50%] left-[5%]"
    />
    {/* Mobile Mockup */}
    <div className="absolute  left-1/2 -translate-x-1/2 w-[230px] h-[400px] z-10">
      <Image
        src="/home/mobile-mockup.png"
        alt="Mobile"
        fill
        className="object-contain"
      />
    </div>
    {/* Content inside phone */}
    <div className="absolute top-[30%] w-full text-center px-6 text-white z-20">
      <h2 className="text-[16px] font-extrabold">{data?.DigitalCard}</h2>
      <p className="text-[10px] mt-2 mb-3 w-[55%] mx-auto text-center">
      {data?.DigitalCardDescription}
      </p>
      <button className="bg-white text-[#E74529] text-[8px] font-bold rounded-lg px-8 py-2"
      onClick={()=> setModalOpen(true)}
      >
        {data?.DigitalCardCTA}
      </button>
    </div>
  </div>

  {/* PHYSICAL SECTION */}
  <div className="relative w-full h-[300px] bg-[#E74529] overflow-hidden">
    <Image
      src="/home/red-bg.png"
      alt="Red Background"
      fill
      className="object-cover"
    />
    {/* Floating Red Icons (Static) */}
    <Image
      src="/home/lock.png"
      alt="icon"
      width={40}
      height={40}
      className="absolute top-[5%] left-[10%]"
    />
    <Image
      src="/home/diamond.png"
      alt="icon"
      width={40}
      height={40}
      className="absolute top-[30%] left-[80%]"
    />
    <Image
      src="/home/blur-d.png"
      alt="icon"
      width={60}
      height={60}
      className="absolute top-[30%] left-[80%]"
    />
     <Image
      src="/home/pill.png"
      alt="icon"
      width={40}
      height={40}
      className="absolute top-[5%] left-[70%]"
    />
     <Image
      src="/home/diamond.png"
      alt="icon"
      width={40}
      height={40}
      className="absolute top-[45%] left-[0%]"
    />
    <Image
      src="/home/dark-plane.png"
      alt="icon"
      width={40}
      height={40}
      className="absolute bottom-[10%] left-[10%]"
    />
    <Image
      src="/home/plane.png"
      alt="icon"
      width={50}
      height={50}
      className="absolute top-[30%] left-[30%]"
    />
    <Image
      src="/home/case.png"
      alt="icon"
      width={60}
      height={60}
      className="absolute top-[87%] left-[80%]"
    />

 
    {/* Content */}
    <div className="absolute top-[45%] w-full text-center px-6 text-white z-20">
      <h2 className="text-[16px] font-extrabold ">{data?.PhysicalCard}</h2>
      <p className="text-[10px] mt-2 mb-3 w-[58%] mx-auto text-center">
      {data?.PhysicalCardDescription}
      </p>
      <button className="bg-white text-[#E74529] text-[8px] font-bold rounded-lg px-8 py-2"
      onClick={()=> setModalOpen(true)}>
        {data?.PhysicalCardCTA}
        </button>
    </div>
  </div>
  <DownloadModal open={isModalOpen} onOpenChange={setModalOpen} />
</div>
</>

  )
}
