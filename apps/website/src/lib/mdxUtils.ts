import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

type PathType = "blog" | "product-updates";

export const GET_CONTENT_PATH = (type: PathType) =>
  path.join(process.cwd(), `/src/content/${type}`);

export const getContentFilePaths = (type: PathType) => {
  const PATHS = GET_CONTENT_PATH(type);

  return fs.readdirSync(PATHS).filter((path) => /\.mdx?$/.test(path));
};

export const getContentFile = async (type: PathType, slug: string) => {
  const PATHS = GET_CONTENT_PATH(type);

  const postFilePath = path.join(PATHS, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    source: mdxSource,
    data,
  };
};

export const getMdxSource = async (content: any, data: any) => {
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return mdxSource;
};

export const getContentBlogData = (type: PathType) => {
  const PATHS = GET_CONTENT_PATH(type);
  const files = getContentFilePaths(type);

  const blogData: any = [];

  files.forEach((file) => {
    const filePath = path.join(PATHS, file);

    if (fs.statSync(filePath).isFile() && file.endsWith(".mdx")) {
      const source = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(source);

      blogData.push({
        ...data,
        slug: file.replace(".mdx", "").trim(),
        content,
      });
    }
  });

  return blogData;
};
