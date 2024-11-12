import { Navbar, NavbarBrand } from "@nextui-org/react";
import curriculum from "../../assets/curriculum/Curriculum-Smailen-Vargas.pdf";
import { useGlobalContext } from "../../utils/context";
// import useChangeAvatar from "../../utils/useChangeAvatar";
import { DropdownNavbar } from "../molecules/DropdownNavbar";
import { LinkNavbar } from "../molecules/LinkNavbar";
import { Avatar } from "../atoms/Avatar";

const NavbarSample = () => {
  // const { currentAvatar, animation } = useChangeAvatar();

  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;

  return (
    <Navbar className="fixed left-0 top-0">
      <NavbarBrand>
        {/* <Avatar
          isBordered
          color="primary"
          src={currentAvatar}
          name="SV"
          alt="avatar icon"
          className={`${animation} `}
        /> */}
        <Avatar name="Smailen Vargas"/>
      </NavbarBrand>
      {!isDesktop ? (
        <DropdownNavbar linkCurriculum={curriculum} />
      ) : (
        <LinkNavbar linkCurriculum={curriculum} />
      )}
    </Navbar>
  );
};

export default NavbarSample;
