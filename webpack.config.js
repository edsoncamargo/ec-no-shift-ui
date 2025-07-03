const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/ec-no-shift-ui.js',
  output: {
    filename: 'ec-no-shift-ui.min.js',
    path: __dirname + '/dist',
    library: 'ECNoShiftUI',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
