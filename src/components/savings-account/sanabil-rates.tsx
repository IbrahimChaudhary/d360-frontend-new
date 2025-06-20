"use client";

import { SavingsData } from "@/types/savings-account/savings-account";

interface SanabilRatesProps {
  data: SavingsData;
}
export default function SanabilRates({ data }: SanabilRatesProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#EB644C]">
          {data.RatesHead}
        </h2>
        <p className="text-[7px] lg:text-sm text-[#263244] mt-1">
          {data.RatesDes}
        </p>

        {/* Table */}
        <div className="mt-10 overflow-x-auto lg:px-20">
          <table className="w-full text-[7px] md:text-base  ">
            <thead>
              <tr className="text-[#263244] font-semibold ">
                <th className="border-b-2 border-r-[#DEE4ED] border-r border-[#4FC4D9] px-6 py-3 text-left">
                  {data.ColName1}
                </th>
                <th className="border-b-2 border-r-[#DEE4ED] border-r border-[#4FC4D9] px-6 py-3 text-left">
                  {data.ColName2}{" "}
                </th>
                <th className="border-b-2 border-[#4FC4D9] px-6 py-3 text-left">
                  {data.ColName3}{" "}
                </th>
              </tr>
            </thead>
            <tbody className="text-[#263244] font-medium text-left">
              {[
                {
                  level: `${data.Col1Val1}`,
                  threshold: `${data.Col2Val1}`,
                  rate: `${data.Col3Val1}`,
                },
                {
                  level: `${data.Col1Val2}`,
                  threshold: `${data.Col2Val2}`,
                  rate: `${data.Col3Val2}`,
                },
                {
                  level: `${data.Col1Val3}`,
                  threshold: `${data.Col2Val3}`,
                  rate: `${data.Col3Val3}`,
                },
                {
                  level: `${data.Col1Val4}`,
                  threshold: `${data.Col2Val4}`,
                  rate: `${data.Col3Val4}`,
                },
              ].map((row, idx) => (
                <tr key={idx} className="border-t  border-[#DEE4ED]">
                  <td className="px-6 py-4 border-r">{row.level}</td>
                  <td className="px-6 py-4 border-r">{row.threshold}</td>
                  <td className="px-6 py-4">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="lg:mt-[42px] text-[5px] lg:text-md text-[#7B818D] max-w-4xl mx-auto">
          {data.RatesTerm}
        </p>
      </div>
    </section>
  );
}
