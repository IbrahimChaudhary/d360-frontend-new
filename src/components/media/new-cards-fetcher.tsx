// components/media/NewsArticleFetcher.tsx
"use client";

import React, { useState, useEffect } from "react";
import { NewsArticleDetails } from "@/components/media/news-article-details";
import type { NewsCardData } from "@/types/media/media";
import Image from "next/image";
import { useStore } from "@/store/toggle-store";

interface Props {
  slug: string;
  initialArticle?: NewsCardData | null;
  initialRelatedArticles?: NewsCardData[];
}

export function NewsArticleFetcher({ slug, initialArticle, initialRelatedArticles }: Props) {
  const { language } = useStore();
  const [article, setArticle] = useState<NewsCardData | null>(initialArticle || null);
  const [related, setRelated] = useState<NewsCardData[]>(initialRelatedArticles || []);
  const [loading, setLoading] = useState(!initialArticle);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialArticle && initialRelatedArticles) {
      return; // Don't fetch if we have initial data
    }
    
    async function fetchData() {
      const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://13.235.50.194:1337";
      try {
        // 1) fetch main article
        const res1 = await fetch(
          `${apiUrl}/api/news-cards?filters[slug][$eq]=${encodeURIComponent(
            slug
          )}&populate=*&locale=${language}`
        );
        if (!res1.ok) throw new Error(`Status ${res1.status}`);

        const json1 = await res1.json();
        const items1 = Array.isArray(json1.data) ? json1.data : [];
        if (items1.length === 0) throw new Error("Article not found");

        const hit1 = items1[0];
        // detect nested vs flat
        const raw1 = hit1.attributes ?? hit1;
        if (typeof raw1.slug !== "string") {
          throw new Error("Unexpected article shape");
        }

        const fetched: NewsCardData = {
          id: hit1.id,
          slug: raw1.slug,
          ...raw1,
        };
        console.log("heyy fetched", fetched);
        setArticle(fetched);

        // 2) fetch related
        const res2 = await fetch(
          `${apiUrl}/api/news-cards?filters[slug][$ne]=${encodeURIComponent(
            slug
          )}&populate=*&pagination[limit]=2&locale=${language}`
        );
        if (!res2.ok) throw new Error(`Related status ${res2.status}`);

        const json2 = await res2.json();
        const items2 = Array.isArray(json2.data) ? json2.data : [];

        const mapped = items2
          .map((hit: any) => {
            const raw = hit.attributes ?? hit;
            if (typeof raw.slug !== "string") return null;
            return {
              id: hit.id,
              slug: raw.slug,
              ...raw,
            } as NewsCardData;
          })
          .filter((x: any): x is NewsCardData => x !== null);

        setRelated(mapped);
      } catch (e: any) {
        console.error(e);
        setError(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug, language, initialArticle, initialRelatedArticles]);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!article) return <p></p>;

  return (
    <>
      <div className=" lg:hidden relative h-64 w-full md:h-96 overflow-hidden mb-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
            article.imageHero?.formats?.large?.url ||
            article.imageHero?.formats?.medium?.url ||
            article.imageHero?.url
          }`}
          alt={article.heading}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-white">
        <div className="w-full">
          <NewsArticleDetails article={article} relatedArticles={related} />
        </div>
      </div>
    </>
  );
}
