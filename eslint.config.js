import js from '@eslint/js';
import { importX } from 'eslint-plugin-import-x';
import { configs as jsdocConfigs } from 'eslint-plugin-jsdoc';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { configs as regexpConfigs } from 'eslint-plugin-regexp';
import security from 'eslint-plugin-security';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import { configs as tsConfigs, parser as tsParser } from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      'node_modules',
      'dist',
      'coverage',
      'docs/.vitepress/cache',
      'docs/.vitepress/dist',
      '.wrangler',
    ],
  },
  js.configs.recommended,
  tsConfigs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  jsdocConfigs['flat/recommended-typescript'],
  regexpConfigs['flat/recommended'],
  security.configs.recommended,
  vue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
      },
    },
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'vue/block-order': [
        'error',
        { order: ['script[setup]', 'template', 'style[scoped]'] },
      ],
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: { sourceType: 'commonjs' },
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
  prettierRecommended,
);
