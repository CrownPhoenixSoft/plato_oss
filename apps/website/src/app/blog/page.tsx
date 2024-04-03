import BlogCard from "@/components/ui/blog-card";
import { allBlogs } from "@/content";

import { constructMetadata } from "@plato/lib/constructMetadata";

export const metadata = constructMetadata({
  title: "Blog – Plato",
  description: "Latest news and updates from Plato.",
});

export default async function Blog() {
  const articles = allBlogs.filter((i) => i.categories.includes("company"));

  return articles.map((article, idx) => (
    <BlogCard key={article.slug} data={article} priority={idx <= 1} />
  ));
}
