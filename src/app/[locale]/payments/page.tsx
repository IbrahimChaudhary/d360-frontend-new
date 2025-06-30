import { PaymentsPageClient } from "@/components/payments/payments-page-client";
import { fetchPayments } from "@/api/payments";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";

// Generate metadata for the Offers page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const paymentData = await fetchPayments(validatedLocale);
    const seoData = extractSeoData(paymentData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/offers",
      fallbackTitle: paymentData.SEO[0].metaTitle,
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

export default function Payments() {
  return (
    <PaymentsPageClient/>
  );
}
