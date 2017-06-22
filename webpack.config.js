const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: [
        require.resolve('react-hot-loader/patch'),
        require.resolve('webpack-dev-server/client') + '?/',
        require.resolve('webpack/hot/dev-server'),
        './src/main.js'
        ],
    // entry: [ // 不知为何以下这个配置不得行
    //     './src/main.js',
    //     'webpack/hot/dev-server',
    //     'webpack-dev-server/client?http://localhost:8080/'
    // ],
    // entry: {
    //     app: './src/main.js',
    //     // vendor: ['react', 'react-dom']
    // },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "/assets/"
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.less'] // require 的时候，可以不用写文件类型
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['react','es2015']
                    // }
                }
            },
            {
                test: /\.html$/,
                // use: [
                //     "htmllint-loader",
                //     {
                //         loader: "html-loader",
                //         options: {

                //         }
                //     }
                // ]
                use: {
                    loader: "html-loader",
                    options: {

                    }
                }
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            { //loading images
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {// loading fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ],
    },
    devtool: "cheap-eval-source-map",
    // context: path.resolve(__dirname, 'src'),
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.join(__dirname, 'src/main.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),
        new webpack.NamedModulesPlugin()
    ]
}