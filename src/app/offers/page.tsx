"use client";

import { Header } from "@/components/layout/header";
import { useState, useMemo, useEffect } from "react";
import { Hero } from "@/components/layout/page-hero";
import { Footer } from "@/components/layout/footer/footer";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/i18n";
import { Section } from "@/components/ui/section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OfferCard } from "@/components/offers/offer-card";
import { CategoryTabs } from "@/components/offers/category-tabs";
import { offers } from "@/data/offer";
import { AnimatePresence, motion } from "framer-motion";
import { OfferData } from "@/types/offer/offer";
import { fetchOffer, fetchOfferCards } from "@/api/offer";
import { OfferCategory } from "@/types/offers";
import { OfferCardData } from "@/types/offer/offercard";
import { useStore } from "@/store/toggle-store";
import { englishContent } from "@/data/about-en";
import { arabicContent } from "@/data/about-ar";
import { off } from "process";

export default function OffersPage() {
  const { t } = useTranslations();
  const [activeCategory, setActiveCategory] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [offer, setOffer] = useState<OfferData | null>(null);
  const [offerCard, setOfferCard] = useState<OfferCardData[] | null>(null);
  const { language } = useStore();
  const content = language === "en" ? englishContent : arabicContent;
  const isRTL = language === "ar";

  useEffect(() => {
    fetchOffer(language)
      .then(setOffer)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  useEffect(() => {
    fetchOfferCards(language)
      .then(setOfferCard)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, [language]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredOffers = useMemo(() => {
    if (activeCategory === "all") return offers;
    return (offerCard?.filter(o => o.type === activeCategory) ?? []);
  }, [activeCategory]);

  const visibleOffers =
    isMobile && !isExpanded ? filteredOffers?.slice(0, 3) : filteredOffers;
  const offerCategories: OfferCategory[] = [
    {
      id: "automative",
      name: { en: `${offer?.Type1}`, ar: `${offer?.Type1}` },
    },
    {
      id: "shopping",
      name: { en: `${offer?.Type2}`, ar: `${offer?.Type2}` },
    },
    {
      id: "Expired-offers",
      name: { en: `${offer?.Type3}`, ar: `${offer?.Type3}` },
    },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about" />
      <main className="flex-1">
        <Hero backgroundImage={`${process.env.NEXT_PUBLIC_STRAPI_URL}${offer?.heroImage?.formats?.large?.url || offer?.heroImage?.formats?.medium?.url || offer?.heroImage?.url || "/offers/offers-hero.png"}`}>
       
          <div
            className={`flex w-full flex-col ${
              isRTL ? " items-start text-right" : "items-start text-left"
            }`}
          >
            <h1
              className={`text-[25px] flex items-center  uppercase lg:text-[80px] font-extrabold text-white leading-tight${
                isRTL ? "justify-end" : " justify-center"
              }`}
            >
              {offer?.Heading} <br /> {offer?.Heading2}
              </h1>
            </div>
        </Hero>

        <Section className="bg-gray-50 flex justify-center items-center lg:px-10">
          <div className="flex flex-col md:flex-row">
            <AnimatedSection direction="right" className="md:flex-shrink-0">
              <CategoryTabs
                categories={offerCategories}
                activeCategory={activeCategory}
                onCategoryChange={(cat) => {
                  setActiveCategory(cat);
                  setIsExpanded(false); // reset view on tab change
                }}
              />
            </AnimatedSection>

            <AnimatedSection direction="left" className="flex-1">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
              >
                <AnimatePresence initial={false}>
                  {visibleOffers?.map((offer, index) => (
                    <motion.div
                      key={offer.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {offerCard && (
                        <OfferCard
                          data={offerCard[index]}
                          index={index}
                          height="h-[200px] lg:h-[300px]"
                          width="w-full"
                          textColor="text-white"
                          glassBg="bg-white/10 backdrop-blur-md"
                        />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Mobile only toggle */}
              
              {isMobile && filteredOffers.length > 3 && (
                <div className="text-center mt-4">
                  <Button
                    variant="default"
                    className="bg-[#E74529] hover:bg-[#d23e20] text-white text-sm rounded-full px-6"
                    onClick={() => setIsExpanded((prev) => !prev)}
                  >
                    {isExpanded ? "Less" : "More"}
                  </Button>
                </div>
              )}
            </AnimatedSection>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
