import { useFetchReadme } from "@/utils/useFetchReadme";
import { ErrorMessage } from "@components/atoms/ErrorMessage";
import { Loading } from "@components/atoms/Loading";
import { MarkdownRenderer } from "@components/atoms/MarkdownRenderer";
import { Layout } from "@components/molecules/Layout";
import { useParams } from "react-router-dom";

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
