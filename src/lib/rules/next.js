// Eslint: Next Configuration

module.exports = {
    'jsx-a11y/href-no-hash': 'off',
    // TODO : I need to get this fix - Edgar
    // 'jsx-a11y/anchor-is-valid': [
    //     'error',
    //     {
    //         components: ['Link'],
    //         specialLink: [
    //             'hrefDefault',
    //             'hrefLeft',
    //             'hrefRight'
    //         ],
    //         aspects: [
    //             'noHref',
    //             'invalidHref',
    //             'preferButton'
    //         ]
    //     }
    // ],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
    '@next/next/inline-script-id': 'off',

    '@next/next/no-html-link-for-pages': 0,
    // '@next/next/no-sync-script': 1,

    'jsx-a11y/label-has-associated-control': 'off'
};
