const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(css)$/,
        use: [{
          loader: "style-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }]
      },
      {test: /\.json/, loader: 'json-loader'}
    ]
  }
};
