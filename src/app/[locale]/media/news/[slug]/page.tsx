import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { NewsArticleFetcher } from "@/components/media/new-cards-fetcher";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";

export const dynamicParams = true;

// ← Use `any` here to satisfy Next.js’s generated PageProps
export async function generateMetadata(props: any): Promise<Metadata> {
  // Cast to your known shape
  const { locale, slug } = (props.params as {
    locale?: string;
    slug: string;
  });

  try {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://13.235.50.194:1337";
    const res = await fetch(
      `${apiUrl}/api/news-cards?filters[slug][$eq]=${encodeURIComponent(
        slug
      )}&populate=*&locale=${locale || "en"}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`Status ${res.status}`);

    const json = await res.json();
    const items = Array.isArray(json.data) ? json.data : [];
    if (items.length === 0) throw new Error("Article not found");

    const hit = items[0];
    const raw = hit.attributes ?? hit;
    const articleData = {
      id: hit.id,
      slug: raw.slug,
      heading: raw.heading,
      shortDesc: raw.shortDesc,
      ...raw,
    };

    const seoData = extractSeoData(articleData);
    return generatePageMetadata({
      seoData,
      locale,
      path: `/media/news/${slug}`,
      fallbackTitle: articleData.heading,
      fallbackDescription: articleData.shortDesc,
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return generatePageMetadata({
      locale,
      path: `/media/news/${slug}`,
      fallbackTitle: "News Article - D360 Bank",
      fallbackDescription: "Read the latest news and updates from D360 Bank.",
    });
  }
}

// ← Also `any` here avoids the `PageProps` clash
export default async function NewsArticlePage(props: any) {
  const { slug } = (props.params as { slug: string });

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about" />
      <main className="flex-1 lg:pt-40">
        <NewsArticleFetcher slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
