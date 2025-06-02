import { AboutD360Data, AboutResponse } from '@/types/about/about';
import api from '../lib/api';

export async function fetchAboutD360(): Promise<AboutD360Data> {
    const { data } = await api.get<AboutResponse>('/about-d360?populate=leaders');
    return data.data;
  }
