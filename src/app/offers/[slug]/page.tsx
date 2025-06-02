// app/offers/[slug]/page.tsx
import OfferFetcher from "@/components/offers/offer-fetcher";

interface OfferPageProps {
  params: { slug: string };
}

export default function OfferPage({ params }: OfferPageProps) {
  return <OfferFetcher slug={params.slug} />;
}

// if you still want SSG for all slugs:
import { offers } from "@/data/offer";

export async function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}
