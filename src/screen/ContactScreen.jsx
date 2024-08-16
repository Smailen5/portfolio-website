import Footer from "../Components/Footer";
import FormComponent from "../Components/FormComponent";
import NavbarSample from "../Components/Navbar";

const ContactScreen = () => {
  return (
    <>
      <NavbarSample />
      <div className="flex min-h-screen justify-center bg-neutral-50 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 text-center xl:max-w-[1024px]">
          <div className="space-y-4">
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
