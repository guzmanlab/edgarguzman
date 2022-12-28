const config = require('../src/lib/config/index.js');

module.exports = {
    ...config.env.storybook.STORYBOOK_MAIN,
};
