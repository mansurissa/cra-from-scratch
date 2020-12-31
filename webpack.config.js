require('dotenv/config.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PORT } = process.env;

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
    open: true,
    port: PORT || 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'dist/index.html'),
    }),
  ],
};
