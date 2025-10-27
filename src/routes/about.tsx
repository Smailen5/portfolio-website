// src/routes/about.tsx

import { Head } from '@/components/atoms/Head';
import { Layout } from '@/components/molecules/Layout';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Head
        title="About | Smailen Vargas"
        description="Aggiorna la descrizione"
        keywords="Aggiungi keywords"
        ogUrl="https://smailenvargas.com/about"
      />
      <Layout classContent="min-h-[calc(100vh-160px)]">
        <div>Prova about page</div>
      </Layout>
    </>
  );
}
