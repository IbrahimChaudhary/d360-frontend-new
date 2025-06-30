import MediaPageClient from "@/components/media/media-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchMedia } from "@/api/media";

// Generate metadata for the Media page
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const mediaData = await fetchMedia(validatedLocale);
    const seoData = extractSeoData(mediaData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/media",
      fallbackTitle: "Media Center - D360 Bank",
      fallbackDescription: "Stay updated with the latest news, press releases, and media resources from D360 Bank."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/media",
      fallbackTitle: "Media Center - D360 Bank",
      fallbackDescription: "Stay updated with the latest news, press releases, and media resources from D360 Bank."
    });
  }
}

export default function MediaPage() {
  return <MediaPageClient />;
}
