import { Layout } from "@/Components/organisms/Layout";
import { ProjectTemplate } from "@/Components/template/ProjectTemplate";
import { Helmet } from "react-helmet";

const ProjectPage = () => {
  return (
    <>
    <Helmet>
      <title>Progetti di Smailen Vargas | Frontend Developer</title>
      <meta name="description" content="Esplora i progetti realizzati da Smailen Vargas come frontend developer" />
      <meta name="keywords" content="Smailen Vargas, Progetti, Frontend Developer" />
    </Helmet>
      <Layout>
        <ProjectTemplate />
      </Layout>
    </>
  );
};

export default ProjectPage;
