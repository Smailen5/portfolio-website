import reactIcon from "@/assets/icons/icons8-react.svg";
import tailwindIcon from "@/assets/icons/icons8-tailwind-css.svg";
import SocialIcons from "@/components/molecules/Social/SocialIcon";
import { Link } from '@tanstack/react-router';

const Footer = () => {
  return (
    <footer className="bg-background flex w-full flex-row items-center justify-center text-center">
      <div className="flex w-full max-w-[1024px] flex-col gap-4 px-6 py-4 md:flex-row md:justify-between">
        <div className="flex justify-center gap-4 md:order-2">
          <p className="hidden md:block">Powered by</p>
          <img src={tailwindIcon} alt="icona tailwind css" className="size-6" />
          <img src={reactIcon} alt="icona react" className="size-6" />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <p>
            © 2024-{new Date().getFullYear()} Smailen Vargas. Tutti i diritti
            riservati.{" "}
            <span>
              Icons by{" "}
              <Link
                to={"https://icons8.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-bold link"
              >
                Icons8
              </Link>
            </span>
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
