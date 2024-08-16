import NavbarSample from "../Components/Navbar";
import Lottie from "lottie-react";
import animationData from "../assets/animation/animation-404.json";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const ErrorScreen = () => {
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-neutral-50 pt-16 md:flex md:justify-center">
        <div className="mt-20 px-6">
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
      <Footer />
    </>
  );
};

export default ErrorScreen;
