const { resolve } = require('path');
const { smart } = require('webpack-merge');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const WebpackFreeTexPacker = require('webpack-free-tex-packer');

const isProd = process.env.NODE_ENV === 'production';

const common = {
  context: resolve(__dirname),
  name: 'client',
  entry: {
    client: [resolve('src', 'client', 'index.tsx')],
    // client: ['core-js/stable', 'regenerator-runtime/runtime', resolve('src', 'client', 'index.tsx')],
    // client: './src/entry.js',
  },
  mode: isProd ? 'production' : 'development',
  devtool: 'eval',
  target: 'web',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: "tmhao"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': resolve(__dirname, './src')
    } 
  },
  // externals: {
  //   'react': {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     amd: 'React',
  //     root: 'React'
  // },
  // 'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     amd: 'ReactDOM',
  //     root: 'ReactDOM'
  //   }    
  // },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   use: {
      //     loader: 'ts-loader',
      //     options: {
      //       configFile: resolve(__dirname, 'tsconfig.json')
      //     }
      //   },
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: "./images",
              publicPath: "./images",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },              
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: isProd ? '.env.prod' : '.env.dev',
      safe: false,
      systemvars: true,
    }),
    new HTMLWebpackPlugin({
      template: resolve(__dirname, 'index.ejs'),
      filename: 'index.html',
    }),
    new WebpackFreeTexPacker(resolve(__dirname, 'images'), 'assets'),
    new WebpackAssetsManifest(),
    new LoadablePlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
      },
    },
  },
  node: { fs: 'empty', worker_threads: 'empty' },
  devServer: {
    historyApiFallback: {
      index: '/'
    }
  },
};

module.exports = smart(common);
