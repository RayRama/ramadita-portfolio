import { MarkdownAsync } from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";

export function Markdown(props: React.ComponentProps<typeof MarkdownAsync>) {
  return (
    <MarkdownAsync
      {...props}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        [
          rehypeExternalLinks,
          { target: "_blank", rel: "nofollow noopener noreferrer" },
        ],
      ]}
    />
  );
}
