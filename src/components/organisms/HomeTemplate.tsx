import Presentation from "@features/about/components/Presentation";
import { Hero } from "@features/home/components/Hero";
import { LastProjects } from "@/features/projects/components/Latest";
import { SectionSkill } from "@/features/skills/components/Section";

export const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <Presentation />
      <SectionSkill />
      <LastProjects />
    </>
  );
};
