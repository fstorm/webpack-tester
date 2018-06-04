const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-bundle.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new MinifyPlugin(/\.js($|\?)/)
    ],
    mode: "development", 
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
            }
  }
}