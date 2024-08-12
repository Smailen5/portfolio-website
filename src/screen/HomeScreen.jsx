import Hero from "../Components/Hero";
import NavbarSample from "../Components/Navbar";
import Presentation from "../Components/Presentation";
import Skills from "../Components/Skills";
import Socials from "../Components/Socials";

const HomeScreen = () => {
  return (
    <>
      <NavbarSample />
      <div className="xl:flex min-h-screen xl:justify-center bg-blue-300 py-16">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 xl:max-w-[1024px]">
          <Hero />
          <Presentation />
          <Skills />
          <Socials />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
