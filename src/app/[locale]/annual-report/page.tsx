import AnnualReportsPageClient from "@/components/investors/annual-reports-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchAnnualReport } from "@/api/annual-report";

// Generate metadata for the annual reports page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const annualData = await fetchAnnualReport(validatedLocale);
    const seoData = extractSeoData(annualData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/anuual-reports",
      fallbackTitle: "Annual Reports - D360 Bank",
      fallbackDescription: "Access D360 Bank's annual reports and financial statements"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: locale,
      path: "/anuual-reports",
      fallbackTitle: "Annual Reports - D360 Bank",
      fallbackDescription: "Access D360 Bank's annual reports and financial statements"
    });
  }
}

export default async function AnnualReportsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const annualData = await fetchAnnualReport(validatedLocale).catch(() => null);
  
  return <AnnualReportsPageClient initialAnnualData={annualData} />;
}
