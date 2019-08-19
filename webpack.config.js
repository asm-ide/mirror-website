module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development'
  const isProduction = argv.mode == 'production'


  const path = require('path')

  // paths
  const srcDir = path.resolve(__dirname, 'src')

  // plugins
  const webpack = require('webpack')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  // development
  const StatsPlugin = isDevelopment && require('stats-webpack-plugin')

  // production
  const MiniCssExtractPlugin = isProduction && require("mini-css-extract-plugin")
  const UglifyJsPlugin = isProduction && require('uglifyjs-webpack-plugin')

  const cssLast = []

  isDevelopment && cssLast.push(
    'style-loader'
  )

  isProduction && cssLast.push(
    MiniCssExtractPlugin.loader
  )

  const css = [
    ...cssLast,
    'css-loader',
  ]

  const sass = [
    ...css,
    'resolve-url-loader',
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        sourceMapContents: false,
        includePaths: [
          path.resolve(__dirname, 'node_modules')
        ]
      }
    },
  ]

  const jsTest = /\.(js|jsx)$/i
  const tsTest = /\.(ts|tsx)$/i


  const rules = [

    // html

    // posthtml

    {
      test: /\.html$/,
      use: [
        'html-loader',
        {
          loader: 'posthtml-loader',
          options: require('./posthtml.config'),
        }
      ]
    },


    // // eslint
    // {
    //   enforce: 'pre',
    //   test: jsTest,
    //   loader: 'eslint-loader'
    // },

    // js
    {
      test: jsTest,
      loader: 'babel-loader'
    },

    // tslint
    {
      enforce: 'pre',
      test: /\.(js|jsx|ts|tsx)$/i,
      loader: 'tslint-loader',
      options: {
        configFile: 'tslint.yaml'
      },
    },

    // ts
    {
      test: tsTest,
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig.json'
      }
    },


    // style

    // sass
    {
      test: /\.(sass|scss)$/i,
      use: sass,
    },

    // css
    {
      test: /\.(css)$/i,
      use: css,
    },


    // other resources

    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            disable: isDevelopment,
          }
        }
      ]
    },
  ]

  let plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pages/index/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    ...(isDevelopment ? [
      new StatsPlugin(),
    ] : []),
    ...(isProduction ? [
      new MiniCssExtractPlugin(),
    ] : []),
  ]


  return {
    // input
    entry: {
      main: './src/pages/index',
    },
    // process
    module: {
      rules,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', 'sass', '.css'],
      modules: [srcDir, 'node_modules'],
      alias: {
        '#': srcDir,
      },
    },

    plugins,

    // output
    output: {
      path: path.resolve(__dirname, './public'),
      filename: '[name].bundle.js',
      publicPath: '/public',
    },
    externals: [],

    // development
    devtool: isDevelopment ? 'source-map' : 'none',

    // production
    optimization: {
      minimizer: isProduction ? [new UglifyJsPlugin()] : [],
      ...(isProduction? {splitChunks: { chunks: 'all' }} : {})
    },
  }
}
