import { LinkComponent } from "../atoms/LinkComponent";
import { ModeToggle } from "./ModeToggle";

export const LinkNavbar = ({
  linkCurriculumIT,
  linkCurriculumEN,
}: {
  linkCurriculumIT: string;
  linkCurriculumEN: string;
}) => {
  return (
    <>
      <ul className="flex items-center gap-4">
        <LinkComponent linkTo="/">Home</LinkComponent>
        <LinkComponent linkTo="/projects">Progetti</LinkComponent>
        <LinkComponent linkTo="/contact">Contattami</LinkComponent>
        <LinkComponent
          downloadable
          linkTo={linkCurriculumIT}
          downloadName="CV-Smailen-Vargas-Frontend-IT.pdf"
        >
          Download CV ITA
        </LinkComponent>
        <LinkComponent
          downloadable
          linkTo={linkCurriculumEN}
          downloadName="CV-Smailen-Vargas-Frontend-EN.pdf"
        >
          Download CV ENG
        </LinkComponent>
      </ul>
      <ModeToggle />
    </>
  );
};
