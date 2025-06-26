import { useFetchReadme } from '@/features/projects/hooks/useFetchReadme';
import { ErrorMessage } from '@components/atoms/ErrorMessage';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { LinkBlank } from "./LinkBlank";

// Props per il componente MarkdownRenderer
interface MarkdownRendererProps {
  content: string | null; // Contenuto markdown da renderizzare
  nome: string | undefined; // Nome del progetto per le immagini
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  nome,
}) => {
  // URL base per le immagini dei progetti su GitHub
  const urlImageScreen =
    "https://raw.githubusercontent.com/Smailen5/Frontend-Mentor-Challenge/main/packages/";

    const {error, readmeContent} = useFetchReadme(content)
    if(error) return <ErrorMessage>Errore nel recupero del README</ErrorMessage>

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
              src={`${urlImageScreen}${nome}/${props.src}`}
              className="mb-4 w-full rounded-md md:w-auto object-contain"
              alt={`${nome} anteprima`}
            />
          ),
        }}
      >
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
};
