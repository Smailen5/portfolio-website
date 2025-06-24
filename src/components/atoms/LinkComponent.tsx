import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkComponentProps {
  children: ReactNode;
  linkTo: string;
  downloadable?: boolean;
  downloadName?: string;
}

export const LinkComponent = ({
  children,
  linkTo,
  downloadable,
  downloadName,
}: LinkComponentProps) => {
  
  const linkStyle = "capitalize hover:text-primary p-2"

  if (downloadable)
    return (
      <li>
        <a href={linkTo} download={downloadName} className={linkStyle}>
          {children}
        </a>
      </li>
    );

  return (
    <li>
      <Link to={linkTo} className={linkStyle}>
        {children}
      </Link>
    </li>
  );
};
