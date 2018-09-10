const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src/index.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    }
};