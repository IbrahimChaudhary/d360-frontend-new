import OffersPageClient from "@/components/offers/offers-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchOffer } from "@/api/offer";

// Generate metadata for the Offers page
export async function generateMetadata() {
  try {
    const offerData = await fetchOffer("en");
    const seoData = extractSeoData(offerData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/offers",
      fallbackTitle: offerData.Heading,
      fallbackDescription: "Check out the latest offers and deals from D360 Bank."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: "/offers",
      fallbackTitle: "Offers - D360 Bank",
      fallbackDescription: "Check out the latest offers and deals from D360 Bank."
    });
  }
}

export default function OffersPage() {
  return <OffersPageClient />;
}
