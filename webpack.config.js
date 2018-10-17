let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:['@babel/polyfill','./app/index.js'],
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/,use: 'babel-loader'},
            { test: /\.css$/, use: ['style-loader','css-loader']}
        ]
    },
    devServer: {
      historyApiFallback: true
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};