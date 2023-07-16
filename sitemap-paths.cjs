/* https://www.npmjs.com/package/sitemap-webpack-plugin */
module.exports = [
  '/foo/',
  '/bar/',
  {
    path: '/baz/',
    lastmod: '2023-07-07',
    priority: 0.5,
    changefreq: 'yearly',
  },
];
