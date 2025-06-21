import api from '../lib/api';
import { ShariahCommitteeData, ShariahCommitteeResponse } from '@/types/shahriah-committee/shahriah-committee';

export async function fetchShariah(language:string): Promise<ShariahCommitteeData> {
    const { data } = await api.get<ShariahCommitteeResponse>(`/shariah-committee?locale=${language}&populate[directors][populate]=image&populate[HeroImg]=true&populate[SEO][populate]=*`);
    return data.data;
  }
