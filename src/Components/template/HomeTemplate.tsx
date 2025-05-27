import Presentation from "@components/molecules/Presentation";
import { Hero } from "@components/organisms/Hero";
import { LastProjects } from "@features/projects/components/LastProjects";
import { SectionSkill } from "@components/organisms/SectionSkills";
import Socials from "@components/organisms/Socials";

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
