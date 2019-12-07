const path = require('path');
const fs = require('fs');
 
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, 'src'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
    ],
  },
  target: 'node',
};
