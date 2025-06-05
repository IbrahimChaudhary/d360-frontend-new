"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/context/language-context";
import { useTranslations } from "@/lib/i18n";
import { countries, continents } from "@/data/countries";
import type { Country } from "@/types/countries";
import { cn } from "@/lib/utils";

export function CountriesSection() {
  const [activeContinent, setActiveContinent] = useState<
    "europe" | "africa" | "asia"
  >("europe");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslations();

  const filteredCountries = useMemo(() => {
    if (isSearchMode && searchQuery) {
      return countries.filter(
        (country) =>
          country.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.name.ar.includes(searchQuery)
      );
    }
    return countries.filter((country) => country.continent === activeContinent);
  }, [activeContinent, searchQuery, isSearchMode]);

  // Get exactly 24 countries for display (4 rows x 6 columns)
  const displayCountries = useMemo(() => {
    if (isSearchMode && searchQuery) {
      return filteredCountries; // Just return matches, no repetition
    }

    const countriesForDisplay = filteredCountries.slice(0, 24);
    while (countriesForDisplay.length < 24 && filteredCountries.length > 0) {
      const remainingSlots = 24 - countriesForDisplay.length;
      const toAdd = filteredCountries.slice(
        0,
        Math.min(remainingSlots, filteredCountries.length)
      );
      countriesForDisplay.push(...toAdd);
    }

    return countriesForDisplay.slice(0, 24);
  }, [filteredCountries, isSearchMode, searchQuery]);

  const handleTabClick = (continent: "europe" | "africa" | "asia") => {
    setActiveContinent(continent);
    setIsSearchMode(false);
    setSearchQuery("");
  };

  const handleSearchFocus = () => {
    setIsSearchMode(true);
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsSearchMode(false);
    }
  };

  return (
    <Section className="flex justify-center">
      <AnimatedSection direction="up" className="text-center mb-12">
        <h2 className="text-lg lg:text-[40px] font-normal text-[#293242] mb-6 max-w-4xl mx-auto leading-tight">
          {t("moneyTransfer.title" as any) || (
            <>
             Your money is going places. Keep more of it, with competitive rates when sending to  {" "}
              <span className="text-slate-900 font-extrabold">
                160+ countries,in
              </span>{" "}
              <span className="text-slate-900 font-extrabold">
                over 70 currencies
              </span>
              .
            </>
          )}
        </h2>
      </AnimatedSection>

      <AnimatedSection direction="up" className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex lg:flex-row flex-col gap-4 items-center mb-8  w-full max-w-4xl mx-auto">
  {/* Top Row - Continents in Flex */}
  <div className="flex w-full gap-2">
    {continents.map((continent) => (
      <button
        key={continent.id}
        onClick={() => handleTabClick(continent.id)}
        className={cn(
          "flex-1 px-6 lg:py-3 py-2 rounded-md lg:rounded-2xl text-[8px] lg:text-base font-semibold transition-all text-center",
          activeContinent === continent.id && !isSearchMode
            ? "bg-[#E74529] text-white"
            : "bg-[#F6F7F8] text-[#263244]"
        )}
      >
        {language === "en" ? continent.name.en : continent.name.ar}
      </button>
    ))}
  </div>

  {/* Search Button Below */}
  <div className="relative w-full">
    <button
      onClick={handleSearchFocus}
      className={cn(
        "w-full px-6 lg:py-3 py-2 rounded-md lg:rounded-2xl text-[8px] lg:text-base font-semibold flex items-center  gap-2 transition-all",
        isSearchMode ? "bg-[#E74529] text-white" : "bg-[#FDF0ED] text-[#263244]"
      )}
    >
    
      {t("moneyTransfer.search" as any) || "Search"}
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
  country: Country;
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
