import { Button } from "@nextui-org/react";
import Hero from "./Components/Hero";
import NavbarSample from "./Components/Navbar";
import FormComponent from "./Components/FormComponent";
import Presentation from "./Components/Presentation";

const App = () => {
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-blue-300 pt-16">
        <Hero />

        {/* presentazione */}
        <div className="flex flex-col justify-around gap-20">
          <Presentation />

          {/* sezione competenze */}
          <section className="h-scree mx-auto flex w-3/4 flex-col gap-8">
            <h3 className="text-center text-2xl font-semibold">
              Skill tecniche
            </h3>
            <div className="justify-cente flex h-full w-full flex-col justify-start gap-8 px-8 md:grid md:grid-cols-3">
              <div className="flex items-center justify-center bg-green-300 p-4">
                JavaScript
              </div>
              <div className="flex items-center justify-center bg-green-300 p-4">
                tailwind
              </div>
              <div className="flex items-center justify-center bg-green-300 p-4">
                React
              </div>
              <div className="flex items-center justify-center bg-green-300 p-4">
                Git
              </div>
              <div className="flex items-center justify-center bg-green-300 p-4">
                NextUI
              </div>
              <div className="flex items-center justify-center bg-green-300 p-4">
                NextUI
              </div>
              <div className="col-span-3 col-start-1">
                <p className="text-center">Guarda i miei lavori</p>
                <Button className="w-full">Portfolio</Button>
              </div>
            </div>
          </section>

          {/* sezione social */}
          <section className="h-scree mx-auto flex w-3/4 flex-col gap-8">
            <h3 className="text-center text-2xl font-semibold">Social</h3>
            <div className="justify-cente flex h-full w-full flex-col justify-start gap-8 px-8 md:grid md:grid-cols-3">
              <div className="flex items-center justify-center bg-green-300 p-4">
                Linkedin
              </div>
              <div className="flex items-center justify-center bg-green-300 p-4">
                Github
              </div>
              <div className="flex items-center justify-center bg-green-300 p-4">
                Frontend Mentor
              </div>
            </div>
          </section>

          <FormComponent />
        </div>
      </div>
    </>
  );
};

export default App;
