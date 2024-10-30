import { useFetchReadme } from "@/utils/useFetchReadme";
import { useParams } from "react-router-dom";
import { MarkdownRenderer } from "../atoms/MarkdownRenderer";
import { Layout } from "./Layout";
import { Loading } from "../atoms/Loading";
import { ErrorMessage } from "../atoms/ErrorMessage";

export const SingleProject = () => {
  const { nome } = useParams<{ nome: string }>(); // Recupera il parametro "nome" dal percorso

  const { readmeContent, error, loading } = useFetchReadme(nome || "");

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <MarkdownRenderer content={readmeContent} nome={nome} />
      )}
    </Layout>
  );
};
