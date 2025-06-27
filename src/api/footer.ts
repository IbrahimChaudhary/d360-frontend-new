import api from '../lib/api';
import { FooterData, FooterResponse } from '@/types/footer/footer';

export async function fetchFooter(language: string): Promise<FooterData> {
  const { data } = await api.get<FooterResponse>(
    `/footer?populate[logo]=true&locale=${language}`
  );
  return data.data;
}
