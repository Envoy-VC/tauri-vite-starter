import browserConfig from '@vercel/style-guide/eslint/browser';
import nodeConfig from '@vercel/style-guide/eslint/node';
import reactConfig from '@vercel/style-guide/eslint/react';
import typescriptConfig from '@vercel/style-guide/eslint/typescript';
import { configs } from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
// eslint-disable-next-line import/no-default-export -- safe
export default [
  ...nodeConfig,
  ...typescriptConfig,
  ...browserConfig,
  ...reactConfig,
  ...configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'no-console': ['off'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: true },
      ],
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/restrict-template-expressions': ['warn'],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
          reservedFirst: true,
        },
      ],
      'import/order': [
        'off',
        {
          'newlines-between': 'ignore',
          alphabetize: { order: 'asc' },
        },
      ],
    },
  },
];
