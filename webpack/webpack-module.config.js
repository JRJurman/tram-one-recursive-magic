// module config for webpack
module.exports = (nodeEnv) => nodeEnv === 'development' ?
{} :
({
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          "presets": [
            [
              "@babel/preset-env",
              {
                targets: "> 2.5%, ie >= 11",
                useBuiltIns: false
              }
            ]
          ]
        }
      }
    }
  ]
})
