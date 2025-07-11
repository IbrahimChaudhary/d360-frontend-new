// api/savings.ts (or wherever your savings API is)
import { SavingsData, SavingsResponse } from '@/types/savings-account/savings-account';
import api from '../lib/api';

export async function fetchSavings(language: string): Promise<SavingsData> {
  const { data } = await api.get<SavingsResponse>(
    `/savings-account?locale=${language}&populate[HeroImg]=true&populate[Way1Img]=true&populate[Way2Img]=true&populate[Way3Img]=true&populate[Way4Img]=true&populate[ProfitImg]=true&populate[ProfitBannerImg]=true&populate[SEO][populate]=*&populate[faqs]=true`,
    {
      timeout: 5000,
    }
  );
  return data.data;
}