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
    const descKey  = `Description${slot}` as keyof PersonalServiceData;

    return {
      icon: Icon,
      title: data[titleKey] as string,
      description: data[descKey] as string,
    };
  });

  return (
<<<<<<< HEAD
    <section className="py-16 bg-white px-4 md:px-32">
      <SectionHeading>
        {data.Title1} {data.Title2} {data.Title3}
=======
    <section className="py-16  bg-white px-4 md:px-32">
        <SectionHeading className="text-xl lg:text-3xl font-extrabold">
        Your Everyday and Travel Companion!
        Experience banking excellence with every detail designed for you.
>>>>>>> 47b4fb9b36ba4d0d6e3d3b7ca38ab2fe3eedf6e8
      </SectionHeading>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {features.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <Icon size={32} className="text-[#E74529] mb-3" />
            <h4 className="text-sm font-bold text-[#263244] mb-1 text-center">
              {title}
            </h4>
            <p className="text-xs text-[#4B5563]">{description}</p>
          </motion.div>
        ))}
      </div>

      <div className="hidden lg:block text-center mt-12">
        <a
          href="#"
          className="text-sm font-medium underline text-[#263244] hover:text-[#E74529]"
        >
          Products and Services Fees
        </a>
      </div>
    </section>
  );
}
