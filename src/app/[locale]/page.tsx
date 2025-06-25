import HomePage from "@/components/home/home-page";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchHomePage } from "@/api/home";

// Generate metadata for the home page
export async function generateMetadata() {
  try {
    const homeData = await fetchHomePage("en");
    const seoData = extractSeoData(homeData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "",
      fallbackTitle: "D360 Bank",
      fallbackDescription: "D360 Bank - Your Digital Banking Partner"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: "",
      fallbackTitle: "D360 Bank",
      fallbackDescription: "D360 Bank - Your Digital Banking Partner"
    });
  }
}

export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  );
}
