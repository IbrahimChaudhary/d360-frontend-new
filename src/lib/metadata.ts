import { Metadata } from "next";

export interface SeoData {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: {
    url: string;
    width?: number;
    height?: number;
    alternativeText?: string;
  };
}

export interface GenerateMetadataOptions {
  seoData?: SeoData;
  locale?: string;
  path?: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

export function generateMetadata({
  seoData,
  locale = "en",
  path = "",
  fallbackTitle = "D360 Bank",
  fallbackDescription = "D360 Bank - Your Digital Banking Partner"
}: GenerateMetadataOptions): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://d360bank.com";
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
  const currentUrl = `${baseUrl}${path}`;
  
  // Use SEO data if available, otherwise use fallbacks
  const title = seoData?.metaTitle || fallbackTitle;
  const description = seoData?.metaDescription || fallbackDescription;
  
  // Handle image URL - if it's a relative path, make it absolute using Strapi URL
  const imageUrl = seoData?.shareImage?.url 
    ? (seoData.shareImage.url.startsWith('http') 
        ? seoData.shareImage.url 
        : `${strapiUrl}${seoData.shareImage.url}`)
    : null;
  
  console.log('Generated image URL:', imageUrl); // Debug log
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: currentUrl,
      siteName: "D360 Bank",
      locale: locale,
      type: "website",
      images: imageUrl ? [
        {
          url: imageUrl,
          width: seoData?.shareImage?.width || 1200,
          height: seoData?.shareImage?.height || 630,
          alt: seoData?.shareImage?.alternativeText || "D360 Bank",
        }
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': `${baseUrl}${path}`,
        'ar': `${baseUrl}/ar${path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Helper function to extract SEO data from API response
export function extractSeoData(data: any): SeoData | undefined {
  // Handle case where SEO is an array (like in some Strapi responses)
  if (data?.SEO && Array.isArray(data.SEO) && data.SEO.length > 0) {
    const seo = data.SEO[0];
    return {
      metaTitle: seo.metaTitle,
      metaDescription: seo.metaDescription,
      shareImage: seo.shareImage ? {
        url: seo.shareImage.url,
        width: seo.shareImage.width,
        height: seo.shareImage.height,
        alternativeText: seo.shareImage.alternativeText,
      } : undefined,
    };
  }
  
  // Handle case where SEO is a single object (like in our NewsCardData type)
  if (data?.SEO && typeof data.SEO === 'object' && !Array.isArray(data.SEO)) {
    const seo = data.SEO;
    return {
      metaTitle: seo.metaTitle,
      metaDescription: seo.metaDescription,
      shareImage: seo.shareImage ? {
        url: seo.shareImage.url,
        width: seo.shareImage.width,
        height: seo.shareImage.height,
        alternativeText: seo.shareImage.alternativeText,
      } : undefined,
    };
  }
  
  return undefined;
} 