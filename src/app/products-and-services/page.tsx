import { fetchFee } from "@/api/product-services";
import { ProductServicesPageClient } from "@/components/product-service/product-services-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  try {
    const feeData = await fetchFee("en");
    const seoData = extractSeoData(feeData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/products-and-services",
      fallbackTitle: seoData?.metaTitle || "Products and Services - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Explore our products and services."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Products and Services:", error);
    
    return generatePageMetadata({
      locale: "en",
      path: "/products-and-services",
      fallbackTitle: "Products and Services - D360 Bank",
      fallbackDescription: "Explore our products and services."
    });
  }
}

export default function ProductAndServicesFee() {
  return (
    <ProductServicesPageClient />
  );
}
