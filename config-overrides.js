const { override, addBabelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
    addBabelInclude([
        path.resolve('src'),
        path.resolve('node_modules/react-date-range'),
        path.resolve('node_modules/date-fns'),  // Include date-fns for transpilation
    ])
);