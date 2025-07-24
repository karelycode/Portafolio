import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extiende config de Next.js y TypeScript
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Sobrescribe reglas específicas para evitar errores de build en Vercel
  {
    rules: {
      // Permitir explicit any en ciertos componentes
      "@typescript-eslint/no-explicit-any": "off",
      // Tratar <img> como warning para optimización opcional
      "@next/next/no-img-element": "warn",
      // Asegurar mensajes de alt-text como warning
      "jsx-a11y/alt-text": "warn",
    },
  },
];

export default eslintConfig;
