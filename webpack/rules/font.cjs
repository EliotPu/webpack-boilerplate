const devMode = process.env.NODE_ENV === 'development';

module.exports = [
  {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: `assets/fonts/${devMode
        ? '[name].[contenthash:8]'
        : '[name].[contenthash]'}[ext]`,
    },
  },
];
