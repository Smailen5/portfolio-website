import { Avatar } from '@/components/atoms/Avatar';
import { ToggleTheme } from '@/components/molecules/ToggleTheme';
import { CurriculumDownload } from '@/features/cv/components/CurriculumDownload';
import { NAVIGATION_LINKS } from '@/shared/constants/navigation';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { SideBar } from './SideBar';

/**
 * Componente Navbar - Barra di navigazione principale
 *
 * Layout responsive:
 * - Mobile: Avatar + ToggleTheme + Bottone Menu (apre SideBar)
 * - Desktop: Avatar + ToggleTheme + Link navigazione + Download CV
 *
 * Gestisce lo stato di apertura/chiusura della SideBar mobile
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="bg-base-200/60 fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-2 shadow-sm backdrop-blur-sm">
        <div className="flex w-full max-w-[1024px] justify-between">
          <Avatar name="Smailen Vargas" />

          <div className="flex items-center gap-4">
            <ToggleTheme />

            {/* Menu Mobile: Bottone menu + SideBar */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(true)} className="btn">
                Menu
              </button>

              <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Menu Desktop */}
            <div className="hidden lg:block">
              <nav className="flex items-center gap-4">
                {NAVIGATION_LINKS.map(link => (
                  <Link
                    key={link.params}
                    to={link.linkTo}
                    params={link.params}
                    className="capitalize"
                  >
                    {link.params}
                  </Link>
                ))}
                <CurriculumDownload />
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
