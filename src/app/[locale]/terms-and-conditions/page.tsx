import { fetchTermsConditions } from "@/api/terms-conditions";
import { TermsConditionsPageClient } from "@/components/terms-conditions/terms-conditions-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  try {
    const termData = await fetchTermsConditions("en");
    const seoData = extractSeoData(termData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/terms-and-conditions",
      fallbackTitle: seoData?.metaTitle || "Terms and Conditions - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Terms and Conditions."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Terms and Conditions:", error);
    
    return generatePageMetadata({
      locale: "en",
      path: "/terms-and-conditions",
      fallbackTitle: "Terms and Conditions - D360 Bank",
      fallbackDescription: "Terms and Conditions."
    });
  }
}

export default function TermsConditionsPage() {
  return (
    <TermsConditionsPageClient />
  );
}
