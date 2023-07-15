const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  minimizer: {
    implementation: ImageMinimizerPlugin.imageminMinify,
    options: {
      /*
       * Lossless optimization with custom option
       * Feel free to experiment with options for better result for you
       */
      plugins: [
        ['gifsicle', { interlaced: true }],
        ['jpegtran', { progressive: true }],
        ['optipng', { optimizationLevel: 5 }],
        [ /* Svgo configuration here https://github.com/svg/svgo#configuration */
          'svgo',
          {
            /* Pass over SVGs multiple times to ensure all optimizations are applied. False by default */
            multipass: true,
            plugins: [
              {
                /*
                 * set of built-in plugins enabled by default
                 * see: https://github.com/svg/svgo#default-preset
                 */
                name: 'preset-default',
                params: {
                  overrides: {
                    addAttributesToSVGElement: {
                      params: {
                        attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                      },
                    },
                    addClassesToSVGElement: {
                      params: {
                        classNames: ['className1', 'className2'],
                      },
                    },

                    /*
                     * prefixIds: true,
                     * removeAttributesBySelector: 'path',
                     * removeAttrs: //,
                     * removeOffCanvasPaths: true,
                     * removeScriptElement: true,
                     * removeStyleElement: true,
                     * removeXMLNS: true,
                     */
                  },
                },
              },
            ],
          },
        ],
      ],
    },
  },
  generator: [
    {
      // You can apply generator using `?as=webp`, you can use any name and provide more options
      preset: 'webp',
      implementation: ImageMinimizerPlugin.imageminGenerate,
      options: {
        plugins: ['imagemin-webp'],
      },
    },
  ],
};
