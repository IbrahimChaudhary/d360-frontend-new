import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import InvestorRealtions from "@/components/investors/investor-relation-client";
import { fetchInvestor } from "@/api/investor-relations";

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
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/about",
      fallbackTitle: "About D360 Bank",
      fallbackDescription: "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  }
}

export default async function InvestorRelationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const investorData = await fetchInvestor(validatedLocale).catch(() => null);
  
  return <InvestorRealtions initialInvestorData={investorData} />;
}
