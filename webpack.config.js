import path from 'path';

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry: [ path.resolve(__dirname, 'src', 'index.js') ],
    output: {
        path: '/static/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {test: /\.css$/, loader: 'style-loader!css-loader'},
        ]
    }
}

