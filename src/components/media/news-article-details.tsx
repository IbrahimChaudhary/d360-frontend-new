"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { NewsCard } from "@/components/media/news-card";
import { useLanguage } from "@/context/language-context";
import { StrapiMediaData } from "@/types/about/about";

export interface NewsArticle {
  id: number;
  slug: string;
  heading: string;
  shortDesc: string;
  para1?: string;
  para2?: string;
  para3?: string;
  date: string; // e.g. "Jan 2, 2023"
  imageHero: StrapiMediaData;
  imageCard: StrapiMediaData;
}

interface NewsArticleDetailsProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
}

export function NewsArticleDetails({
  article,
  relatedArticles,
}: NewsArticleDetailsProps) {
  const { language } = useLanguage();

  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return language === "en" ? article.date : article.date;
  // };

  // const formatContent = (content: string) => {
  //   return content.split("\n\n").map((paragraph, index) => (
  //     <p key={index} className="mb-4 text-slate-700 leading-relaxed">
  //       {paragraph}
  //     </p>
  //   ));
  // };

  return (
    <div className="bg-white px-8 lg:px-0">
      <div className=" w-full">
        <div className="hidden lg:flex relative h-64 w-full md:h-96  overflow-hidden mb-8">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.imageHero?.formats?.large?.url || article.imageHero?.formats?.medium?.url || article.imageHero?.url}`}
            alt={language === "en" ? article.heading : article.heading}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mb-8 max-w-5xl mx-auto  px-4">
          <h1 className="text-[16px] md:text-[60px]  font-extrabold text-[#293242] mb-4 pt-5">
            {language === "en" ? article.heading : article.heading}
          </h1>

          <div className="prose prose-lg max-w-none pt-4 lg:pt-10 lg:text-[25px] text-base ">
            <p className="mb-3">{article.para1}</p>
            <p className="mb-3">{article.para2}</p>
            <p className="mb-3">{article.para3}</p>
          </div>
          <div className="lg:flex hidden items-center ltr:justify-start gap-3 rtl:justify-end">
          <img src="/media/calender.svg" className="w-[22px] h-[22px]" alt="" />
          <p className="text-[#9B9B9B] lg:text-[14px]">{article.date} </p>
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="py-8 lg:py-16 lg:px-4 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#293242] mb-6">
              {language === "en" ? "Other Topics" : "مواضيع أخرى"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles
                .slice(0, 4) 
                .map((relatedArticle, index) => (
                  <NewsCard
                    key={relatedArticle.id}
                    article={relatedArticle}
                    index={index}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
