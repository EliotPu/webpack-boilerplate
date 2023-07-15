// @ts-check
console.log('webpack-prod-js');

const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      new CssMinimizerPlugin({
        parallel: true,
        minify: CssMinimizerPlugin.cleanCssMinify,
        minimizerOptions: {
          // @ts-ignore
          level: {
            1: {
              all: true,
            },
            2: {
              all: true,
            },
          },
        },
      }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.css',
      chunkFilename: '[name].[contenthash].css',
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
    }),
  ],
};

module.exports = () => config;
