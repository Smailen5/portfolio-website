import { Layout } from "@/components/molecules/Layout";
import { HeaderProject } from '@/features/projects/components/Header';
import { SectionProjects } from '@/features/projects/components/Section';
import { Helmet } from "react-helmet";

const ProjectPage = () => {
  return (
    <>
      <Helmet>
        <title>Progetti di Smailen Vargas | Frontend Developer</title>
        <meta
          name="description"
          content="Esplora i progetti realizzati da Smailen Vargas come frontend developer"
        />
        <meta
          name="keywords"
          content="Smailen Vargas, Progetti, Frontend Developer"
        />
      </Helmet>
      <Layout>
        <HeaderProject />
        <SectionProjects />
      </Layout>
    </>
  );
};

export default ProjectPage;
