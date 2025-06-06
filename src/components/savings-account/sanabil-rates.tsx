'use client';

export default function SanabilRates() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#EB644C]">
          Sanabil Profit Rates
        </h2>
        <p className="text-[7px] lg:text-sm text-[#263244] mt-1">As of 29 April 2025</p>

        {/* Table */}
        <div className="mt-10 overflow-x-auto lg:px-20">
          <table className="w-full text-[7px] md:text-base  ">
            <thead>
              <tr className="text-[#263244] font-semibold ">
                <th className="border-b-2 border-r-[#DEE4ED] border-r border-[#4FC4D9] px-6 py-3 text-left">
                  Level
                </th>
                <th className="border-b-2 border-r-[#DEE4ED] border-r border-[#4FC4D9] px-6 py-3 text-left">
                  Balance Threshold (SAR)
                </th>
                <th className="border-b-2 border-[#4FC4D9] px-6 py-3 text-left">
                  Annual Equivalent Rate (AER)*
                </th>
              </tr>
            </thead>
            <tbody className="text-[#263244] font-medium text-left">
              {[
                { level: '1', threshold: '2,500 - 4,999', rate: '0.5%' },
                { level: '2', threshold: '5,000 - 19,999', rate: '1.0%' },
                { level: '3', threshold: '20,000 - 49,999', rate: '1.5%' },
                { level: '4', threshold: '≥ 50,000', rate: '2.0%' },
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
        <p className="mt-6 text-[5px] lg:text-md text-[#7B818D] max-w-4xl mx-auto">
          *This is the Annual Earnings Rate. Which is the percentage return you can expect to earn over the course of one year.
        </p>
      </div>
    </section>
  );
}
