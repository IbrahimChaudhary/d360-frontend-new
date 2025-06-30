import { InvestData } from "@/types/investor-relations/investor-relations";
import Image from "next/image";
import Link from "next/link";
interface AnnualReportsBannerProp {
  data: InvestData;
}
export default function AnnualReportsBanner({ data }: AnnualReportsBannerProp) {
  return (
    <section className="relative py-16 md:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={
            data?.ExploreImg?.formats?.large?.url ||
            data?.ExploreImg?.formats?.medium?.url ||
            data?.ExploreImg?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  data?.ExploreImg?.formats?.large?.url ||
                  data?.ExploreImg?.formats?.medium?.url ||
                  data?.ExploreImg?.url
                }`
              : "/international/international-hero"
          }
          alt="Sky background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-100/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[60px] font-extrabold text-white  lg:text-[#263244] lg:mb-8 mb-2 w-[60%] mx-auto lg:mx-0 lg:w-full">
          {data.ExploreHead}
        </h2>
        <Link href="/annual-report" className="">
        <button className="bg-[#E74529]  text-white px-8  py-2 rounded-lg  font-bold text-[8px] lg:text-[20px] lg:rounded-xl lg:px-8 btn-14">
            {data.ExploreBtn}
          </button>
        </Link>
      </div>
    </section>
  );
}
