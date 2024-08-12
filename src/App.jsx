import Hero from "./Components/Hero";
import NavbarSample from "./Components/Navbar";
import FormComponent from "./Components/FormComponent";
import Presentation from "./Components/Presentation";
import Skills from "./Components/Skills";
import Socials from "./Components/Socials";

const App = () => {
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-blue-300 pt-16">
        {/* presentazione */}
        <div className="flex flex-col justify-around gap-20">
          <Hero />
          <Presentation />

          {/* sezione competenze */}
          <Skills />

          {/* sezione social */}
          <Socials />

          <FormComponent />
        </div>
      </div>
    </>
  );
};

export default App;
