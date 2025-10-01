import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginNext from 'eslint-plugin-next';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { eslintJsConfig } from './root.mjs';

/** @type {import("eslint").Linter.Config} */
export const eslintNextConfig = [
    ...eslintJsConfig,
    js.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.serviceworker
            }
        }
    },
    {
        plugins: {
            '@next/next': pluginNext
        },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs['core-web-vitals'].rules
        }
    },
    {
        plugins: {
            'react-hooks': pluginReactHooks
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            
            'react/react-in-jsx-scope': 'off'
        }
    }
];
