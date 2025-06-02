import { PrivacyNoticeData, PrivacyNoticeResponse } from '@/types/privacy-notice/privacy-notice';
import api from '../lib/api';

export async function fetchPrivacyNotice(): Promise<PrivacyNoticeData> {
    const { data } = await api.get<PrivacyNoticeResponse>('/privacy-notice');
    return data.data;
  }
