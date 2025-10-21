// src/shared/constants/metaTags.ts

/**
 * Meta tags globali per il sito
 * Usati come fallback in __root.tsx
 */

// ========================================
// Informazioni Base
// ========================================
export const SITE_INFO = {
  name: 'Smailen Vargas Portfolio',
  author: 'Smailen Vargas',
  url: 'https://smailenvargas.com',
  locale: 'it_IT',
  themeColor: '#ffffff',
} as const;
// ========================================
// Meta Tags SEO Base
// ========================================
export const BASE_META_TAGS = [
  {
    title: 'Smailen Vargas | Frontend Developer',
  },
  {
    name: 'description',
    content:
      'Ciao, sono Smailen Vargas, Frontend Developer specializzato in React, TypeScript e Tailwind CSS. Scopri i miei progetti e competenze.',
  },
  {
    name: 'author',
    content: SITE_INFO.author,
  },
  {
    name: 'keywords',
    content:
      'Smailen Vargas, Frontend Developer, React, TypeScript, Tailwind CSS, DaisyUi, Portfolio',
  },
] as const;

// ========================================
// Open Graph - Social Media Sharing
// ========================================
export const OPEN_GRAPH_TAGS = [
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:locale',
    content: SITE_INFO.locale,
  },
  {
    property: 'og:site_name',
    content: SITE_INFO.name,
  },
  {
    property: 'og:title',
    content: 'Smailen Vargas | Frontend Developer',
  },
  {
    property: 'og:description',
    content:
      'Ciao, sono Smailen Vargas, Frontend Developer specializzato in React, TypeScript e Tailwind CSS',
  },
  {
    property: 'og:image',
    content: `${SITE_INFO.url}/images/immagine-sito.jpeg`,
  },
] as const;

// ========================================
// Mobile App - iOS & Android
// ========================================
export const MOBILE_APP_TAGS = [
  {
    name: 'apple-mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'default',
  },
  {
    name: 'theme-color',
    content: SITE_INFO.themeColor,
  },
] as const;

// ========================================
// JSON-LD Structured Data
// ========================================
export const JSON_LD_PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_INFO.author,
  jobTitle: 'Frontend Developer',
  url: SITE_INFO.url,
  sameAs: [
    'https://www.linkedin.com/in/smailen-vargas/',
    'https://github.com/Smailen5',
    'https://www.frontendmentor.io/profile/Smailen5',
  ],
  image: `${SITE_INFO.url}/images/immagine-sito.jpeg`,
  description:
    'Ciao, sono Smailen Vargas, Frontend Developer specializzato in React, TypeScript e Tailwind CSS. Scopri i miei progetti e competenze.',
} as const;

// ========================================
// Helper: Tutti i meta tags globali
// ========================================
export const GLOBAL_META_TAGS = [
  ...BASE_META_TAGS,
  ...OPEN_GRAPH_TAGS,
  ...MOBILE_APP_TAGS,
] as const;
