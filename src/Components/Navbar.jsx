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

const NavbarSample = () => {
  return (
    <Navbar className="fixed top-0 left-0">
      <NavbarBrand>
        <Avatar src="" name="SV" />
      </NavbarBrand>
      <Dropdown>
        <DropdownTrigger>
          <Button color="" variant="light">
            Menu
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown Variants">
          <DropdownItem key="new"><Link to="/">Home</Link></DropdownItem>
          <DropdownItem key="copy"><Link to="/projects">Progetti</Link></DropdownItem>
          <DropdownItem key="edit"><Link to="/contact">Contattami</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default NavbarSample;
