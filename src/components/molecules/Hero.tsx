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
      {/* presentazione */}
      <header className="">
        <p className="text-4xl">
          <span
            className="text-base-content typing font-mono"
            aria-label="<Hello World>"
          >
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
      <nav className="flex flex-col flex-wrap gap-4 md:flex-row">
        <Link to="/contact" className="btn btn-xl md:btn-lg">
          Contattami
        </Link>
        <Link to="/projects" className="btn btn-xl btn-primary md:btn-lg">
          Progetti
        </Link>
      </nav>

      <Separator />
    </Section>
  );
};
