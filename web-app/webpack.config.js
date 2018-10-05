const path = require('path');

module.exports = {
  mode: 'development',
  entry: './web-app/src/index.tsx',
  devtool: 'inline-source-map',
  //TODO: Can't config dev-server "Module not found: Error: Can't resolve './src' in '/home/airmap/Projects/Fit-or-Dead'"
  devServer: {
    publicPath: path.resolve(__dirname, 'web-app')
  },
  module: {
    rules: [
      {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
