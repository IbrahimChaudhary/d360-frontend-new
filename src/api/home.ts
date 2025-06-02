import { HomePageData, HomePageResponse } from '@/types/home/home';
import api from '../lib/api';

export async function fetchHomePage(): Promise<HomePageData> {
    const { data } = await api.get<HomePageResponse>('/home-page');
    return data.data;
  }
