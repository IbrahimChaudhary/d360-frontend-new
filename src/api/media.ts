import api from "../lib/api";
import { MediaCenterData, MediaCenterResponse } from "@/types/media/media";

const STRAPI = process.env.STRAPI_URL || "http://localhost:1337";

export async function fetchMedia(): Promise<MediaCenterData> {
  const { data } = await api.get<MediaCenterResponse>("/media-center?populate[news_cards][populate][0]=imageHero&populate[news_cards][populate][1]=imageCard&populate[heroImg]=true&populate[galleryImg1]=true&populate[galleryImg2]=true&populate[galleryImg3]=true&populate[galleryImg4]=true");
  return data.data;
}

