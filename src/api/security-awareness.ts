import { AboutD360Data, AboutResponse } from '@/types/about/about';
import api from '../lib/api';
import { SecurityAwarenessData, SecurityAwarenessResponse } from '@/types/security-awareness/security-awareness';

export async function fetchSecurityAwareness(language:string): Promise<SecurityAwarenessData> {
    const { data } = await api.get<SecurityAwarenessResponse>(`/security-awareness?locale=${language}&populate[SEO][populate]=*`);
    return data.data;
  }
