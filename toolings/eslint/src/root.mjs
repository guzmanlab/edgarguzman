import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import onlyWarn from 'eslint-config-only-warn';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const gitignorePath = path.resolve(__dirname, '../../../.gitignore');

/** @type {import("eslint").Linter.Config} */
export const eslintJsConfig = [
    js.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
        plugins: {
            turbo: turboPlugin
        },
        rules: {
            // Eslint
            semi: 'error',
            quotes: ['error', 'single'],

            'prefer-const': 'off',
            'prefer-template': 'error',
            'prefer-arrow-callback': 'error',

            'arrow-body-style': 'error',

            // Turbo
            'turbo/no-undeclared-env-vars': 'warn',

            // Typescript Eslint
            '@typescript-eslint/no-empty-object-type': 'error'
        }
    },
    {
        plugins: {
            onlyWarn
        }
    },
    {
        ignores: [
            'dist/**'
        ]
    },
    includeIgnoreFile(gitignorePath)
];
