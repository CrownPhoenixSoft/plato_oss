import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogCard from "@/components/ui/blog-card";
import { allBlogs } from "@/content";
import { BLOG_CATEGORIES } from "@/content/categories";

import { constructMetadata } from "@plato/lib/constructMetadata";

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const category = BLOG_CATEGORIES.find(
    (category) => category.slug === params.slug,
  );
  if (!category) {
    return;
  }

  const { title, description } = category;

  return constructMetadata({
    title: `${title} Posts – Plato Blog`,
    description,
    image: `/api/og/help?title=${encodeURIComponent(
      title,
    )}&summary=${encodeURIComponent(description)}`,
  });
}

export default async function BlogCategory({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const data = BLOG_CATEGORIES.find(
    (category) => category.slug === params.slug,
  );
  if (!data) {
    notFound();
  }
  const articles = allBlogs
    .filter((post) => post.categories.includes(data.slug))
    // @ts-ignore
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return articles.map((article, idx) => (
    <BlogCard key={article.slug} data={article} priority={idx <= 1} />
  ));
}
