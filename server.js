import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel.js';

const APP_PORT = 3000;

var compiler = webpack(webpackConfig);
var app = new WebpackDevServer(compiler, {
    contentBase: webpackConfig.output.path,
    publicPath: path.resolve(__dirname, '/'),
    stats: {colors: true},
    staticOptions: {
        redirect: false,
        etag: false,
        maxAge: 30,
        setHeaders: function (res, path, stat) {
            res.set('x-timestamp', Date.now())
        }
    }
});
// Serve static resources
// app.use('/', express.static(path.resolve(__dirname, 'public')));
app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});