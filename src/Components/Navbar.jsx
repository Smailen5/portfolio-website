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
          <DropdownItem key="new">Home</DropdownItem>
          <DropdownItem key="copy">Progetti</DropdownItem>
          <DropdownItem key="edit">Contattami</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default NavbarSample;
