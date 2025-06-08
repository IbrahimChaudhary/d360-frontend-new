import api from '../lib/api';
import { ContactPageData, ContactPageResponse } from '@/types/contact-us/contact-us';

export async function fetchContact(language:string): Promise<ContactPageData> {
    const { data } = await api.get<ContactPageResponse>(`/contact-us?locale=${language}&populate[heroImg]=true&populate[sideImg]=true`);
    return data.data;
  }
