import Presentation from "../molecules/Presentation";
import { Hero } from "../organisms/Hero";
import { LastProjects } from "../organisms/LastProjects";
import { SectionSkill } from "../organisms/SectionSkills";
import Socials from "../organisms/Socials";

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
