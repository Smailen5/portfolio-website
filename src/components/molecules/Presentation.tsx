import { Link } from '@tanstack/react-router';
import Section from '../atoms/Section';
import Separator from '../atoms/Separator';
import Strong from '../atoms/Strong';

/**
 * Componente Presentation - Sezione "Chi sono" (versione sintetica)
 *
 * Presentazione professionale concisa per la homepage che:
 * - Introduce il ruolo di frontend developer e le tecnologie principali (React, TypeScript, Tailwind CSS)
 * - Descrive l'approccio al lavoro (problem solving, creatività, qualità del codice)
 * - Include un link alla pagina About per informazioni dettagliate
 *
 * Questa versione sintetica mantiene la homepage pulita e invita gli utenti
 * a visitare la pagina About per maggiori dettagli sul percorso e le competenze.
 */
export const Presentation = () => {
  return (
    <Section>
      <h2 className="sr-only">Presentazione</h2>
      <p>
        Sono un <Strong>frontend developer</Strong> specializzato nello sviluppo
        web moderno. Utilizzo <Strong>React</Strong> e{' '}
        <Strong>TypeScript</Strong> per creare applicazioni robuste,
        accompagnato da <Strong>Tailwind CSS</Strong> per interfacce responsive
        e accessibili. La mia passione per la programmazione nasce
        dall&apos;infanzia e si è evoluta nel tempo, guidata dalla curiosità e
        dalla voglia di creare soluzioni innovative.
      </p>

      <Separator className="h-4" />

      <p>
        Nel mio lavoro, cerco sempre il perfetto equilibrio tra{' '}
        <Strong>problem solving</Strong> e <Strong>creatività</Strong>. Mi
        appassiona trasformare concept di design in interfacce interattive,
        mantenendo sempre un focus sulla qualità del codice, l&apos;usabilità e
        le performance. Ogni progetto è un&apos;opportunità per migliorare e
        applicare nuove soluzioni, aggiornandomi costantemente sulle best
        practices del settore.
      </p>

      <Separator className="h-4" />

      <p>
        Se vuoi saperne di più sul mio percorso, le mie competenze tecniche
        dettagliate e il mio approccio al lavoro, visita la pagina{' '}
        <Link to="/about" className="text-accent font-bold underline">
          About
        </Link>{' '}
        per maggiori informazioni.
      </p>

      <Separator className="h-4" />
    </Section>
  );
};
