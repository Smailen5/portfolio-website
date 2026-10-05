import { CurriculumDownload } from '@/features/cv/components/CurriculumDownload';
import { NAVIGATION_LINKS } from '@/shared/constants/navigation';
import { Link } from '@tanstack/react-router';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

/**
 * Componente SideBar - Menu laterale mobile
 *
 * Pannello slide-in da destra per la navigazione mobile
 * con overlay di sfondo semi-trasparente
 *
 * Features:
 * - Animazione slide-in/out da destra
 * - Overlay cliccabile per chiudere
 * - Link navigazione + Download CV
 * - Auto-chiusura dopo click su link
 * - Previene animazione al primo render (mounted state)
 *
 * @param {boolean} isOpen - Stato apertura/chiusura sidebar
 * @param {Function} setIsOpen - Funzione per cambiare stato sidebar
 */
export const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
  const closeSideBar = () => setIsOpen(false);

  return (
    <>
      {/* Overlay scuro che copre la pagina quando SideBar è aperto */}
      <div
        className={`bg-base-300 fixed inset-0 z-0 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-80' : 'pointer-events-none opacity-0'} `}
        onClick={closeSideBar}
        aria-hidden="true"
      />

      {/* Contenitore principale della SideBar */}
      <div
        role="dialog"
        id="sidebar"
        aria-hidden={!isOpen}
        className={`bg-base-200 border-accent/60 absolute inset-x-4 top-full z-20 mx-auto max-w-5xl rounded-2xl border p-8 shadow-lg transition duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4">
          {NAVIGATION_LINKS.map(link => (
            <Link
              key={link.label}
              to={link.linkTo}
              className="capitalize"
              onClick={closeSideBar}
            >
              {link.label}
            </Link>
          ))}
          <CurriculumDownload closeSideBar={closeSideBar} />
        </nav>
      </div>
    </>
  );
};
