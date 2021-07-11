const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'css/bundle.css'
    })
  ],
  mode: 'development',
  // devServer: {
  //   //指定项目html文件所在的根目录
  //   contentBase: path.resolve(__dirname, 'dist'),
  //   //指定项目端口号
  //   port: 3000,
  //   //启动gzip压缩
  //   compress: true
  // }
}