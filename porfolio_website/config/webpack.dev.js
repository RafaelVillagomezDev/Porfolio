const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const devConf = {
  mode: 'development',
  devServer: {
    port: 3002,
    static: '../dist',
  },
}
module.exports = merge(common, devConf)
