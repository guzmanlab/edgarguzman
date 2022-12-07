const base = require('../eslint/base');
const eslint = require('../eslint/eslint');
const next = require('../eslint/next');
const prettier = require('../eslint/prettier');
const react = require('../eslint/react');
const typescript = require('../eslint/typescript');

// const config = {
module.exports = {
    env: {
        // Eslint
        eslint: {
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
            overrides: [],
            ignorePatterns: ['.eslintrc.js', 'prettier.config.js', 'next.config.js', 'next.config.mjs', 'lint-staged.config.mjs', './tsconfig.json'],
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
            settings: {
                react: {
                    version: 'detect',
                },
            },
        },

        // Next
        next: {
            reactStrictMode: true,
            swcMinify: true,
            i18n: {
                locales: ['en'],
                defaultLocale: 'en',
            },
        },

        // Lint-Staged
        lintStaged: {
            '*.{ts,tsx,css,scss,sass}': ['prettier --write', 'eslint --fix', 'eslint'],
            '*.json': ['prettier --write'],
        },

        // Pretter
        prettier: {
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
        },
    },
};

// module.exports = config;
