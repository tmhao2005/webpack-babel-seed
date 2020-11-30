const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "webpackFinal": (config) => {
    config.module.rules.push({
      // test: /\.less$/,
      test: /.*\.(?:le|sc)ss$/,
      include: [
        // Include antd to rebuild
        /[\\/]node_modules[\\/].*antd/,
        path.resolve(__dirname, 'styles'),
      ],
      use: [
        'style-loader',
        'css-loader',
        // 'less-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },            
          },
        },
      ],
    });

    return config;
  }
}