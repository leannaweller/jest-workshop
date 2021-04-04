const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// root path for this project
const ROOT = __dirname;

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/index.js"
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(ROOT, 'dist/index.html'),
  })],
  module: {
    rules: [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
     {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: 'file-loader',
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  }
};