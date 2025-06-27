import type { Offer, OfferCategory } from "@/types/offers"

export const offerCategories: OfferCategory[] = [
  {
    id: "automotive",
    name: { en: "Automotive", ar: "السيارات" },
  },
  {
    id: "shopping",
    name: { en: "Shopping", ar: "التسوق" },
  },
  {
    id: "Expired-offers",
    name: { en: "Brand Offers", ar: "عروض العلامات التجارية" },
  },
 
]

export const offers: Offer[] = [
  {
    id: "supermarket-cashback",
    duration: "The offer is valid from 01 May 2025 to 08 May 2025. Any purchases made outside this period will not be eligible for the cashback.",
    title: {
      en: "100% Cashback on Supermarkets",
      ar: "استرداد نقدي 100% على السوبر ماركت",
    },
    description: {
      en: "Get 100% cashback on your first supermarket purchase",
      ar: "احصل على استرداد نقدي 100% على أول عملية شراء من السوبر ماركت",
    },
    category: "shopping",
    image: "/offers/card1.png",
    ctaImage: "/offers/cta.png",
    backgroundColor: "bg-orange-100",
    date:"8 May, 2025",
    textColor: "text-slate-800",
    cashbackAmount: "100%",
    validUntil: "08 May 2025",
    slug: "supermarket-cashback",
    terms: {
      en: [
        "This offer is valid only for customers who received an SMS from D360 Bank.",
        "The offer applies to the first transaction made using a D360 card during the offer period.",
        "The maximum cashback amount is 30 SAR.",
        "Cashback will be credited to the customer's account within 3 business days.",
        "This offer applies only to merchants categorized as supermarkets.",
        "D360 Bank reserves the right to modify or cancel this offer at any time during the period.",
        "The offer excludes purchases made through food delivery apps.",
      ],
      ar: [
        "هذا العرض صالح فقط للعملاء الذين تلقوا رسالة نصية من بنك D360.",
        "ينطبق العرض على أول معاملة تتم باستخدام بطاقة D360 خلال فترة العرض.",
        "الحد الأقصى لمبلغ الاسترداد النقدي هو 30 ريال سعودي.",
        "سيتم إضافة الاسترداد النقدي إلى حساب العميل خلال 3 أيام عمل.",
        "ينطبق هذا العرض فقط على التجار المصنفين كسوبر ماركت.",
        "يحتفظ بنك D360 بالحق في تعديل أو إلغاء هذا العرض في أي وقت خلال الفترة.",
        "يستثني العرض المشتريات التي تتم من خلال تطبيقات توصيل الطعام.",
      ],
    },
    howToBenefit: {
      en: ["Make your first purchase at a supermarket using your D360 card and get 100% cashback up to 30 SAR."],
      ar: ["قم بأول عملية شراء في السوبر ماركت باستخدام بطاقة D360 واحصل على استرداد نقدي 100% حتى 30 ريال سعودي."],
    },
  },
  {
    id: "first-purchase-cashback",
    duration: "01 May 2025 to 08 May 2025",
    title: {
      en: "100% Cashback on Your First Purchase",
      ar: "استرداد نقدي 100% على أول عملية شراء",
    },
    description: {
      en: "Get 100% cashback on your very first purchase with D360 card",
      ar: "احصل على استرداد نقدي 100% على أول عملية شراء ببطاقة D360",
    },
    category: "shopping",
    image: "/offers/card1.png",
    ctaImage: "/offers/cta.png",
    date:"8 May, 2025",
    backgroundColor: "bg-red-500",
    textColor: "text-white",
    cashbackAmount: "100%",
    slug: "first-purchase-cashback",
  },
  ]
