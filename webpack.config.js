const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/app'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['react-hot-loader/babel'],
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader',
                        options: {
                            hmr: true,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
            Styles: path.resolve(__dirname, 'src/styles/')
        }
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
}