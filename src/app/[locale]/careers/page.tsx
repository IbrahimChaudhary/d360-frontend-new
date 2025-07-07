import CareersPageClient from "@/components/careers/careers-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchCareer } from "@/api/careers";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const careerData = await fetchCareer(validatedLocale);
    const seoData = extractSeoData(careerData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/careers",
      fallbackTitle: "Careers at D360 Bank",
      fallbackDescription: "Join D360 Bank and build your career in digital banking. See open positions and apply now."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/careers",
      fallbackTitle: "Careers at D360 Bank",
      fallbackDescription: "Join D360 Bank and build your career in digital banking. See open positions and apply now."
    });
  }
}

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const careerData = await fetchCareer(validatedLocale).catch(() => null);
  
  return <CareersPageClient initialCareerData={careerData} />;
}
