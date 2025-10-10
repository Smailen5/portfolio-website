// src/shared/utils/Head.tsx

import { SITE_INFO } from "@/shared/constants/metaTags";
import { Helmet } from "react-helmet";

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

/**
 * Componente Head per gestire meta tags dinamici
 * Usa react-helmet per iniettare meta tags nel <head>
 */
export const Head = ({
  title = "Smailen Vargas | Frontend Developer",
  description = "Ciao, sono Smailen Vargas, Frontend Developer specializzato in React, TypeScript e Tailwind CSS",
  keywords = "Smailen Vargas, Frontend Developer, React, TypeScript, Tailwind CSS, DaisyUi, Portfolio",
  ogImage = `${SITE_INFO.url}/images/immagine-sito.jpeg`,
  ogUrl = SITE_INFO.url,
}: HeadProps) => {
  return (
    <Helmet>
      {/* SEO Base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_INFO.author} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE_INFO.locale} />
      <meta property="og:site_name" content={SITE_INFO.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />

      {/* Mobile App */}
      <meta name="theme-color" content={SITE_INFO.themeColor} />
    </Helmet>
  );
};
