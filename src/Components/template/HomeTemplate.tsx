import { Hero } from "../organisms/Hero";
import Presentation from "../molecules/Presentation";
import { SectionSkill } from "../organisms/SectionSkill";
import Socials from "../organisms/Socials";

export const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <Presentation />
      <SectionSkill />
      <Socials />
    </>
  );
};
