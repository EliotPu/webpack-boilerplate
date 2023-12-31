module.exports = {
  /* Your source logo (required) */
  logo: './src/assets/favicon/logo.png',

  /* Your maskable source logo (optional) */
  // logoMaskable: './src/logo-maskable.png',

  /*
   * Allow caching the assets across webpack builds. By default this will use
   * webpack's cache configuration, but can be set to false to disable caching.
   * Note: disabling caching may increase build times considerably.
   * For more information, see: https://webpack.js.org/configuration/cache/
   */
  cache: true,

  /* Override the publicPath option usually read from webpack configuration */
  // publicPath: '/static',

  /*
   * The directory to output the assets relative to the webpack output dir.
   * Relative string paths are allowed here ie '../public/static'. If this
   * option is not set, `prefix` is used.
   */
  // outputPath: '/public/static',

  /* Prefix path for generated assets */
  prefix: 'assets/favicon/',

  /*
   * Inject html links/metadata (requires html-webpack-plugin).
   * This option accepts arguments of different types:
   *  * boolean
   *    `false`: disables injection
   *    `true`: enables injection if that is not disabled in html-webpack-plugin
   *  * function
   *    any predicate that takes an instance of html-webpack-plugin and returns either
   *    `true` or `false` to control the injection of html metadata for the html files
   *    generated by this instance.
   */
  inject: true,

  /* Favicons configuration options (see below) */
  /*
   * favicons: {
   *   appName: 'my-app',
   *   appDescription: 'My awesome App',
   *   developerName: 'Me',
   *   developerURL: null, // prevent retrieving from the nearest package.json
   *   background: '#ddd',
   *   theme_color: '#333',
   *   icons: {
   *     coast: false,
   *     yandex: false,
   *   },
   * },
   */
};
