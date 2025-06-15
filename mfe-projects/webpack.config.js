const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  devServer: { port: 3001 },
  output: { publicPath: 'http://localhost:8081/' },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'projects',
      filename: 'remoteEntry.js',
      exposes: { './Projects': './src/Projects' },
      shared: {
        react: { singleton: true, requiredVersion: false },
        'react-dom': { singleton: true, requiredVersion: false }
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],

  resolve: { extensions: ['.js', '.jsx'] }
};
