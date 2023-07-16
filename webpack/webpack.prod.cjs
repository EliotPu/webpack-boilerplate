// @ts-check
console.log('webpack-prod-js');

const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const sitemapPaths = require('../sitemap-paths.cjs');

const imageMinimizerWebpackPluginConfig = require('./configs/image-minimizer-webpack-plugin.config.cjs');

const config = {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].bundle.mjs',
    chunkFilename: '[name].[contenthash].mjs',
    assetModuleFilename: 'assets/img/[contenthash][ext]',
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

      /**
       *  imagemin plugins for lossless optimization
       */
      new ImageMinimizerPlugin(imageMinimizerWebpackPluginConfig),
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

    /* https://www.npmjs.com/package/sitemap-webpack-plugin */
    new SitemapPlugin({
      base: 'http://localhost:9080',
      paths: sitemapPaths,
      options: {
        // filename: 'map.xml',
      },
    }),
  ],
};

module.exports = () => config;
