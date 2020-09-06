const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {default: merge} = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const config = process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;

module.exports = merge(config, {
    entry: {
        index: './src/index.ts',
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    optimization: {
        usedExports: true,
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
    //         {
    //             test: /\.(png|svg|jpg|gif)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(woff|woff2|eot|ttf|otf)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(csv|tsv)$/,
    //             use: [
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //                 'xml-loader'
    //             ]
    //         }
        ]
    }
});
