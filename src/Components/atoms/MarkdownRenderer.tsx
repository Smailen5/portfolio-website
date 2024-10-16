import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { LinkBlank } from "./LinkBlank";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
}) => {
  console.log(content);
  return (
    <div className="">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="my-4 text-3xl font-bold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="my-3 text-2xl font-semibold" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="my-2 text-xl font-semibold" {...props} />
          ),
          p: ({ node, ...props }) => <p className="my-2" {...props} />,
          a: ({ node, ...props }) => (
            <LinkBlank isText href={props.href} {...props}>
              {props.children}
            </LinkBlank>
          ),
          pre: ({ node, ...props }) => (
            <pre
              className="my-4 overflow-auto rounded-lg bg-gray-200 p-4"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img
              src={`${import.meta.env.VITE_GITHUB_URL_IMAGES_SCREEN}/${props.src}`}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
