import { fetchShariah } from "@/api/shahriah-committee";
import { ShariahCommitteePageClient } from "@/components/shahriah-committee/shariah-committee-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  try {
    const shariahData = await fetchShariah("en");
    const seoData = extractSeoData(shariahData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/shariah-committee",
      fallbackTitle: seoData?.metaTitle || "Shariah Committee - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Meet our Shariah Committee members."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Shariah Committee:", error);
    
    return generatePageMetadata({
      locale: "en",
      path: "/shariah-committee",
      fallbackTitle: "Shariah Committee - D360 Bank",
      fallbackDescription: "Meet our Shariah Committee members."
    });
  }
}
export default function ShariahCommitteePage() {
  return (
    <ShariahCommitteePageClient />
  );
}
