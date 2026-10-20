import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/pages/contact';
import { createRouteHead } from '@/shared/utils/seo';

export const Route = createFileRoute('/contact')({
  head: () =>
    createRouteHead({
      title: 'Contatti | Smailen Vargas',
      description:
        'Contatta Smailen Vargas via email, LinkedIn o GitHub e scarica il curriculum in italiano o in inglese.',
      keywords:
        'Contatti, Smailen Vargas, Email, Collaborazioni, Frontend Developer',
      ogUrl: '/contact',
    }),
  component: ContactPage,
});
