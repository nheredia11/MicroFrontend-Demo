const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  devServer: { port: 3000, historyApiFallback: true },
  output: { publicPath: 'auto' },

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
      name: 'host',
      remotes: {
        projects: 'projects@http://localhost:8081/remoteEntry.js',
        tasks:    'tasks@http://localhost:8082/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        'react-dom': { singleton: true, requiredVersion: false }
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],

  resolve: { extensions: ['.js', '.jsx'] }
};
