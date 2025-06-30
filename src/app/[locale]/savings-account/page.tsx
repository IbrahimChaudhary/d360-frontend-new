import { fetchSavings } from "@/api/savings-account";
import { SavingsAccountPageClient } from "@/components/savings-account/savings-account-page-client";
import { extractSeoData, generateMetadata as generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validatedLocale = locale === "ar" ? "ar" : "en";
  try {
    const savingsData = await fetchSavings(validatedLocale);
    const seoData = extractSeoData(savingsData);
    
    return generatePageMetadata({
      seoData,
      locale: validatedLocale,
      path: "/savings-account",
      fallbackTitle: seoData?.metaTitle || "Savings Account - D360 Bank",
      fallbackDescription: seoData?.metaDescription || "Open a savings account with us today."
    });
  } catch (error) {
    console.error("Failed to fetch metadata for Savings Account:", error);
    
    return generatePageMetadata({
      locale: validatedLocale,
      path: "/savings-account",
      fallbackTitle: "Savings Account - D360 Bank",
      fallbackDescription: "Open a savings account with us today."
    });
  }
}

export default function SavingsAccountPage() {
  return (
    <SavingsAccountPageClient />
  );
}
