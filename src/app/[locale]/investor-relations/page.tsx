import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import InvestorRealtions from "@/components/investors/investor-relation-client";
import { fetchInvestor } from "@/api/investor-relations";

// Generate metadata for the about page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const aboutData = await fetchInvestor(validatedLocale);
    const seoData = extractSeoData(aboutData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/about",
      fallbackTitle: "About D360 Bank",
      fallbackDescription: "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/about",
      fallbackTitle: "About D360 Bank",
      fallbackDescription: "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  }
}

export default function InvestorRelationPage() {
  return <InvestorRealtions />;
}
