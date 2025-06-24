import { InvestData } from "@/types/investor-relations/investor-relations";
import Image from "next/image";

interface InfoCardsProps {
  data: InvestData;
}
export default function InfoCards({ data }: InfoCardsProps) {
  const cardData = [
    {
      title: `${data.Way1Head}`,
      description: `${data.Way1Des}`,
      image: `${
        data?.Way1Img?.formats?.large?.url ||
        data?.Way1Img?.formats?.medium?.url ||
        data?.Way1Img?.url
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
              data?.Way1Img?.formats?.large?.url ||
              data?.Way1Img?.formats?.medium?.url ||
              data?.Way1Img?.url
            }`
          : "/international/international-hero"
      }`,
      textColor: "text-white",
    },
    {
      title: `${data.Way2Head}`,
      description: `${data.Way2Des}`,
      image: `${
        data?.Way2Img?.formats?.large?.url ||
        data?.Way2Img?.formats?.medium?.url ||
        data?.Way2Img?.url
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
              data?.Way2Img?.formats?.large?.url ||
              data?.Way2Img?.formats?.medium?.url ||
              data?.Way2Img?.url
            }`
          : "/international/international-hero"
      }`,
      textColor: "text-white",
    },
    {
      title: `${data.Way3Head}`,
      description: `${data.Way3Des}`,
      image: `${
        data?.Way3Img?.formats?.large?.url ||
        data?.Way3Img?.formats?.medium?.url ||
        data?.Way3Img?.url
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
              data?.Way3Img?.formats?.large?.url ||
              data?.Way3Img?.formats?.medium?.url ||
              data?.Way3Img?.url
            }`
          : "/international/international-hero"
      }`,
      textColor: "text-white",
    },
    {
      title: `${data.Way4Head}`,
      description: `${data.Way4Des}`,
      image: `${
        data?.Way4Img?.formats?.large?.url ||
        data?.Way4Img?.formats?.medium?.url ||
        data?.Way4Img?.url
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
              data?.Way4Img?.formats?.large?.url ||
              data?.Way4Img?.formats?.medium?.url ||
              data?.Way4Img?.url
            }`
          : "/international/international-hero"
      }`,
      textColor: "text-white",
    }
  ];
  return (
    <section className="">
      <div className="lg:max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl w-full h-90 lg:w-[480px] group  transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover opacity-80 shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative h-full flex flex-col  p-6">
                <div className="space-y-3">
                  <h3
                    className={`text-[16px] lg:w-[80%] w-[40%] md:text-[40px] font-bold ${card.textColor} leading-tight`}
                  >
                    {card.title}
                  </h3>
                  <p className={`${card.textColor} text-sm md:text-[20px] lg:w-[70%] w-[65%]`}>
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
