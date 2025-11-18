// src/routes/about.tsx

import { Head } from '@/components/atoms/Head';
import { H1, H2 } from '@/components/atoms/heading';
import Section from '@/components/atoms/Section';
import Separator from '@/components/atoms/Separator';
import Strong from '@/components/atoms/Strong';
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
        description="Sono Smailen Vargas, Frontend Developer. React, TypeScript e Tailwind. Creo interfacce accessibili, veloci e curate. Qui trovi percorso, competenze e approccio."
        keywords="smailen vargas, frontend developer, sviluppatore frontend, react, typescript, tailwind css, tanstack router, accessibilità, performance, ui/ux, portfolio, progetti"
        ogUrl="about"
      />
      <Layout classContent="min-h-[calc(100vh-160px)] px-6">
        <Separator />
        <H1>Chi sono</H1>
        <Separator className="h-4" />

        <Section>
          <H2>Il Mio Percorso</H2>
          <p>
            Sono un <Strong>frontend developer</Strong> con una passione che
            nasce dall&apos;infanzia.
          </p>
          <p>
            Tutto è iniziato con uno <Strong>ZX Spectrum</Strong> e la
            programmazione in <Strong>Basic</Strong>. Quella prima esperienza ha
            acceso una passione che nel tempo si è trasformata in una carriera
            dedicata allo sviluppo frontend.
          </p>

          <p>
            Il mio percorso è stato guidato dalla curiosità e dalla voglia di
            sperimentare. Ho esplorato diversi campi creativi e tecnici che
            hanno arricchito il mio approccio allo sviluppo: dalla modellazione
            3D al disegno digitale, dagli esperimenti con{' '}
            <Strong>Arduino</Strong> alla programmazione. Questa varietà di
            esperienze mi ha portato a trovare la mia vocazione nel{' '}
            <Strong>frontend development</Strong>, dove posso combinare
            creatività e problem solving.
          </p>
        </Section>

        <Separator />

        <Section>
          <H2>Le Mie Competenze</H2>
          <p>
            Nel corso degli anni ho sviluppato una solida conoscenza delle
            tecnologie moderne per lo sviluppo web. Partendo dai fondamenti con{' '}
            <Strong>HTML5</Strong>, <Strong>CSS3</Strong> e{' '}
            <Strong>JavaScript</Strong>, ho poi approfondito l&apos;utilizzo di{' '}
            <Strong>TypeScript</Strong> per aver maggiore robustezza nel codice.
          </p>
          <p>
            Nel mondo dei frameworks, <Strong>React</Strong> è diventato il mio
            strumento principale, accompagnato da librerie come{' '}
            <Strong>TanStack Router</Strong> e strumenti di styling come{' '}
            <Strong>Tailwind CSS</Strong>. Uso <Strong>Git</Strong> e{' '}
            <Strong>GitHub</Strong> per la gestione del codice e workflow
            moderni con <Strong>Vite</Strong>.
          </p>

          <p>
            Mi aggiorno costantemente sulle nuove tecnologie e best practices
            del settore, perché credo che nell&apos;ambito tech
            l&apos;apprendimento continuo sia fondamentale.
          </p>
        </Section>

        <Separator />

        <Section>
          <H2>Il Mio Approccio</H2>
          <p>
            Nel <Strong>frontend development</Strong> ho trovato il perfetto
            equilibrio tra problem solving e creatività. Mi appassiona
            trasformare concept di design in interfacce interattive,
            ottimizzando ogni dettaglio per creare esperienze web coinvolgenti e
            accessibili. Ogni progetto è per me un&apos;opportunità per
            migliorare e applicare nuove soluzioni, sempre mantenendo un focus
            sulla qualità del codice, l&apos;usabilità e le performance.
          </p>
        </Section>

        <Separator />

        <Section>
          <H2>Fuori dal Codice</H2>
          <p>
            Quando non sono immerso nel codice, mi dedico ad attività che
            nutrono la mia creatività e curiosità:
          </p>
          <ul>
            <li>Musica: Studio autodidatta della chitarra elettrica</li>
            <li>
              Game Development: Sperimento con Phaser e Kaboom.js per creare
              piccoli videogiochi
            </li>
          </ul>
          <p>
            Questi hobby non solo mi permettono di staccare mentalmente, ma
            arricchiscono anche il mio approccio creativo al lavoro.
          </p>
        </Section>

        <Separator />
      </Layout>
    </>
  );
}
