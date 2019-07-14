const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const variables = require('./variables')


const srcDir = path.resolve(__dirname, 'src')

module.exports = (env, argv) => {
  const css = [
    'css-loader',
    // 'autoprefixer-loader',
  ]

  const sass = [
    ...css,
    'sass-loader',
  ]

  const jsTest = /\.(js|jsx)$/i
  const tsTest = /\.(ts|tsx)$/i

  return {
    entry: {
      main: './src/script/index.ts',
    },
    module: {
      rules: [

        // eslint
        {
          enforce: 'pre',
          test: jsTest,
          include: path.resolve(srcDir, 'script'),
          loader: 'eslint-loader'
        },

        // ts
        {
          test: tsTest,
          include: path.resolve(srcDir, 'script'),
          loader: 'ts-loader',
          options: {
            configFile: 'jsconfig.json'
          }
        },

        // js
        {
          test: jsTest,
          include: path.resolve(srcDir, 'script'),
          loader: 'babel-loader'
        },


        // style

        // sass
        {
          test: /\.(sass|scss)$/i,
          include: path.resolve(srcDir, 'style'),
          oneOf: [
            {
              resourceQuery: /string/,
              use: ['css-to-string-loader', ...sass]
            },
            {
              use: ['style-loader', ...sass]
            },
          ],
        },

        // css
        {
          test: /\.(css)$/i,
          include: path.resolve(srcDir, 'style'),
          oneOf: [
            {
              resourceQuery: /string/,
              use: ['css-to-string-loader', ...css]
            },
            {
              loader: ['style-loader', ...css]
            },
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                disable: true
              }
            }
          ]
        },
      ],

    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        _: path.resolve(srcDir, 'script'),
        _src: srcDir,
        _root: __dirname
      }
    },
    plugins: [
      new HtmlWebpackPlugin(Object.assign({ template: './src/html/index.html' }, variables))
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/dist',
    },

    devtool: argv.mode === 'development' ? 'source-map' : 'none'
  }
}