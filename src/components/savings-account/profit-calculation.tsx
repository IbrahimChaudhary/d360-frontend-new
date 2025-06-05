'use client';

export default function ProfitCalculationSection() {
  const points = [
    'The cutoff time for balance calculation is 12:00 AM (midnight) every day.',
    'Profit is calculated on the minimum balance maintained in your account between 00:00 and 23:59.',
    'Deposits made before the cutoff time will start earning profit from the same day.',
    'Deposits made after midnight or during weekends/holidays will start earning profit from the next business day.',
    'Profit earned each business day is credited to your account at 9:00 AM the following day.',
    'Your account must maintain a minimum balance of SAR 2,500 throughout the day to earn profit for that day.',
  ];

  return (
    <section className="bg-[#F6F7F8] py-12 px-4 md:px-20">
    <h2 className="text-[#EB644C] font-bold text-center rtl:lg:text-right ltr:lg:text-left text-3xl md:text-[60px] mb-10">
      How Profit Is Calculated
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
