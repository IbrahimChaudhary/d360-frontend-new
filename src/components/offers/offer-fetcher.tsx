// components/offers/OfferFetcher.tsx
"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import OfferDynamicPage from "./dynamic-page";
import type { OfferPageData } from "@/types/offer/offerpage";
import { fetchOfferPages, fetchOfferPagesBySlug } from "@/api/offer";

interface Props {
  slug: string;
}

export default function OfferFetcher({ slug }: Props) {
  const [page, setPage] = useState<OfferPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetchOfferPagesBySlug(slug); // wrap your Strapi call here
        if (!res || res.length === 0) {
          // show 404
          notFound();
          return;
        }
        setPage(res[0]);
      } catch (e: any) {
        console.error(e);
        setError(e.message || "Failed to load offer");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!page) return null; // already handled by notFound()

  return <OfferDynamicPage page={page} />;
}
