import type { Config } from "tailwindcss";

import baseConfig from "@plato/tailwind-config";

export default {
  content: [
    ...baseConfig.content,
    "../../packages/ui/src/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  backgroundImage: {
    "text-linear":
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
  },
  presets: [baseConfig],
} satisfies Config;
