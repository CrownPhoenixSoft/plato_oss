import type { Config } from "tailwindcss";

import baseConfig from "@plato/tailwind-config";

export default {
  content: baseConfig.content,
  // prefix: "ui-",
  presets: [baseConfig],
} satisfies Config;
