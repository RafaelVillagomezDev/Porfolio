const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const prodConf = {
  mode: 'production',
}
module.exports = merge(common, prodConf)
