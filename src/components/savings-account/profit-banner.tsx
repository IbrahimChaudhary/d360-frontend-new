"use client";

import Image from "next/image";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { SavingsData } from "@/types/savings-account/savings-account";
interface ProfitBannerProps {
  data: SavingsData;
}
export default function ProfitBanner({ data }: ProfitBannerProps) {
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";
  return (
    <section className="w-full  bg-white">
      <div className=" w-full  justify-center py-24 lg:py-18 flex flex-col lg:flex-row items-center ltr:gap-10 rtl:gap-20">
        <div className="">
          <Image
            src={
              data?.ProfitImg?.formats?.large?.url ||
              data?.ProfitImg?.formats?.medium?.url ||
              data?.ProfitImg?.url
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    data?.ProfitImg?.formats?.large?.url ||
                    data?.ProfitImg?.formats?.medium?.url ||
                    data?.ProfitImg?.url
                  }`
                : "/"
            }
            alt="2 percent AER"
            width={380}
            height={180}
            className="object-contain w-[200px] lg:w-full lg:h-full  "
          />
        </div>

        {/* Heading and subtext */}
        <div className=" text-center rtl:lg:text-right ltr:lg:text-left">
          <h2 className="text-3xl md:text-[60px] lg:w-full w-[70%] lg:mx-0 mx-auto font-bold text-[#263244] leading-tight">
           {data.ProfitHead1}
            <br className="hidden md:block" /> {data.ProfitHead2}
          </h2>
          <p className="mt-5 text-[14px] lg:text-[20px] lg:px-0 px-12 lg:w-[65%] text-[#475569]">
          {data.ProfitDes}
          </p>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="bg-[#F8FAFC]  py-12 px-4">
        <div className="lg:max-w-7xl relative   mx-auto  lg:h-[209px] flex flex-col-reverse lg:flex-row  ">
          {/* Text Block */}
          <div className="lg:text-left text-center rtl:lg:mr-50 lg:pt-0 pt-10 max-w-md lg:ml-40 w-full">
            <h3 className="lg:text-[60px] lg:px-0 px-6 text-[30px] w-[73%] mx-auto lg:w-full rtl:text-right font-extrabold  text-[#293242] leading-tight lg:leading-16">
            {data.ProfitBannerHead}
            </h3>
            <p className="lg:mt-6 mt-2 text-[14px] lg:text-[20px] lg:w-full w-[60%] mx-auto rtl:text-right text-[#293242]">
            {data.ProfitBannerDes}
            </p>
          </div>

          {/* Phone Visual */}
          <div className="lg:absolute w-full mx-auto -top-20 rtl:left-50 ltr:right-50 max-w-xs">
            <Image
            src={
              data?.ProfitBannerImg?.formats?.large?.url ||
              data?.ProfitBannerImg?.formats?.medium?.url ||
              data?.ProfitBannerImg?.url
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                    data?.ProfitBannerImg?.formats?.large?.url ||
                    data?.ProfitBannerImg?.formats?.medium?.url ||
                    data?.ProfitBannerImg?.url
                  }`
                : "/"
            }              alt="Phone visual"
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
