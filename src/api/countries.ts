import api from "../lib/api";
import { CountryApi } from "@/types/countries/countries";

export async function fetchCountries(): Promise<any[]> {
    const fetchLocale = async (locale: string): Promise<CountryApi[]> => {
      const allCountries: CountryApi[] = [];
      let page = 1;
      const pageSize = 100;
  
      while (true) {
        const { data } = await api.get<{ data: CountryApi[]; meta: any }>("/countries", {
          params: {
            locale,
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
    };
  
    const [en, ar] = await Promise.all([fetchLocale("en"), fetchLocale("ar")]);
  
    const merged = en.map((enCountry) => {
      const arMatch = ar.find((arCountry) => arCountry.documentId === enCountry.documentId);
  
      return {
        id: enCountry.id,
        name: {
          en: enCountry.countryName,
          ar: arMatch?.countryName || enCountry.countryName,
        },
        flag: enCountry.countryFlag?.url
  ? enCountry.countryFlag.url.startsWith("http")
    ? enCountry.countryFlag.url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${enCountry.countryFlag.url}`
  : "",

        continent: enCountry.category?.slug?.toLowerCase() || "",
      };
    });
  
    return merged;
  }
