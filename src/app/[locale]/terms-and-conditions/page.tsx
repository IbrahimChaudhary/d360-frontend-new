import { fetchTermsConditions } from "@/api/terms-conditions";
import { TermsConditionsPageClient } from "@/components/terms-conditions/terms-conditions-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const termData = await fetchTermsConditions(validatedLocale);
    const seoData = extractSeoData(termData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/terms-and-conditions",
      fallbackTitle: seoData?.metaTitle || "Terms and Conditions - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Terms and Conditions."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Terms and Conditions:", error);
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/terms-and-conditions",
      fallbackTitle: "Terms and Conditions - D360 Bank",
      fallbackDescription: "Terms and Conditions."
    });
  }
}

export default async function TermsConditionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const termsConditionsData = await fetchTermsConditions(validatedLocale).catch(() => null);
  
  return <TermsConditionsPageClient initialTermsConditionsData={termsConditionsData} />;
}
