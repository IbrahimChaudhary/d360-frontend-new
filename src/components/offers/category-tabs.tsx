"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import type { OfferCategory } from "@/types/offers";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: OfferCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const { language } = useLanguage();

  return (
    <div className="w-full md:w-64  rounded-lg p-4">
     
      <div className="grid grid-cols-2 md:flex flex-col gap-2 w-[60%] lg:mx-0 mx-auto md:w-[160px]">
        <button
          onClick={() => onCategoryChange("all")}
          className={cn(
            "lg:px-4 px-0 py-2 rounded-md lg:rounded-xl font-bold text-[8px] lg:text-[14px] transition",
            activeCategory === "all"
              ? "bg-[#EB644C] text-white"
              : "bg-[#F4F4F4] text-[#263244]"
          )}
        >
          {language === "en" ? "All" : "الكل"}
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-4 py-2 rounded-xl font-bold text-[8px] lg:text-[14px] transition cursor-pointer",
              activeCategory === category.id
                ? "bg-[#EB644C] text-white"
                : "bg-[#F6F7F8] text-[#263244]"
            )}
          >
            {language === "en" ? category.name.en : category.name.ar}
          </button>
        ))}
      </div>
    </div>
  );
}
