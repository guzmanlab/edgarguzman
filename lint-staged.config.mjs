const config = require('./src/lib/config');

const lintStagedConfig = {
    ...config.env.lintStaged,
};

export default lintStagedConfig;
