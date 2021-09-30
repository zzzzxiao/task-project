const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: [
        require.resolve('react-hot-loader/patch'),
        require.resolve('webpack-dev-server/client') + '?/',
        // require.resolve('webpack-dev-server/client?http://localhost:9000/'),
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
    performance: { hints: false },
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
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {

                    }
                }
            },
            {
				// test: /\.(css|scss)$/,// 不晓得为啥这样并在一起写有问题，css和scss的loader要分开配置，不然有问题
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
							}
						},
						// {
						// 	loader: 'resolve-url-loader'
						// },
						{
							loader: 'sass-loader'
                        }, 
                        {
							loader: 'postcss-loader'
						}
					]
				})
			},
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
							loader: 'css-loader',
							options: {
								modules: true,
								importLoaders: 1,
								localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
							}
						},
                        { 
                            loader: 'postcss-loader', 
                            options: { sourceMap: true } 
                        }
                    ]
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
    devtool: "cheap-module-eval-source-map",
    // context: path.resolve(__dirname, 'src'),
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 9099,
        inline: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.join(__dirname, 'src/main.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: path.join(__dirname, 'src'),
                output: {
                  path: path.join(__dirname, 'dist'),
                },
                postcss: function () {
                    return [autoprefixer];
                },
                devServer: {
                    contentBase: "./dist", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        }),
        // new webpack.LoaderOptionsPlugin({
        //     test: /\.css$/,
        //     debug: true,
        //     options: {
        //       postcss: [
        //         precss(),
        //         autoprefixer({
        //           browsers: [
        //             'last 3 version',
        //             'ie >= 10',
        //           ],
        //         }),
        //         mqpacker(),
        //       ],
        //       context: path.join(__dirname, 'src'),
        //       output: {
        //         path: path.join(__dirname, 'dist'),
        //       },
        //     },
        //   })
    ]
}