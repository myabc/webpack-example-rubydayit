var isProduction = process.env.NODE_ENV === 'production';

var port = isProduction ? 8080 : 3000;

if (isProduction) {
  var express = require('express');
  var path = require('path');
  var app = express();
  var publicPath = path.resolve(__dirname, 'build');
  // We point to our static assets
  app.use(express.static(publicPath));
  // And run the server
  app.listen(port, function () {
    console.log('Server running on port ' + port);
  });
  
} else {
  console.log('development');
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');
  var React = require('react');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    stats: { colors: true },
    filename: "bundle.js",
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true
  }).listen(port, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:3000');
  });
}

