import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Author from "@/components/author";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { MDX } from "@/components/mdx";
import { allProductUpdatePosts } from "@/content";
import { format } from "date-fns";

import { constructMetadata } from "@plato/lib/constructMetadata";

export async function generateStaticParams() {
  return allProductUpdatePosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allProductUpdatePosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, summary: description, image } = post;

  return constructMetadata({
    title,
    description,
    image,
  });
}

export default async function ChangelogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = allProductUpdatePosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <MaxWidthWrapper className="my-20 grid px-0 md:grid-cols-4">
      <div className="sticky top-20 hidden self-start md:col-span-1 md:block">
        <Link
          href="/product-updates"
          className="text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          ← Back to Product Updates
        </Link>
      </div>
      <div className="flex flex-col space-y-8 md:col-span-3">
        <div className="mx-5 grid gap-5 md:mx-0">
          <div className="flex flex-col">
            <Link
              href="/changelog"
              className="my-5 text-sm text-gray-500 md:hidden"
            >
              ← Back to Changelog
            </Link>
            <time
              dateTime={post.publishedAt as any}
              className="flex items-center text-sm text-gray-500 md:text-base"
            >
              {format(post.publishedAt, "MMMM dd, yyyy")}
            </time>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            {post.title}
          </h1>
        </div>
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          priority // since it's above the fold
          className="aspect-video border border-gray-100 object-cover md:rounded-2xl"
        />
        <div className="mx-5 mb-10 flex items-center justify-between md:mx-0">
          <Author username={post.author} />
          {/* <div className="flex items-center space-x-6">
            <Link
              href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://dub.co/changelog/${post.slug}&via=${post.author}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
            >
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              href={`
            http://www.linkedin.com/shareArticle?mini=true&url=https://dub.co/changelog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
            >
              <LinkedIn className="h-6 w-6" fill="black" />
            </Link>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=https://dub.co/changelog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110"
            >
              <Facebook className="h-6 w-6" fill="black" />
            </Link>
          </div> */}
        </div>
        <MDX data={post} className="sm:prose-lg mx-5 md:mx-0" />
        {/* <div className="mt-10 flex justify-end border-t border-gray-200 pt-5">
          <Link
            href={`https://github.com/steven-tey/dub/blob/main/content/changelog/${params.slug}.mdx`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition-colors hover:text-gray-800"
          >
            <p>Found a typo? Edit this page →</p>
          </Link>
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
}
