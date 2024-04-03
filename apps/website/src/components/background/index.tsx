"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import styles from "./background.module.css";

export const SHOW_BACKGROUND_SEGMENTS = new Set([
  "tools",
  "pricing",
  "help",
  "blog",
  "(blog-post)",

  // Plato apps
  "bio-links",
  "menus",
  "forms",
  "drive",
]);

export default function Background() {
  const segment = useSelectedLayoutSegment();

  if (segment && !SHOW_BACKGROUND_SEGMENTS.has(segment)) return null;
  return (
    <div className={styles.main}>
      <div className={styles.content} />
    </div>
  );
}
