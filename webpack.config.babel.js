const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  entry: [
    require.resolve('react-hot-loader/patch'),
    require.resolve('webpack-dev-server/client') + '?/',
    // require.resolve('webpack-dev-server/client?http://localhost:9000/'),
    require.resolve('webpack/hot/dev-server'),
    './src/main.js'
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true,
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: 'file-loader?name=/image/[name].[ext]'
      },
      // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         // { loader: 'css-loader?modules', options: { modules: true, importLoaders: 1 } },
            //         'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]',
            //         'postcss-loader'
            //     ]
            // },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallbackLoader: "style-loader",
            //         loader: [
            //             { loader: 'style-loader!css-loader?modules', query: { sourceMap: true } },
            //             { loader: 'postcss-loader' }
            //         ]
            //     })

            // },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[local]___[hash:base64:5]',
            'postcss-loader?sourceMap'
          ]
          // loader: [
          //   { loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[local]___[hash:base64:5]' },
          //   { loader: 'postcss-loader?sourceMap' },
          // ]
        })
      }
    ]

  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),

  ]
}