// const config = require('./src/lib/config/index');
const { base, eslint, next, prettier, react, typescript } = requireFunction();

function requireFunction() {
    const base = require('./src/lib/rules/base');
    const eslint = require('./src/lib/rules/eslint');
    const next = require('./src/lib/rules/next');
    const prettier = require('./src/lib/rules/prettier');
    const react = require('./src/lib/rules/react');
    const typescript = require('./src/lib/rules/typescript');

    return {
        base,
        eslint,
        next,
        prettier,
        react,
        typescript
    };
}

// const TS_OVERRIDE = {
//     files: ['**/*.ts', '**/*.tsx'],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//         project: './tsconfig.json',
//         tsconfigRootDir: __dirname
//     },
//     plugins: ['@typescript-eslint'],
//     extends: [
//         'eslint:recommended',
//         'next',
//         'prettier',
//         'airbnb',
//         'airbnb/hooks',
//         'airbnb-typescript',
//         'next/core-web-vitals',
//         'plugin:react/recommended',
//         'plugin:prettier/recommended',
//         'plugin:@typescript-eslint/recommended',

//         'plugin:@typescript-eslint/eslint-recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:@typescript-eslint/recommended-requiring-type-checking',
//         // 'prettier/@typescript-eslint',
//     ],
//     // rules: {
//     //     ...base,
//     //     ...eslint,
//     //     ...next,
//     //     ...prettier,
//     //     ...react,
//     //     ...typescript
//     // },
// };

module.exports = {
    // ...config.env.eslint,
    // extends: [
    //     'plugin:storybook/recommended',
    //     'eslint:recommended',
    //     'plugin:react/recommended'
    // ]

    // root: true,
    // env: {
    //     es6: true,
    //     browser: true,
    //     commonjs: true,
    //     es2015: true,
    //     es2016: true,
    //     es2017: true,
    //     es2018: true,
    //     es2019: true,
    //     es2020: true,
    //     es2021: true,
    //     es2022: true,
    //     node: true
    // },
    // extends: [
    //     'eslint:recommended',
    //     'next',
    //     'prettier',
    //     'airbnb',
    //     'airbnb/hooks',
    //     'airbnb-typescript',
    //     'next/core-web-vitals',
    //     'plugin:react/recommended',
    //     // 'plugin:prettier/recommended',
    //     'plugin:@typescript-eslint/recommended'
    // ],
    // overrides: [TS_OVERRIDE],
    // ignorePatterns: [
    //     '.eslintrc.js',
    //     'prettier.config.js',
    //     'next.config.js',
    //     'next.config.mjs',
    //     'lint-staged.config.js',
    //     './tsconfig.json',
    //     '/public/scripts/**/*'
    //     // '/public/scripts/wireframe.{js, ts}',
    //     // '/public/scripts/**/*.{js, ts}',
    // ],
    // parser: '@typescript-eslint/parser',
    // parserOptions: {
    //     ecmaVersion: 'latest',
    //     sourceType: 'module',
    //     project: './tsconfig.json',
    //     ecmaFeatures: {
    //         arrowFunctions: true,
    //         classes: true,
    //         modules: true,
    //         templateStrings: true,
    //         globalReturn: true,
    //         jsx: true
    //     }
    // },
    // plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
    // rules: {
    //     ...base,
    //     ...eslint,
    //     ...next,
    //     ...prettier,
    //     ...react,
    //     ...typescript
    // }

    // This is a temporary until I found a solution to tbis madness problem - Edgar
    extends: [
        'eslint:recommended',
        'plugin:storybook/recommended',
        'plugin:react/recommended',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    ignorePatterns: [
        '.eslintrc.js',
        'prettier.config.js',
        'lint-staged.config.js',
        'next.config.js',
        'src/utils/data-base.ts',
        'next-env.d.ts',
        'environment.d.ts',
        'global-types.d.ts',
        'tsconfig.json',
        'tsconfig.prod.json',
        'tsconfig.eslint.json'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,

        project: ['./tsconfig.eslint.json']
    },
    plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
    root: true,
    rules: {
        'no-undef': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-empty-function': 'off',

        '@next/next/inline-script-id': 'off',
        'react/no-unescaped-entities': 'off'
    }
};
