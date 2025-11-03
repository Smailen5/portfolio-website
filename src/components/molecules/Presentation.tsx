import { Link } from '@tanstack/react-router';
import Strong from '../atoms/Strong';
import Section from '../atoms/Section';
import Separator from '../atoms/Separator';

/**
 * Componente Presentation - Sezione "Chi sono"
 *
 * Racconta la storia personale e professionale:
 * - Origini della passione per la programmazione (ZX Spectrum, Basic)
 * - Percorso creativo (3D, disegno digitale, Arduino)
 * - Vocazione nel frontend development
 * - Hobby e interessi personali
 *
 * Include tooltip informativi su termini tecnici per migliorare l'UX
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

      <Separator />

      <p>
        Nel mio lavoro, cerco sempre il perfetto equilibrio tra{' '}
        <Strong>problem solving</Strong> e <Strong>creatività</Strong>. Mi
        appassiona trasformare concept di design in interfacce interattive,
        mantenendo sempre un focus sulla qualità del codice, l&apos;usabilità e
        le performance. Ogni progetto è un&apos;opportunità per migliorare e
        applicare nuove soluzioni, aggiornandomi costantemente sulle best
        practices del settore.
      </p>

      <Separator />

      <p>
        Se vuoi saperne di più sul mio percorso, le mie competenze tecniche
        dettagliate e il mio approccio al lavoro, visita la pagina{' '}
        <Link to="/about" className="text-accent underline">
          About
        </Link>{' '}
        per maggiori informazioni.
      </p>

      <Separator />
    </Section>
  );
};

// className="mx-auto flex w-full flex-col gap-16"
