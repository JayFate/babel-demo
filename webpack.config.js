const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              presets: [
                [
                  require.resolve('@babel/preset-env'),
                  {
                    exclude: [
                      // 'transform-regenerator',
                      // 'transform-async-to-generator'
                    ]
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
};
