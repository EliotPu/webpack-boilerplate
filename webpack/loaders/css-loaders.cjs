const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV === 'development';
const buildMode = process.env.NODE_BUILD;

const styleLoader = {
  loader: 'style-loader',
};

const MiniCssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader,
};

module.exports = [
  !buildMode ? { ...styleLoader } : { ...MiniCssExtractPluginLoader },
  {
    loader: 'css-loader',
    options: {
      /**
       * The modules option enables/disables the CSS Modules specification and setup basic behaviour.
       * https://webpack.js.org/loaders/css-loader/#modules
       */
      modules: {
        // namedExport: true,
        localIdentName: devMode ? '[path][name]__[local]--[hash:base64:6]' : '[hash:base64:6]',
      },
      esModule: true,
      importLoaders: 1,
      sourceMap: devMode,
    },
  },
  {
    loader: 'postcss-loader',
  },
];
