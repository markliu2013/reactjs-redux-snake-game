import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.babel.js';

const APP_PORT = 3000;

var compiler = webpack(webpackConfig);

const app = express();
app.use(webpackDevMiddleware(compiler, {
    contentBase: webpackConfig.output.path,
    publicPath: path.resolve(__dirname, '/'),
    headers: {
        'Cache-Control': 'max-age=999999999'
    }
}));

app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});