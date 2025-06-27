import api from '../lib/api';
import { CardsData, CardsResponse } from '@/types/card/card';

export async function fetchCard(language:string): Promise<CardsData> {
    const { data } = await api.get<CardsResponse>(`/card?locale=${language}&populate[imges]=true&populate[imges1]=true&populate[imges2]=true&populate[imges3]=true&populate[SEO][populate]=*`);
    return data.data;
  }
