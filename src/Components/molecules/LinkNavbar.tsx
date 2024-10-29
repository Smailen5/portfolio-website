import { Link } from "react-router-dom";

export const LinkNavbar = ({ linkCurriculum }: { linkCurriculum: string }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/projects">Progetti</Link>
      <Link to="/contact">Contattami</Link>
      <a href={linkCurriculum} download={"CV-Smailen-Vargas-Frontend.pdf"}>
        Download CV
      </a>
    </>
  );
};
