import { getContentBlogData } from "@/lib/mdxUtils";

export type Blog = {
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt: Date;
  summary: string;
  image: string;
  author: string;
  categories: ("company" | "updates")[];
  related: string[];
  content?: any;
};

export const allBlogs: Blog[] = getContentBlogData("blog");

export type ProductUpdatePost = {
  slug: string;
  title: string;
  publishedAt: Date;
  summary: string;
  image: string;
  author: string;
  content?: any;
};

export const allProductUpdatePosts: ProductUpdatePost[] =
  getContentBlogData("product-updates");
