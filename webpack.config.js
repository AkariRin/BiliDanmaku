const path = require('path')

const config = {
  
  entry: './main.js',
  output: {
    filename: 'app.js',
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
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
   }
}

module.exports = config;