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
  const { language } = useStore();
  const { t } = useTranslations();
  const [media, setMedia] = useState<MediaCenterData | null>(null);

  useEffect(() => {
    fetchMedia(language)
      .then(setMedia)
      .catch((err) => console.error("Failed to load media center:", err));
  }, [language]);

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
      slug: card.slug,
      createdAt: card.createdAt,
      updatedAt: card.updatedAt,
      publishedAt: card.publishedAt,
      imageHero: card.imageHero,
      imageCard: card.imageCard
    }));
  }, [media]);

  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";

  const galleryImages = useMemo(() => {
    if (!media) return [];
    return [
      {
        id: "1",
        src: `${process.env.NEXT_PUBLIC_STRAPI_URL}${media.galleryImg1?.formats?.large?.url || media.galleryImg1?.formats?.medium?.url || media.galleryImg1?.url || "/media/gallery1.png"}`,
        alt: { en: "Gallery Image 1", ar: "صورة المعرض 1" }
      },
      {
        id: "2",
        src: `${process.env.NEXT_PUBLIC_STRAPI_URL}${media.galleryImg2?.formats?.large?.url || media.galleryImg2?.formats?.medium?.url || media.galleryImg2?.url || "/media/gallery2.png"}`,
        alt: { en: "Gallery Image 2", ar: "صورة المعرض 2" }
      },
      {
        id: "3",
        src: `${process.env.NEXT_PUBLIC_STRAPI_URL}${media.galleryImg3?.formats?.large?.url || media.galleryImg3?.formats?.medium?.url || media.galleryImg3?.url || "/media/gallery3.png"}`,
        alt: { en: "Gallery Image 3", ar: "صورة المعرض 3" }
      },
      {
        id: "4",
        src: `${process.env.NEXT_PUBLIC_STRAPI_URL}${media.galleryImg4?.formats?.large?.url || media.galleryImg4?.formats?.medium?.url || media.galleryImg4?.url || "/media/gallery4.png"}`,
        alt: { en: "Gallery Image 4", ar: "صورة المعرض 4" }
      }
    ];
  }, [media]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about"/>
      <main className="flex-1">
        <Hero backgroundImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${media?.heroImg?.formats?.large?.url || media?.heroImg?.formats?.medium?.url || media?.heroImg?.url || "/media/media-hero.png"}`}>
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
            tab1={media?.gallery || ""}
            tab2={media?.news || ""}
            galleryImages={galleryImages}
            newsArticles={newsArticles}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
