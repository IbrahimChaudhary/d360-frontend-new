import { fetchPersonalService } from "@/api/personal-service";
import { PersonalServicesPageClient } from "@/components/personal-services/personal-services-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

// Generate metadata for the Personal Services page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";

  try {
    const personalServiceData = await fetchPersonalService(validatedLocale);
    const seoData = extractSeoData(personalServiceData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/personal-services",      
      fallbackTitle: seoData?.metaTitle,
      fallbackDescription: seoData?.metaDescription 
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Personal Services:", error);
    
    // Return fallback metadata on error
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/personal-services",
      fallbackTitle: "Personal Services - D360 Bank",
      fallbackDescription: "Explore our personal banking services."
    });
  }
}

export default async function PersonalServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const personalServiceData = await fetchPersonalService(validatedLocale).catch(() => null);
  
  return <PersonalServicesPageClient initialPersonalServiceData={personalServiceData} />;
}
