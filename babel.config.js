const presets = [
  [
    "@babel/preset-env",
    {
      // Result error in case of this option
      // "useBuiltIns": "usage",
      // "corejs": 3,
      // `cjs` prevent loadable produce chunks
      "modules": 'auto', // false to keep `esm`, auto would work on both case `loadable` + `jest`
      "debug": false,
      "targets": process.env.NODE_ENV === 'test' ? {
        "node": "current" // testing
      } : {
        "chrome": 80,
      }
    }
  ],
  [
    "@babel/preset-react", 
  ],
  [
    "@babel/preset-typescript", 
  ],
  '@emotion/babel-preset-css-prop',
];

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  // '@babel/plugin-proposal-class-properties', // NOTE: It doesn't work with storybook
  [
    // https://github.com/gajus/babel-plugin-react-css-modules/issues/291
    // fix the hash name doesn't match anymore
    "@dr.pogodin/babel-plugin-react-css-modules", 
    {
      "webpackHotModuleReloading": true,
    },
  ],
  [
    "import",
    {
      libraryName: "antd",
      style: "css",
    }
  ],
  "@babel/plugin-proposal-export-default-from"
];

module.exports = { presets, plugins };
