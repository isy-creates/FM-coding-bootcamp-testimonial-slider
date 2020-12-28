const path = require( 'path' );

//Why the curly brackets?! => meaning: named export ... what does that mean? 
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {

  //where the main js-file is located
  entry: './src/javascript/index.js',

  //where the output should be saved with specific filename
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'dist')
    //publicPath: '/'
  },

  //plugins to load
  plugins: [
    //clean dist folder on every new build run
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'bundled.css'}),
  ],

  module: {
    //Set up Rules for every file webpack encounters
    rules: [
      //CSS Rules
      {
        //Regular Expression to check filenames // apply rules for .sass, .scss and .css files
        test: /\.(sa|sc|c)ss$/,

        //Set loaders to transform files
        use: [
          //After all CSS loaders are done it gets all transformed CSS into one single file
          {
            loader: MiniCssExtractPlugin.loader
          },
          // Resolves url() and @imports inside CSS
          {
            
            loader: 'css-loader',
          },
          //Second, postCSS fixes like autoprefixer and minifyer
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({'overrideBrowserslist': ["last 10 version", "> 1%", "IE 10"]})
                ]
              }
            }
          },
          //First, transform SASS to standard CSS
          {
            loader: 'sass-loader',
            options: {
              implementation: require( 'sass' )
            }
          }
        ]
      },
      {
        //Image Rules
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        //inline dataurl rules
      },
      {
        // JS Rules
        test: /\.(js|jsx)$/,
        //Make sure to exclude files from the node_modules folder
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
    ]

  }

}