import vercelPrettierOptions from "@vercel/style-guide/prettier";

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  ...vercelPrettierOptions,
  plugins: [
    ...vercelPrettierOptions.plugins,
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: "lf",
  printWidth: 80,
  importOrder: [
    "^next/(.*)$",
    "^react",
    "^~/lib/hooks/(.*)$",
    "^~/lib/helpers/(.*)$",
    "^~/lib/data/(.*)$",
    "^~/lib/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^~/components/(.*)$",
    "^~/assets/(.*)$",
    "^[./]",
    "lucide-react",
    "^~/types/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

// eslint-disable-next-line import/no-default-export -- safe
export default config;
