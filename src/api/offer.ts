import { OfferData, OfferResponse } from "@/types/offer/offer";
import api from "../lib/api";
import { OfferCardData, OfferCardListResponse } from "@/types/offer/offercard";
import { OfferPageData, OfferPageListResponse } from "@/types/offer/offerpage";

const STRAPI = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchOffer(language: string): Promise<OfferData> {
  const { data } = await api.get<OfferResponse>(`/offer?locale=${language}&populate[heroImage]=true&populate[SEO][populate]=*`);
  return data.data;
}

// ← Return an array, not a single object
export async function fetchOfferCards(language: string): Promise<OfferCardData[]> {
  const response = await api.get<OfferCardListResponse>(
    `/offer-cards?locale=${language}&populate=*`
  );
  console.log(JSON.stringify(response, null, 2));
  return response.data.data;
}
export async function fetchOfferCardsTypes(language: string): Promise<OfferCardData[]> {
  const response = await api.get<OfferCardListResponse>(
    `/offer-categories?locale=${language}&populate=*`
  );
  console.log(JSON.stringify(response, null, 2));
  return response.data.data;
}

// ← Return an array of pages (or change to fetch one by slug/id)
export async function fetchOfferPages(language: string): Promise<OfferPageData[]> {
  const { data } = await api.get<OfferPageListResponse>(`/offerpages?locale=${language}`);
  return data.data;
}

export async function fetchOfferPagesBySlug(
  language: string,
  slug?: string
): Promise<OfferPageData[]> {
  let path = `/offer-cards?locale=${language}&populate=*`  ;

  if (slug) {
    path += `&filters[slug][$eq]=${encodeURIComponent(slug)}`;
  }

  const { data } = await api.get<OfferPageListResponse>(path);

  return data.data;
}
