import { CurriculumDownload } from '@/features/cv/components/CurriculumDownload';
import { NAVIGATION_LINKS } from '@/shared/constants/navigation';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { SideBar } from './SideBar';

/**
 * Componente Navbar - Barra di navigazione principale
 *
 * Navbar fixed in alto alla pagina con backdrop blur e ombra leggera.
 * Rimane visibile durante lo scroll per facilitare la navigazione.
 *
 * Layout responsive:
 * - Mobile: Avatar + Bottone Menu (apre SideBar)
 * - Desktop: Avatar + Link navigazione + Download CV
 *
 * Features:
 * - Position fixed con z-index 50
 * - Backdrop blur e sfondo semitrasparente (bg-base-200/60)
 * - Larghezza massima 1024px centrata
 * - Ombra leggera (shadow-sm)
 *
 * Gestisce lo stato di apertura/chiusura della SideBar mobile
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-2">
      <div className="bg-base-200/90 border-accent/60 from-accent/20 flex w-full max-w-5xl items-center justify-between rounded-2xl border bg-linear-to-b to-transparent px-4 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xs">
        <Link to="/" className="text-xl font-bold tracking-wider">
          Smailen
        </Link>

        <div className="flex items-center gap-4">
          {/* Menu Mobile: Bottone menu + SideBar */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-controls="sidebar"
              className="btn"
              aria-label="Apri menu"
            >
              Menu
            </button>

            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.linkTo} className="capitalize">
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
