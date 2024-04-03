"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { BLOG_CATEGORIES } from "@/content/categories";

import { cn } from "@plato/ui";
import { buttonVariants } from "@plato/ui/button";

import MaxWidthWrapper from "../max-width-wrapper";

export default function BlogLayoutHero() {
  const { slug } = useParams() as { slug?: string };

  const data = BLOG_CATEGORIES.find((category) => category.slug === slug);

  return (
    <MaxWidthWrapper>
      <div className="max-w-screen-sm py-16">
        <h1 className="font-display bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text py-1 text-3xl font-extrabold text-primary text-transparent sm:text-4xl">
          {data?.title || "Blog"}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          {data?.description || "Latest news and updates from Dub."}
        </p>
        <div className="mt-6 flex items-center space-x-4">
          <CategoryLink title="All" href="/blog" active={!slug} />
          {BLOG_CATEGORIES.map((category) => (
            <CategoryLink
              key={category.slug}
              title={category.title}
              href={`/blog/category/${category.slug}`}
              active={category.slug === slug}
            />
          ))}
          {/* <CategoryLink
            title="Customer Stories"
            href="/customers"
            active={false}
          /> */}
          <CategoryLink
            title="Product Updates"
            href="/product-updates"
            active={false}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

const CategoryLink = ({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active: boolean;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        active &&
          "rounded-b-none border-b border-primary text-primary hover:text-primary",
      )}
    >
      {title}
    </Link>
  );
};
