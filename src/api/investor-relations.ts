import api from '../lib/api';
import { InvestData, InvestResponse } from '@/types/investor-relations/investor-relations';

export async function fetchInvestor(language: string): Promise<InvestData> {
    const { data } = await api.get<InvestResponse>(`/investor-relation?locale=${language}&populate[HeroImg]=true&populate[Way1Img]=true&populate[Way2Img]=true&populate[Way3Img]=true&populate[Way4Img]=true&populate[ExploreImg]=true&populate[SEO][populate]=*`);
    return data.data;
}
