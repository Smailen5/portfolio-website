// src/shared/utils/Head.tsx

import {
  BASE_META_TAGS,
  JSON_LD_PERSON,
  MOBILE_APP_TAGS,
  OPEN_GRAPH_TAGS,
} from '@/shared/constants/metaTags';
import { Helmet } from 'react-helmet';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

/**
 * Componente Head per gestire meta tags dinamici
 * Usa react-helmet per iniettare meta tags nel <head>
 */
export const Head = ({
  title = 'Smailen Vargas | Frontend Developer',
  description,
  keywords,
}: HeadProps) => {
  return (
    <Helmet>
      {/* SEO Base */}
      <title>{title}</title>
      {BASE_META_TAGS.map(tag => (
        <meta
          key={tag.name}
          name={tag.name}
          content={
            tag.name === 'description' && description
              ? description
              : tag.name === 'keywords' && keywords
                ? keywords
                : tag.content
          }
        />
      ))}

      {/* Open Graph */}
      {OPEN_GRAPH_TAGS.map(tag => (
        <meta
          key={tag.property}
          property={tag.property}
          content={
            tag.property === 'og:title' && title
              ? title
              : tag.property === 'og:description' && description
                ? description
                : tag.content
          }
        />
      ))}

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
