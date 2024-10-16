import { useFetchReadme } from "@/utils/useFetchReadme";
import { useParams } from "react-router-dom";
import { MarkdownRenderer } from "../atoms/MarkdownRenderer";
import { Layout } from "./Layout";

export const SingleProject = () => {
  const { nome } = useParams<{ nome: string }>(); // Recupera il parametro "nome" dal percorso

  const { readmeContent, error, loading } = useFetchReadme(nome || "");

  return (
    <Layout>
      <h1 className="mb- text-2xl font-bold">{nome}</h1>
      <div className="readme-content">
        {loading ? (
          <p>Caricamento...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <MarkdownRenderer content={readmeContent} />
        )}
      </div>
    </Layout>
  );
};
