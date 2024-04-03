import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { MDX } from "@/components/mdx";
import { allProductUpdatePosts } from "@/content";
import { format } from "date-fns";

import { constructMetadata } from "@plato/lib/constructMetadata";
import { cn } from "@plato/ui";

export const metadata = constructMetadata({
  title: "Product Updates – Plato",
  description:
    "All the latest updates, improvements, and fixes to Plato - the link management tool for modern marketing teams.",
  image: "/api/og/product-updates",
});

export default function ProductUpdates() {
  return (
    <div>
      <MaxWidthWrapper className="relative grid py-20 md:grid-cols-4">
        <div className="md:col-span-1" />
        <div className="mx-5 flex flex-col space-y-6 md:col-span-3 md:mx-0">
          <h1 className="font-display bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl">
            Product Updates
          </h1>
          <p className="text-lg text-gray-500">
            All the latest updates, improvements, and fixes to Plato.
          </p>
        </div>
        {/* <div className="absolute bottom-2 right-2 flex items-center space-x-2">
          <p className="text-sm text-gray-500">Subscribe to updates →</p>
           <Link
              href="https://twitter.com/dubdotco"
              className="rounded-full bg-blue-100 p-2 transition-colors hover:bg-blue-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4 text-[#1d9bf0]" />
            </Link>
            <Link
              href="/atom"
              className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
            >
              <Rss className="h-4 w-4 text-gray-500" />
            </Link> 
        </div> */}
      </MaxWidthWrapper>

      <div className="border-t">
        <MaxWidthWrapper>
          {allProductUpdatePosts.map((post, idx) => (
            <div
              key={idx}
              className={cn(
                "grid py-20 md:grid-cols-4 md:px-5 xl:px-0",
                idx < allProductUpdatePosts.length - 1 && "border-b",
              )}
            >
              <div className="sticky top-20 hidden self-start md:col-span-1 md:block">
                <Link href={`/product-updates/${post.slug}`}>
                  <time
                    dateTime={post.publishedAt as any}
                    className="text-gray-500 transition-colors hover:text-gray-800"
                  >
                    {format(post.publishedAt, "MMMM dd, yyyy")}
                  </time>
                </Link>
              </div>

              <div className="flex flex-col gap-6 md:col-span-3">
                <Link href={`/product-updates/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    priority={idx === 0} // since it's above the fold
                    className="aspect-video border border-gray-100 object-cover md:rounded-2xl"
                  />
                </Link>
                <Link
                  href={`/product-updates/${post.slug}`}
                  className="group mx-5 flex items-center space-x-3 md:mx-0"
                >
                  <time
                    dateTime={post.publishedAt as any}
                    className="text-sm text-muted-foreground transition-all group-hover:text-secondary-foreground md:hidden"
                  >
                    {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
                  </time>
                </Link>

                <Link
                  href={`/product-updates/${post.slug}`}
                  className="mx-5 md:mx-0"
                >
                  <h2 className="font-display text-3xl font-bold tracking-tight text-gray-800 hover:underline hover:decoration-1 hover:underline-offset-4 md:text-4xl">
                    {post.title}
                  </h2>
                </Link>

                <MDX data={post} className="sm:prose-lg mx-5 md:mx-0" />
              </div>
            </div>
          ))}
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
