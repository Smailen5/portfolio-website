import Footer from "../Components/Footer";
import FormComponent from "../Components/FormComponent";
import NavbarSample from "../Components/Navbar";
import { useGlobalContext } from "../utils/context";
import { useEffect } from "react";

const ContactScreen = () => {
  const { deleteScrollPosition, scrollPosition } = useGlobalContext();

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavbarSample />
      <div className="flex min-h-screen justify-center bg-neutral-50 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center md:max-w-[1024px] lg:flex-row lg:items-center lg:gap-10">
          <div className="space-y-4 lg:w-1/2 lg:text-left">
            <h3 className="text-2xl font-semibold">Contattami</h3>
            <p>
              Se hai domande, richieste di collaborazione, o semplicemente vuoi
              parlare di React, non esitare a usare il modulo qui sotto per
              metterti in contatto con me. Sarò felice di risponderti il prima
              possibile!
            </p>
          </div>
          <FormComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactScreen;
