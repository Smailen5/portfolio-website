import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { LinkBlank } from "./LinkBlank";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
}) => {
  return (
    <div className="">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold my-3" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-semibold my-2" {...props} />,
            p: ({ node, ...props }) => <p className="my-2" {...props} />,
            a: ({ node, ...props }) => <LinkBlank isText href={props.href} children={props.children} className="text-blue-500 hover:underline" {...props} />,
            pre: ({node, ...props}) => <pre className="bg-gray-300 overflow-auto p-2 my-4" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
