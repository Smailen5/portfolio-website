import { useState } from "react";
import curriculumEN from "../../assets/curriculum/CV-Smailen-Vargas-Frontend-EN.pdf";
import curriculumIT from "../../assets/curriculum/CV-Smailen-Vargas-Frontend-IT.pdf";
import { useGlobalContext } from "../../utils/context";
import { Avatar } from "../atoms/Avatar";
import { LinkNavbar } from "../molecules/LinkNavbar";
import { SidebarMenu } from "../molecules/SidebarMenu";

const NavbarSample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;

  return (
    <nav className="fixed left-0 top-0 z-10 w-full bg-background/70 py-4 backdrop-blur-md dark:border-none dark:bg-background/70">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Avatar name="Smailen Vargas" />
        </div>
        <div className="flex items-center gap-4">
          {!isDesktop ? (
            <>
              <div className="block rounded-lg p-2 text-foreground hover:bg-primary/20 md:hidden">
                <button onClick={() => setIsOpen(true)}>Menu</button>
              </div>

              <SidebarMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                linkCurriculumIT={curriculumIT}
                linkCurriculumEN={curriculumEN}
              />
            </>
          ) : (
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
