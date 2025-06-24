import { ErrorMessage } from "@components/atoms/ErrorMessage";
import { Loading } from "@components/atoms/Loading";
import { MarkdownRenderer } from "@components/atoms/MarkdownRenderer";
import { Layout } from "@components/molecules/Layout";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useGetProjects } from "../hooks/useGetProjects";

export const SingleProject = () => {
  const { nome } = useParams<{ nome: string }>();
  const { loading } = useFetch();
  const projects = useGetProjects();

  // Trova il progetto specifico usando il nome
  const project = projects.find((p) => p.name === nome);

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <ErrorMessage>Progetto non trovato</ErrorMessage>
      </Layout>
    );
  }

  return (
    <Layout>
      <MarkdownRenderer content={project.readme} nome={nome} />
    </Layout>
  );
};
