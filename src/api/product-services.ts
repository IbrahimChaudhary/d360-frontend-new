import { FeesData, FeesResponse } from '@/types/product-services/product-services';
import api from '../lib/api';

export async function fetchFee(language: string): Promise<FeesData> {
    const { data } = await api.get<FeesResponse>(`/products-services-fee?locale=${language}`);
    return data.data;
  }
