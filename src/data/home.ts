import type { HomePageData } from "@/types/home"

export const fallbackHomeData: HomePageData = {
  hero: {
    title: {
      en: "Welcome to D360",
      ar: "مرحبًا بك في D360",
    },
    subtitle: {
      en: "A fully dynamic content platform powered by Strapi CMS",
      ar: "منصة محتوى ديناميكية بالكامل مدعومة بواسطة Strapi CMS",
    },
    ctaText: {
      en: "Get Started",
      ar: "البدء",
    },
    image: {
      url: "/modern-digital-platform.png",
      alternativeText: "D360 Platform",
    },
  },
  featuredContent: {
    title: {
      en: "Featured Content",
      ar: "محتوى مميز",
    },
    items: [
      {
        id: "1",
        title: {
          en: "Digital Solutions",
          ar: "حلول رقمية",
        },
        description: {
          en: "Innovative digital solutions for modern businesses.",
          ar: "حلول رقمية مبتكرة للشركات الحديثة.",
        },
        image: {
          url: "/digital-solutions.png",
          alternativeText: "Digital Solutions",
        },
      },
      {
        id: "2",
        title: {
          en: "Creative Design",
          ar: "تصميم إبداعي",
        },
        description: {
          en: "Eye-catching designs that capture your brand essence.",
          ar: "تصاميم جذابة تعكس جوهر علامتك التجارية.",
        },
        image: {
          url: "/abstract-creative-design.png",
          alternativeText: "Creative Design",
        },
      },
      {
        id: "3",
        title: {
          en: "Content Strategy",
          ar: "استراتيجية المحتوى",
        },
        description: {
          en: "Strategic content planning for maximum engagement.",
          ar: "تخطيط محتوى استراتيجي لأقصى قدر من المشاركة.",
        },
        image: {
          url: "/content-strategy-brainstorm.png",
          alternativeText: "Content Strategy",
        },
      },
    ],
  },
}
