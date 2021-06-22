module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'never',
    ],
  },
  overrides: [
    {
      files: ['.eslintrc.js', 'gatsby-config.js'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        quotes: [
          'error',
          'backtick',
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
