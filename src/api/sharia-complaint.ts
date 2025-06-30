import api from '../lib/api';
import { ShariaComplaintData, ShariaComplaintResponse } from '@/types/sharia-complaint/sharia-complaint';
export async function fetchShariah(language:string): Promise<ShariaComplaintData> {
    const { data } = await api.get<ShariaComplaintResponse>(`/shariah-committee?locale=${language}&populate[directors][populate]=image&populate[HeroImg]=true&populate[SEO][populate]=*`);
    return data.data;
  }
