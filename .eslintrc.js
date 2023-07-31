module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'for', 'while', 'switch'],
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['export', 'const', 'let'],
      },
    ],
    'no-nested-ternary': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-lonely-if': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      { enforceForRenamedProperties: false },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: "^([C][A-Z])",
        caughtErrors: 'none',
      },
    ],
    'no-unused-vars': 'off', // Типы и интерфейсы не распознаются eslint
    'no-use-before-define': 'off', // Типы и интерфейсы не распознаются eslint
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
      {
        selector: 'class',
        format: ['PascalCase'],
        custom: {
          regex: '^C[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-use-before-define': 'warn',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@hmdb/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/no-unresolved': 'off'
  },
};