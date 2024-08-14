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
// import avatarIcon from "../data/images";
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
