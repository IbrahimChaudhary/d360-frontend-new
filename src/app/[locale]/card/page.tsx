import CardPageClient from "@/components/card/card-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchCard } from "@/api/card";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const cardData = await fetchCard(validatedLocale);
    const seoData = extractSeoData(cardData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/card",
      fallbackTitle: "D360 Cards - Digital Banking Cards",
      fallbackDescription: "Get your D360 Bank digital and physical cards for secure payments"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/card",
      fallbackTitle: "D360 Cards - Digital Banking Cards",
      fallbackDescription: "Get your D360 Bank digital and physical cards for secure payments"
    });
  }
}

export default async function CardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const cardData = await fetchCard(validatedLocale).catch(() => null);
  
  return <CardPageClient initialCardData={cardData} />;
}
