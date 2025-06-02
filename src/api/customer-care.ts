import { CustomerCareData, CustomerCareDataResponse } from '@/types/customer-care/customer-care';
import api from '../lib/api';

export async function fetchCustomerCare(): Promise<CustomerCareData> {
    const { data } = await api.get<CustomerCareDataResponse>('/customer-care');
    return data.data;
  }
