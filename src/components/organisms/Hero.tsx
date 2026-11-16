import { Link } from '@tanstack/react-router';
import { Section } from '@/components/atoms';
import lpiIcon from '@/assets/icons/lpi.svg';
import proxmoxIcon from '@/assets/icons/proxmox.svg';

/**
 * Componente Hero - Sezione principale della homepage
 *
 * Hero centrata ad alto contrasto con:
 * - Nome in risalto
 * - Sottotitolo tecnico (frontend, full-stack e sistemi Linux)
 * - Pillole delle competenze chiave (LPIC-1 Candidate, Proxmox)
 * - Due CTA dirette verso progetti e contatti
 */
export const Hero = () => {
  return (
    <Section className="flex flex-col items-center gap-6 space-y-0 text-center">
      <h2 className="text-primary text-5xl font-bold md:text-6xl">
        Smailen Vargas
      </h2>

      <p className="text-2xl font-semibold md:text-3xl">
        Frontend Developer · Full-Stack & Linux Systems
      </p>

      <ul className="flex flex-wrap justify-center gap-3">
        <li className="border-primary/30 bg-base-200 flex items-center gap-2 rounded-md border px-3 py-1 text-sm font-medium">
          <img src={lpiIcon} alt="" className="size-4" />
          LPIC-1 Candidate
        </li>
        <li className="border-primary/30 bg-base-200 flex items-center gap-2 rounded-md border px-3 py-1 text-sm font-medium">
          <img src={proxmoxIcon} alt="" className="size-4" />
          Proxmox
        </li>
      </ul>

      <nav className="flex flex-col gap-4 sm:flex-row">
        <Link to="/projects" className="btn btn-primary btn-lg">
          Esplora Progetti
        </Link>
        <Link to="/contact" className="btn btn-lg">
          Mettiamoci in Contatto
        </Link>
      </nav>
    </Section>
  );
};
