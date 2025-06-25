import AboutPageClient from "@/components/about/about-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchAboutD360 } from "@/api/about";

// Generate metadata for the about page
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale === "ar" ? "ar" : "en";
  
  try {
    const aboutData = await fetchAboutD360(locale);
    const seoData = extractSeoData(aboutData);
    
    return generatePageMetadata({
      seoData,
      locale,
      path: "/about",
      fallbackTitle: locale === "ar" ? "عن D360 بنك" : "About D360 Bank",
      fallbackDescription: locale === "ar" 
        ? "تعرف على D360 بنك، أول بنك رقمي في المملكة العربية السعودية" 
        : "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale,
      path: "/about",
      fallbackTitle: locale === "ar" ? "عن D360 بنك" : "About D360 Bank",
      fallbackDescription: locale === "ar" 
        ? "تعرف على D360 بنك، أول بنك رقمي في المملكة العربية السعودية" 
        : "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  }
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  return <AboutPageClient />;
}
