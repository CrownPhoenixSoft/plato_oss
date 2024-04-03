import type { Config } from "tailwindcss";

import baseConfig from "@plato/tailwind-config";

export default {
  content: [
    ...baseConfig.content,
    "../../packages/ui/src/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  presets: [baseConfig],
} satisfies Config;
