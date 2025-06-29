import ApplePayPageClient from "@/components/apple-pay/apple-pay-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchApplePay } from "@/api/apple-pay";

// Generate metadata for the Apple Pay page
export async function generateMetadata() {
  try {
    const applePayData = await fetchApplePay("en");
    const seoData = extractSeoData(applePayData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/apple-pay",
      fallbackTitle: "Apple Pay - D360 Bank",
      fallbackDescription: "Use Apple Pay with D360 Bank for secure and convenient payments"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: "/apple-pay",
      fallbackTitle: "Apple Pay - D360 Bank",
      fallbackDescription: "Use Apple Pay with D360 Bank for secure and convenient payments"
    });
  }
}

export default function ApplePayPage() {
  return <ApplePayPageClient />;
}
