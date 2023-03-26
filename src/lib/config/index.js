// # Config for All with the following `.config.*` including `.eslintrc.js`

const { eslint, next, lintStaged, prettier } = require('./object');

const config = {
    env: {
        // Project Style Guide Configuration
        eslint,
        next,
        lintStaged,
        prettier

        // Project Storybook Configuration
        // storybook
    }
};

module.exports = config;
