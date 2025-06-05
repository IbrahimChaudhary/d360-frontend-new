// src/api/home.ts
import { HomePageData, HomePageResponse } from '@/types/home/home';
import api from '../lib/api';

export async function fetchHomePage(language: string): Promise<HomePageData> {
  // “populate=heroVideo” tells Strapi to include the full media object for that field.
  const { data } = await api.get<HomePageResponse>(
    `/home-page?locale=${language}&populate=heroVideo`
  );
  return data.data;
}
