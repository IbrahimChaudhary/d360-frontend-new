"use client";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { fetchMedia } from "@/api/media";
import { MediaCenterData } from "@/types/media/media";
import { MediaTabs } from "@/components/media/media-tabs";
import { galleryImages } from "@/data/media"; // you can keep these static if you like
import { useTranslations } from "@/lib/i18n";
import { useEffect, useState, useMemo } from "react";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";

export default function MediaPage() {
  const { t } = useTranslations();
  const [media, setMedia] = useState<MediaCenterData | null>(null);

  useEffect(() => {
    fetchMedia()
      .then(setMedia)
      .catch((err) => console.error("Failed to load media center:", err));
  }, []);

  // derive an array of newsArticles from the news_cards relation
  const newsArticles = useMemo(() => {
    if (!media) return [];
    return media.news_cards.map((card) => ({
      id: card.id,
      documentId: card.documentId,
      heading: card.heading,
      shortDesc: card.shortDesc,
      para1: card.para1,
      para2: card.para2,
      para3: card.para3,
      date: card.date,
      slug:card.slug,
      createdAt: card.createdAt,
      updatedAt: card.updatedAt,
      publishedAt: card.publishedAt,
    }));
  }, [media]);

  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about"/>
      <main className="flex-1">
        <Hero backgroundImage="/media/media-hero.png">
        <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center lg:w-[80%] w-[60%] uppercase lg:text-[80px] font-extrabold text-[#263244] leading-tight${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {media?.Title1}
              <br />
              {media?.Title2}
            </h1>
            </div>
        </Hero>

        <div className="bg-gray-50 py-8 lg:py-18">
          <MediaTabs
            galleryImages={galleryImages}
            newsArticles={newsArticles}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
