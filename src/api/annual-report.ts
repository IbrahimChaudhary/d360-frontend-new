import api from "../lib/api";
import {
  AnnualReportsData,
  AnnualReportsResponse,
} from "@/types/annual-report/annual-report";

export async function fetchAnnualReport(
  language: string
): Promise<AnnualReportsData> {
  const { data } = await api.get<AnnualReportsResponse>(
    `/annual-report?locale=${language}&populate[HeroImg]=true&populate[reports]=true&populate[SEO][populate]=*`
  );
  return data.data;
}
