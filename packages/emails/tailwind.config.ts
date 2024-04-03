import type { Config } from "tailwindcss";

import baseConfig from "@plato/tailwind-config";

export default {
  content: [...baseConfig.content, "templates/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
