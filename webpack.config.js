const { resolve } = require('path');
const { smart } = require('webpack-merge');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const common = {
  context: resolve(__dirname),
  name: 'client',
  entry: {
    client: [resolve('src', 'client', 'index.tsx')],
    // client: ['core-js/stable', 'regenerator-runtime/runtime', resolve('src', 'client', 'index.tsx')],
    // client: './src/index.ts',
  },
  mode: isProd ? 'production' : 'development',
  devtool: 'source-map',
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
      '@': resolve(__dirname, './src'),
      'images': resolve(__dirname, './images'),
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
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: "./images", // store on disk
              // publicPath: "./images", // on code request e.g: <img src="./images" />, if omitted, it will be as same ouputPath
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        include: /\.module\.(css|less)$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              // should apply for css modules only
              modules: {
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            }
          },
          'less-loader',
        ]
      },
      {
        test: /\.(css|less)$/,
        exclude: /\.module\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            }
          },
          'less-loader',
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
    new FaviconsWebpackPlugin({
      logo: './images/stackoverflow.ico',
    }),
    new WebpackAssetsManifest(),
    new LoadablePlugin(),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      // 'jQuery': 'jquery',
      // 'window.jQuery': 'jquery',
    }),
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
    },
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api' : ''},
        secure: false,
      }
    }
  },
};

module.exports = smart(common);
