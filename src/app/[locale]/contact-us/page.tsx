import ContactUsPageClient from "@/components/contact-us/contact-us-page-client";
import { generateMetadata as generatePageMetadata, extractSeoData } from "@/lib/metadata";
import { fetchContact } from "@/api/contact-us";

// Generate metadata for the Contact Us page
export async function generateMetadata() {
  try {
    const contactData = await fetchContact("en");
    const seoData = extractSeoData(contactData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/contact-us",
      fallbackTitle: "Contact D360 Bank",
      fallbackDescription: "Contact D360 Bank for support, business inquiries, and more."
    });
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    
    // Return fallback metadata
    return generatePageMetadata({
      locale: "en",
      path: "/contact-us",
      fallbackTitle: "Contact D360 Bank",
      fallbackDescription: "Contact D360 Bank for support, business inquiries, and more."
    });
  }
}

export default function ContactUsPage() {
  return <ContactUsPageClient />;
}
