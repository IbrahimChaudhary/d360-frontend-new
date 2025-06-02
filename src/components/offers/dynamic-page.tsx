// components/offers/OfferDynamicPage.tsx
"use client";
import React, { useState } from "react";
import { Header } from "../layout/header";
import { Hero } from "../layout/page-hero";
import { OfferDetails } from "./offer-details";
import { Footer } from "../layout/footer/footer";
import type { OfferPageData } from "@/types/offer/offerpage";

interface Props {
  page: OfferPageData;
}

export default function OfferDynamicPage({ page }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 lg:pt-20">
        <div className="lg:hidden mb-8">
          <Hero backgroundImage="/offers/offers-hero.png">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-white">
              D360 Bank <br /> Offers
            </h1>
          </Hero>
        </div>

        <OfferDetails offer={page} />
      </main>
      <Footer />
    </div>
  );
}
