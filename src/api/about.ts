import { AboutD360Data, AboutResponse } from '@/types/about/about';
import api from '../lib/api';

export async function fetchAboutD360(language:string): Promise<AboutD360Data> {
    const { data } = await api.get<AboutResponse>(`/about-d360?populate[directors][populate]=image&populate[heroImage]=true&populate[investorImg1]=true&populate[investorImg2]=true&populate[sideImg]=true&populate[SEO][populate]=*&locale=${language}`);
    return data.data;
  }
