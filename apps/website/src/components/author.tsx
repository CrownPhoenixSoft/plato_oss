import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export default async function Author({
  username,
  updatedAt,
  imageOnly,
}: {
  username: string;
  updatedAt?: string;
  imageOnly?: boolean;
}) {
  const authors: { [key: string]: { name: string; image: string } } = {
    abdullah: {
      name: "Abdullah",
      image: "https://d2vwwcvoksz7ty.cloudfront.net/author/steventey.jpg",
    },
    mohammed: {
      name: "Mohammed - CEO",
      image: "https://d2vwwcvoksz7ty.cloudfront.net/author/fmerian.jpg",
    },
  };

  return imageOnly ? (
    <Image
      src={authors[username].image}
      alt={authors[username].name}
      width={36}
      height={36}
      className="rounded-full transition-all group-hover:brightness-90"
    />
  ) : updatedAt ? (
    <div className="flex items-center space-x-3">
      <Image
        src={authors[username].image}
        alt={authors[username].name}
        width={36}
        height={36}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <p className="text-sm text-gray-500">
          Written by {authors[username].name}
        </p>
        <time dateTime={updatedAt} className="text-sm font-light text-gray-400">
          Last updated{" "}
          {formatDistanceToNow(new Date(updatedAt), {
            addSuffix: true,
            includeSeconds: true,
          })}
        </time>
      </div>
    </div>
  ) : (
    <Link
      href={`https://twitter.com/${username}`}
      className="group flex items-center space-x-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={authors[username].image}
        alt={authors[username].name}
        width={40}
        height={40}
        className="rounded-full transition-all group-hover:brightness-90"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-gray-700">{authors[username].name}</p>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
    </Link>
  );
}
