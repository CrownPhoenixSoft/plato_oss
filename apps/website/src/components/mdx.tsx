"use server";

import { serialize } from "next-mdx-remote/serialize";

import { MDXRemote } from "./mdx-remote";

interface MDXProps {
  data: any;
  images?: { alt: string; src: string; blurDataURL: string }[];
  className?: string;
}

export async function MDX({
  data: { slug, content: code, ...data },
  images,
  className,
}: MDXProps) {
  const mdxSource = await serialize(code, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return <MDXRemote code={mdxSource} images={images} className={className} />;
}
