// app/offers/[slug]/page.tsx
import OfferFetcher from "@/components/offers/offer-fetcher";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchOfferPagesBySlug } from "@/api/offer";

interface OfferPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for the Offer page
export async function generateMetadata({ params }: OfferPageProps) {
  const { slug } = await params;
  try {
    const offerData = await fetchOfferPagesBySlug("en", slug);
    const seoData = extractSeoData(offerData[0]);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: `/offers/${slug}`,
      fallbackTitle: offerData[0].MainTitle,
      fallbackDescription: offerData[0].Description1
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: `/offers/${slug}`,
      fallbackTitle: "D360 Bank Offer",
      fallbackDescription: "Check out this special offer from D360 Bank."
    });
  }
}

export default async function OfferPage({ params }: OfferPageProps) {
  const { slug } = await params;
  return <OfferFetcher slug={slug} />;
}

// if you still want SSG for all slugs:
import { offers } from "@/data/offer";

export async function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}
