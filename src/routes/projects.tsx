import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '@/pages/project';
import { createRouteHead } from '@/shared/utils/seo';

export const Route = createFileRoute('/projects')({
  head: () =>
    createRouteHead({
      title: 'Progetti | Smailen Vargas',
      description:
        'Esplora i progetti realizzati da Smailen Vargas come Frontend Developer. Scopri le tecnologie utilizzate e i risultati ottenuti.',
      keywords:
        'Smailen Vargas, Progetti, Frontend Developer, React, TypeScript, Portfolio',
      ogUrl: '/projects',
    }),
  component: ProjectPage,
});
