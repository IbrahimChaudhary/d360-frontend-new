import OffersPageClient from "@/components/offers/offers-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchOffer } from "@/api/offer";

// Generate metadata for the Offers page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
    try {
    const offerData = await fetchOffer(validatedLocale);
    console.log("Offer Data", offerData);
    const seoData = extractSeoData(offerData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/offers",
      fallbackTitle: offerData.Heading,
      fallbackDescription: "Check out the latest offers and deals from D360 Bank."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/offers",
      fallbackTitle: "Offers - D360 Bank",
      fallbackDescription: "Check out the latest offers and deals from D360 Bank."
    });
  }
}

export default function OffersPage() {
  return <OffersPageClient />;
}
