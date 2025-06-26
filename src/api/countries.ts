import api from "../lib/api";
import { CountryApi } from "@/types/countries/countries";

export async function fetchCountries(language: string): Promise<CountryApi[]> {
  const allCountries: CountryApi[] = [];
  let page = 1;
  const pageSize = 100;

  while (true) {
    const { data } = await api.get<{ data: CountryApi[]; meta: any }>("/countries", {
      params: {
        locale: language,
        populate: ["countryFlag", "category"],
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
      },
    });

    allCountries.push(...data.data);

    const totalPages = data.meta.pagination.pageCount;
    if (page >= totalPages) break;

    page++;
  }

  return allCountries;
}
