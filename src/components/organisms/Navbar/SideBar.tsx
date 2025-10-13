import { CloseIcon } from "@/assets/icons";
import { CurriculumDownload } from "@/features/cv/components/CurriculumDownload";
import { NAVIGATION_LINKS } from "@/shared/constants/navigation";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from 'react';

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SideBar = ({
  isOpen,
  setIsOpen,
}: SideBarProps) => {
  const [mounted, setMounted] = useState(false)
  const closeSideBar = () => setIsOpen(false);

  // Mantiene la sidebar chiusa al primo rendering
  useEffect(() => {setMounted(true)},[])

  return (
    <>
      {/* Overlay scuro che copre la pagina quando SideBar è aperto */}
      <div
        className={`bg-base-300 fixed inset-0 z-10 h-screen transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-80" : "pointer-events-none opacity-0"} `}
        onClick={closeSideBar}
      />

      {/* Contenitore principale della SideBar */}
      <div
        className={`bg-base-200 fixed inset-y-0 top-0 right-0 z-20 h-screen w-[70%] transform shadow-lg ${mounted ? "transition-transform duration-300 ease-in-out" : ""}lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-end pr-2 pb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-error btn-circle"
            >
              <img src={CloseIcon} alt="close" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.params}
                to={link.linkTo}
                params={link.params}
                className="capitalize"
                onClick={closeSideBar}
              >
                {link.params}
              </Link>
            ))}
            <CurriculumDownload closeSideBar={closeSideBar} />
          </nav>
        </div>
      </div>
    </>
  );
};
