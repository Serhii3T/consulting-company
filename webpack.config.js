const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

function createPage(title, template_url, filename, minify = true) {
    return new HtmlWebpackPlugin({
        title: title,
        template: template_url,
        filename: filename,
        minify: minify,
    })
}

function createBlock(path_block, location, template_filename) {
    return new HtmlWebpackPartialsPlugin({
        path: path_block,
        location: location,
        template_filename: template_filename,
    })
}

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/js/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    devServer: {
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "src/images", to: "images/"}
            ],
        }),
        createPage('Home', "./src/index.html", 'index.html', true),
        createPage('About', "./src/about.html", 'about.html', true),
        createPage('About', "./src/contact.html", 'contact.html', true),
        createPage('About', "./src/work.html", 'work.html', true),
        createBlock('./src/partials/footer.html', 'footer-block', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/header.html', 'header-block', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-home/banner.html', 'banner', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-home/about-block.html', 'about', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-home/our-mission-block.html', 'our-mission', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-home/featured-work-block.html', 'featured-work', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-home/services-block.html', 'services', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-home/comment-block.html', 'comment', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-home/newsletter-block.html', 'newsletter', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-about/about-banner-block.html', 'about-banner', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-about/firm-block.html', 'firm', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-about/forward-block.html', 'forward', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-about/clients-block.html', 'clients', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-work/chapter-block.html', 'chapter', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-work/work-block.html', 'work', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-contact/banner-block.html', 'banner-block', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-contact/map-block.html', 'map-block', ['index.html', 'about.html', 'work.html', 'contact.html']),
        createBlock('./src/partials/blocks-contact/form-block.html', 'form-block', ['index.html', 'about.html', 'work.html', 'contact.html']),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            }
        ]
    },
}