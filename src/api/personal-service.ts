import { PersonalServiceData, PersonalServiceResponse } from '@/types/personal-service/personal-service';
import api from '../lib/api';

export async function fetchPersonalService(): Promise<PersonalServiceData> {
    const { data } = await api.get<PersonalServiceResponse>('/personal-service');
    return data.data;
  }
