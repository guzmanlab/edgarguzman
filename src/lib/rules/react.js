// Eslint: React Configuration

module.exports = {
    'react/jsx-filename-extension': [
        'warn',
        {
            extensions: ['.ts', '.tsx']
        }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
        0,
        {
            namedComponents: ['arrow-function'],
            unnamedComponents: ['arrow-function']
        }
    ],
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-quotes': 'off',
    'react/wrap-multilines': 'off',
    'react/button-has-type': 'off'
};
