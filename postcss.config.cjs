module.exports = {
  /*
   * Add you postcss configuration here
   * Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
   */
  /* Necessary for external CSS imports to work */
  ident: 'postcss',
  plugins: [['postcss-preset-env'], require('./node_modules/postcss-modules-values')],
};
