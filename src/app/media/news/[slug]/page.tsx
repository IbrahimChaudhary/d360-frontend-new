// app/media/news/[slug]/page.tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer";
import { Hero } from "@/components/layout/page-hero";
import { NewsArticleFetcher } from "@/components/media/new-cards-fetcher";

interface Props {
  params: { slug: string };
}

export default function NewsArticlePage({ params }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="about"/>
      <main className="flex-1 lg:pt-40 ">
        {/* Our new client-side fetcher */}
        <NewsArticleFetcher slug={params.slug} />
      </main>
      <Footer />
    </div>
  );
}
