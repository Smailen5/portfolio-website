import {
  BASE_META_TAGS,
  JSON_LD_PERSON,
  MOBILE_APP_TAGS,
  OPEN_GRAPH_TAGS,
  SITE_INFO,
} from '@/shared/constants/metaTags';

export interface RouteHeadOptions {
  title: string;
  description?: string;
  keywords?: string;
  ogUrl?: string;
}

/**
 * Genera l'head configuration globale di fallback per la root route
 */
export function getRootHead() {
  return {
    meta: [
      { title: 'Smailen Vargas | Frontend Developer' },
      ...BASE_META_TAGS.map(tag => ({
        name: tag.name,
        content: tag.content,
      })),
      ...OPEN_GRAPH_TAGS.map(tag => ({
        property: tag.property,
        content: tag.content,
      })),
      ...MOBILE_APP_TAGS.map(tag => ({
        name: tag.name,
        content: tag.content,
      })),
      {
        'script:ld+json': JSON_LD_PERSON,
      },
    ],
  };
}

/**
 * Genera l'head configuration specifica per le singole route
 * Sfrutta la deduplicazione nativa di TanStack Router
 */
export function createRouteHead({
  title,
  description,
  keywords,
  ogUrl,
}: RouteHeadOptions) {
  const meta: Array<{
    title?: string;
    name?: string;
    property?: string;
    content?: string;
  }> = [{ title }];

  if (description) {
    meta.push(
      { name: 'description', content: description },
      { property: 'og:description', content: description }
    );
  }

  if (keywords) {
    meta.push({ name: 'keywords', content: keywords });
  }

  meta.push({ property: 'og:title', content: title });

  if (ogUrl) {
    meta.push({ property: 'og:url', content: `${SITE_INFO.url}${ogUrl}` });
  }

  return { meta };
}
