import React from "react";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

export default function PreviewerMd({ mdText }) {
  return (
    <ReactMarkdown
      className="markdown-body"
      children={mdText}
      remarkPlugins={[remarkGfm, remarkSlug, remarkToc, remarkBreaks]}
      rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }], rehypeRaw]}
    ></ReactMarkdown>
  );
}
