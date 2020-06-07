const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',  // starting point where webpack will begin to build our tree from.
    module: {
        rules: [
            {
                test: '/\.js$/',  // babel loader will only conver any files that are ended with ".js".
                exclude: /node_modules/,  // babel loader will ignore all files under node_modules folder
                loader: "babel-loader"
            }
        ]
    }
}