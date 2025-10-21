// src/shared/utils/Head.tsx

import {
  JSON_LD_PERSON,
  MOBILE_APP_TAGS,
  OPEN_GRAPH_TAGS,
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
      {OPEN_GRAPH_TAGS.map(tag => (
        <meta
          key={tag.property}
          property={tag.property}
          content={tag.content}
        />
      ))}
      <meta property="og:url" content={ogUrl} />

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
