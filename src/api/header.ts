import { Header, HeaderResponse } from '@/types/header/header';
import api from '../lib/api';

export async function fetchHeader(language:string): Promise<Header> {
    const { data } = await api.get<HeaderResponse>(`/header?locale=${language}`);
    return data.data;
  }
