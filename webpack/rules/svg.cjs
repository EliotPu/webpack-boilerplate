const svgToMiniDataURI = require('mini-svg-data-uri');

const devMode = process.env.NODE_ENV === 'development';

module.exports = [
  {
    test: /\.svg$/i,
    type: 'asset',
    generator: {
      dataUrl: content => {
        content = content.toString();

        return svgToMiniDataURI(content);
      },
      filename: `assets/icons/${devMode
        ? '[name].[contenthash:8]'
        : '[contenthash]'}.svg`,
    },
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024, // 8kb
      },
    },
  },
];
