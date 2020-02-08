const path = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  
  entry: './main.js',
  output: {
    filename: 'app-[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body',
        minify:{
            collapseWhitespace:true,
            removeComments:true,
            removeAttributeQuotes:true
        }
    })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
   }
}

module.exports = config;