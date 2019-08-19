module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 2
      },
      "babel-preset-solid"
    ]
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }]
  ]
}
