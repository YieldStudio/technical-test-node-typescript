import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js, prettier },
    ignores: ["node_modules/*", "generated/*"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...prettier.configs["recommended"].rules,
    },
  },
  tseslint.configs.recommended,
]);
