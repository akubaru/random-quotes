const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: './',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
           {
               test: /\.js$/,
               exclude: '/node_modules/',
               use: [  {
                        loader: 'babel-loader',
                        options: {
                        presets: [
                            "@babel/preset-react", 
                            "@babel/preset-env"
                         ],
                         plugins:['@babel/plugin-proposal-class-properties']}
                       },
                       {
                        loader: 'eslint-loader'
                       }

               ]
             },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }]},
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
             })
          ],
    devServer: {
            contentBase: path.join(__dirname, 'build'),
            compress: true,
            port: 9000
          }
        };