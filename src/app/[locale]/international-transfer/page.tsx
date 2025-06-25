import InternationalTransferPageClient from "@/components/international-transfer/international-transfer-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchInternational } from "@/api/international";

// Generate metadata for the International Transfer page
export async function generateMetadata() {
  try {
    const internationalData = await fetchInternational("en");
    const seoData = extractSeoData(internationalData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/international-transfer",
      fallbackTitle: "International Transfer - D360 Bank",
      fallbackDescription: "Send money internationally with D360 Bank's secure and fast transfer services."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: "/international-transfer",
      fallbackTitle: "International Transfer - D360 Bank",
      fallbackDescription: "Send money internationally with D360 Bank's secure and fast transfer services."
    });
  }
}

export default function InternationalTransferPage() {
  return <InternationalTransferPageClient />;
}
