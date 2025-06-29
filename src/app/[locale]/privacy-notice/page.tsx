import { fetchPrivacyNotice } from "@/api/privacy-notice";
import { PrivacyNoticePageClient } from "@/components/privacy-notice/privacy-notice-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  try {
    const privacyNoticeData = await fetchPrivacyNotice("en");
    const seoData = extractSeoData(privacyNoticeData);
    
    return generatePageMetadata({
      seoData,
      locale: "en",
      path: "/privacy-notice",
      fallbackTitle: seoData?.metaTitle || "Privacy Notice - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Read our privacy notice to learn how we handle your data."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Privacy Notice:", error);
    
    return generatePageMetadata({
      locale: "en",
      path: "/privacy-notice",
      fallbackTitle: "Privacy Notice - D360 Bank",
      fallbackDescription: "Read our privacy notice to learn how we handle your data."
    });
  }
}

export default function PrivacyNoticePage() {
  return (
    <PrivacyNoticePageClient />
  );
}
