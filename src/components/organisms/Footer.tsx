import reactIcon from '@/assets/icons/tech/react.svg';
import tailwindIcon from '@/assets/icons/tech/tailwindcss.svg';
import { SocialIcons, Layout } from '@/components/molecules';

/**
 * Componente Footer - Piè di pagina del sito
 *
 * Contiene:
 * - Copyright e anno dinamico
 * - Disclaimer sui marchi e credito per le icone tech (Simple Icons)
 * - Link social (GitHub, LinkedIn, Frontend Mentor)
 * - Badge "Powered by" React + Tailwind CSS
 *
 * Layout responsive: colonna su mobile, row su desktop
 */
export const Footer = () => {
  return (
    <Layout classLayout="flex-none pt-0">
      <footer className="flex w-full flex-row items-center justify-center text-center">
        <div className="flex w-full flex-col gap-4 p-4 md:flex-row md:justify-between lg:px-0">
          <div className="flex justify-center gap-4 md:order-2">
            <p className="hidden md:block">Powered by</p>
            <img
              src={tailwindIcon}
              alt="icona tailwind css"
              className="size-6"
            />
            <img src={reactIcon} alt="icona react" className="size-6" />
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p>
              © 2024-{new Date().getFullYear()} Smailen Vargas. Tutti i diritti
              riservati.
            </p>
            <p>
              Tutti i nomi, i loghi e i marchi citati sono di proprietà dei
              rispettivi titolari e sono usati a solo scopo identificativo.
            </p>
            <p>
              Tech icons by{' '}
              <a
                href={'https://simpleicons.org'}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-primary font-bold"
              >
                Simple Icons
              </a>{' '}
              (CC0 1.0).
            </p>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </Layout>
  );
};
