const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {

  // specifies the mode
  mode: 'development',

  //Include Source-Map
  devtool: 'inline-source-map',

  //watch for changes
  watch:true,
  
})
