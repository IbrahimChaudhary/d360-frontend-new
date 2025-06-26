import api from "../lib/api";
import { CountriesResponse } from "@/types/countries/countries";

export async function fetchCountries(language: string): Promise<CountriesResponse> {
  const { data } = await api.get<CountriesResponse>(
    `/countries?locale=${language}&populate=countryFlag&populate=category`
  );
  return data;
}
