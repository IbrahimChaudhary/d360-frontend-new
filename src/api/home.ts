import { HomePageData, HomePageResponse } from '@/types/home/home';
import api from '../lib/api';

export async function fetchHomePage(language:string): Promise<HomePageData> {
    const { data } = await api.get<HomePageResponse>(`/home-page?locale=${language}`);
    return data.data;
  }
