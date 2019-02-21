const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist/scripts'),
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
                test:/\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader', 'sass-loader'],
                    publicPath: path.resolve(__dirname, './dist/')
                })
            },
            {
                test:/\.(png|jpg|gif)$/i,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('./../styles/styles.css')
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        publicPath: "/dist/"
    }
};