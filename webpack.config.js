const { resolve } = require("path");
const { smart } = require("webpack-merge");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

const common = {
  context: resolve(__dirname),
  name: "client",
  entry: {
    client: [resolve("src", "client", "index.tsx")],
    // client: ['core-js/stable', 'regenerator-runtime/runtime', resolve('src', 'client', 'index.tsx')],
    // client: './src/index.ts',
  },
  mode: isProd ? "production" : "development",
  devtool: "source-map",
  // IE11 support with `es5`
  target: "web",
  output: {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
    publicPath: "/",
    libraryTarget: "umd",
    library: "tmhao",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": resolve(__dirname, "./src"),
      images: resolve(__dirname, "./images"),
    },
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
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      // Or using ts-loader but will no longer be able to use useful babel plugins due to using tsc
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
        // include: [path.resolve(__dirname, "images")],
        use: [
          {
            loader: "file-loader",
            options: {
              // esModule: true, // require('images/baz').default
              outputPath: "./images", // store on disk
              // publicPath: "./images", // on code request e.g: <img src="./images" />, if omitted, it will be as same ouputPath
            },
          },
        ],
      },
      {
        test: /\.(css|less|scss)$/,
        include: /\.module\.(css|less|scss)$/,
        use: [
          "style-loader",
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {
              // should apply for css modules only
              modules: {
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(css|less|scss)$/,
        exclude: /\.module\.(css|less|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: isProd ? ".env.prod" : ".env.dev",
      safe: false,
      systemvars: true,
    }),
    new HTMLWebpackPlugin({
      template: resolve(__dirname, "index.ejs"),
      filename: "index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./images/yt_32.png",
    }),
    new WebpackAssetsManifest(),
    new LoadablePlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    },
  },
  node: { fs: "empty", worker_threads: "empty" },
  devServer: {
    historyApiFallback: {
      index: "/",
    },
    open: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        secure: false,
      },
    },
  },
};

module.exports = smart(common);
