const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules'],
        use: [{ loader: 'babel-loader' }],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/src/index.html'),
    }),
    new CleanWebpackPlugin(),
  ]
}
