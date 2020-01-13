'use strict';

const { resolve } = require('path');
const { smart } = require('webpack-merge');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const common = {
  name: 'client',
  entry: {
    client: ['core-js/stable', 'regenerator-runtime/runtime', resolve('src', 'client', 'index.tsx')]
  },
  mode: isProd ? 'production' : 'development',
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],    
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        include: [resolve(__dirname, 'src')],
      },
    ]
  },
  plugins: [
    new Dotenv({
      path: isProd ? '.env.prod' : '.env.dev',
      safe: false,
      systemvars: true,
    }),
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: resolve(__dirname, 'index.ejs')
    }),
  ],
  devServer: {
    historyApiFallback: {
      index: '/'
    }
  },
};

module.exports = smart(common);
