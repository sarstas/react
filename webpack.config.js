const path = require('path');
// const webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname, 'static_src'),
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'bundle.js',
        publicPath: '/static/build/',
    },
    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'static_src'),
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
    },
};
