import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaGlobe,
  FaCreditCard,
  FaExchangeAlt,
  FaUniversity,
  FaBolt,
  FaMoneyBillWave,
  FaPhoneAlt,
  FaCalculator,
} from "react-icons/fa";
import { SectionHeading } from "../section-heading";
import { PersonalServiceData } from "@/types/personal-service/personal-service";

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  data: PersonalServiceData;
}

export default function FeatureSection({ data }: FeatureSectionProps) {
  const icons: IconType[] = [
    FaGlobe,
    FaCreditCard,
    FaExchangeAlt,
    FaUniversity,
    FaBolt,
    FaMoneyBillWave,
    FaPhoneAlt,
    FaCalculator,
  ];

  const features: Feature[] = icons.map((Icon, idx) => {
    const slot = idx + 4;
    const titleKey = `Title${slot}` as keyof PersonalServiceData;
    const descKey = `Description${slot}` as keyof PersonalServiceData;

    return {
      icon: Icon,
      title: data[titleKey] as string,
      description: data[descKey] as string,
    };
  });

  return (
    <section className=" lg:py-16 bg-white lg:px-4 px-1 ">
      <SectionHeading className="lg:py-16 pt-16 lg:pt-0 text-[30px] leading-tight w-full lg:text-[60px] font-extrabold">
        {data.Title1} {data.Title2} {data.Title3}
      </SectionHeading>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {features.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <Icon
             
             className="text-[#E74529] mb-3 w-[33px] h-[23px] lg:w-[60px] lg:h-[60px]"
            />
            <h4 className="text-[12px] lg:text-[25px]  font-extrabold text-[#263244] mb-1 text-center">
              {title}
            </h4>
            <p className="text-[12px] font-[400] lg:text-[16px] text-[#4B5563]">
              {description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="hidden lg:block text-center mt-12">
        <a
          href="#"
          className="text-[20px] font-bold underline text-[#263244] hover:text-[#E74529]"
        >
          {data.productFees}{" "}
        </a>
      </div>
    </section>
  );
}
