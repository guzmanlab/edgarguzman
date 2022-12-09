// Eslint: Base Configuration

module.exports = {
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: true,
        },
    ],
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': [
        'off',
        {
            groups: [
                [
                    '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                ],
                ['^react', '^@?\\w'],
                ['^\\u0000'],
                ['^(src|internals)(/.*|$)'],
                ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ['^.+\\.s?css$'],
            ],
        },
    ],
    'simple-import-sort/import': 'off',
    'simple-import-sort/exports': 'off',
    'no-console': 'warn',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'prefer-const': 'error',
    'no-param-reassign': 'off',
    'vars-on-top': 'off',
    'import/extensions': 'off',

    'global-require': 'off',
};
