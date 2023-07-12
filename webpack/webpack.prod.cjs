// @ts-check
console.log('webpack-prod-js');

const config = {
  mode: 'production',

  output: {
    filename: '[name].[contenthash].bundle.mjs',
    chunkFilename: '[name].[contenthash].mjs',
  },
};

module.exports = () => config;
