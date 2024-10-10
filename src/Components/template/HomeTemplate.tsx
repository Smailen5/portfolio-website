import Skills from "../molecules/Skills";
import Hero from "../organisms/Hero";
import Presentation from "../organisms/Presentation";
import Socials from "../organisms/Socials";

export const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <Presentation />
      <Skills />
      <Socials />
    </>
  );
};
