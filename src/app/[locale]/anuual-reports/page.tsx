import AnnualReportsPageClient from "@/components/investors/annual-reports-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchAnnualReport } from "@/api/annual-report";

// Generate metadata for the annual reports page
export async function generateMetadata() {
  try {
    const annualData = await fetchAnnualReport("en");
    const seoData = extractSeoData(annualData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/anuual-reports",
      fallbackTitle: "Annual Reports - D360 Bank",
      fallbackDescription: "Access D360 Bank's annual reports and financial statements"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: "/anuual-reports",
      fallbackTitle: "Annual Reports - D360 Bank",
      fallbackDescription: "Access D360 Bank's annual reports and financial statements"
    });
  }
}

export default function AnnualReportsPage() {
  return <AnnualReportsPageClient />;
}
