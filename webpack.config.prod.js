const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );

module.exports = merge(commonConfig, {

  mode: 'production',
  devtool: 'source-map',

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        map: {
          inline:false,
          annotation: true,
        }
      }),
      new TerserPlugin({
        //multi-process parallel running to speed up building process
        parallel:true
      })
    ]
  }
})