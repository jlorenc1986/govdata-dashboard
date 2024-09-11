import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    ignores: [
      ".nx/",
      ".yarn/",
      "src/**.html",
      "**/jest.config.js",
      "**/node_modules/**",
      "**/dist/**",
      "**/fixtures/**",
      "**/coverage/**",
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
