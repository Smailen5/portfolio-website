import { Hero } from "@/components/molecules/Hero";
import Presentation from "@/components/molecules/Presentation";
import { SectionSkill } from "@/components/organisms/SectionSkill/Section";
import { LastProjects } from '@/features/projects/components/Latest';
import useScroll from "@/shared/hooks/useScroll";
import { Layout } from "@components/molecules/Layout";

const HomePage = () => {
  useScroll();

  return (
    <Layout>
      <Hero />
      <Presentation />
      <SectionSkill />
      <LastProjects />
    </Layout>
  );
};

export default HomePage;
