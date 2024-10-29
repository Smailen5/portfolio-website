import { SiNextui } from "react-icons/si";
import reactIcon from "../../assets/icons/icons8-react.svg";
import tailwindIcon from "../../assets/icons/icons8-tailwind-css.svg";
import { LinkBlank } from "../atoms/LinkBlank";

const Footer = () => {
  return (
    <footer className="bg-red-30 w-full bg-white p-4 px-6 text-center xl:flex xl:justify-center">
      <div className="flex max-w-[1024px] flex-col gap-2 md:flex-row md:items-center md:justify-between xl:min-w-[1024px]">
        <div className="flex justify-center gap-4 md:order-2">
          <p className="hidden md:block">Powered by</p>
          <img src={tailwindIcon} alt="icona tailwind css" className="size-6" />
          <img src={reactIcon} alt="icona react" className="size-6" />
          <SiNextui className="size-6" />
        </div>
        <p>
          © 2024 Smailen Vargas. Tutti i diritti riservati.{" "}
          <span>
            Icons by{" "}
            <LinkBlank href="https://icons8.com" isText>
              Icons8
            </LinkBlank>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
