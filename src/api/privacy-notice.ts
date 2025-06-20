import { PrivacyNoticeData, PrivacyNoticeResponse } from '@/types/privacy-notice/privacy-notice';
import api from '../lib/api';

export async function fetchPrivacyNotice(language: string): Promise<PrivacyNoticeData> {
    const { data } = await api.get<PrivacyNoticeResponse>(`/privacy-notice?locale=${language}&populate[SEO][populate]=*`);
    return data.data;
  }
