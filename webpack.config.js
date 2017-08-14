const path = require('path');

module.exports = {
  entry: {
    'sidebar/panel': ['./src/panel.js'],
    'popup/popup': ['./src/popup.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'source-map'
};
