"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "./lib/utils";

export function CodeBlock({
  jsonData,
  language,
  className,
}: {
  jsonData: any;
  language: "json" | "css" | "html";
  className?: string;
}) {
  const formattedCode = JSON.stringify(jsonData, null, 2);

  return (
    <SyntaxHighlighter
      showLineNumbers
      showInlineLineNumbers
      wrapLongLines
      language={language}
      style={okaidia}
      className={cn("rounded-lg p-4", className)}
    >
      {formattedCode}
    </SyntaxHighlighter>
  );
}
