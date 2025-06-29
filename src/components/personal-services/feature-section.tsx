import { motion } from "framer-motion";
import { SectionHeading } from "../section-heading";
import { PersonalServiceData } from "@/types/personal-service/personal-service";

interface Feature {
  icon: string;
  title: string;
  titleHalf: string;
  description: string;
}


interface FeatureSectionProps {
  data: PersonalServiceData;
}

export default function FeatureSection({ data }: FeatureSectionProps) {
  const icons: string[] = [
    "/personal/icon1.svg",
    "/personal/icon2.svg",
    "/personal/icon3.svg",
    "/personal/icon4.svg",
    "/personal/icon5.svg",
    "/personal/icon6.svg",
    "/personal/icon7.svg",
    "/personal/icon8.svg",
  ];

  const features: Feature[] = icons.map((icon, idx) => {
    const slot = idx + 4;
    const titleKey = `Title${slot}` as keyof PersonalServiceData;
    const titleHalfKey = `title${idx + 1}half` as keyof PersonalServiceData;
    const descKey = `Description${slot}` as keyof PersonalServiceData;
  
    return {
      icon,
      title: data[titleKey] as string,
      titleHalf: data[titleHalfKey] as string,
      description: data[descKey] as string,
    };
  });
  
  

  return (
    <section className=" lg:py-16  bg-white lg:px-4 px-1  ">
      <SectionHeading className="lg:py-16 pt-16 lg:pt-0 text-[30px] leading-tight w-full lg:text-[50px] font-extrabold">
        {data.Title1} {data.Title2} {data.Title3}
      </SectionHeading>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center lg:py-0 py-10">
      {features.map(({ icon, title, titleHalf, description }) => (
  <motion.div
    key={title}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="flex flex-col items-center"
  >
    <img
      src={icon}
      alt={title}
      className="mb-3 w-[33px] h-[23px] lg:w-[60px] lg:h-[60px] object-contain"
    />
    <h4 className="text-[12px] lg:text-[20px] font-extrabold text-[#263244] mb-1 text-center leading-tight">
      {title}
      <br />
      {titleHalf}
    </h4>
    <p className="text-[12px] font-[400] lg:text-[14px] text-[#4B5563] text-center leading-snug">
      {description}
    </p>
  </motion.div>
))}

      </div>

      <div className="hidden lg:block text-center mt-12">
        <a
          href="/products-and-services"
          className="text-[20px] font-bold underline text-[#263244] hover:text-[#E74529]"
        >
          {data.productFees}{" "}
        </a>
      </div>
    </section>
  );
}
