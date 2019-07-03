const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const variables = require('./variables')


const srcDir = path.resolve(__dirname, 'src')

module.exports = (env, argv) => {
  return {
    entry: {
      'main': './src/js/index.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: [/node_modules/],
          include: path.resolve(srcDir, 'js'),
          use: 'babel-loader'
        },
        // { // We're not using css; but scss.
        //   test: /\.css$/i,
        //   use: ['style-loader', 'css-loader']
        // },
        {
          test: /\.(sass|scss)$/i,
          include: path.resolve(srcDir, 'sass'),
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        }

        // Loaders for other file types can go here
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(Object.assign({ template: "./src/html/index.html", inject: "head" }, variables))
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/assets',
    },

    devtool: argv.mode === 'development'? 'source-map' : 'none'
  }
}