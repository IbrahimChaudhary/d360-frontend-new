import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { NewsArticleFetcher } from "@/components/media/new-cards-fetcher";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";

export const dynamicParams = true;

export async function generateMetadata(props: any): Promise<Metadata> {
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

export default async function NewsArticlePage(props: any) {
  const { slug, locale } = (props.params as { slug: string; locale?: string });
  const validatedLocale = locale || "en";
  
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://13.235.50.194:1337";
  
  // Fetch main article server-side
  const mainArticleRes = await fetch(
    `${apiUrl}/api/news-cards?filters[slug][$eq]=${encodeURIComponent(
      slug
    )}&populate=*&locale=${validatedLocale}`,
    { cache: "no-store" }
  ).catch(() => null);
  
  let mainArticle = null;
  if (mainArticleRes?.ok) {
    const json = await mainArticleRes.json();
    const items = Array.isArray(json.data) ? json.data : [];
    if (items.length > 0) {
      const hit = items[0];
      const raw = hit.attributes ?? hit;
      mainArticle = {
        id: hit.id,
        slug: raw.slug,
        ...raw,
      };
    }
  }
  
  // Fetch related articles server-side
  const relatedRes = await fetch(
    `${apiUrl}/api/news-cards?filters[slug][$ne]=${encodeURIComponent(
      slug
    )}&populate=*&pagination[limit]=2&locale=${validatedLocale}`,
    { cache: "no-store" }
  ).catch(() => null);
  
  let relatedArticles = [];
  if (relatedRes?.ok) {
    const json = await relatedRes.json();
    const items = Array.isArray(json.data) ? json.data : [];
    relatedArticles = items
      .map((hit: any) => {
        const raw = hit.attributes ?? hit;
        if (typeof raw.slug !== "string") return null;
        return {
          id: hit.id,
          slug: raw.slug,
          ...raw,
        };
      })
      .filter((x: any) => x !== null);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about" />
      <main className="flex-1 lg:pt-40">
        <NewsArticleFetcher 
          slug={slug} 
          initialArticle={mainArticle}
          initialRelatedArticles={relatedArticles}
        />
      </main>
      <Footer />
    </div>
  );
}
