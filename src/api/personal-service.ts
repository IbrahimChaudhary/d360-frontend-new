import { PersonalServiceData, PersonalServiceResponse } from '@/types/personal-service/personal-service';
import api from '../lib/api';
import { ApplePayData, ApplePayResponse } from '@/types/apple-pay/apple-pay';

export async function fetchPersonalService(): Promise<PersonalServiceData> {
    const { data } = await api.get<PersonalServiceResponse>('/personal-service');
    return data.data;
  }
