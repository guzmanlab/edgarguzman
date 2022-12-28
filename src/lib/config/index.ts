// # Config for All with the following `.config.*` including `.eslintrc.js`

const { eslint, next, lintStaged, prettier, storybook } = require('../object');

const config = {
    env: {
        // Configuration: Project Style Guide
        eslint,
        next,
        lintStaged,
        prettier,

        // Project Storybook Configuration
        storybook,

        // Configuration
        COMPANY_LOGO: 'Edgar Guzman',
        PHONE_NUMBER: '(xxx) xxx-xxxx',
        SITE_URL: 'https://edgarguzman.co',
        SITE_DEVELOPMENT_URL: 'http://localhost:6006',
        SITE_FAVICON: '/images/favicon.ico',
        SITE_LOGO: '/images/logo.svg',
        SITE_LOGO_SQUARE: '/images/logox200.svg',
        EMAIL_ADDRESS: 'admin@edgarguzman.co',
        TWITTER: 'https://twitter.com/edgaralexisguz',
        TWITTER_HANDLE: '@edgaralexisguz',
        FACEBOOK: 'https://www.facebook.com/edgaralexisguz',
        INSTAGRAM: 'https://www.instagram.com/edgaralexisguzman',
        LINKEDIN: 'https://www.linkedin.com/in/edgaralexisguzman',
    },
};

export default config;
