"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import type { NewsArticle } from "@/types/media";
import { NewsCardData } from "@/types/media/media";

interface NewsCardProps {
  article: NewsCardData;
  index: number;
}

export function NewsCard({ article, index }: NewsCardProps) {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === "en"
      ? date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : date.toLocaleDateString("ar-SA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full" // <--- Ensures the card fills grid height
    >
      <Link href={`/media/news/${article.slug}`}>
        <div className="bg-[#F6F7F8] rounded-2xl lg:rounded-4xl transition-all duration-300 overflow-hidden h-full flex flex-col min-h-[320px]">
          {/* Image */}
          <div className="relative h-48 w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.imageCard?.formats?.large?.url || article.imageCard?.formats?.medium?.url || article.imageCard?.url || "/media/card1.png"}`}
              alt={language === "en" ? article.heading : article.heading}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-grow p-4 lg:">
            <div>
              <h3 className="font-bold text-[14px] lg:text-[35px] mb-2 text-[#293242] line-clamp-2 hover:text-coral-600 transition-colors">
                {language === "en" ? article.heading : article.heading}
              </h3>
              <p className="text-[#293242] text-[12px] lg:text-[20px] mb-4 line-clamp-3">
                {language === "en" ? article.shortDesc : article.shortDesc}
              </p>
            </div>

            <div className="flex items-center text-[14px] text-[#293242] gap-2 mt-auto">
              <img src="/media/calender2.svg" className="w-[22px] h-[22px]" alt="" />
              <span>{formatDate(article.date)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
