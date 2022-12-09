// # Config for All with the following `.config.*` including `.eslintrc.js`

const { base, eslint, next, prettier, react, typescript } = importFunction();

function importFunction() {
    const base = require('../rules/base');
    const eslint = require('../rules/eslint');
    const next = require('../rules/next');
    const prettier = require('../rules/prettier');
    const react = require('../rules/react');
    const typescript = require('../rules/typescript');

    return {
        base,
        eslint,
        next,
        prettier,
        react,
        typescript,
    };
}

const eslinter = {
    env: {
        browser: true,
        commonjs: true,
        es2015: true,
        es2016: true,
        es2017: true,
        es2018: true,
        es2019: true,
        es2020: true,
        es2021: true,
        es2022: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'next',
        'prettier',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [
        {
            files: ['.ts', '.tsx'],
            extends: 'plugin:@typescript-eslint/recommended-requiring-type-checking',
        },
    ],
    ignorePatterns: ['.eslintrc.js', 'prettier.config.js', 'next.config.js', 'next.config.mjs', 'lint-staged.config.js', './tsconfig.json'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        ...base,
        ...eslint,
        ...next,
        ...prettier,
        ...react,
        ...typescript,
    },
};

const nexted = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
};

const lintStaged = {
    '*.{ts, tsx, css, scss, sass}': ['prettier --write', 'eslint --fix', 'eslint'],
    '*.json': ['prettier --write'],
};

const pretty = {
    printWidth: 180,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: 'avoid',
    singleAttributePerLine: true,
};

module.exports = {
    // ### Eslint
    eslint: eslinter,

    // ### Next
    next: nexted,

    // ### Lint-Staged
    lintStaged,

    // ### Pretter
    prettier: pretty,
};
