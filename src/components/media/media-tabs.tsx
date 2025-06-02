"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { GalleryCarousel } from "@/components/media/gallery-carousel";
import { NewsCard } from "@/components/media/news-card";
import type { GalleryImage, NewsArticle } from "@/types/media";
import { cn } from "@/lib/utils";
import { ArticleListResponse } from "@/types/media/newscard";
import { NewsCardData } from "@/types/media/media";

interface MediaTabsProps {
  galleryImages: GalleryImage[];
  newsArticles: NewsCardData[];
}

// Hook to detect screen width
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile;
}

export function MediaTabs({ galleryImages, newsArticles }: MediaTabsProps) {
  const [activeTab, setActiveTab] = useState<"gallery" | "news">("gallery");
  const [showAllMobile, setShowAllMobile] = useState(false);
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  console.log(newsArticles);
  const tabs = [
    { id: "gallery" as const, label: { en: "Gallery", ar: "المعرض" } },
    { id: "news" as const, label: { en: "News", ar: "الأخبار" } },
  ];

  const visibleArticles =
    isMobile && !showAllMobile ? newsArticles.slice(0, 3) : newsArticles;

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex justify-center mb-8 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-10 py-2 rounded-lg font-medium transition-all duration-200 relative",
              activeTab === tab.id
                ? "bg-[#E74529] text-white shadow-sm"
                : "text-[#263244] bg-[#F6F7F8] hover:text-slate-800"
            )}
          >
            {language === "en" ? tab.label.en : tab.label.ar}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-coral-500 rounded-md -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "gallery" && <GalleryCarousel images={galleryImages} />}

        {activeTab === "news" && (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 lg:w-[60%] gap-6 w-full">
              <AnimatePresence initial={false}>
                {visibleArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <NewsCard article={article} index={index} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Toggle Button for Mobile */}
            {newsArticles.length > 3 && isMobile && (
              <div className="mt-6">
                <button
                  onClick={() => setShowAllMobile(!showAllMobile)}
                  className="px-9 py-2 rounded-lg bg-[#E74529] text-white font-medium transition hover:bg-[#e74529]/90"
                >
                  {showAllMobile
                    ? language === "en"
                      ? "Less"
                      : "عرض أقل"
                    : language === "en"
                    ? "More"
                    : "عرض المزيد"}
                </button>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
