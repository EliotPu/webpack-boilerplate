// @ts-check
console.log('webpack-dev-js');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
};

module.exports = () => config;
