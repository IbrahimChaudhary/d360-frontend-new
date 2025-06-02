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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/media/media-hero.png">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#293242] leading-tight">
            {media?.Title1} <br /> {media?.Title2}
          </h1>
        </Hero>

        <div className="bg-gray-50 py-18">
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
