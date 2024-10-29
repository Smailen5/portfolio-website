import { LinkComponent } from "../atoms/LinkComponent";

export const LinkNavbar = ({ linkCurriculum }: { linkCurriculum: string }) => {
  return (
    <>
      <ul className="flex gap-4">
        <LinkComponent linkTo="/">Home</LinkComponent>
        <LinkComponent linkTo="/projects">Progetti</LinkComponent>
        <LinkComponent linkTo="/contact">Contattami</LinkComponent>
        <LinkComponent
          downloadable linkTo={linkCurriculum}
          downloadName="CV-Smailen-Vargas-Frontend.pdf"
        >
          Download CV
        </LinkComponent>
      </ul>
    </>
  );
};
