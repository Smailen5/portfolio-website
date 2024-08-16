import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NavbarSample from "../Components/Navbar";
import Presentation from "../Components/Presentation";
import Skills from "../Components/Skills";
import Socials from "../Components/Socials";
import { useGlobalContext } from "../utils/context";
import { useEffect } from "react";

const HomeScreen = () => {
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
