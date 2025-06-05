import api from '../lib/api';
import { CardsData, CardsResponse } from '@/types/card/card';

export async function fetchCard(language:string): Promise<CardsData> {
    const { data } = await api.get<CardsResponse>(`/card?locale=${language}`);
    return data.data;
  }
