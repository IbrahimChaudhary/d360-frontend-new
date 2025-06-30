import CareersPageClient from "@/components/careers/careers-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchCareer } from "@/api/careers";

// Generate metadata for the Careers page
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
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/careers",
      fallbackTitle: "Careers at D360 Bank",
      fallbackDescription: "Join D360 Bank and build your career in digital banking. See open positions and apply now."
    });
  }
}

export default function CareersPage() {
  return <CareersPageClient />;
}
