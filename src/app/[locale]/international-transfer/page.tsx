import InternationalTransferPageClient from "@/components/international-transfer/international-transfer-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchInternational } from "@/api/international";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const internationalData = await fetchInternational(validatedLocale);
    const seoData = extractSeoData(internationalData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/international-transfer",
      fallbackTitle: "International Transfer - D360 Bank",
      fallbackDescription: "Send money internationally with D360 Bank's secure and fast transfer services."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/international-transfer",
      fallbackTitle: "International Transfer - D360 Bank",
      fallbackDescription: "Send money internationally with D360 Bank's secure and fast transfer services."
    });
  }
}

export default async function InternationalTransferPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const internationalData = await fetchInternational(validatedLocale).catch(() => null);
  
  return <InternationalTransferPageClient initialInternationalData={internationalData} />;
}
