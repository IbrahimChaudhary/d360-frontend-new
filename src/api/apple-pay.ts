import api from '../lib/api';
import { ApplePayData, ApplePayResponse } from '@/types/apple-pay/apple-pay';

export async function fetchApplePay(language:string): Promise<ApplePayData> {
    const { data } = await api.get<ApplePayResponse>(`/apple-pay?locale=${language}`);
    return data.data;
  }
