"use client";

import { SavingsData } from "@/types/savings-account/savings-account";

interface ProfitCalculationSectionProps {
  data: SavingsData;
}
export default function ProfitCalculationSection({
  data,
}: ProfitCalculationSectionProps) {
  const points = [
    `${data.ProfitCal1}`,
    `${data.ProfitCal2}`,
    `${data.ProfitCal3}`,
    `${data.ProfitCal4}`,
    `${data.ProfitCal5}`,
    `${data.ProfitCal6}`,
  ];

  return (
    <section className="bg-[#F6F7F8] py-12 px-4 xl:px-27 2xl:px-196">
      <h2 className="text-[#EB644C] lg:w-full text-center ltr:lg:text-left rtl:lg:text-right lg:mx-0 mx-auto w-[80%] font-bold  text-3xl md:text-[60px] mb-10">
        {data.ProfitCalHead}{" "}
      </h2>

      <div className="relative ltr:border-l-2 rtl:border-r-2 border-[#E5E7EB] ltr:pl-6 rtl:pr-6 space-y-3">
        {points.map((text, i) => (
          <div key={i} className="relative ltr:pl-6 rtl:pr-6">
            {/* Bullet Circle */}
            <div className="absolute ltr:-left-[34px] rtl:-right-[34px] top-1 w-4 h-4 rounded-full bg-[#E5E7EB] border border-white shadow-sm z-10" />

            <p className="text-[#263244] text-base lg:text-[20px] leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
