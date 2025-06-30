// app/media/news/[slug]/page.tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { Hero } from "@/components/layout/page-hero";
import { NewsArticleFetcher } from "@/components/media/new-cards-fetcher";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";

interface Props {
  params: { locale: string; slug: string };
}

// Generate metadata for the News Article page
export async function generateMetadata({ params }: Props) {
  const { locale = "en", slug } = params;
  try {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://13.235.50.194:1337";
    
    // Use the same direct fetch approach as in the client component
    const res = await fetch(
      `${apiUrl}/api/news-cards?filters[slug][$eq]=${encodeURIComponent(
        slug
      )}&populate=*&locale=${locale}`,
      { cache: 'no-store' } // Disable caching
    );
    
    console.log("News card API response:", res.status, res.statusText); // Debug log
    if (!res.ok) throw new Error(`Status ${res.status}`);
    
    const json = await res.json();
    console.log("News card API response:", json); // Debug log
    
    const items = Array.isArray(json.data) ? json.data : [];
    if (items.length === 0) throw new Error("Article not found");

    const hit = items[0];
    const raw = hit.attributes ?? hit;
    
    console.log("Raw news card data:", raw); // Debug log
    
    const articleData = {
      id: hit.id,
      slug: raw.slug,
      heading: raw.heading,
      shortDesc: raw.shortDesc,
      ...raw,
    };
    
    console.log("Processed article data:", articleData); // Debug log
    const seoData = extractSeoData(articleData);
    console.log("Extracted SEO data:", seoData); // Debug log
    
    return generatePageMetadata({
      seoData,
      locale,
      path: `/media/news/${slug}`,
      fallbackTitle: articleData.heading,
      fallbackDescription: articleData.shortDesc
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale,
      path: `/media/news/${slug}`,
      fallbackTitle: "News Article - D360 Bank",
      fallbackDescription: "Read the latest news and updates from D360 Bank."
    });
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = params;
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about"/>
      <main className="flex-1 lg:pt-40 ">
        {/* Our new client-side fetcher */}
        <NewsArticleFetcher slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
