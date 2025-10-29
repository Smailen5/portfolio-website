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
        <h1>Chi sono</h1>

        <section>
          <h2>Il Mio Percorso</h2>
          <p>
            Sono un <strong className="text-accent">frontend developer</strong>{' '}
            con una passione che nasce dall'infanzia.
          </p>
          <p>
            Tutto è iniziato con uno{' '}
            <strong className="text-accent">ZX Spectrum</strong> e la
            programmazione in <strong className="text-accent">Basic</strong>.
            Quella prima esperienza ha acceso una passione che nel tempo si è
            trasformata in una carriera dedicata allo sviluppo frontend.
          </p>

          <p>
            Il mio percorso è stato guidato dalla curiosità e dalla voglia di
            sperimentare. Ho esplorato diversi campi creativi e tecnici che
            hanno arricchito il mio approccio allo sviluppo: dalla modellazione
            3D al disegno digitale, dagli esperimenti con{' '}
            <strong className="text-accent">Arduino</strong> alla
            programmazione. Questa varietà di esperienze mi ha portato a trovare
            la mia vocazione nel{' '}
            <strong className="text-accent">frontend development</strong>, dove
            posso combinare creatività e problem solving.
          </p>
        </section>

        <Separator />

        <section>
          <h2>Le Mie Competenze</h2>
          <p>
            Nel corso degli anni ho sviluppato una solida conoscenza delle
            tecnologie moderne per lo sviluppo web. Partendo dai fondamenti con{' '}
            <strong className="text-accent">HTML5</strong>,{' '}
            <strong className="text-accent">CSS3</strong> e{' '}
            <strong className="text-accent">JavaScript</strong>, ho poi
            approfondito l'utilizzo di{' '}
            <strong className="text-accent">TypeScript</strong> per aver
            maggiore robustezza nel codice.
          </p>
          <p>
            Nel mondo dei frameworks, <strong>React</strong> è diventato il mio
            strumento principale, accompagnato da librerie come{' '}
            <strong>TanStack Router</strong> e strumenti di styling come{' '}
            <strong>Tailwind CSS</strong>. Uso <strong>Git</strong> e{' '}
            <strong>GitHub</strong> per la gestione del codice e workflow
            moderni con <strong>Vite</strong>.
          </p>

          <p>
            Mi aggiorno costantemente sulle nuove tecnologie e best practices
            del settore, perché credo che nell'ambito tech l'apprendimento
            continuo sia fondamentale.
          </p>
        </section>

        <Separator />

        <section>
          <h2>Il Mio Approccio</h2>
          <p>
            Nel <strong className="text-accent">frontend development</strong> ho
            trovato il perfetto equilibrio tra problem solving e creatività. Mi
            appassiona trasformare concept di design in interfacce interattive,
            ottimizzando ogni dettaglio per creare esperienze web coinvolgenti e
            accessibili. Ogni progetto è per me un'opportunità per migliorare e
            applicare nuove soluzioni, sempre mantenendo un focus sulla qualità
            del codice, l'usabilità e le performance.
          </p>
        </section>

        <Separator />

        <section>
          <h2>Fuori dal Codice</h2>
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
        </section>

        <Separator />
      </Layout>
    </>
  );
}
