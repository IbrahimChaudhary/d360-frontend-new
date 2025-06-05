'use client';

export default function SanabilSteps() {
  const steps = [
    {
      number: 1,
      title: 'Open the D360 app',
      description:
        'From the home screen, scroll to the “Discover Products” section, then tap “Open Sanabil Daily Savings Account”',
    },
    {
      number: 2,
      title: 'Create an account',
      description: "Tap on Create 'Sanabil Daily Account'",
    },
    {
      number: 3,
      title: 'Add money',
      description:
        'Top up your account with at least SAR 2,500 and earn profits on your savings',
    },
  ];

  return (
    <section className="bg-[#F6F7F8] py-14 lg:px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-[50px] font-extrabold text-[#263244]">
          How to Open a Sanabil Daily Distribution Account
        </h2>
        <p className="text-sm md:text-base px-6  lg:px-0 text-[#263244] mt-4 lg:mt-2">
          Put your salary to work or activate unspent cash in 3 simple steps
        </p>

        <div className="grid md:grid-cols-3 gap-6 px-6 lg:px-28 mt-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F6F7F8]  flex  items-center-safe gap-6 rounded-xl p-4 text-left shadow-sm"
            >

              <div className="text-8xl font-light  text-[#D9D9D9] ">
                {step.number}
              </div>
              <div>
              <h3 className="font-semibold text-[#1E293B] text-sm md:text-base mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-[#475569]">{step.description}</p>
              </div>
            </div>
          ))}
        <p className="text-xs text-center lg:text-left text-[#64748B]  underline cursor-pointer">
          *Terms & conditions apply
        </p>
        </div>

      </div>
    </section>
  );
}
