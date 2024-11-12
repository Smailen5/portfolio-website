import { Hero } from "../organisms/Hero";
import Presentation from "../molecules/Presentation";
import { SectionSkill } from "../organisms/SectionSkills";
import Socials from "../organisms/Socials";
import { LastProjects } from "../organisms/LastProjects";

export const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <Presentation />
      <SectionSkill />

      <LastProjects />

      <Socials />
    </>
  );
};
