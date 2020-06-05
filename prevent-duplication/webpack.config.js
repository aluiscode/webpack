const path= require('path');
const MiniCSSExtractPlugin = require ('mini-css-extract-plugin');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
const webpack = require ('webpack');

module.exports={
  entry: {
    index: path.resolve(__dirname,'src/js/index.js'),
    contact: path.resolve(__dirname,'src/js/contact.js'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.jpg|png|gif|woof|eot|svg|mp4|webm$/,
        use: {
          loader:'url-loader',
          options: {
            limit: 900000,
          }
        },
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: 'Luis Lazcano',
      template: path.resolve(__dirname,'index.html')
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'commons'
    }
  }
}