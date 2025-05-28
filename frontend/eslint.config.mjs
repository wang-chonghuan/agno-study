import { dirname } from 'path';
import { fileURLToPath } from 'url';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
// import eslintPluginReactHooks from 'eslint-plugin-react-hooks'; // Optional
// import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'; // Optional

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  ...tseslint.configs.recommended, // Base TypeScript rules
  {
    plugins: {
      react: eslintPluginReact,
      // 'react-hooks': eslintPluginReactHooks,
      // 'jsx-a11y': eslintPluginJsxA11y,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: './tsconfig.json', // Link to your tsconfig.json for type-aware linting
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      // Add or override rules here
      'react/react-in-jsx-scope': 'off', // Not needed with Vite's JSX transform (React 17+)
      // Example: '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    },
  },
];
