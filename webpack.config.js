const path = require('path');

const CLIENT_PATH = path.resolve(__dirname + '/client');

module.exports = {
  entry: CLIENT_PATH + '/index.js',
  output: {
    path: CLIENT_PATH + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: CLIENT_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
}