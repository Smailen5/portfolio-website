import {
  Navbar,
  NavbarBrand,
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import avatarIcon from "../data/images";

const NavbarSample = () => {
  return (
    <Navbar className="fixed left-0 top-0">
      <NavbarBrand>
        <Avatar
          isBordered
          color="primary"
          src={avatarIcon.avatarIcon}
          name="SV"
          alt="avatar icon"
        />
      </NavbarBrand>
      <Dropdown>
        <DropdownTrigger>
          <Button color="" variant="light">
            Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown Variants">
          <DropdownItem key="home">
            <Link to="/">Home</Link>
          </DropdownItem>
          <DropdownItem key="project">
            <Link to="/projects">Progetti</Link>
          </DropdownItem>
          <DropdownItem key="contact">
            <Link to="/contact">Contattami</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default NavbarSample;
