import { CareerData } from "@/types/careers/careers";
import Image from "next/image";
interface OpenApplicationProps {
  data: CareerData;
}
export default function OpenApplication({ data }: OpenApplicationProps) {
  return (
    <div className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="lg:max-w-7xl mx-auto px-4 md:px-6">
        <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-[60px] ltr:lg:text-left rtl:lg:text-right text-center font-extrabold text-[#293242] leading-tight">
              {data.Application}
            </h2>

            <p className="text-[#293242] text-[14px] ltr:lg:text-left rtl:lg:text-right text-center md:text-[20px]  ">
              {data.ApplicationDes1}
            </p>

            <p className="text-[#293242] text-[14px] ltr:lg:text-left rtl:lg:text-right text-center  md:text-[20px]  ">
              {data.ApplicationDes2}
            </p>

            <div className="pt-4 lg:block flex justify-center">
              <a href="https://fa-erqw-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/D360BankCareerPage">
              <button className="bg-[#293242]  hover:bg-[#2d3748] text-white text-[8px] lg:text-[14px] font-bold px-6 py-2 rounded-lg lg:rounded-xl transition-colors duration-300 btn-14">
                {data.ApplicationBtn}
              </button>
            </a>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative lg:w-full lg:h-full w-108 h-50 max-w-md aspect-square lg:rounded-2xl overflow-hidden">
              <Image
                src={
                  data?.ApplicationImg?.formats?.large?.url ||
                  data?.ApplicationImg?.formats?.medium?.url ||
                  data?.ApplicationImg?.url
                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                        data?.ApplicationImg?.formats?.large?.url ||
                        data?.ApplicationImg?.formats?.medium?.url ||
                        data?.ApplicationImg?.url
                      }`
                    : "/international/international-hero"
                }
                alt="Handshake representing joining the team"
                fill
                className="object-cover bg-[#E74529]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
