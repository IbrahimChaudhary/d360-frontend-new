import { PaymentsData, PaymentsResponse } from '@/types/payments/payments';
import api from '../lib/api';
import { InternationalData, InternationalResponse } from '@/types/international/international';
import { SavingsData, SavingsResponse } from '@/types/savings-account/savings-account';

export async function fetchSavings(language:string): Promise<SavingsData> {
    const { data } = await api.get<SavingsResponse>(`/savings-account?locale=${language}&populate[HeroImg]=true&populate[Way1Img]=true&populate[Way2Img]=true&populate[Way3Img]=true&populate[Way4Img]=true&populate[ProfitImg]=true&populate[ProfitBannerImg]=true`);
    return data.data;
  }
