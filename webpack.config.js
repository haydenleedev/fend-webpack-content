const path = require('path')
const webpack = require('webpack')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',  // starting point where webpack will begin to build our tree from.
    module: {
        rules: [
            
            {
                test: /\.json5$/i,
                loader: 'json5-loader',
                type: 'javascript/auto',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                  // eslint options (if necessary)
                },
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: '/\.js$/',  // babel loader will only conver any files that are ended with ".js".
                exclude: /node_modules/,  // babel loader will ignore all files under node_modules folder
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}