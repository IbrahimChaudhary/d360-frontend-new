import { InvestData } from "@/types/investor-relations/investor-relations";
import Image from "next/image";
import Link from "next/link";
interface AnnualReportsBannerProp {
  data: InvestData;
}
export default function AnnualReportsBanner({ data }: AnnualReportsBannerProp) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={
            data?.HeroImg?.formats?.large?.url ||
            data?.HeroImg?.formats?.medium?.url ||
            data?.HeroImg?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                  data?.HeroImg?.formats?.large?.url ||
                  data?.HeroImg?.formats?.medium?.url ||
                  data?.HeroImg?.url
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
        <h2 className="text-3xl md:text-4xl lg:text-[60px] font-extrabold text-white  lg:text-[#263244] mb-8">
          {data.ExploreHead}
        </h2>
        <Link href="/anuual-reports">
          <button className="bg-[#E74529] cursor-pointer hover:bg-[#d63d1e] text-white font-bold text-[8px] lg:text-[20px]  px-8 py-3 rounded-md lg:rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
            {data.ExploreBtn}
          </button>
        </Link>
      </div>
    </section>
  );
}
