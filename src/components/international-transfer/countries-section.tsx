"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useStore } from "@/store/toggle-store";
import { useTranslations } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { fetchCountries } from "@/api/countries";
import type { CountryApi } from "@/types/countries/countries";
import { InternationalData } from "@/types/international/international";

interface CountriesSectionProps {
  data: InternationalData;
}

export function CountriesSection({ data }: CountriesSectionProps) {
  const [activeContinent, setActiveContinent] = useState<"europe" | "africa" | "asia">("europe");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [apiCountries, setApiCountries] = useState<CountryApi[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useStore();
  const { t } = useTranslations();

  // Fetch countries from Strapi
  useEffect(() => {
    async function loadCountries() {
      try {
        setLoading(true);
        const res = await fetchCountries(language);
        setApiCountries(res);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCountries();
  }, [language]);

  // Convert API format into UI format
  const mappedCountries = useMemo(() => {
    const mapped = apiCountries
      .filter((country) => country && country.countryName)
      .map((country) => {
        const name = country.countryName;
        const category = country.category?.name?.toLowerCase() || "";
        const flagUrl = country.countryFlag?.url || "";

        return {
          id: country.id.toString(),
          name: {
            en: name,
            ar: name,
          },
          flag: flagUrl.startsWith("http") ? flagUrl : `${process.env.NEXT_PUBLIC_STRAPI_URL}${flagUrl}`,
          continent: category,
        };
      });
    // console.log("Mapped countries:", mapped);
    return mapped;
  }, [apiCountries]);

  // Filter countries by search or continent
  const filteredCountries = useMemo(() => {
    if (isSearchMode && searchQuery) {
      return mappedCountries.filter(
        (country) =>
          country.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.name.ar.includes(searchQuery)
      );
    }
    return mappedCountries.filter((country) => country.continent === activeContinent);
  }, [mappedCountries, activeContinent, searchQuery, isSearchMode]);

  // Get 24 countries max, repeating if necessary
  const displayCountries = useMemo(() => {
    return filteredCountries.slice(0, 24);
  }, [filteredCountries]);

  const handleTabClick = (continent: "europe" | "africa" | "asia") => {
    setActiveContinent(continent);
    setIsSearchMode(false);
    setSearchQuery("");
  };

  const handleSearchFocus = () => setIsSearchMode(true);
  const handleSearchBlur = () => {
    if (!searchQuery) setIsSearchMode(false);
  };

  const continents = [
    { id: "europe", name: { en: "Europe", ar: "أوروبا" } },
    { id: "africa", name: { en: "Africa", ar: "أفريقيا" } },
    { id: "asia", name: { en: "Asia", ar: "آسيا" } },
  ];

  return (
    <Section className="flex justify-center">
      <AnimatedSection direction="up" className="text-center mb-12">
        <h2 className="text-[20px] lg:px-0 px-8 lg:text-[40px] font-normal text-[#293242]  lg:mb-6 max-w-4xl mx-auto leading-tight">
          {t("moneyTransfer.title" as any) || (
            <>
              {data.CountriesHead}{" "}
              <span className="text-slate-900 font-extrabold">
                {data.CountriesHeadBold}
              </span>{" "}
            </>
          )}
        </h2>
      </AnimatedSection>

      <AnimatedSection direction="up" className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex lg:flex-row flex-col gap-4 items-center mb-8  w-full max-w-4xl mx-auto">
          <div className="flex w-full gap-2">
            {continents.map((continent) => (
              <button
                key={continent.id}
                onClick={() => handleTabClick(continent.id as any)}
                className={cn(
                  "flex-1 px-6 lg:py-2 py-2 rounded-md lg:rounded-xl cursor-pointer text-[8px] lg:text-base font-semibold transition-all text-center",
                  activeContinent === continent.id && !isSearchMode
                    ? "bg-[#E74529] text-white"
                    : "bg-[#F6F7F8] text-[#263244]"
                )}
              >
                {language === "en" ? continent.name.en : continent.name.ar}
              </button>
            ))}
          </div>

          <div className="relative w-full">
            <button
              onClick={handleSearchFocus}
              className={cn(
                "w-full px-6 lg:py-2 py-2 rounded-md lg:rounded-xl text-[8px] lg:text-base font-semibold flex items-center  gap-2 transition-all",
                isSearchMode ? "bg-[#E74529] text-white" : "bg-[#FDF0ED] text-[#263244]"
              )}
            >
              {language === "en" ? "Search" : "يبحث"}
            </button>

            {isSearchMode && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 z-10"
              >
                <Input
                  type="text"
                  placeholder={language === "en" ? "Search countries..." : "البحث عن البلدان..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={handleSearchBlur}
                  className="w-full"
                  autoFocus
                />
              </motion.div>
            )}
          </div>
        </div>

        {/* Countries Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeContinent}-${isSearchMode}-${searchQuery}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-5 lg:grid-cols-6 gap-y-8 gap-x-6 px-4  md:px-22"
          >
            {displayCountries.map((country, index) => (
              <CountryCard
                key={`${country.id}-${index}`}
                country={country}
                index={index}
                language={language}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {isSearchMode && searchQuery && filteredCountries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-500">
              {language === "en"
                ? "No countries found"
                : "لم يتم العثور على بلدان"}
            </p>
          </motion.div>
        )}
      </AnimatedSection>
    </Section>
  );
}

interface CountryCardProps {
  country: {
    id: string;
    name: { en: string; ar: string };
    flag: string;
  };
  index: number;
  language: "en" | "ar";
}

function CountryCard({ country, index, language }: CountryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="lg:w-16 lg:h-16 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-200 overflow-hidden">
        <img src={country.flag} alt={country.name.en} className="" />
      </div>
      <span className="text-[10px] lg:text-sm font-medium text-slate-700 text-center">
        {language === "en" ? country.name.en : country.name.ar}
      </span>
    </motion.div>
  );
}
