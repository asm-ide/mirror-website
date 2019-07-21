module.exports = ({ file, env, map }) => ({
  parser: file.extname === '.sss' ? 'sugarss' : false,
  map: env === 'development' ? map : false,
  plugins: {
    'postcss-plugin': env === 'production' ? {} : false,
    autoprefixer: {}
  }
})