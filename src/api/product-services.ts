import { FeesData, FeesResponse } from '@/types/product-services/product-services';
import api from '../lib/api';

export async function fetchFee(): Promise<FeesData> {
    const { data } = await api.get<FeesResponse>('/products-services-fee');
    return data.data;
  }
