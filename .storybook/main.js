const path = require("path");
const custom = require("../webpack.config.js");

module.exports = {
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
