import api from '../lib/api';
import { ApplePayData, ApplePayResponse } from '@/types/apple-pay/apple-pay';

export async function fetchApplePay(): Promise<ApplePayData> {
    const { data } = await api.get<ApplePayResponse>('/apple-pay');
    return data.data;
  }
