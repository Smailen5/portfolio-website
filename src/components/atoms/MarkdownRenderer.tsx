import { useFetchReadme } from "@/features/projects/hooks/useFetchReadme";
import { ErrorMessage } from "@components/atoms/ErrorMessage";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { LinkBlank } from "./LinkBlank";
import { ENDPOINTS } from '@/shared/constants/api';

// Props per il componente MarkdownRenderer
interface MarkdownRendererProps {
  readmeUrl: string | null; // Contenuto markdown da renderizzare
  nameProject: string | undefined; // Nome del progetto pulito da package.json
  nameFolder?: string; // Nome della cartella per il recupero delle immagini nel readme
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  readmeUrl,
  nameProject,
}) => {

  const { error, readmeContent } = useFetchReadme(readmeUrl, nameProject);
  if (error) return <ErrorMessage>Errore nel recupero del README</ErrorMessage>;

  return (
    <div className="w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Plugin per GitHub Flavored Markdown
        rehypePlugins={[rehypeRaw]} // Plugin per HTML raw nel markdown
        components={{
          // Personalizzazione dei componenti markdown
          h1: ({ ...props }) => (
            <h1 className="my-4 text-3xl font-bold" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="my-3 text-2xl font-semibold" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="my-2 text-xl font-semibold" {...props} />
          ),
          p: ({ ...props }) => <p className="my-2" {...props} />,
          // Link che si aprono in una nuova tab
          a: ({ ...props }) => (
            <LinkBlank isText href={props.href} {...props}>
              {props.children}
            </LinkBlank>
          ),
          // Blocchi di codice con stile personalizzato
          pre: ({ ...props }) => (
            <pre
              className="my-4 overflow-auto rounded-lg bg-muted p-4 text-muted-foreground"
              {...props}
            />
          ),
          // Immagini con percorso personalizzato e stile responsive
          img: ({ ...props }) => (
            <img
              src={`${ENDPOINTS.GITHUB.RAW.IMAGES_README_SRC}/${nameProject}/${props.src}`}
              className="mb-4 w-full rounded-md object-contain md:w-auto"
              alt={`${nameProject} anteprima`}
            />
          ),
        }}
      >
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
};
