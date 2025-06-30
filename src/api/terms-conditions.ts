import { AboutD360Data, AboutResponse } from '@/types/about/about';
import api from '../lib/api';
import { TermsConditionsData, TermsConditionsResponse } from '@/types/terms-conditions/terms-conditions';

export async function fetchTermsConditions(language:string): Promise<TermsConditionsData> {
    const { data } = await api.get<TermsConditionsResponse>(`/term-and-condition?locale=${language}&populate[SEO][populate]=*`);
    return data.data;
  }
