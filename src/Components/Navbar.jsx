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
import useChangeAvatar from "../utils/useChangeAvatar";

const NavbarSample = () => {
  const { currentAvatar, animation } = useChangeAvatar();
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
    </Navbar>
  );
};

export default NavbarSample;
