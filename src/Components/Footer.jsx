/* eslint-disable no-unused-vars */
// import skillsData from "../data/skillsData";
import tailwindIcon from "../assets/icons/icons8-tailwind-css.svg";
import reactIcon from "../assets/icons/icons8-react.svg";
import { SiNextui } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full bg-red-30 p-4 text-center bg-white">
      <div className="flex justify-center gap-4">
        <img src={tailwindIcon} alt="icona tailwind css" className="size-6" />
        <img src={reactIcon} alt="icona react" className="size-6" />
        <SiNextui alt="icona nextui" className="size-6" />
      </div>
      <p>© 2024 Smailen Vargas. Tutti i diritti riservati.</p>
    </div>
  );
};

export default Footer;
