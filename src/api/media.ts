import api from "../lib/api";
import { MediaCenterData, MediaCenterResponse } from "@/types/media/media";

const STRAPI = process.env.STRAPI_URL || "http://localhost:1337";

export async function fetchMedia(): Promise<MediaCenterData> {
  const { data } = await api.get<MediaCenterResponse>("/media-center?populate=news_cards");
  return data.data;
}

