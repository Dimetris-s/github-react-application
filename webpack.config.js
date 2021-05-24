const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

function filename() {
    return isDev ? '[name].js' : '[name].[hash].js'
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ["@babel/polyfill", "./index.js"],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename(),
        publicPath: "/"
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|svg|webp)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}