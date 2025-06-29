import { PaymentsPageClient } from "@/components/payments/payments-page-client";
import { fetchPayments } from "@/api/payments";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";

// Generate metadata for the Offers page
export async function generateMetadata() {
  try {
    const paymentData = await fetchPayments("en");
    const seoData = extractSeoData(paymentData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/offers",
      fallbackTitle: paymentData.SEO[0].metaTitle,
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

export default function Payments() {
  return (
    <PaymentsPageClient/>
  );
}
