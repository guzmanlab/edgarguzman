import { create } from '@storybook/theming';

export default create({
    base: 'light',

    colorPrimary: 'black',
    colorSecondary: 'black',

    // UI
    appBg: 'black',
    appContentBg: 'white',
    appBorderColor: 'black',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Arial", Helvetica, sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'black',

    // Toolbar default and active colors
    barTextColor: 'black',
    barSelectedColor: 'black',
    barBg: '#cccccc4d',

    // Form colors
    inputBg: 'white',
    inputBorder: 'black',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    // Brand assests
    brandTitle: process.env.COMPANY_LOGO,
    brandUrl: process.env.SITE_DEVELOPMENT_URL,
    brandTarget: '_self',
});
