import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Author from "@/components/author";
import CTA from "@/components/cta";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { MDX } from "@/components/mdx";
import { allBlogs } from "@/content";
import { BLOG_CATEGORIES } from "@/content/categories";
import { format } from "date-fns";

import { constructMetadata } from "@plato/lib/constructMetadata";
import { cn } from "@plato/ui";
import { buttonVariants } from "@plato/ui/button";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, seoTitle, summary, seoDescription, image } = post;

  return constructMetadata({
    title: `${seoTitle || title} – Plato`,
    description: seoDescription || summary,
    image,
  });
}

export default async function BlogArticle({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const data = allBlogs.find((post) => post.slug === params.slug);
  if (!data) {
    notFound();
  }

  const category = BLOG_CATEGORIES.find(
    (category) => category.slug === data.categories[0],
  )!;

  const relatedArticles =
    (data.related &&
      data.related.map(
        (slug) => allBlogs.find((post) => post.slug === slug)!,
      )) ||
    [];

  return (
    <>
      <MaxWidthWrapper>
        <div className="flex max-w-screen-sm flex-col space-y-4 pt-16">
          <div className="flex items-center space-x-4">
            <Link
              href={`/blog/category/${category.slug}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full",
              )}
            >
              {category.title}
            </Link>
            <time
              dateTime={data.publishedAt as any}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {format(data.publishedAt, "MMMM dd, yyyy")}
            </time>
          </div>
          <h1 className="font-display text-3xl font-extrabold text-primary sm:text-4xl sm:leading-snug">
            {data.title}
          </h1>
          <p className="text-xl text-muted-foreground">{data.summary}</p>
        </div>
      </MaxWidthWrapper>

      <div className="relative">
        <div className="absolute top-52 h-[calc(100%-13rem)] w-full border border-border bg-background/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg" />

        <MaxWidthWrapper className="grid grid-cols-4 gap-5 px-0 pt-10 lg:gap-10">
          <div className="relative col-span-4 flex flex-col space-y-8 bg-background sm:rounded-t-xl sm:border sm:border-border md:col-span-3">
            <Image
              className="aspect-[1200/630] rounded-t-xl object-cover"
              src={data.image}
              width={1200}
              height={630}
              alt={data.title}
              priority
            />

            <MDX data={data} className="px-5 pb-20 pt-4 sm:px-10" />
          </div>
          <div className="sticky top-20 col-span-1 mt-48 hidden flex-col divide-y divide-gray-200 self-start sm:flex">
            <div className="flex flex-col space-y-4 py-5">
              <p className="text-sm text-gray-500">Written by</p>
              <Author username={data.author} />
            </div>

            {relatedArticles.length > 0 && (
              <div className="flex flex-col space-y-4 py-5">
                <p className="text-sm text-gray-500">Read more</p>
                <ul className="flex flex-col space-y-4">
                  {relatedArticles.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col space-y-2"
                      >
                        <p className="font-semibold text-gray-700 underline-offset-4 group-hover:underline">
                          {post.title}
                        </p>
                        <p className="line-clamp-2 text-sm text-gray-500 underline-offset-2 group-hover:underline">
                          {post.summary}
                        </p>
                        <p className="text-xs text-gray-400 underline-offset-2 group-hover:underline">
                          {format(post.publishedAt, "MMMM dd, yyyy")}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </MaxWidthWrapper>
      </div>

      <CTA />
    </>
  );
}
