import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/pages/about';
import { createRouteHead } from '@/shared/utils/seo';

export const Route = createFileRoute('/about')({
  head: () =>
    createRouteHead({
      title: 'About | Smailen Vargas',
      description:
        'Sono Smailen Vargas, Frontend Developer. React, TypeScript e Tailwind. Creo interfacce accessibili, veloci e curate. Qui trovi percorso, competenze e approccio.',
      keywords:
        'smailen vargas, frontend developer, sviluppatore frontend, react, typescript, tailwind css, tanstack router, accessibilità, performance, ui/ux, portfolio, progetti',
      ogUrl: '/about',
    }),
  component: AboutPage,
});
