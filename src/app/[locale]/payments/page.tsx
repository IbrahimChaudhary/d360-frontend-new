import { PaymentsPageClient } from "@/components/payments/payments-page-client";
import { fetchPayments } from "@/api/payments";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";

// Generate metadata for the Payments page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const paymentData = await fetchPayments(validatedLocale);
    const seoData = extractSeoData(paymentData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/payments",
      fallbackTitle: paymentData.SEO[0].metaTitle,
      fallbackDescription: "Discover convenient payment solutions from D360 Bank."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/payments",
      fallbackTitle: "Payments - D360 Bank",
      fallbackDescription: "Discover convenient payment solutions from D360 Bank."
    });
  }
}

export default async function Payments({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const paymentData = await fetchPayments(validatedLocale).catch(() => null);
  
  return <PaymentsPageClient initialPaymentData={paymentData} />;
}
