import HomePage from "@/components/home/home-page";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchHomePage } from "@/api/home";

// Generate metadata for the home page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  try {
    const homeData = await fetchHomePage(validatedLocale);
    const seoData = extractSeoData(homeData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "",
      fallbackTitle: validatedLocale === "ar" ? "D360 بنك" : "D360 Bank",
      fallbackDescription: validatedLocale === "ar" 
        ? "D360 بنك - شريكك في الخدمات المصرفية الرقمية" 
        : "D360 Bank - Your Digital Banking Partner"
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: validatedLocale,
      path: "",
      fallbackTitle: validatedLocale === "ar" ? "D360 بنك" : "D360 Bank",
      fallbackDescription: validatedLocale === "ar" 
        ? "D360 بنك - شريكك في الخدمات المصرفية الرقمية" 
        : "D360 Bank - Your Digital Banking Partner"
    });
  }
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <HomePage locale={locale as "en" | "ar"} />
    </>
  );
}