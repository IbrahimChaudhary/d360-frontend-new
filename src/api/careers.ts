import { PaymentsData, PaymentsResponse } from '@/types/payments/payments';
import api from '../lib/api';
import {  CareerData, CareerDDataataResponse,  } from '@/types/careers/careers';

export async function fetchCareer(language:string): Promise<CareerData> {
    const { data } = await api.get<CareerDDataataResponse>(`/career?locale=${language}&populate[HeroImg]=true&populate[ApplicationImg]=true`);
    return data.data;
  }
