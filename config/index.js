let path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, `../musicweb/index.html`),
    assetsRoot: path.resolve(__dirname, global.myConfig.dist),
    assetsSubDirectory: 'static',
    assetsPublicPath: '../../../musicweb/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8888,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/qqmusic/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/qqmusic': ''
        }
      }
    },
    cssSourceMap: false
  }
}
