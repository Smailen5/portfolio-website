import { LinkComponent } from "../atoms/LinkComponent";
import { ModeToggle } from "./ModeToggle";

export const LinkNavbar = ({ linkCurriculum }: { linkCurriculum: string }) => {
  return (
    <>
      <ul className="flex items-center gap-4">
        <LinkComponent linkTo="/">Home</LinkComponent>
        <LinkComponent linkTo="/projects">Progetti</LinkComponent>
        <LinkComponent linkTo="/contact">Contattami</LinkComponent>
        <LinkComponent
          downloadable
          linkTo={linkCurriculum}
          downloadName="CV-Smailen-Vargas-Frontend.pdf"
        >
          Download CV
        </LinkComponent>
        <ModeToggle />
      </ul>
    </>
  );
};
