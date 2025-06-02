// components/media/NewsArticleFetcher.tsx
"use client";

import React, { useState, useEffect } from "react";
import { NewsArticleDetails } from "@/components/media/news-article-details";
import type { NewsCardData } from "@/types/media/media";

interface Props {
  slug: string;
}

export function NewsArticleFetcher({ slug }: Props) {
  const [article, setArticle] = useState<NewsCardData | null>(null);
  const [related, setRelated] = useState<NewsCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // 1) fetch main article
        const res1 = await fetch(
          `http://localhost:1337/api/news-cards?filters[slug][$eq]=${encodeURIComponent(
            slug
          )}&populate=*`
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
        setArticle(fetched);

        // 2) fetch related
        const res2 = await fetch(
          `http://localhost:1337/api/news-cards?filters[slug][$ne]=${encodeURIComponent(
            slug
          )}&populate=*&pagination[limit]=2`
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
          .filter((x:any): x is NewsCardData => x !== null);

        setRelated(mapped);
      } catch (e: any) {
        console.error(e);
        setError(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!article) return <p>Article not found.</p>;

  return <NewsArticleDetails article={article} relatedArticles={related} />;
}
