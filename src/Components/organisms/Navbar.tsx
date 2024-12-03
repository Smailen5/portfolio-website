import { Navbar, NavbarBrand } from "@nextui-org/react";
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
    <Navbar className="fixed left-0 top-0">
      <NavbarBrand>
        <Avatar name="Smailen Vargas" />
      </NavbarBrand>
      {!isDesktop ? (
        <>
          <ModeToggle />
          <DropdownNavbar
            linkCurriculumIT={curriculumIT}
            linkCurriculumEN={curriculumEN}
          />
        </>
      ) : (
        <>
          <LinkNavbar
            linkCurriculumIT={curriculumIT}
            linkCurriculumEN={curriculumEN}
          />
          {/* <ModeToggle /> */}
        </>
      )}
    </Navbar>
  );
};

export default NavbarSample;
