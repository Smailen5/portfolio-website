import { Link } from '@tanstack/react-router';
import Section from '../atoms/Section';
import Separator from '../atoms/Separator';

/**
 * Componente Hero - Sezione principale della homepage
 *
 * Mostra:
 * - Animazione "Hello World" con effetto typing
 * - Nome con tooltip informativo
 * - Ruolo (Frontend Developer)
 * - CTA (Call To Action) per contatti e progetti
 */
export const Hero = () => {
  return (
    <Section>
      <main className="">
        {/* presentazione */}
        <header className="">
          <p className="text-4xl">
            <span className="animate-typing text-base-content w-fit overflow-hidden border-r-2 font-mono tracking-wide whitespace-nowrap">
              {'<Hello World>'}
            </span>{' '}
            sono
          </p>

          <Separator />

          <h2
            className="text-primary lg:tooltip text-6xl font-bold"
            data-tip="Si, il mio nome significa 'sorridi sempre'! 😊"
          >
            Smailen Vargas
          </h2>
        </header>

        <Separator />

        <p className="text-3xl font-semibold">Frontend developer</p>

        <Separator />

        {/* call to action */}
        <nav className="md:flex-star flex flex-col flex-wrap gap-4 md:flex-row">
          <Link to="/contact" className="btn">
            Contattami
          </Link>
          <Link to="/projects" className="btn btn-primary">
            Progetti
          </Link>
        </nav>

        <Separator />
      </main>
    </Section>
  );
};
