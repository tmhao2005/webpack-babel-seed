const presets = [
  [
    "@babel/preset-env",
    {
      // "useBuiltIns": "usage",
      // "corejs": 3,
      "modules": "cjs",
      "debug": false
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
  '@babel/plugin-proposal-class-properties',
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
  ]
];

module.exports = { presets, plugins };
