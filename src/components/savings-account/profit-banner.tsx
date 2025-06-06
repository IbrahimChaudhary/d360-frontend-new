'use client';

import Image from 'next/image';
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";

export default function ProfitBanner() {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  return (
    <section className="w-full  bg-white">
      
      <div className=" w-full  justify-center py-24 lg:py-18 flex flex-col lg:flex-row items-center gap-10">
        
        <div className="">
          <Image
            src="/savings/2percent.png" // Replace with your 2% image path
            alt="2 percent AER"
            width={380}
            height={180}
            className="object-contain w-[200px] lg:w-full lg:h-full "
          />
        </div>

        {/* Heading and subtext */}
        <div className=" text-center rtl:lg:text-right ltr:lg:text-left">
          <h2 className="text-3xl md:text-[60px] font-bold text-[#263244] leading-tight">
            Profit paid day<br className="hidden md:block" /> after day after day
          </h2>
          <p className="mt-5 text-[14px] lg:text-[20px] lg:px-0 px-6 lg:w-[65%] text-[#475569]">
            Open an account in seconds, and see your money grow — every single day.
          </p>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="bg-[#F8FAFC]  py-12 px-4">
        <div className="lg:max-w-7xl relative   mx-auto  lg:h-[209px] flex flex-col-reverse lg:flex-row  ">
          {/* Text Block */}
          <div className="lg:text-left text-center lg:pt-0 pt-10 max-w-md lg:ml-40 w-full">
            <h3 className="lg:text-[60px] lg:px-0 px-8 text-[30px] w-full rtl:text-right font-extrabold  text-[#293242] lg:leading-16">Simple and Secure Savings</h3>
            <p className="mt-6 text-[14px] lg:text-[20px] rtl:text-right text-[#293242]">
              Save easily and securely with the Sanabil Savings Account, fully compliant with Shariah principles
            </p>
          </div>

          {/* Phone Visual */}
          <div className="lg:absolute w-full -top-20 rtl:left-30 ltr:right-30 max-w-xs">
            <Image

            src={  isRTL ? "/savings/mob-ar.png" : "/savings/mob.png"}
              alt="Phone visual"
              width={350}
              height={600}
              className="object-contain w-[210px] mx-auto lg:w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
