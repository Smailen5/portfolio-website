import { Link } from "react-router-dom";

export const LinkNavbar = ({ linkCurriculum }: { linkCurriculum: string }) => {

  const linkStyle = "hover:text-primary"
  return (
    <>
      <Link to="/" className={linkStyle}>Home</Link>
      <Link to="/projects" className={linkStyle}>Progetti</Link>
      <Link to="/contact" className={linkStyle}>Contattami</Link>
      <a href={linkCurriculum} download={"CV-Smailen-Vargas-Frontend.pdf"} className={linkStyle}>
        Download CV
      </a>
    </>
  );
};
