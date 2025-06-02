'use client';

import Image from 'next/image';

export default function ProfitBanner() {
  return (
    <section className="w-full  bg-white">
      
      <div className=" w-full  justify-center py-24 lg:py-12 flex flex-col lg:flex-row items-center gap-10">
        
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
        <div className=" text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[#263244] leading-tight">
            Profit paid day<br className="hidden md:block" /> after day after day
          </h2>
          <p className="mt-5 text-md lg:px-0 px-6 lg:w-[65%] text-[#475569]">
            Open an account in seconds, and see your money grow — every single day.
          </p>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="bg-[#F8FAFC]  py-12 px-4">
        <div className="lg:max-w-7xl relative    lg:h-[209px] flex flex-col-reverse lg:flex-row  ">
          {/* Text Block */}
          <div className="lg:text-left text-center lg:pt-0 pt-10 max-w-sm lg:ml-40 w-full">
            <h3 className="text-4xl  font-bold lg:w-[70%] text-[#293242] leading-12">Simple and Secure Savings</h3>
            <p className="mt-6 text-md text-[#293242]">
              Save easily and securely with the Sanabil Savings Account, fully compliant with Shariah principles
            </p>
          </div>

          {/* Phone Visual */}
          <div className="lg:absolute w-full -top-20 right-30 max-w-xs">
            <Image
              src="/savings/mob.png" 
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
