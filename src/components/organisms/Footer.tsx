import reactIcon from "@/assets/icons/icons8-react.svg";
import tailwindIcon from "@/assets/icons/icons8-tailwind-css.svg";
import SocialIcons from "@/components/molecules/Social/SocialIcon";
import { LinkBlank } from "@components/atoms/LinkBlank";

const Footer = () => {
  return (
    <footer className="flex w-full flex-row items-center justify-center bg-background text-center">
      <div className="flex w-full max-w-[1024px] flex-col gap-4 px-6 py-4 md:flex-row md:justify-between">
        <div className="flex justify-center gap-4 md:order-2">
          <p className="hidden md:block">Powered by</p>
          <img src={tailwindIcon} alt="icona tailwind css" className="size-6" />
          <img src={reactIcon} alt="icona react" className="size-6" />
        </div>
        <div className="space-y-4 flex flex-col items-start">
          <p>
            © 2024-{new Date().getFullYear()} Smailen Vargas. Tutti i diritti riservati.{" "}
            <span>
              Icons by{" "}
              <LinkBlank href="https://icons8.com" isText>
                Icons8
              </LinkBlank>
            </span>
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
