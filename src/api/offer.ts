import { OfferData, OfferResponse } from "@/types/offer/offer";
import api from "../lib/api";
import { OfferCardData, OfferCardListResponse } from "@/types/offer/offercard";
import { OfferPageData, OfferPageListResponse } from "@/types/offer/offerpage";

const STRAPI = process.env.STRAPI_URL || "http://localhost:1337";

export async function fetchOffer(): Promise<OfferData> {
  const { data } = await api.get<OfferResponse>("/offer");
  return data.data;
}

// ← Return an array, not a single object
export async function fetchOfferCards(): Promise<OfferCardData[]> {
  const { data } = await api.get<OfferCardListResponse>(
    "/offer-cards?populate=image"
  );
  console.log(data);
  return data.data;
}

// ← Return an array of pages (or change to fetch one by slug/id)
export async function fetchOfferPages(): Promise<OfferPageData[]> {
  const { data } = await api.get<OfferPageListResponse>("/offerpages");
  return data.data;
}

export async function fetchOfferPagesBySlug(
  slug?: string
): Promise<OfferPageData[]> {
  const params: Record<string, string> = {
    populate: "*",
  };

  if (slug) {
    params["filters[slug][$eq]"] = slug;
  }

  const { data } = await api.get<OfferPageListResponse>("/offerpages", {
    params,
  });

  return data.data;
}
