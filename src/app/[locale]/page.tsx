// app/[locale]/page.tsx
import HomePage from "@/components/home/home-page";
import {
  generateMetadata as generatePageMetadata,
  extractSeoData,
} from "@/lib/metadata";
import { fetchHomePage } from "@/api/home";

// ✅ Accept `params` from the route
export async function generateMetadata({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  try {
    const homeData = await fetchHomePage(params.locale);
    const seoData = extractSeoData(homeData);

    return generatePageMetadata({
      seoData,
      locale: params.locale,
      path: "",
      fallbackTitle: "D360 Bank",
      fallbackDescription: "D360 Bank - Your Digital Banking Partner",
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);

    return generatePageMetadata({
      locale: params.locale,
      path: "",
      fallbackTitle: "D360 Bank",
      fallbackDescription: "D360 Bank - Your Digital Banking Partner",
    });
  }
}

// ✅ You can also access `params` in the component if needed
export default function Home({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  return <HomePage />;
}
