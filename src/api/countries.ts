import api from "../lib/api";
import { CountryApi } from "@/types/countries/countries";

export async function fetchCountries(language: string): Promise<CountryApi[]> {
  const { data } = await api.get<{ data: CountryApi[] }>("/countries", {
    params: {
      locale: language,
      populate: ["countryFlag", "category"],
    },
  });
  return data.data;
}

