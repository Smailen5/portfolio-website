import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
// import curriculum from "../../assets/curriculum/Curriculum-Smailen-Vargas.pdf";

export const DropdownNavbar = ({
  linkCurriculum,
}: {
  linkCurriculum: string;
}) => {
  return (
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
            href={linkCurriculum}
            download={"CV-Smailen-Vargas-Frontend.pdf"}
            className="block w-full"
          >
            Download CV
          </a>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
