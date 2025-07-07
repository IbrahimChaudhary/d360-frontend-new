import { fetchShariah } from "@/api/sharia-complaint";
import { ShariaComplaintPageClient } from "@/components/sharia-complaint/sharia-complaint-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const shariahData = await fetchShariah(validatedLocale);
    const seoData = extractSeoData(shariahData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/shariah-committee",
      fallbackTitle: seoData?.metaTitle || "Shariah Committee - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Meet our Shariah Committee members."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Shariah Committee:", error);
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/shariah-committee",
      fallbackTitle: "Shariah Committee - D360 Bank",
      fallbackDescription: "Meet our Shariah Committee members."
    });
  }
}

export default async function ShariaComplaintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const shariahData = await fetchShariah(validatedLocale).catch(() => null);
  
  return <ShariaComplaintPageClient initialShariahData={shariahData} />;
}
