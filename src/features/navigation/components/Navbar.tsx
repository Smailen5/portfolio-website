import curriculumEN from "@/assets/curriculum/CV-Smailen-Vargas-Frontend-EN.pdf";
import curriculumIT from "@/assets/curriculum/CV-Smailen-Vargas-Frontend-IT.pdf";
import { useGlobalContext } from "@/shared/utils/context";
import { Avatar } from "@components/atoms/Avatar";
import { LinkNavbar } from "@features/navigation/components/LinkNavbar";
import { SidebarMenu } from "@features/navigation/components/SidebarMenu";
import { useState } from "react";

const NavbarSample = () => {
  // Stato per controllare l'apertura/chiusura della sidebar mobile
  const [isOpen, setIsOpen] = useState(false);

  // Hook personalizzato per la larghezza della finestra
  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024; // Breakpoint per desktop

  return (
    <nav className="fixed left-0 top-0 z-10 w-full bg-background/70 py-4 backdrop-blur-md dark:border-none dark:bg-background/70">
      {/* Container principale con larghezza massima */}
      <div className="mx-auto flex max-w-[1024px] items-center justify-between px-4">
        {/* Logo/Avatar */}
        <div className="flex items-center">
          <Avatar name="Smailen Vargas" />
        </div>

        {/* Menu di navigazione */}
        <div className="flex items-center gap-4">
          {!isDesktop ? (
            <>
              {/* Pulsante menu mobile */}
              <div className="block rounded-lg p-2 text-foreground hover:bg-primary/20 lg:hidden">
                <button onClick={() => setIsOpen(true)}>Menu</button>
              </div>

              {/* Sidebar mobile */}
              <SidebarMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                linkCurriculumIT={curriculumIT}
                linkCurriculumEN={curriculumEN}
              />
            </>
          ) : (
            // Menu desktop
            <LinkNavbar
              linkCurriculumIT={curriculumIT}
              linkCurriculumEN={curriculumEN}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarSample;
