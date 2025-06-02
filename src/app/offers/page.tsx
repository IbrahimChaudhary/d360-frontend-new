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

export default function OffersPage() {
  const { t } = useTranslations();
  const [activeCategory, setActiveCategory] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [offer, setOffer] = useState<OfferData | null>(null);
  const [offerCard, setOfferCard] = useState<OfferCardData[] | null>(null);

  useEffect(() => {
    fetchOffer()
      .then(setOffer)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
  useEffect(() => {
    fetchOfferCards()
      .then(setOfferCard)
      .catch((err) => console.error("Failed to load About D360:", err));
  }, []);
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
      name: { en: `${offer?.Type1}`, ar: "السيارات" },
    },
    {
      id: "shopping",
      name: { en: `${offer?.Type2}`, ar: "التسوق" },
    },
    {
      id: "Expired-offers",
      name: { en: `${offer?.Type3}`, ar: "عروض العلامات التجارية" },
    },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero backgroundImage="/offers/offers-hero.png">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-white leading-tight">
            {offer?.Heading} <br /> {offer?.Heading2}
          </h1>
        </Hero>

        <Section className="bg-gray-50 lg:px-28">
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
