import { Navbar, NavbarBrand } from "@nextui-org/react";
import curriculum from "../../assets/curriculum/Curriculum-Smailen-Vargas.pdf";
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
        <DropdownNavbar linkCurriculum={curriculum} />
        </>
      ) : (
        <>
        <LinkNavbar linkCurriculum={curriculum} />
        {/* <ModeToggle /> */}
        </>
      )}
    </Navbar>
  );
};

export default NavbarSample;
