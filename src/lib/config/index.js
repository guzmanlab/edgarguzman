// # Config for All with the following `.config.*` including `.eslintrc.js`

const { eslint, next, lintStaged, prettier } = require('../import');

const config = {
    env: {
        // ### Eslint
        eslint,

        // ### Next
        next,

        // ### Lint-Staged
        lintStaged,

        // ### Pretter
        prettier,
    },
};

module.exports = config;
