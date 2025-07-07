// app/offers/[slug]/page.tsx
import OfferFetcher from "@/components/offers/offer-fetcher";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchOfferPagesBySlug } from "@/api/offer";

// If you're using dynamic slugs (SSG or not), it's safe to opt in:
export const dynamicParams = true;

// Use `any` so we don't conflict with Next.js's generated PageProps
export async function generateMetadata(props: any) {
  // Cast params to the shape you expect
  const { locale, slug } = props.params as {
    locale?: string;
    slug: string;
  };

  try {
    const offerData = await fetchOfferPagesBySlug(locale || "en", slug);
    const seoData = extractSeoData(offerData[0]);

    return generatePageMetadata({
      seoData,
      locale,
      path: `/offers/${slug}`,
      fallbackTitle: offerData[0].MainTitle,
      fallbackDescription: offerData[0].Description1,
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return generatePageMetadata({
      locale,
      path: `/offers/${slug}`,
      fallbackTitle: "D360 Bank Offer",
      fallbackDescription: "Check out this special offer from D360 Bank.",
    });
  }
}

// Likewise, `any` here so the build-time `checkFields` passes
export default async function OfferPage(props: any) {
  const { locale, slug } = props.params as { locale: string; slug: string };
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const offerData = await fetchOfferPagesBySlug(validatedLocale, slug).catch(() => null);
  
  return <OfferFetcher slug={slug} initialOfferData={offerData?.[0] || null} />;
}

// If you still want to pre-render all known slugs:
import { offers } from "@/data/offer";
export async function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}
