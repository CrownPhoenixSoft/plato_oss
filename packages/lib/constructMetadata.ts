import { Metadata } from "next";

import { PLATO_LOGO, WEBSITE_URL } from "./constants";

export function constructMetadata({
  title = "Plato - Your Business Companion",
  description = "Plato, the comprehensive SaaS solution, enhances businesses in various industries with a suite of services including Bio-Link, Menu, Forms, and Drive, providing the essential toolkit for success.",
  image = PLATO_LOGO,
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@plato",
    },
    icons,
    metadataBase: new URL(WEBSITE_URL),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
