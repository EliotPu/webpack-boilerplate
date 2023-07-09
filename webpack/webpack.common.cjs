// @ts-check
console.log('webpack-common-js');

const { resolve } = require('path');

const config = {
  target: 'browserslist',
  entry: {
    index: [resolve(__dirname, '../src/index')],
  },

  output: {
    clean: true,
    publicPath: '/',
    path: resolve(__dirname, '../dist'),
    crossOriginLoading: 'anonymous',
    module: true,
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: true,

      // The environment supports BigInt as literal (123n).
      bigIntLiteral: true,

      // The environment supports const and let for variable declarations.
      const: true,

      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: true,

      // The environment supports an async import() function to import EcmaScript modules.
      dynamicImport: true,

      // The environment supports an async import() when creating a worker, only for web targets at the moment.
      dynamicImportInWorker: false,

      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: true,

      // The environment supports 'globalThis'.
      globalThis: true,

      // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
      module: true,

      // The environment supports optional chaining ('obj?.a' or 'obj?.()').
      optionalChaining: true,

      // The environment supports template literals.
      templateLiteral: true,
    },
  },

  watchOptions: {
    aggregateTimeout: 600,
    ignored: [
      '**/package*.json',
      '**/.gitigonre',
      '**/webpack/**/*',
      '**/node_modules',
      '...',
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },

    /*
     * If we're going to use multiple entry points on a single HTML page,
     * optimization.runtimeChunk: 'single' is needed too,
     * otherwise we could get into trouble described https://bundlers.tooling.report/code-splitting/multi-entry/.
     */
    // runtimeChunk: 'single',

    minimizer: ['...'],
  },

  resolve: {
    mainFields: [
      'browser',
      'module',
      'main',
      '...',
    ],
    mainFiles: ['index', '...'],
    modules: [
      resolve(__dirname, '../src'),
      resolve(__dirname, '../src/components'),
      resolve(__dirname, '../src/utilities'),
      resolve(__dirname, '../src/pages'),
      resolve(__dirname, '../src/templates'),
      resolve(__dirname, '../src/assets'),
      resolve(__dirname, '../src/assets/favicon'),
      resolve(__dirname, '../src/assets/fonts'),
      resolve(__dirname, '../src/assets/icons'),
      resolve(__dirname, '../src/assets/images'),
      resolve(__dirname, '../src/assets/styles'),
      'node_modules',
      '...',
    ],
    extensionAlias: {
      '.js': [
        '.ts',
        '.mjs',
        '.cjs',
        '.js',
        '...',
      ],
      '.jsx': ['.tsx', '.jsx', '...'],
      '.mjs': ['.mts', '.mjs', '...'],
    },
    extensions: [
      '.tsx',
      '.jsx',
      '.ts',
      '.mjs',
      '.cjs',
      '.js',
      '.json',
      '.wasm',
      '...',
    ],

    alias: {
      '@': resolve(__dirname, '../'),

      '@assets': resolve(__dirname, '../src/assets'),

      '@favicon': resolve(__dirname, '../src/assets/favicon'),
      '@fonts': resolve(__dirname, '../src/assets/fonts'),
      '@icons': resolve(__dirname, '../src/assets/icons'),
      '@images': resolve(__dirname, '../src/assets/images'),
      '@styles': resolve(__dirname, '../src/assets/styles'),
      '@cssVars': resolve(__dirname, '../src/assets/styles/variables'),

      '@components': resolve(__dirname, '../src/components'),
      '@pages': resolve(__dirname, '../src/pages'),
      '@router': resolve(__dirname, '.../src/router'),
      '@templates': resolve(__dirname, '../src/templates'),
      '@utils': resolve(__dirname, '../src/utilities'),
    },

    unsafeCache: /src\/utilities/,
  },

  experiments: {
    /*
     * asyncWebAssembly: true,
     * buildHttp: true,
     * layers: true,
     * lazyCompilation: true,
     * syncWebAssembly: true,
     */
    outputModule: true,
    topLevelAwait: true,
  },
};

module.exports = () => config;
