import { PaymentsData, PaymentsResponse } from '@/types/payments/payments';
import api from '../lib/api';
import { InternationalData, InternationalResponse } from '@/types/international/international';

export async function fetchInternational(language:string): Promise<InternationalData> {
    const { data } = await api.get<InternationalResponse>(`/international-transfer?locale=${language}&populate[heroImage]=true&populate[Way1Img]=true&populate[Way2Img]=true&populate[Way3Img]=true&populate[Way4Img]=true&populate[Way1Icon]=true&populate[Way2Icon]=true&populate[Way3Icon]=true&populate[Way4Icon]=true&populate[SenderImg]=true&populate[ReceiverImg]=true`);
    return data.data;
  }
