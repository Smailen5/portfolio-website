import animationData from "@/assets/animation/animation-404.json";
import { Button } from "@/components/atoms/Button";
import Footer from "@/components/organisms/Footer";
import NavbarSample from "@features/navigation/components/Navbar";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-background pt-16 text-foreground md:flex md:justify-center">
        <div className="mt-20 px-6">
          <div className="space-y-4 rounded-md bg-background p-4 text-center shadow-md">
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

export default ErrorPage;
