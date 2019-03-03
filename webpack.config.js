const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'./scripts/[name].js',
        publicPath:'/'
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
                    publicPath:'../'
                })
            },
            {
                test: /\.png$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: './images'
                    }
                  }
                ]
              }
        ]
    },
    plugins:[
        new ExtractTextPlugin('./styles/styles.css'),
        new CopyPlugin([
            {from: 'src/images', to: './images'}
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist')
    }
};