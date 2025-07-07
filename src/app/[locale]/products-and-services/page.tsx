import { fetchFee } from "@/api/product-services";
import { ProductServicesPageClient } from "@/components/product-service/product-services-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const feeData = await fetchFee(validatedLocale);
    const seoData = extractSeoData(feeData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/products-and-services",
      fallbackTitle: seoData?.metaTitle || "Products and Services - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Explore our products and services."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Products and Services:", error);
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/products-and-services",
      fallbackTitle: "Products and Services - D360 Bank",
      fallbackDescription: "Explore our products and services."
    });
  }
}

export default async function ProductAndServicesFee({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const feeData = await fetchFee(validatedLocale).catch(() => null);
  
  return <ProductServicesPageClient initialFeeData={feeData} />;
}
