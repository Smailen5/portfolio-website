// src/shared/utils/Head.tsx

import {
  JSON_LD_PERSON,
  MOBILE_APP_TAGS,
  SITE_INFO,
} from '@/shared/constants/metaTags';
import { Helmet } from 'react-helmet';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogUrl?: string;
}

/**
 * Componente Head per gestire meta tags dinamici
 * Usa react-helmet per iniettare meta tags nel <head>
 */
export const Head = ({
  title = 'Smailen Vargas | Frontend Developer',
  description = 'Ciao, sono Smailen Vargas, Frontend Developer specializzato in React, TypeScript e Tailwind CSS',
  keywords = 'Smailen Vargas, Frontend Developer, React, TypeScript, Tailwind CSS, DaisyUi, Portfolio',
  ogUrl,
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
      <meta property="og:url" content={SITE_INFO.url + (ogUrl ? ogUrl : '')} />
      <meta
        property="og:image"
        content={`${SITE_INFO.url}/images/immagine-sito.jpeg`}
      />

      {/* Mobile App */}
      {MOBILE_APP_TAGS.map(tag => (
        <meta key={tag.name} name={tag.name} content={tag.content} />
      ))}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(JSON_LD_PERSON)}
      </script>
    </Helmet>
  );
};
