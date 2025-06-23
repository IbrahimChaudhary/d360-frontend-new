"use client";

import { SavingsData } from "@/types/savings-account/savings-account";

interface SanabilStepsProps {
  data: SavingsData;
}
export default function SanabilSteps({ data }: SanabilStepsProps) {
  const steps = [
    {
      number: `${data.Step1Num}`,
      title: `${data.Step1Head}`,
      description: `${data.Step1Des}`,
    },
    {
      number: `${data.Step2Num}`,
      title: `${data.Step2Head}`,
      description: `${data.Step2Des}`,
    },
    {
      number: `${data.Step3Num}`,
      title: `${data.Step3Head}`,
      description: `${data.Step3Des}`,
    }
  ];

  return (
    <section className="bg-[#F6F7F8] py-14 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl leading-tight lg:w-full mx-auto lg:mx-0 px-4 lg:px-0 md:text-[40px] font-extrabold text-[#263244]  w-[80%]">
          {data.OpenHead}
        </h2>
        <p className="text-[14px] md:text-[base] px-16  lg:px-0 text-[#263244] mt-4 lg:mt-2">
        {data.OpenDes}
        </p>

        <div className="grid md:grid-cols-3 gap-6 px-12 lg:px-0 mt-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white  flex gap-6 rounded-xl p-4 text-left "
            >
              <div className="text-8xl font-light  text-[#D9D9D9] ">
                {step.number}
              </div>
              <div>
              <h3 className="font-semibold text-[#1E293B] rtl:text-right ltr:text-left text-sm md:text-[25px] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs lg:text-[20px] rtl:text-right ltr:text-left text-[#475569]">{step.description}</p>
              </div>
            </div>
          ))}
           <p className="text-xs text-center rtl:lg:text-right ltr:lg:text-left text-[#64748B]  underline cursor-pointer">
          {data.OpenTerms}
          </p>
        </div>
      </div>
    </section>
  );
}
