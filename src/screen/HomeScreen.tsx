import Footer from "../Components/organisms/Footer";
import Hero from "../Components/organisms/Hero";
import NavbarSample from "../Components/organisms/Navbar";
import Presentation from "../Components/organisms/Presentation";
import Skills from "../Components/molecules/Skills";
import Socials from "../Components/organisms/Socials";
import useScroll from "../utils/useScroll";

const HomeScreen = () => {
  useScroll();
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-neutral-50 py-16 xl:flex xl:justify-center">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 xl:max-w-[1024px]">
          <Hero />
          <Presentation />
          <Skills />
          <Socials />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
