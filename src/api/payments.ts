import { PaymentsData, PaymentsResponse } from '@/types/payments/payments';
import api from '../lib/api';

export async function fetchPayments(language:string): Promise<PaymentsData> {
    const { data } = await api.get<PaymentsResponse>(`/payment?locale=${language}&populate[imges]=true&populate[Way1Img]=true&populate[Way2Img]=true&populate[Way3Img]=true&populate[Way1Icon]=true&populate[Way2Icon]=true&populate[Way3Icon]=true&populate[SEO][populate]=*`);
    return data.data;
  }
