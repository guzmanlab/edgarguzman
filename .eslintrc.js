const config = require('./src/lib/config');

const eslintConfig = {
    ...config.env.eslint,
};

module.exports = eslintConfig;
