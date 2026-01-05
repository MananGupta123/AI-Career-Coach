import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

// Note: The "Cannot serialize key 'parse' in parser" warning is a known issue
// with Next.js 15 + ESLint 9 + FlatCompat. It's non-blocking and doesn't affect functionality.
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "dist/**"],
  },
];

export default eslintConfig;
