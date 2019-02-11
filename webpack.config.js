const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, './public/dist/scripts'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({filename:'styles.css'})
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        publicPath: "/dist/"
    }
};