import { CustomerCareData, CustomerCareDataResponse } from '@/types/customer-care/customer-care';
import api from '../lib/api';

export async function fetchCustomerCare(language: string): Promise<CustomerCareData> {
    const { data } = await api.get<CustomerCareDataResponse>(`/customer-care?populate[heroImg]=true&populate[sideImg]=true&locale=${language}`);
    return data.data;
  }
