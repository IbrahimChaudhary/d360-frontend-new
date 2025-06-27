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
      <Header variant="about"/>
      <main className="flex-1 lg:pt-20">

        <OfferDetails offer={page} />
      </main>
      <Footer />
    </div>
  );
}
