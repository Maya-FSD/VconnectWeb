const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    buffer: require.resolve("buffer/"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    })
  );
  return config;
};
