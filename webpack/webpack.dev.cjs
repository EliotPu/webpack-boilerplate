// @ts-check
console.log('webpack-dev-js');

const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    filename: '[name].[fullhash:8].bundle.mjs',
    chunkFilename: '[name].[chunkhash:8].mjs',
  },

  devServer: {
    open: true,
    hot: true,
    server: 'http',
    compress: true,
    historyApiFallback: true,
    port: 3000,
    allowedHosts: 'auto',

    watchFiles: [resolve(__dirname, '../src/'), resolve(__dirname, '../public/')],

    static: {
      directory: resolve(__dirname, '../dist'),
    },

    devMiddleware: {
      index: true,
      publicPath: '/',

      /** If you want to view files */
      // writeToDisk: true,
    },

    client: {
      progress: true,
      logging: 'log',
      overlay: true,
    },

    proxy: {
      '/api': {
        target: process.env.BACKEND_URL,
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash:8].bundle.css',
      chunkFilename: '[name].[chunkhash:8].css',
    }),
  ],
};

module.exports = () => config;
