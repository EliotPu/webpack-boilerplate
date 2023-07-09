// @ts-check
console.log('webpack-prod-js');

const TerserPlugin = require('terser-webpack-plugin');

const config = {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].bundle.mjs',
    chunkFilename: '[name].[contenthash].mjs',
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          /* https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions */
        },
      }),
    ],
  },
};

module.exports = () => config;
