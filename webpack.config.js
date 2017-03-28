const webpack = require('webpack');
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function root(__path) {
  return path.join(__dirname, __path);
}
const config = {
    entry: {
        app:['./index.js']
    },
    output: { //输出目录
        publicPath: "",
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'es2016', 'es2017', 'stage-0'],
                    plugins: ['transform-decorators-legacy']
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                loader: "css-loader!autoprefixer-loader?{browsers:['last 6 Chrome versions', 'last 3 Safari versions', 'iOS >= 5', 'Android >= 4.0']}!sass-loader",
            }),
        }, {
            test: /\.png$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '../img/[name].[ext]'
                }
            }
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('./src'), // location of your src
            {} // a map of your routes 
        ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('css/style.css')
        /*new HtmlWebpackPlugin({
            title: 'index',
            hash:true,
            template: 'index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        })*/
    ]
};
module.exports = config;