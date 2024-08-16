import NavbarSample from "../Components/Navbar";
import Lottie from "lottie-react";
import animationData from "../assets/animation/animation-404.json";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const ErrorScreen = () => {
  // non dimenticarti del titolo del sito e della favicon
  // bisogna aggiungere anche il componente footer
  // IMPORTANTE: ricorda di aggiungere il link di ringraziamento per icons8 ======================
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-neutral-50 py-16 xl:flex xl:justify-center">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 xl:max-w-[1024px]">
          <div className="space-y-4 rounded-md bg-white p-4 text-center shadow-md">
            <div className="text-3xl font-semibold">
              <p>Errore:</p>
              <Lottie
                autoplay={true}
                loop={true}
                animationData={animationData}
                className="mx-auto size-80"
              />
              <p>Pagina non trovata</p>
            </div>
            <Button color="primary" size="lg">
              <Link to="/">Torna alla home</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorScreen;
