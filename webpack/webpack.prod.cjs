// @ts-check
console.log('webpack-prod-js');

const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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

  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
    }),
  ],
};

module.exports = () => config;
