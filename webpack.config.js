const path = require('path');

module.exports = {
    entry: './src/pixels.js', // Your entry point
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
          type: 'var',
          name: 'pixels'
      }
  },
    devServer: {
        contentBase: './dist'
      },
    module: {
      rules: [
        {
          test: /\.js$/,
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
    mode: 'production' // You can set this to 'development' for dev mode
  };
  //start dev server with npx webpack serve.
  //npx webpack to bundle