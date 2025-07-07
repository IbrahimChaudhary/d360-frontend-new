import { fetchPrivacyNotice } from "@/api/privacy-notice";
import { PrivacyNoticePageClient } from "@/components/privacy-notice/privacy-notice-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const privacyNoticeData = await fetchPrivacyNotice(validatedLocale);
    const seoData = extractSeoData(privacyNoticeData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/privacy-notice",
      fallbackTitle: seoData?.metaTitle || "Privacy Notice - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Read our privacy notice to learn how we handle your data."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Privacy Notice:", error);
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/privacy-notice",
      fallbackTitle: "Privacy Notice - D360 Bank",
      fallbackDescription: "Read our privacy notice to learn how we handle your data."
    });
  }
}

export default async function PrivacyNoticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  
  const privacyNoticeData = await fetchPrivacyNotice(validatedLocale).catch(() => null);
  
  return <PrivacyNoticePageClient initialPrivacyNoticeData={privacyNoticeData} />;
}
