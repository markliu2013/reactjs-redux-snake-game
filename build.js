require("@babel/register");

var path = require("path");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
webpackConfig.mode = 'production';
webpackConfig.output.path = path.resolve(__dirname, 'dist');

const compiler = webpack(webpackConfig);
compiler.run((err, stats) => { console.log(err) });