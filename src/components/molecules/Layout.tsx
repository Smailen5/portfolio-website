import { twMerge } from 'tailwind-merge';

interface LayoutProps {
  children: React.ReactNode;
  classLayout?: string;
  classContent?: string;
}

/**
 * Componente Layout - Container principale per sezioni
 *
 * Fornisce layout centrato con larghezza massima responsive
 *
 * Features:
 * - Larghezza max 1024px centrata
 * - Padding top per navbar fixed (pt-20)
 * - Classi personalizzabili per layout e contenuto
 *
 * @param {React.ReactNode} children - Contenuto da wrappare
 * @param {string} [classLayout] - Classi Tailwind custom per container esterno
 * @param {string} [classContent] - Classi Tailwind custom per contenitore interno
 */
export const Layout = ({
  children,
  classLayout,
  classContent,
}: LayoutProps) => {
  return (
    <div
      className={twMerge(
        'bg-base-200 flex h-auto w-full justify-center pt-20',
        classLayout
      )}
    >
      <div className={twMerge('w-full max-w-5xl', classContent)}>
        {children}
      </div>
    </div>
  );
};
