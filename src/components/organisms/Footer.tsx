import reactIcon from "@/assets/icons/icons8-react.svg";
import tailwindIcon from "@/assets/icons/icons8-tailwind-css.svg";
import SocialIcons from "@/components/molecules/Social/SocialIcon";
import { Layout } from "../molecules/Layout";

const Footer = () => {
  return (
    <Layout>
      <footer className="bg-background flex w-full flex-row items-center justify-center text-center">
        <div className="flex w-full flex-col gap-4 px-6 py-4 md:flex-row md:justify-between">
          <div className="flex justify-center gap-4 md:order-2">
            <p className="hidden md:block">Powered by</p>
            <img
              src={tailwindIcon}
              alt="icona tailwind css"
              className="size-6"
            />
            <img src={reactIcon} alt="icona react" className="size-6" />
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p>
              © 2024-{new Date().getFullYear()} Smailen Vargas. Tutti i diritti
              riservati.{" "}
              <span>
                Icons by{" "}
                <a
                  href={"https://icons8.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent link font-bold"
                >
                  Icons8
                </a>
              </span>
            </p>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Footer;
