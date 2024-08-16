import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import useChangeAvatar from "../utils/useChangeAvatar";

const NavbarSample = () => {
  const { currentAvatar, animation } = useChangeAvatar();

  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;

  console.log(isDesktop);

  return (
    <Navbar className="fixed left-0 top-0">
      <NavbarBrand>
        <Avatar
          isBordered
          color="primary"
          src={currentAvatar}
          name="SV"
          alt="avatar icon"
          className={`${animation} `}
        />
      </NavbarBrand>
      {!isDesktop ? (
        <Dropdown>
          <DropdownTrigger>
            <Button color="" variant="light">
              Menu
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dropdown Variants">
            <DropdownItem key="home" textValue="Home">
              <Link to="/">Home</Link>
            </DropdownItem>
            <DropdownItem key="project" textValue="Progetti">
              <Link to="/projects">Progetti</Link>
            </DropdownItem>
            <DropdownItem key="contact" textValue="Contattami">
              <Link to="/contact">Contattami</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/projects">Progetti</Link>
          <Link to="/contact">Contattami</Link>
        </>
      )}
    </Navbar>
  );
};

export default NavbarSample;
