const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {

    // add SCSS support for CSS Modules
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            require.resolve("style-loader"),
            require.resolve("css-loader"),
            require.resolve("sass-loader"),
        ],
    });

    return config;
}
}