// types/about/about.ts

/**
 * A single uploaded file returned by Strapi's Media Library,
 * flattened under `data` exactly as your JSON shows.
 */
export interface StrapiMediaData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;

  /**
   * The "formats" object lives directly under `data`.
   * We add thumbnail (and any other size) here.
   */
  formats?: {
    thumbnail?: {
      url: string; // e.g. "/uploads/thumbnail_inv4_1c59f6b9ae.png"
      width: number;
      height: number;
    };
    [key: string]:
      | {
          url: string;
          width: number;
          height: number;
        }
      | undefined;
  };

  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string; // e.g. "/uploads/inv4_1c59f6b9ae.png"
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * SEO component interface
 */
export interface SeoComponent {
  __component: string;
  metaTitle: string;
  metaDescription: string;
  shareImage: StrapiMediaData;
}

/**
 * Each Leader ("director") in the response has:
 *  - scalar fields (name, role, description, position, etc.)
 *  - a `fullDes` array of Portable Text blocks
 *  - a nested `image` object with exactly `data: StrapiMediaData`
 */
export interface Leader {
  id: number;
  documentId: string;
  name: string;
  role: string;
  description: string;
  fullDes: any[]; // replace with your exact Portable Text type if you have one
  position: string;

  /**
   * Now matches your JSON:
   * "image": { data: { id, documentId, name, alternativeText, caption, width, height,
   *                    formats: { thumbnail: { url, width, height } }, hash, ext, mime, size,
   *                    url, previewUrl, provider, provider_metadata, createdAt, updatedAt, publishedAt } }
   */
  image: StrapiMediaData;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

/**
 * The "about-d360" single‐type attributes exactly as your JSON shows.
 */
export interface FAQComponent {
  id: number;
  question: string;
  answers: string; // Changed from "answer" to "answers" to match Strapi
}

// Rest of your interfaces stay the same...
export interface AboutD360Data {
  id: number;
  documentId: string;

  Title1: string;
  Title2: string;
  Description2: string;

  Title3: string;
  Description3: string;

  Title4: string;
  Title5: string;

  FAQTitle: string;
  
  // FAQ Component (repeatable)
  faqs: FAQComponent[];

  HelpingTitle: string;
  HelpingDescription: string;
  HelpingDescription1: string;

  // Stats fields
  value1: string;
  value1Des: string;
  value2: string;
  value2Des: string;
  value3: string;
  value3Des: string;

  // Contact‐related fields
  Title6: string;
  Title7: string;
  Description5: string;
  inside: string;
  insideDes: string;
  outside: string;
  outsideDes: string;
  email: string;
  emailDes: string;
  viaDes: string;
  viaApp1: string;
  viaApp2: string;
  complaint: string;
  complaintDes: string;
  download: string;
  contact: string;
  sideImg: StrapiMediaData;
  directors: Leader[];
  heroImage: StrapiMediaData;
  investorImg1: StrapiMediaData;
  investorImg2: StrapiMediaData;
  directorHead: string;
  manageHead: string;
  shariahHead: string;
  SEO: SeoComponent[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

/**
 * Top‐level Strapi envelope for "about‐d360".
 */
export interface AboutResponse {
  data: AboutD360Data;
  meta: Record<string, unknown>;
}



