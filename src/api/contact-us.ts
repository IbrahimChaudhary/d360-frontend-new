import api from '../lib/api';
import { ContactPageData, ContactPageResponse } from '@/types/contact-us/contact-us';

export async function fetchContact(): Promise<ContactPageData> {
    const { data } = await api.get<ContactPageResponse>('/contact-us');
    return data.data;
  }
