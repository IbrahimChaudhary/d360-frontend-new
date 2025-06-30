import { Metadata } from "next";
import { fetchCustomerCare } from "@/api/customer-care";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import CustomerCarePageClient from "@/components/customer-care/customer-care-page-client";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const contactData = await fetchCustomerCare(validatedLocale);
    const seoData = extractSeoData(contactData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/contact-us",
      fallbackTitle: "Contact D360 Bank",
      fallbackDescription: "Contact D360 Bank for support, business inquiries, and more."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/contact-us",
      fallbackTitle: "Contact D360 Bank",
      fallbackDescription: "Contact D360 Bank for support, business inquiries, and more."
    });
  }
}

export default function CustomerCarePage() {
  return <CustomerCarePageClient />;
}
