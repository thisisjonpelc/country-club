const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
                    use:['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.png$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '../images/[name].[ext]'
                    }
                  }
                ]
              }
        ]
    },
    plugins:[
        new ExtractTextPlugin('../styles/styles.css'),
        new CopyPlugin([
            {from: 'src/images', to: '../images'}
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        publicPath: "./dist"
    }
};