const path = require('path');

module.exports = {
    entry: './js/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};