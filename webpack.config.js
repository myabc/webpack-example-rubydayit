var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var I18nPlugin = require("i18n-webpack-plugin");
var srcPath = path.join(__dirname, 'src');
var StatsPlugin = require('stats-webpack-plugin');

var languages = {
    "en": null,
    "es": require("./src/locales/es.json"),
    "de": require("./src/locales/de.json")
};

var env = process.env.NODE_ENV;

// css
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

var config = Object.keys(languages).map(function(language) {
  var currentConfig = {
    lang: language,
    target: 'web',
    cache: true,
    name: language,
    context: __dirname + '/src/app',
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    debug: true,
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/app/app.jsx')
    ],
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/',
      filename: language + ".bundle.js",
      chunkFilename: '[id].js'
    },
    plugins: [
      new I18nPlugin(languages[language]),
      new webpack.optimize.DedupePlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin("[name].css"),
      new HtmlWebpackPlugin({
            title: 'Webpack Example',
            filename: 'index.html',
            template: 'index-template.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
      }),
      new StatsPlugin('stats/stats.json', {
        chunkModules: true,
        exclude: [/node_modules[\\\/]react/]
      })
    ],
    module: {
        loaders: [
          { test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loaders: ['react-hot', 'babel?optional[]=runtime&stage=0'],
            include: path.join(__dirname, 'src/app')
          },
          { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=images/[name].[ext]' }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.styl'],
      resolve: {
        root: [path.join(__dirname, "assets", "styles")]
      },
    }
  };
  if (env === 'production') {
  	currentConfig.plugins = currentConfig.plugins.concat([
      new webpack.DefinePlugin({
        "process.env": {
          // This has effect on the react lib size
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin()
  	]);

  }
  return currentConfig;
});

module.exports = config;

module.exports.output = {
  publicPath: "/"
};
