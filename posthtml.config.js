const path = require('path')


const plugins = [
  require('posthtml-expressions')({
    locals: require('./config/variables')
  })
]


module.exports = {
  plugins: [
    ...plugins,
    require('posthtml-modules')({
      root: path.resolve(__dirname, 'src'),
      plugins: plugins,
      from: './src/pages/header.html'
    })
  ]
}

// let plugins = [
//   require('posthtml-expressions')({
//     locals: require('./variables'),
//   }),
//   require('posthtml-noopener').noopener,
// ]

// module.exports = {
//   plugins: [
//     ...plugins,
//     require('posthtml-modules')({
//       root: './src',
//       plugins,
//     }),
//   ],
// }
