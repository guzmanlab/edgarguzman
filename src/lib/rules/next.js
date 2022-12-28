// Eslint: Next Configuration

module.exports = {
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
        'error',
        {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
        },
    ],
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
    '@next/next/inline-script-id': 'off',
};
