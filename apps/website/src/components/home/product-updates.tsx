import Link from "next/link";
import { allBlogs, allProductUpdatePosts } from "@/content";
import { format } from "date-fns";

import { cn } from "@plato/ui";
import { buttonVariants } from "@plato/ui/button";

import MaxWidthWrapper from "../max-width-wrapper";

export default function ProductUpdates() {
  return (
    <MaxWidthWrapper className="space-y-5 pt-20 md:space-y-10">
      <div className="mx-auto max-w-md text-center sm:max-w-xl">
        <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
          We ship{" "}
          <span className="bg-gradient-to-br from-green-600 to-green-300 bg-clip-text pr-2 italic text-transparent">
            fast
          </span>
        </h2>
        <p className="mt-5 text-muted-foreground sm:text-lg">
          Check out our changelog to see what's new on Plato.
        </p>
      </div>
      <ul className="mx-5 max-w-2xl md:mx-auto md:translate-x-28">
        {[
          ...allBlogs.map((i) => ({ ...i, type: "BlogPost" })),
          ...allProductUpdatePosts.map((i) => ({
            ...i,
            type: "ProductUpdatePost",
          })),
        ]
          // @ts-ignore
          .sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
          .slice(0, 6)
          .map((post) => (
            <li key={post.slug}>
              <DesktopChangelogEntry post={post} />
              <MobileChangelogEntry post={post} />
            </li>
          ))}
      </ul>
      <Link
        href="/product-updates"
        className={cn(
          buttonVariants(),
          "mx-auto block max-w-fit rounded-full border border-transparent hover:border-primary hover:bg-background hover:text-primary",
        )}
      >
        Full Product Updates
      </Link>
    </MaxWidthWrapper>
  );
}

const DesktopChangelogEntry = ({ post }: any) => (
  <Link
    href={`/${post.type === "BlogPost" ? "blog" : "product-updates"}/${
      post.slug
    }`}
    className="group hidden grid-cols-9 items-center md:grid"
  >
    <dl className="col-span-2">
      <dt className="sr-only">Published on</dt>
      <dd className="text-base font-medium text-muted-foreground transition-colors group-hover:text-primary">
        <time dateTime={post.publishedAt}>
          {format(post.publishedAt, "MMMM dd, yyyy")}
        </time>
      </dd>
    </dl>
    <div className="col-span-7 flex items-center">
      <div className="relative ml-4">
        <div className="h-16 border-l border-gray-400 pr-8" />
        <div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-primary" />
      </div>
      <h3 className="text-2xl font-medium tracking-tight text-secondary-foreground transition-colors group-hover:text-primary">
        {post.title}
      </h3>
    </div>
  </Link>
);

const MobileChangelogEntry = ({ post }: any) => (
  <Link
    href={`/${post.type === "BlogPost" ? "blog" : "product-updates"}/${
      post.slug
    }`}
    className="flex items-center space-x-4 rounded-lg active:bg-gray-100 md:hidden"
  >
    <div className="relative">
      <div className="h-16 border-l border-gray-400" />
      <div className="absolute -left-1 top-5 h-2.5 w-2.5 rounded-full bg-gray-400" />
    </div>
    <div>
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-sm font-medium text-muted-foreground">
          <time dateTime={post.publishedAt}>
            {format(post.publishedAt, "MMMM dd, yyyy")}
          </time>
        </dd>
      </dl>
      <h3 className="text-lg font-medium tracking-tight text-gray-700">
        {post.title}
      </h3>
    </div>
  </Link>
);
