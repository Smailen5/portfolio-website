import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export const DropdownNavbar = ({
  linkCurriculumIT,
  linkCurriculumEN,
}: {
  linkCurriculumIT: string;
  linkCurriculumEN: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
          <DropdownItem key="download-cv" textValue="Curriculum">
            <button onClick={onOpen} className="block w-full text-left">
              Curriculum
            </button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Modal isOpen={isOpen} onClose={onClose} className="pb-4">
        <ModalContent>
          <ModalHeader>Scarica il Curriculum</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-4">
              <a
                href={linkCurriculumIT}
                download="CV-Smailen-Vargas-Frontend-IT.pdf"
                className="hover:bg-primary-dark block w-full rounded-lg bg-primary p-2 text-center text-white"
              >
                Curriculum in Italiano
              </a>
              <a
                href={linkCurriculumEN}
                download="CV-Smailen-Vargas-Frontend-EN.pdf"
                className="hover:bg-primary-dark block w-full rounded-lg bg-primary p-2 text-center text-white"
              >
                Curriculum in Inglese
              </a>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
