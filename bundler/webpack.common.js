const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/scripts/script.js'),
        vendor: path.resolve(__dirname, '../src/scripts/vendor.js'),
        epoxy : path.resolve(__dirname, '../src/scripts/epoxy.js'),
        aboutus : path.resolve(__dirname, '../src/scripts/aboutus.js'),
        drywall : path.resolve(__dirname, '../src/scripts/drywall.js'),
        concrete : path.resolve(__dirname, '../src/scripts/concrete.js')
      },
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization :{
        moduleIds: 'deterministic',
        minimize: true,
        minimizer : [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
                parallel: true,
            }),
        ]
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true ,
            chunks : ['vendor' , 'index'] ,
            filename : 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/epoxy.html'),
            minify: true ,
            chunks : [ 'vendor' , 'epoxy'],
            filename : 'epoxy.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/aboutus.html'),
            minify: true ,
            chunks : [ 'vendor' , 'abouts'],
            filename : 'aboutus.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/drywall.html'),
            minify: true ,
            chunks : [ 'vendor' , 'drywall'],
            filename : 'drywall.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/concrete.html'),
            minify: true ,
            chunks : [ 'vendor' , 'concrete'],
            filename : 'concrete.html'
        }),
        new MiniCSSExtractPlugin() ,
       
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },
            // CSS
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
              },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext][query]'
                  }
              },
            //sounds
            {
                test: /\.(mp3|wav)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/sounds/'
                        },
                    }
                ]
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            },
            {
                test : /\.(glsl|vs|fs|vert|frag)$/,
                exclude : /node_modules/,
                use : 
                [
                    'raw-loader'
                ]
            }
        ]
    }
}
