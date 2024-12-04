import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import curriculumEN from "../../assets/curriculum/CV-Smailen-Vargas-Frontend-EN.pdf";
import curriculumIT from "../../assets/curriculum/CV-Smailen-Vargas-Frontend-IT.pdf";
import { useGlobalContext } from "../../utils/context";
import { Avatar } from "../atoms/Avatar";
import { DropdownNavbar } from "../molecules/DropdownNavbar";
import { LinkNavbar } from "../molecules/LinkNavbar";
import { ModeToggle } from "../molecules/ModeToggle";

const NavbarSample = () => {
  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;

  return (
    <Navbar className="fixed left-0 top-0 z-40 bg-background/70 pt-2 backdrop-blur-md dark:border-none dark:bg-background/70">
      <NavbarBrand>
        <Avatar name="Smailen Vargas" />
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="end">
        {!isDesktop ? (
          <div className="flex items-center gap-4">
            <ModeToggle />
            <DropdownNavbar
              linkCurriculumIT={curriculumIT}
              linkCurriculumEN={curriculumEN}
            />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <LinkNavbar
              linkCurriculumIT={curriculumIT}
              linkCurriculumEN={curriculumEN}
            />
          </div>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarSample;
