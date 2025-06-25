import CardPageClient from "@/components/card/card-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchCard } from "@/api/card";

// Generate metadata for the Card page
export async function generateMetadata() {
  try {
    const cardData = await fetchCard("en");
    const seoData = extractSeoData(cardData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/card",
      fallbackTitle: "D360 Cards - Digital Banking Cards",
      fallbackDescription: "Get your D360 Bank digital and physical cards for secure payments"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: "/card",
      fallbackTitle: "D360 Cards - Digital Banking Cards",
      fallbackDescription: "Get your D360 Bank digital and physical cards for secure payments"
    });
  }
}

export default function CardPage() {
  return <CardPageClient />;
}
