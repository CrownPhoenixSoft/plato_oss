import Image from "next/image";
// import Author from "./author";
import Link from "next/link";
import { Blog } from "@/content";
import { format } from "date-fns";

import Author from "../author";

export default function BlogCard({
  data,
  priority,
}: {
  data: Blog;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/blog/${data.slug}`}
      className="flex flex-col rounded-lg border border-gray-200"
    >
      <Image
        className="aspect-[1200/630] rounded-t-xl object-cover"
        src={data.image}
        blurDataURL={data.image}
        width={1200}
        height={630}
        alt={data.title}
        priority={priority}
      />
      <div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-6">
        <div>
          <h2 className="font-display line-clamp-1 text-2xl font-bold text-gray-700">
            {data.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-gray-500">{data.summary}</p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Author username={data.author} imageOnly />
          <time
            dateTime={data.publishedAt as any}
            className="text-sm text-gray-500"
          >
            {format(data.publishedAt, "MMMM dd, yyyy")}
          </time>
        </div>
      </div>
    </Link>
  );
}
