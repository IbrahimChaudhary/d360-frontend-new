import AboutPageClient from "@/components/about/about-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchAboutD360 } from "@/api/about";

// Generate metadata for the about page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  try {
    const aboutData = await fetchAboutD360(validatedLocale);
    const seoData = extractSeoData(aboutData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/about",
      fallbackTitle: validatedLocale === "ar" ? "عن D360 بنك" : "About D360 Bank",
      fallbackDescription: validatedLocale === "ar" 
        ? "تعرف على D360 بنك، أول بنك رقمي في المملكة العربية السعودية" 
        : "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata without API data
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/about",
      fallbackTitle: validatedLocale === "ar" ? "عن D360 بنك" : "About D360 Bank",
      fallbackDescription: validatedLocale === "ar" 
        ? "تعرف على D360 بنك، أول بنك رقمي في المملكة العربية السعودية" 
        : "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  await params; // Await the params Promise
  return <AboutPageClient />;
}
