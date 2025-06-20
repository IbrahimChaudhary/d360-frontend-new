import AboutPageClient from "@/components/about/about-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchAboutD360 } from "@/api/about";

// Generate metadata for the about page
export async function generateMetadata() {
  try {
    const aboutData = await fetchAboutD360("en");
    const seoData = extractSeoData(aboutData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/about",
      fallbackTitle: "About D360 Bank",
      fallbackDescription: "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: "/about",
      fallbackTitle: "About D360 Bank",
      fallbackDescription: "Learn about D360 Bank - Saudi Arabia's first digital bank"
    });
  }
}

export default function AboutPage() {
  return <AboutPageClient />;
}
