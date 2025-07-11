import { fetchSecurityAwareness } from "@/api/security-awareness";
import { SecurityAwarenessPageClient } from "@/components/security-awareness/security-awareness-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  try {
    const securityData = await fetchSecurityAwareness("en");
    const seoData = extractSeoData(securityData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/security-awareness",
      fallbackTitle: seoData?.metaTitle || "Security Awareness - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Learn how to protect yourself online."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Security Awareness:", error);
    
    return generatePageMetadata({
      locale: "en",
      path: "/security-awareness",
      fallbackTitle: "Security Awareness - D360 Bank",
      fallbackDescription: "Learn how to protect yourself online."
    });
  }
}

export default function SecurityAwarenessPage() {
  return (
    <SecurityAwarenessPageClient />
  );
}
