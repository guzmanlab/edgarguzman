// # Config for All with the following `.*` or `.config.*` including `.eslintrc.js`

// const path = require('path')
// const { INITIAL_VIEWPORTS } = require('@storybook/addon-viewport')
const { base, eslint, next, prettier, react, typescript } = requireFunction();

function requireFunction() {
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
        typescript
    };
}

// // !process.env.SKIP_ENV_VALIDATION && (await import('../../env/server.mjs'));

const ESLINT_ENV = {
    root: true,
    env: {
        es6: true,
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
        node: true
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
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [
        {
            files: ['.ts', '.tsx'],
            extends: 'plugin:@typescript-eslint/recommended-requiring-type-checking',
            parserOptions: {
                project: 'tsconfig.json'
            }
        }
    ],
    ignorePatterns: [
        '.eslintrc.js',
        'prettier.config.js',
        'next.config.js',
        'next.config.mjs',
        'lint-staged.config.js',
        './tsconfig.json',
        '/public/scripts/**/*'
        // '/public/scripts/wireframe.{js, ts}',
        // '/public/scripts/**/*.{js, ts}',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
            arrowFunctions: true,
            classes: true,
            modules: true,
            templateStrings: true,
            globalReturn: true,
            jsx: true
        }
    },
    plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
    rules: {
        ...base,
        ...eslint,
        ...next,
        ...prettier,
        ...react,
        ...typescript
    }
};

/** @type {import('next').NextConfig} */
const NEXT_ENV = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    images: {
        domains: [
            'pbs.twimg.com',
            'github.com',
            'raw.githubusercontent.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'cdn.dribbble.com',
            'images.unsplash.com'
        ]
    }
};

const LINTSTAGED_ENV = {
    '*.{ts, tsx, css, scss, sass}': ['prettier --write', 'eslint --fix', 'eslint'],
    '*.json': ['prettier --write']
};

const PRETTIER_ENV = {
    printWidth: 180,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: 'avoid',
    singleAttributePerLine: true
};

// const STORYBOOK_ENV = {
//     STORYBOOK_MAIN: {
//         stories: [
//             '../src/stories/**/*.stories.mdx',
//             '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
//         ],
//         staticDirs: [
//             '../public/images',
//             // '../public/assets',
//             // '../public/images/assets',
//             // {
//             //     from: '../public/images/assets',
//             //     to: '../assets',
//             // },
//         ],
//         addons: [
//             '@storybook/addon-links',
//             '@storybook/addon-essentials',
//             '@storybook/addon-interactions',
//             '@storybook/preset-scss',
//             '@storybook/addon-a11y',
//             // 'storybook-addon-designs',
//             '@storybook/addon-viewport',
//             // '@storybook/addon-storysource',
//             // 'storybook-addon-next',
//         ],
//         framework: '@storybook/react',
//         core: {
//             builder: '@storybook/builder-webpack5',
//         },
//         // typescript: {
//         //     check: false,
//         //     reactDocgen: 'none',
//         // },
//     },

//     STORYBOOK_PREVIEW: {
//         layout: 'fullscreen',
//         actions: { argTypesRegex: '^on[A-Z].*' },
//         controls: {
//             matchers: {
//                 color: /(background|color)$/i,
//                 date: /Date$/,
//             },
//         },
//         backgrounds: {
//             default: 'white',
//             values: [
//                 {
//                     name: 'black',
//                     value: '#000000',
//                 },
//                 {
//                     name: 'white',
//                     value: '#ffffff',
//                 },
//             ],
//         },
//         viewport: {
//             viewports: INITIAL_VIEWPORTS,
//         },
//     },
// }

const config = {
    eslint: ESLINT_ENV,
    next: NEXT_ENV,
    lintStaged: LINTSTAGED_ENV,
    prettier: PRETTIER_ENV

    // storybook: STORYBOOK_ENV,
};

// module.exports = config;
module.exports = {
    eslint: ESLINT_ENV,
    next: NEXT_ENV,
    lintStaged: LINTSTAGED_ENV,
    prettier: PRETTIER_ENV

    // storybook: STORYBOOK_ENV,
};
