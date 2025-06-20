import { PersonalServiceData, PersonalServiceResponse } from '@/types/personal-service/personal-service';
import api from '../lib/api';

export async function fetchPersonalService(language: string): Promise<PersonalServiceData> {
    const { data } = await api.get<PersonalServiceResponse>(`/personal-service?locale=${language}&populate[heroImg]=true&populate[image1]=true&populate[imges2]=true&populate[card1]=true&populate[card2]=true&populate[SEO][populate]=*`);
    return data.data;
}
