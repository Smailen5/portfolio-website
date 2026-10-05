import { CurriculumDownload } from '@/features/cv/components/CurriculumDownload';
import { NAVIGATION_LINKS } from '@/shared/constants/navigation';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { SideBar } from './SideBar';

/**
 * Componente Navbar - Barra di navigazione principale
 *
 * Navbar fixed in alto, centrata, a isola fluttuante con backdrop blur,
 * bordo luminoso e gradiente sottile.
 *
 * Layout responsive:
 * - Mobile/tablet (< lg): wordmark + bottone hamburger che apre il pannello SideBar
 * - Desktop (>= lg): wordmark + link di navigazione + Curriculum
 *
 * Features:
 * - Position fixed con z-index 50
 * - Isola centrata (max-w-5xl) con z-index 10, sopra l'overlay della SideBar
 * - Link attivo evidenziato con underline animata (viola)
 * - Bottone hamburger che si trasforma in X a menu aperto
 *
 * Gestisce lo stato di apertura/chiusura della SideBar mobile
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-2">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="bg-base-200/90 border-accent/60 from-accent/20 relative z-10 flex w-full max-w-5xl items-center justify-between rounded-2xl border bg-linear-to-b to-transparent px-4 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xs">
        <Link to="/" className="text-xl font-bold tracking-wider">
          Smailen
        </Link>

        <div className="flex items-center gap-4">
          {/* Trigger menu mobile (apre/chiude il pannello) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(open => !open)}
              aria-expanded={isOpen}
              aria-controls="sidebar"
              className="btn btn-square rounded-md"
              aria-label={isOpen ? 'chiudi menu' : 'apri menu'}
            >
              <span className="flex w-6 flex-col items-center gap-1.5">
                <span
                  className={`h-0.5 w-6 rounded-full bg-current transition duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
                ></span>
                <span
                  className={`h-0.5 w-6 rounded-full bg-current transition duration-300 ${isOpen ? 'translate-x-2 opacity-0' : ''}`}
                ></span>
                <span
                  className={`h-0.5 w-6 rounded-full bg-current transition duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
                ></span>
              </span>
            </button>
          </div>

          {/* Link di navigazione (desktop) */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.linkTo}
                    className="after:bg-primary relative inline-block capitalize after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 after:content-['']"
                    activeProps={{
                      className: 'text-primary after:scale-x-100',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CurriculumDownload />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
