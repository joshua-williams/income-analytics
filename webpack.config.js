const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    'app': path.resolve(__dirname, 'resources/js/app.js'),
    'styles': path.resolve(__dirname, 'resources/sass/app.scss')
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/bundle'),
    publicPath: path.resolve(__dirname, 'public/bundle')
  },


  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'resources/js')
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, {
      test: /\.s?css$/,
      use: [
        //{loader: 'style-loader'},
        {loader: MiniCssExtractPlugin.loader},
        {loader: 'css-loader'},
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'resources/scss')],
            implementation: require("sass")
          }
        }
        ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
    })
  ]
}