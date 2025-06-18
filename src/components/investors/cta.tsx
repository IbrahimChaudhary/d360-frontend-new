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
        <Link href="/anuual-reports" className="">
          <button className="bg-[#E74529] hover:bg-[#d23e23] text-white px-6 py-1 lg:py-2 rounded-lg font-bold text-[20px] lg:rounded-xl lg:px-10">
            {data.ExploreBtn}
          </button>
        </Link>
      </div>
    </section>
  );
}
