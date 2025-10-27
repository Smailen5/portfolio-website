// src/routes/about.tsx

import { Head } from '@/components/atoms/Head';
import Separator from '@/components/atoms/Separator';
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
      <Layout classContent="min-h-[calc(100vh-160px)] px-4">
        <Separator />
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          aliquid iste facere et consequatur? Explicabo maxime magnam commodi
          nisi, recusandae dolorum nostrum, beatae consectetur nesciunt ducimus
          eveniet enim odit autem!
        </section>
        <Separator />
        <section>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          doloribus tenetur recusandae quos esse at doloremque quas repellendus,
          accusamus nesciunt ut libero explicabo ipsam praesentium culpa.
          Accusantium adipisci omnis perspiciatis.
        </section>
        <Separator />
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a,
          consequuntur quis sint blanditiis ab excepturi fugit iusto tempore
          saepe error et. Alias, aliquam. Architecto tempora voluptas
          perspiciatis exercitationem id.
        </section>
        <Separator />
      </Layout>
    </>
  );
}
