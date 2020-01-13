const presets = [
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "entry",
    }
  ],
  [
    "@babel/preset-typescript", 
  ]
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
];

module.exports = { presets, plugins };
