import { fetchPersonalService } from "@/api/personal-service";
import { PersonalServicesPageClient } from "@/components/personal-services/personal-services-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

// Generate metadata for the Personal Services page
export async function generateMetadata() {
  try {
    const personalServiceData = await fetchPersonalService("en");
    const seoData = extractSeoData(personalServiceData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/personal-services",
      fallbackTitle: seoData?.metaTitle || "Personal Services - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Explore our personal banking services."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Personal Services:", error);
    
    // Return fallback metadata on error
    return generatePageMetadata({
      locale: "en",
      path: "/personal-services",
      fallbackTitle: "Personal Services - D360 Bank",
      fallbackDescription: "Explore our personal banking services."
    });
  }
}

export default function PersonalServicesPage() {
  return (
    <PersonalServicesPageClient />
  );
}
