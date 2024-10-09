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
import curriculum from "../../assets/curriculum/Curriculum-Smailen-Vargas.pdf";
import { useGlobalContext } from "../../utils/context";
import useChangeAvatar from "../../utils/useChangeAvatar";

const NavbarSample = () => {
  const { currentAvatar, animation } = useChangeAvatar();

  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 1024;

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
            <Button variant="light">Menu</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dropdown Variants">
            <DropdownItem key="home" textValue="Home">
              <Link to="/" className="block w-full">
                Home
              </Link>
            </DropdownItem>
            <DropdownItem key="project" textValue="Progetti">
              <Link to="/projects" className="block w-full">
                Progetti
              </Link>
            </DropdownItem>
            <DropdownItem key="contact" textValue="Contattami">
              <Link to="/contact" className="block w-full">
                Contattami
              </Link>
            </DropdownItem>
            <DropdownItem key="download-cv" textValue="Contattami">
              <a
                href={curriculum}
                download={"CV-Smailen-Vargas-Frontend.pdf"}
                className="block w-full"
              >
                Download CV
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/projects">Progetti</Link>
          <Link to="/contact">Contattami</Link>
          <a href={curriculum} download={"CV-Smailen-Vargas-Frontend.pdf"}>
            Download CV
          </a>
        </>
      )}
    </Navbar>
  );
};

export default NavbarSample;
